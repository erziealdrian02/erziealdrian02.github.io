'use client';

import type React from 'react';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxCardsProps {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export function ParallaxCards({ items, className }: ParallaxCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {items.map((item, index) => (
        <ParallaxCard
          key={item.id}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          isActive={activeIndex === index}
        >
          {item.content}
        </ParallaxCard>
      ))}
    </div>
  );
}

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
}

export function ParallaxCard({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  isActive = false,
}: ParallaxCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * 10;
    const rotateYValue = ((centerX - x) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    onMouseLeave?.();
  };

  return (
    <motion.div
      className={cn(
        'group relative h-[280px] cursor-pointer overflow-hidden rounded-xl border-2 border-primary/20 bg-background p-1 transition-all duration-200 hover:shadow-xl',
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${
          isActive ? 1.05 : 1
        })`,
        transition: 'all 0.1s ease',
      }}
    >
      <div className="absolute inset-0 z-10 rounded-xl bg-background opacity-0 transition-opacity duration-500 group-hover:opacity-[0.02]" />
      <div className="absolute inset-0 z-20 rounded-xl bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-30 h-full rounded-lg bg-background shadow-md">
        {children}
      </div>
    </motion.div>
  );
}
