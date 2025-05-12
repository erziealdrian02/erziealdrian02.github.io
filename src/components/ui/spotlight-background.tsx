'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function SpotlightBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mousePosition.current = { x, y };
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ width: '100%', height: '100%' }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb), 0.15) 0%, transparent 25%)',
            'radial-gradient(circle at 100% 0%, rgba(var(--primary-rgb), 0.15) 0%, transparent 25%)',
            'radial-gradient(circle at 100% 100%, rgba(var(--primary-rgb), 0.15) 0%, transparent 25%)',
            'radial-gradient(circle at 0% 100%, rgba(var(--primary-rgb), 0.15) 0%, transparent 25%)',
            'radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb), 0.15) 0%, transparent 25%)',
          ],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 z-0 bg-grid-small-white/[0.05] dark:bg-grid-small-white/[0.05]" />
    </div>
  );
}
