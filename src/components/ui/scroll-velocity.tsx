'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

function useElementWidth(ref: React.RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.offsetWidth));
    ro.observe(el);
    setWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, [ref]);

  return width;
}

interface ScrollVelocityProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  /** Slow the row down to a stop while hovered */
  pauseOnHover?: boolean;
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 2,
  pauseOnHover = true,
}: ScrollVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping,
    stiffness,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    { clamp: false }
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: '100px' });
  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);
  const containerWidth = useElementWidth(containerRef);
  const hovered = useRef(false);
  const speed = useRef(1);

  // Enough copies to always cover the container while wrapping.
  const copiesNeeded = copyWidth
    ? Math.max(numCopies, Math.ceil(containerWidth / copyWidth) + 1)
    : numCopies;

  function wrap(min: number, max: number, v: number) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v: number) => {
    if (copyWidth === 0) return 'translate3d(0px,0,0)';
    return `translate3d(${wrap(-copyWidth, 0, v)}px,0,0)`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((_t: number, delta: number) => {
    if (!inView) return;

    const target = pauseOnHover && hovered.current ? 0 : 1;
    speed.current += (target - speed.current) * Math.min(1, delta / 200);

    let moveBy =
      directionFactor.current * baseVelocity * (delta / 1000) * speed.current;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const copies = [];
  for (let i = 0; i < copiesNeeded; i++) {
    copies.push(
      <div
        key={i}
        ref={i === 0 ? copyRef : null}
        aria-hidden={i > 0}
        className={`flex flex-shrink-0 items-center gap-4 pr-4 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onPointerEnter={() => (hovered.current = true)}
      onPointerLeave={() => (hovered.current = false)}
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        style={{ transform: x }}
      >
        {copies}
      </motion.div>
    </div>
  );
}
