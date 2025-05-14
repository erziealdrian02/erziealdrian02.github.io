'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.tools'), href: '#tools' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.certificates'), href: '#certificates' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="border-t border-primary/20 bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter transition-colors"
            >
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Muhamad Erzie Aldrian Nugraha
              </span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {currentYear} Muhamad Erzie Aldrian Nugraha.{' '}
              {t('footer.rights')}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{t('footer.made_with')}</span>
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            <span>Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
