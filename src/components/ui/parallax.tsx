'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Returns a scroll-linked offset for `ref`: +distance when the element enters
 * the viewport, -distance when it leaves. Negative distance flips direction.
 */
export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  distance = 60
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  return useTransform(smooth, [0, 1], [distance, -distance]);
}

interface ParallaxProps {
  children?: React.ReactNode;
  /** Max vertical travel in px. Larger = moves faster than the page. */
  distance?: number;
  className?: string;
}

export function Parallax({ children, distance = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const y = useParallax(ref, distance);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { y }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Soft glow orb that drifts at its own speed while scrolling. Uses a radial
 * gradient instead of `filter: blur` so it stays cheap to composite.
 */
export function ParallaxOrb({
  className,
  color = 'var(--primary-rgb)',
  distance = 120,
}: {
  className?: string;
  /** Space-separated RGB triplet, e.g. "59 130 246" */
  color?: string;
  distance?: number;
}) {
  return (
    <div className={cn('pointer-events-none absolute', className)}>
      <Parallax distance={distance} className="h-full w-full">
        <div
          className="h-full w-full rounded-full"
          style={{
            background: `radial-gradient(circle, rgb(${color} / 0.16) 0%, transparent 65%)`,
          }}
        />
      </Parallax>
    </div>
  );
}
