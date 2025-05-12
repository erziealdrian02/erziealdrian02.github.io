'use client';

import { useEffect, useState } from 'react';
import { useMotionValue, useVelocity, useSpring } from 'framer-motion';

export function useScrollVelocity() {
  const [isClient, setIsClient] = useState(false);
  const scrollY = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  useEffect(() => {
    setIsClient(true);

    const updateScrollY = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', updateScrollY);
    return () => window.removeEventListener('scroll', updateScrollY);
  }, [scrollY]);

  return { scrollVelocity: smoothVelocity, isClient };
}
