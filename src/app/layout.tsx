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

const SITE_URL = 'https://erziealdrian02.github.io';
const FULL_NAME = 'Muhamad Erzie Aldrian Nugraha';
const DESCRIPTION =
  'Portfolio of Muhamad Erzie Aldrian Nugraha (Erzie Aldrian), a Fullstack Developer and UI/UX Designer from Indonesia. Projects, work experience, certificates, and contact.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} (Erzie Aldrian) - Fullstack Developer Portfolio`,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: `${FULL_NAME} Portfolio`,
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  keywords: [
    FULL_NAME,
    'Erzie Aldrian',
    'Erzie Aldrian Nugraha',
    'Muhamad Erzie',
    'erziealdrian02',
    'Fullstack Developer',
    'Full Stack Developer Indonesia',
    'UI/UX Designer',
    'Laravel Developer',
    'React Developer',
    'Next.js',
    'Portfolio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    siteName: FULL_NAME,
    title: `${FULL_NAME} - Fullstack Developer`,
    description: DESCRIPTION,
    locale: 'en_US',
    alternateLocale: ['id_ID', 'ja_JP'],
    firstName: 'Muhamad Erzie Aldrian',
    lastName: 'Nugraha',
    username: 'erziealdrian02',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} - Fullstack Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} - Fullstack Developer`,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  // Paste the token from Google Search Console (HTML tag method) here.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

// Structured data so search engines connect both names to this site.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: FULL_NAME,
  alternateName: ['Erzie Aldrian', 'Erzie Aldrian Nugraha', 'erziealdrian02'],
  url: SITE_URL,
  image: `${SITE_URL}/images/profiles/me_ilustration.png`,
  jobTitle: 'Fullstack Developer',
  worksFor: { '@type': 'Organization', name: 'PT DCI Indonesia' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Universitas Indraprasta PGRI' },
    { '@type': 'HighSchool', name: 'SMK Fatahillah Cileungsi' },
  ],
  address: { '@type': 'PostalAddress', addressRegion: 'Jawa Barat', addressCountry: 'ID' },
  email: 'mailto:erzie.aldrian02@gmail.com',
  knowsAbout: ['Laravel', 'PHP', 'React', 'Next.js', 'TypeScript', 'UI/UX Design', 'MySQL', 'PostgreSQL'],
  sameAs: [
    'https://www.linkedin.com/in/muhamad-erzie-aldrian-nugraha/',
    'https://github.com/erziealdrian02',
    'https://www.instagram.com/ez_ian02/',
    'https://web.facebook.com/erzie.aldrian/',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: FULL_NAME,
  alternateName: 'Erzie Aldrian Portfolio',
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
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
