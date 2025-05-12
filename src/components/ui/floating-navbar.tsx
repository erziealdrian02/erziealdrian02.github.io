'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  // const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine active section
      const sections = navItems.map((item) => item.link.substring(1));
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={cn(
            'fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur-md md:bottom-6',
            className
          )}
        >
          <nav className="flex items-center justify-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                  activeSection === item.link.substring(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(item.link)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {activeSection === item.link.substring(1) && (
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
