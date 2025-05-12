'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useTranslation } from '@/hooks/use-translation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.tools'), href: '#tools' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.certificates'), href: '#certificates' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <motion.header
      className={cn(
        'fixed top-0 w-full z-50',
        scrolled ? 'flex justify-center py-2' : ''
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {!scrolled ? (
          <motion.div
            key="normal-navbar"
            className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter transition-colors"
            >
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Muhamad Erzie Aldrian Nugraha
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ModeToggle />
              <Button
                variant="default"
                size="sm"
                className="hidden md:inline-flex"
                asChild
              >
                <Link href="#contact">{t('nav.hire_me')}</Link>
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="floating-navbar"
            className="rounded-full border border-border bg-background/90 px-4 py-2 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex items-center justify-center space-x-1 sm:space-x-2">
              <Link
                href="/"
                className="mr-2 text-sm font-bold tracking-tighter transition-colors"
              >
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Muhamad Erzie Aldrian Nugraha
                </span>
              </Link>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative rounded-full px-2 py-1.5 text-xs sm:text-sm font-medium transition-colors',
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {activeSection === item.href.substring(1) && (
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
              <div className="ml-2 flex items-center gap-1">
                <LanguageToggle />
                <ModeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
