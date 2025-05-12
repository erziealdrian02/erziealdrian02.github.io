import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
import Navbar from '@/components/navbar';
import { LanguageProvider } from '@/components/language-provider';
import { Analytics } from '@/components/analytics';
import { SpeedInsights } from '@/components/speed-insights';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhamad Erzie Aldrian Nugraha - Portfolio',
  description:
    'Full Stack Developer | UI/UX Designer | Front-end | Back-end | Mobile Apps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative min-h-screen bg-background">
              <Navbar />
              <main>{children}</main>
              <Analytics />
              <SpeedInsights />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
