'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useTranslation } from '@/hooks/use-translation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const SECTION_IDS = [
  'home',
  'tools',
  'portfolio',
  'experience',
  'certificates',
  'contact',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      ticking.current = false;
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    // Throttle to one update per frame.
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navItems = SECTION_IDS.map((id) => ({
    id,
    name: t(`nav.${id}`),
    href: `#${id}`,
  }));

  const goTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const brand = (
    <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
      <span className="hidden xl:inline">Muhamad Erzie Aldrian Nugraha</span>
      <span className="xl:hidden">Erzie Aldrian</span>
    </span>
  );

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 z-50 w-full',
          scrolled ? 'flex justify-center px-3 py-2' : ''
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!scrolled ? (
            <motion.div
              key="normal-navbar"
              className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="truncate text-lg font-bold tracking-tighter sm:text-xl"
              >
                {brand}
              </Link>
              <nav className="hidden items-center gap-6 lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => goTo(e, item.id)}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary',
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="flex flex-shrink-0 items-center gap-1 sm:gap-2">
                <LanguageToggle />
                <ModeToggle />
                <Button
                  variant="default"
                  size="sm"
                  className="hidden lg:inline-flex"
                  asChild
                >
                  <a href="#contact" onClick={(e) => goTo(e, 'contact')}>
                    {t('nav.hire_me')}
                  </a>
                </Button>
                <MenuButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="floating-navbar"
              className="flex w-full max-w-full items-center justify-between gap-2 rounded-full border border-border bg-background/90 py-1.5 pl-4 pr-1.5 shadow-lg shadow-black/5 backdrop-blur-md lg:w-auto lg:justify-center lg:px-4 lg:py-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="mr-2 truncate text-sm font-bold tracking-tighter"
              >
                {brand}
              </Link>
              <nav className="hidden items-center space-x-1 lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      'relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    onClick={(e) => goTo(e, item.id)}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-full bg-primary/10"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                ))}
              </nav>
              <div className="flex flex-shrink-0 items-center gap-1 lg:ml-2">
                <span className="mr-1 hidden rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary min-[380px]:inline lg:hidden">
                  {navItems.find((i) => i.id === activeSection)?.name}
                </span>
                <LanguageToggle />
                <ModeToggle />
                <MenuButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile / tablet menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute inset-x-3 top-20 rounded-3xl border border-border bg-background p-3 shadow-2xl"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => goTo(e, item.id)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                  className={cn(
                    'flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors',
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-muted'
                  )}
                >
                  {item.name}
                  <span className="text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              <Button className="mt-2 w-full rounded-2xl" asChild>
                <a href="#contact" onClick={(e) => goTo(e, 'contact')}>
                  {t('nav.hire_me')}
                </a>
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full lg:hidden"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );
}
