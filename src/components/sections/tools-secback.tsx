'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Tool = {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design';
  level: 'basic' | 'intermediate' | 'expert';
  description: string;
};

export default function ToolsShowcase() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  // Tools data
  const tools: Tool[] = [
    {
      name: 'HTML5',
      category: 'frontend',
      level: 'expert',
      description: 'The standard markup language for web pages',
    },
    {
      name: 'CSS3',
      category: 'frontend',
      level: 'expert',
      description: 'Style sheet language for web documents',
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      level: 'expert',
      description: 'Programming language for web development',
    },
    {
      name: 'React.js',
      category: 'frontend',
      level: 'expert',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      name: 'Next.js',
      category: 'frontend',
      level: 'expert',
      description: 'The React framework for production',
    },
    {
      name: 'TailwindCSS',
      category: 'frontend',
      level: 'expert',
      description: 'A utility-first CSS framework',
    },
    {
      name: 'PHP',
      category: 'backend',
      level: 'expert',
      description: 'A popular general-purpose scripting language',
    },
    {
      name: 'Laravel',
      category: 'backend',
      level: 'expert',
      description: 'A PHP framework for web artisans',
    },
  ];

  // Split tools into two groups
  const firstHalf = tools.slice(0, Math.ceil(tools.length / 2));
  const secondHalf = tools.slice(Math.ceil(tools.length / 2));

  // Helper functions for styling
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'text-purple-500';
      case 'backend':
        return 'text-blue-500';
      case 'database':
        return 'text-green-500';
      case 'devops':
        return 'text-orange-500';
      case 'design':
        return 'text-pink-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-4xl font-bold">My Toolbox</h2>
          <p className="text-gray-600">Technologies and tools I work with</p>
        </motion.div>

        <div className="relative py-10">
          <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-gray-100 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-gray-100 to-transparent"></div>

          <div className="space-y-16">
            {/* First Marquee */}
            <div className="overflow-hidden relative">
              <InfiniteMarquee direction="left" speed={40}>
                {firstHalf.map((tool, index) => (
                  <ToolCard
                    key={`${tool.name}-${index}`}
                    tool={tool}
                    hoveredTool={hoveredTool}
                    setHoveredTool={setHoveredTool}
                    getLevelColor={getLevelColor}
                    getLevelWidth={getLevelWidth}
                    getCategoryColor={getCategoryColor}
                  />
                ))}
              </InfiniteMarquee>
            </div>

            {/* Second Marquee */}
            <div className="overflow-hidden relative">
              <InfiniteMarquee direction="right" speed={30}>
                {secondHalf.map((tool, index) => (
                  <ToolCard
                    key={`${tool.name}-${index}`}
                    tool={tool}
                    hoveredTool={hoveredTool}
                    setHoveredTool={setHoveredTool}
                    getLevelColor={getLevelColor}
                    getLevelWidth={getLevelWidth}
                    getCategoryColor={getCategoryColor}
                  />
                ))}
              </InfiniteMarquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// InfiniteMarquee component
function InfiniteMarquee({
  children,
  direction = 'left',
  speed = 40,
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
}) {
  const [duration, setDuration] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    // Calculate the width of the entire content
    const marqueeWidth = marqueeRef.current.scrollWidth;

    // Calculate how long the animation should take based on width and speed
    // Higher speed means lower duration
    const calculatedDuration = marqueeWidth / speed;
    setDuration(calculatedDuration);
  }, [speed, children]);

  return (
    <div className="relative flex overflow-x-hidden">
      {/* First copy for continuous effect */}
      <motion.div
        ref={marqueeRef}
        className="flex flex-nowrap"
        animate={{
          x:
            direction === 'left'
              ? [0, -(marqueeRef.current?.scrollWidth ?? 0)]
              : [-(marqueeRef.current?.scrollWidth ?? 0), 0],
        }}
        transition={{
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>

      {/* Duplicated content to ensure seamless looping */}
      <motion.div
        className="flex flex-nowrap absolute left-0 top-0"
        animate={{
          x:
            direction === 'left'
              ? [marqueeRef.current?.scrollWidth || 0, 0]
              : [0, marqueeRef.current?.scrollWidth || 0],
        }}
        transition={{
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ToolCard component with improved hover behavior
function ToolCard({
  tool,
  hoveredTool,
  setHoveredTool,
  getLevelColor,
  getLevelWidth,
  getCategoryColor,
}: {
  tool: Tool;
  hoveredTool: string | null;
  setHoveredTool: React.Dispatch<React.SetStateAction<string | null>>;
  getLevelColor: (level: string) => string;
  getLevelWidth: (level: string) => string;
  getCategoryColor: (category: string) => string;
}) {
  const isHovered = hoveredTool === tool.name;

  return (
    <div className="mx-3 flex-shrink-0">
      <motion.div
        onHoverStart={() => setHoveredTool(tool.name)}
        onHoverEnd={() => setHoveredTool(null)}
        initial={{ scale: 1 }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          zIndex: isHovered ? 20 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="will-change-transform"
        style={{
          position: 'relative',
          transformOrigin: 'center center',
          zIndex: isHovered ? 20 : 1,
        }}
      >
        <div
          className={`flex h-20 items-center gap-3 rounded-lg border bg-white px-4 backdrop-blur-sm transition-all duration-300 ${
            isHovered ? 'border-blue-500 shadow-lg' : 'border-gray-200'
          }`}
          style={{
            width: '192px', // Fixed width to prevent shifting
          }}
        >
          {/* SVG Icon */}
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
            <img
              src="/svg/html-5-svgrepo-com.svg"
              alt={tool.name}
              className="w-6 h-6"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h4
              className={`text-lg font-medium whitespace-nowrap text-ellipsis overflow-hidden ${getCategoryColor(
                tool.category
              )}`}
            >
              {tool.name}
            </h4>

            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-1 overflow-hidden"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  background: 'white',
                  borderRadius: '0 0 8px 8px',
                  padding: '0 16px 12px 16px',
                  borderLeft: '1px solid #3b82f6',
                  borderRight: '1px solid #3b82f6',
                  borderBottom: '1px solid #3b82f6',
                  marginTop: '-2px',
                  zIndex: 10,
                }}
              >
                <div className="flex items-center gap-2 mt-3">
                  <div className="h-2 w-24 rounded-full bg-gray-200 flex-shrink-0">
                    <div
                      className={`h-full rounded-full ${getLevelColor(
                        tool.level
                      )} ${getLevelWidth(tool.level)}`}
                    ></div>
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap">
                    {tool.level.charAt(0).toUpperCase() + tool.level.slice(1)}
                  </span>
                </div>
                <div className="mt-2 text-xs text-gray-500 whitespace-normal line-clamp-2">
                  {tool.description}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
