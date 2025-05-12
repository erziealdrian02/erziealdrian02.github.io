'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { ParallaxCards } from '@/components/ui/parallax-cards';
import { cn } from '@/lib/utils';

type Tool = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  level: 'basic' | 'intermediate' | 'expert';
  description: string;
};

export default function ToolsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();

  const tools: Tool[] = [
    {
      name: 'React.js',
      icon: 'react',
      category: 'frontend',
      level: 'expert',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'Next.js',
      icon: 'nextjs',
      category: 'frontend',
      level: 'expert',
      description: 'The React framework for production',
    },
    {
      name: 'TailwindCSS',
      icon: 'tailwind',
      category: 'frontend',
      level: 'expert',
      description: 'A utility-first CSS framework',
    },
    {
      name: 'Figma',
      icon: 'figma',
      category: 'frontend',
      level: 'intermediate',
      description: 'A design tool for UI/UX design',
    },
    {
      name: 'PHP',
      icon: 'php',
      category: 'backend',
      level: 'expert',
      description: 'A popular general-purpose scripting language',
    },
    {
      name: 'Laravel',
      icon: 'laravel',
      category: 'backend',
      level: 'expert',
      description: 'A PHP framework for web artisans',
    },
    {
      name: 'Node.js',
      icon: 'nodejs',
      category: 'backend',
      level: 'intermediate',
      description: "JavaScript runtime built on Chrome's V8 JS engine",
    },
    {
      name: 'Go',
      icon: 'go',
      category: 'backend',
      level: 'basic',
      description: 'An open source programming language by Google',
    },
    {
      name: 'Java',
      icon: 'java',
      category: 'backend',
      level: 'intermediate',
      description: 'A high-level, class-based, object-oriented language',
    },
    {
      name: 'MySQL',
      icon: 'mysql',
      category: 'database',
      level: 'expert',
      description: 'An open-source relational database management system',
    },
    {
      name: 'PostgreSQL',
      icon: 'postgresql',
      category: 'database',
      level: 'intermediate',
      description: 'A powerful, open source object-relational database',
    },
    {
      name: 'Oracle',
      icon: 'oracle',
      category: 'database',
      level: 'basic',
      description: 'A multi-model database management system',
    },
    {
      name: 'Docker',
      icon: 'docker',
      category: 'devops',
      level: 'intermediate',
      description:
        'A platform for developing, shipping, and running applications',
    },
    {
      name: 'GitHub',
      icon: 'github',
      category: 'devops',
      level: 'expert',
      description: 'A platform for version control and collaboration',
    },
    {
      name: 'GitLab',
      icon: 'gitlab',
      category: 'devops',
      level: 'intermediate',
      description: 'A complete DevOps platform',
    },
    {
      name: 'AWS',
      icon: 'aws',
      category: 'devops',
      level: 'basic',
      description: 'A comprehensive cloud computing platform',
    },
  ];

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

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'basic':
        return 'w-1/3';
      case 'intermediate':
        return 'w-2/3';
      case 'expert':
        return 'w-full';
      default:
        return 'w-0';
    }
  };

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
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('tools.title')}
          </h2>
          <p className="text-muted-foreground">{t('tools.subtitle')}</p>
        </motion.div>

        <ParallaxCards
          items={tools.map((tool) => ({
            id: tool.name,
            content: (
              <div className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xl">{getToolIcon(tool.icon)}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{tool.name}</h3>
                  </div>
                  <span
                    className={cn(
                      'rounded-full px-2 py-1 text-xs font-medium text-white',
                      {
                        'bg-yellow-500': tool.level === 'basic',
                        'bg-blue-500': tool.level === 'intermediate',
                        'bg-green-500': tool.level === 'expert',
                      }
                    )}
                  >
                    {t(`tools.mastery_levels.${tool.level}`)}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {tool.description}
                </p>
                <div className="mt-auto">
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className={cn(
                        'h-full rounded-full',
                        getLevelColor(tool.level),
                        getLevelWidth(tool.level)
                      )}
                    ></div>
                  </div>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}

function getToolIcon(icon: string): string {
  const icons: Record<string, string> = {
    react: '⚛️',
    nextjs: '▲',
    tailwind: '🌊',
    figma: '🎨',
    php: '🐘',
    laravel: '🔥',
    nodejs: '📦',
    go: '🐹',
    java: '☕',
    mysql: '🐬',
    postgresql: '🐘',
    oracle: '🏛️',
    docker: '🐳',
    github: '🐙',
    gitlab: '🦊',
    aws: '☁️',
  };

  return icons[icon] || '🔧';
}
