'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { Download, ArrowDown } from 'lucide-react';
import { FlipWords } from '@/components/ui/flip-words';
import { DotGridBackground } from '@/components/ui/dot-grid-background';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax: text drifts down & fades, portrait lags behind, grid moves slowest.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  const roles = t('hero.roles') as unknown as string[];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: gridY }}
      >
        <DotGridBackground />
      </motion.div>
      <div className="container relative z-10 mx-auto flex min-h-[100svh] flex-col items-center justify-center gap-8 px-4 pb-16 pt-24 sm:px-6 md:flex-row md:gap-4 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={reduce ? undefined : { y: textY, opacity: textOpacity }}
          className="flex w-full flex-col items-center md:w-1/2 md:items-start"
        >
          <div className="mb-4 text-center md:mb-6 md:text-left">
            <h2 className="mb-2 text-lg font-medium text-muted-foreground sm:text-xl">
              {t('hero.greeting')}
            </h2>
            <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:mb-4 md:text-6xl">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Muhamad Erzie <br /> Aldrian Nugraha
              </span>
            </h1>
          </div>

          <div className="mb-8 min-h-[2.5rem] text-center text-xl font-medium sm:text-2xl md:text-left md:text-3xl">
            I&apos;m a{' '}
            <FlipWords words={roles} className="text-center md:text-left" />
          </div>

          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button className="group w-full max-w-xs sm:w-auto" asChild>
              <a
                href="/resume/Muhamad Erzie Aldrian Nugraha-resume.pdf"
                download
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                {t('hero.download_cv')}
              </a>
            </Button>
            <Button variant="outline" className="w-full max-w-xs sm:w-auto" asChild>
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
          style={reduce ? undefined : { y: imageY, scale: imageScale }}
          className="relative h-[260px] w-[260px] flex-shrink-0 sm:h-[320px] sm:w-[320px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgb(var(--primary-rgb)/0.35)_0%,transparent_70%)]" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/20 bg-background/50 p-2">
            <Image
              src="/images/profiles/me_ilustration.png"
              alt="Muhamad Erzie Aldrian Nugraha"
              fill
              sizes="(max-width: 768px) 260px, 500px"
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
