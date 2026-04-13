'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import Image from 'next/image';
import { ScrollVelocityRow } from '@/components/ui/scroll-velocity';

type Tool = {
  name: string;
  logo: string;
};

// ─── Easy to add new tools: just add an entry to the relevant array ───

const frontendTools: Tool[] = [
  { name: 'HTML5', logo: '/svg/html-5-svgrepo-com.svg' },
  { name: 'CSS3', logo: '/svg/css-3-svgrepo-com.svg' },
  { name: 'JavaScript', logo: '/svg/javascript-svgrepo-com.svg' },
  { name: 'Tailwind CSS', logo: '/svg/tailwind-svgrepo-com.svg' },
];

const backendTools: Tool[] = [
  { name: 'PHP', logo: '/svg/php-svgrepo-com.svg' },
  { name: 'Python', logo: '/svg/python-svgrepo-com.svg' },
  { name: 'Laravel', logo: '/svg/laravel-svgrepo-com.svg' },
  { name: 'Node.js', logo: '/svg/nodejs-svgrepo-com.svg' },
  { name: 'Flask', logo: '/svg/flask-svgrepo-com.svg' },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
];

const infraTools: Tool[] = [
  { name: 'MySQL', logo: '/svg/mysql-logo-svgrepo-com.svg' },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  { name: 'GitHub', logo: '/svg/github-142-svgrepo-com.svg' },
  {
    name: 'GitLab',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
  },
  { name: 'Laragon', logo: '/svg/laragon-svgrepo-com.svg' },
  { name: 'Git', logo: '/svg/git-svgrepo-com.svg' },
];

function ToolChip({ tool }: { tool: Tool }) {
  const needsBg = ['flask', 'github'].includes(tool.name?.toLowerCase());

  return (
    <div className="group relative flex items-center gap-3 rounded-2xl border border-border/50 bg-background/80 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:scale-105">
      <div className="relative h-8 w-8 flex-shrink-0">
        <Image
          src={tool.logo || '/placeholder.svg'}
          alt={tool.name}
          fill
          className={`object-contain transition-transform duration-300 group-hover:scale-110 ${
            needsBg ? 'bg-white rounded-full p-1 shadow-sm' : ''
          }`}
        />
      </div>
      <span className="text-sm font-semibold whitespace-nowrap text-foreground/80 group-hover:text-foreground transition-colors">
        {tool.name}
      </span>
      {/* glow dot */}
      <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
    </div>
  );
}

export default function ToolsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();

  return (
    <section
      id="tools"
      ref={ref}
      className="relative w-full overflow-hidden bg-muted/30 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('tools.title')}
          </h2>
          <p className="text-muted-foreground">{t('tools.subtitle')}</p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-6"
      >
        {/* Row 1: Frontend → right */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-muted/30 to-transparent" />
          <ScrollVelocityRow baseVelocity={40} numCopies={8}>
            {frontendTools.map((tool) => (
              <ToolChip key={tool.name} tool={tool} />
            ))}
          </ScrollVelocityRow>
        </div>

        {/* Row 2: Backend ← left */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-muted/30 to-transparent" />
          <ScrollVelocityRow baseVelocity={-35} numCopies={6}>
            {backendTools.map((tool) => (
              <ToolChip key={tool.name} tool={tool} />
            ))}
          </ScrollVelocityRow>
        </div>

        {/* Row 3: Infra & DevOps → right */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-muted/30 to-transparent" />
          <ScrollVelocityRow baseVelocity={30} numCopies={6}>
            {infraTools.map((tool) => (
              <ToolChip key={tool.name} tool={tool} />
            ))}
          </ScrollVelocityRow>
        </div>
      </motion.div>
    </section>
  );
}
