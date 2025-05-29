'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Tool = {
  name: string;
  logo: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  level: 'basic' | 'intermediate' | 'expert';
  description: string;
};

export default function ToolsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const tools: Tool[] = [
    {
      name: 'HTML5',
      logo: '/svg/html-5-svgrepo-com.svg',
      category: 'frontend',
      level: 'expert',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'CSS3',
      logo: '/svg/css-3-svgrepo-com.svg',
      category: 'frontend',
      level: 'expert',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'JavaScript',
      logo: '/svg/javascript-svgrepo-com.svg',
      category: 'frontend',
      level: 'expert',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'PHP',
      logo: '/svg/php-svgrepo-com.svg',
      category: 'backend',
      level: 'expert',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'Python',
      logo: '/svg/python-svgrepo-com.svg',
      category: 'backend',
      level: 'intermediate',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'Laravel',
      logo: '/svg/laravel-svgrepo-com.svg',
      category: 'backend',
      level: 'intermediate',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'Node.js',
      logo: '/svg/nodejs-svgrepo-com.svg',
      category: 'backend',
      level: 'intermediate',
      description: "JavaScript runtime built on Chrome's V8 JS engine",
    },
    {
      name: 'Flask',
      logo: '/svg/flask-svgrepo-com.svg',
      category: 'backend',
      level: 'basic',
      description: 'An open source programming language by Google',
    },
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      category: 'backend',
      level: 'intermediate',
      description: 'A high-level, class-based, object-oriented language',
    },
    {
      name: 'MySQL',
      logo: '/svg/mysql-logo-svgrepo-com.svg',
      category: 'database',
      level: 'expert',
      description: 'An open-source relational database management system',
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      category: 'database',
      level: 'intermediate',
      description: 'A powerful, open source object-relational database',
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      category: 'devops',
      level: 'intermediate',
      description:
        'A platform for developing, shipping, and running applications',
    },
    {
      name: 'GitHub',
      logo: '/svg/github-142-svgrepo-com.svg',
      category: 'devops',
      level: 'expert',
      description: 'A platform for version control and collaboration',
    },
    {
      name: 'GitLab',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      category: 'devops',
      level: 'intermediate',
      description: 'A complete DevOps platform',
    },
    {
      name: 'Laragon',
      logo: '/svg/laragon-svgrepo-com.svg',
      category: 'devops',
      level: 'basic',
      description: 'A comprehensive cloud computing platform',
    },
    {
      name: 'Tailwind CSS',
      logo: '/svg/tailwind-svgrepo-com.svg',
      category: 'frontend',
      level: 'intermediate',
      description: 'A comprehensive cloud computing platform',
    },
    {
      name: 'Git',
      logo: '/svg/git-svgrepo-com.svg',
      category: 'devops',
      level: 'intermediate',
      description: 'A comprehensive cloud computing platform',
    },
  ];

  const filteredTools =
    activeCategory === 'all'
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <section
      id="tools"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-muted/30 py-20"
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

        <Tabs
          defaultValue="all"
          className="mb-12"
          onValueChange={setActiveCategory}
        >
          <TabsList className="mx-auto flex flex-wrap justify-center">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mx-auto flex flex-wrap justify-center gap-6">
          <AnimatePresence>
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.name}
                tool={tool}
                t={t}
                isHovered={hoveredTool === tool.name}
                onHover={() => setHoveredTool(tool.name)}
                onLeave={() => setHoveredTool(null)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface ToolCardProps {
  tool: Tool;
  t: (key: string) => string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ToolCard({ tool, t, isHovered, onHover, onLeave }: ToolCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'basic':
        return 'bg-yellow-500';
      case 'intermediate':
        return 'bg-blue-500';
      case 'expert':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        className={cn(
          'relative flex h-36 w-36 flex-col items-center justify-center rounded-xl border bg-background p-4 shadow-md transition-all duration-300',
          isHovered ? 'shadow-lg' : ''
        )}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-16 w-16 mb-2">
          <Image
            src={tool.logo || '/placeholder.svg'}
            alt={tool.name}
            fill
            className={`object-contain ${
              ['flask', 'github'].includes(tool.name?.toLowerCase())
                ? 'bg-white rounded-full p-2 shadow-sm'
                : ''
            }`}
          />
        </div>

        <span className="text-center text-sm font-medium">{tool.name}</span>

        {/* Hover content using absolute positioning */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-between rounded-xl p-4 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
        >
          {/* Icon at top when hovered */}
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src={tool.logo || '/placeholder.svg'}
              alt={tool.name}
              fill
              className={`object-contain ${
                ['flask', 'github'].includes(tool.name?.toLowerCase())
                  ? 'bg-white rounded-full p-2 shadow-sm'
                  : ''
              }`}
            />
          </div>

          {/* Info at bottom */}
          <div className="flex flex-col items-center w-full">
            <span
              className={cn(
                'mb-1 rounded-full px-2 py-0.5 text-xs font-medium text-white',
                {
                  'bg-yellow-500': tool.level === 'basic',
                  'bg-blue-500': tool.level === 'intermediate',
                  'bg-green-500': tool.level === 'expert',
                }
              )}
            >
              {t(`tools.mastery_levels.${tool.level}`)}
            </span>

            <div className="mb-1 h-1.5 w-full rounded-full bg-muted">
              <div
                className={cn(
                  'h-full rounded-full',
                  getLevelColor(tool.level),
                  {
                    'w-1/3': tool.level === 'basic',
                    'w-2/3': tool.level === 'intermediate',
                    'w-full': tool.level === 'expert',
                  }
                )}
              ></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
