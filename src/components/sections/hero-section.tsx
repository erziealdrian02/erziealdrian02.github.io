'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { Download, ArrowDown } from 'lucide-react';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { SpotlightBackground } from '@/components/ui/spotlight-background';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const roles = t('hero.roles') as unknown as string[];

  const words = [
    {
      text: roles[0],
      className: 'text-primary',
    },
    {
      text: ' | ',
      className: 'text-muted-foreground',
    },
    {
      text: roles[1],
      className: 'text-purple-500',
    },
    {
      text: ' | ',
      className: 'text-muted-foreground',
    },
    {
      text: roles[2],
      className: 'text-blue-500',
    },
    {
      text: ' | ',
      className: 'text-muted-foreground',
    },
    {
      text: roles[3],
      className: 'text-green-500',
    },
    {
      text: ' | ',
      className: 'text-muted-foreground',
    },
    {
      text: roles[4],
      className: 'text-orange-500',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <SpotlightBackground />
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex w-full flex-col items-center md:mb-0 md:w-1/2 md:items-start"
        >
          <div className="mb-6 text-center md:text-left">
            <h2 className="mb-2 text-xl font-medium text-muted-foreground">
              {t('hero.greeting')}
            </h2>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Muhamad Erzie <br /> Aldrian Nugraha
              </span>
            </h1>
          </div>

          <div className="mb-8 h-12">
            <TypewriterEffect words={words} />
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="group" asChild>
              <a
                href="/resume/Muhamad Erzie Aldrian Nugraha-resume.pdf"
                download
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                {t('hero.download_cv')}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="#tools"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('tools')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.explore')}
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/20 bg-background/50 p-2 backdrop-blur-sm">
            <Image
              src="/images/profiles/me_ilustration.png"
              alt="Muhamad Erzie Aldrian Nugraha"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
