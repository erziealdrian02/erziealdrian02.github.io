'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import Image from 'next/image';
import { ScrollVelocityRow } from '@/components/ui/scroll-velocity';
import { Parallax, ParallaxOrb } from '@/components/ui/parallax';

type Tool = {
  name: string;
  logo: string;
  /** Brand color used for the hover glow */
  color: string;
  /** Dark logos get a white backdrop so they stay visible in dark mode */
  needsBg?: boolean;
};

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

// ─── Easy to add new tools: just add an entry to the relevant array ───

const frontendTools: Tool[] = [
  { name: 'HTML5', logo: '/svg/html-5-svgrepo-com.svg', color: '#E34F26' },
  { name: 'CSS3', logo: '/svg/css-3-svgrepo-com.svg', color: '#1572B6' },
  { name: 'JavaScript', logo: '/svg/javascript-svgrepo-com.svg', color: '#F7DF1E' },
  { name: 'TypeScript', logo: devicon('typescript/typescript-original'), color: '#3178C6' },
  { name: 'React', logo: devicon('react/react-original'), color: '#61DAFB' },
  { name: 'Next.js', logo: devicon('nextjs/nextjs-original'), color: '#9ca3af', needsBg: true },
  { name: 'Vue.js', logo: devicon('vuejs/vuejs-original'), color: '#42B883' },
  { name: 'Tailwind CSS', logo: '/svg/tailwind-svgrepo-com.svg', color: '#38BDF8' },
  { name: 'Bootstrap', logo: devicon('bootstrap/bootstrap-original'), color: '#7952B3' },
  { name: 'Vite', logo: devicon('vitejs/vitejs-original'), color: '#BD34FE' },
  { name: 'Flutter', logo: devicon('flutter/flutter-original'), color: '#02569B' },
];

const backendTools: Tool[] = [
  { name: 'PHP', logo: '/svg/php-svgrepo-com.svg', color: '#777BB4' },
  { name: 'Laravel', logo: '/svg/laravel-svgrepo-com.svg', color: '#FF2D20' },
  { name: 'CodeIgniter', logo: devicon('codeigniter/codeigniter-plain'), color: '#EE4323' },
  { name: 'Inertia.js', logo: devicon('inertiajs/inertiajs-original'), color: '#9553E9' },
  { name: 'Node.js', logo: '/svg/nodejs-svgrepo-com.svg', color: '#5FA04E' },
  { name: 'Python', logo: '/svg/python-svgrepo-com.svg', color: '#3776AB' },
  { name: 'Flask', logo: '/svg/flask-svgrepo-com.svg', color: '#9ca3af', needsBg: true },
  { name: 'Java', logo: devicon('java/java-original'), color: '#ED8B00' },
];

const infraTools: Tool[] = [
  { name: 'MySQL', logo: '/svg/mysql-logo-svgrepo-com.svg', color: '#4479A1' },
  { name: 'PostgreSQL', logo: devicon('postgresql/postgresql-original'), color: '#4169E1' },
  { name: 'Docker', logo: devicon('docker/docker-original'), color: '#2496ED' },
  { name: 'Git', logo: '/svg/git-svgrepo-com.svg', color: '#F05032' },
  { name: 'GitHub', logo: '/svg/github-142-svgrepo-com.svg', color: '#9ca3af', needsBg: true },
  { name: 'GitLab', logo: devicon('gitlab/gitlab-original'), color: '#FC6D26' },
  { name: 'Laragon', logo: '/svg/laragon-svgrepo-com.svg', color: '#0E83CD' },
  { name: 'Figma', logo: devicon('figma/figma-original'), color: '#F24E1E' },
];

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <div
      className="group relative flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-2.5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[0_8px_28px_-10px_var(--brand)] sm:px-5 sm:py-3"
      style={{ '--brand': tool.color } as React.CSSProperties}
    >
      <div
        className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10"
        style={{ backgroundColor: `${tool.color}1f` }}
      >
        <div className="relative h-6 w-6 sm:h-7 sm:w-7">
          <Image
            src={tool.logo}
            alt=""
            fill
            sizes="28px"
            className={`object-contain transition-transform duration-300 group-hover:scale-110 ${
              tool.needsBg ? 'rounded-full bg-white p-0.5' : ''
            }`}
          />
        </div>
      </div>
      <span className="whitespace-nowrap text-sm font-semibold text-foreground/80 transition-colors group-hover:text-foreground">
        {tool.name}
      </span>
    </div>
  );
}

function ToolRow({
  label,
  tools,
  velocity,
  delay,
  show,
}: {
  label: string;
  tools: Tool[];
  velocity: number;
  delay: number;
  show: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="container mx-auto mb-3 flex items-center gap-3 px-4 sm:px-6">
        <span className="h-px w-6 bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
          {tools.length}
        </span>
      </div>
      <div className="marquee-mask py-2">
        <ScrollVelocityRow baseVelocity={velocity}>
          {tools.map((tool) => (
            <ToolChip key={tool.name} tool={tool} />
          ))}
        </ScrollVelocityRow>
      </div>
    </motion.div>
  );
}

export default function ToolsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();

  const total = frontendTools.length + backendTools.length + infraTools.length;

  return (
    <section
      id="tools"
      ref={ref}
      className="relative w-full overflow-hidden bg-muted/30 py-20"
    >
      {/* Parallax backdrop: oversized outlined word + drifting glows */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none">
        <Parallax distance={90}>
          <div
            aria-hidden
            className="whitespace-nowrap text-center text-[22vw] font-black leading-none tracking-tighter text-transparent opacity-[0.07] [-webkit-text-stroke:2px_var(--foreground)]"
          >
            STACK
          </div>
        </Parallax>
      </div>
      <ParallaxOrb className="-left-32 top-0 h-96 w-96" distance={140} />
      <ParallaxOrb
        className="-right-24 bottom-0 h-[28rem] w-[28rem]"
        color="59 130 246"
        distance={-120}
      />

      <div className="container relative mx-auto px-4 sm:px-6">
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
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>
              <b className="text-foreground">{total}</b> tools
              <span className="hidden sm:inline"> · {t('tools.hint')}</span>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="relative space-y-8">
        <ToolRow
          label={t('tools.rows.frontend')}
          tools={frontendTools}
          velocity={40}
          delay={0.2}
          show={isInView}
        />
        <ToolRow
          label={t('tools.rows.backend')}
          tools={backendTools}
          velocity={-35}
          delay={0.3}
          show={isInView}
        />
        <ToolRow
          label={t('tools.rows.infra')}
          tools={infraTools}
          velocity={30}
          delay={0.4}
          show={isInView}
        />
      </div>
    </section>
  );
}
