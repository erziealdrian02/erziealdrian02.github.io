'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useTheme } from 'next-themes';

interface DotGridBackgroundProps {
  dotSize?: number;
  gap?: number;
  proximity?: number;
  className?: string;
}

export function DotGridBackground({
  dotSize = 3,
  gap = 28,
  proximity = 120,
  className = '',
}: DotGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef<{ cx: number; cy: number }[]>([]);
  const rafRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const { width, height } = wrapper.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);

    const cell = dotSize + gap;
    const cols = Math.ceil(width / cell) + 1;
    const rows = Math.ceil(height / cell) + 1;

    const gridW = (cols - 1) * cell;
    const gridH = (rows - 1) * cell;
    const startX = (width - gridW) / 2;
    const startY = (height - gridH) / 2;

    const dots: { cx: number; cy: number }[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({ cx: startX + x * cell, cy: startY + y * cell });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    if (!mounted) return;

    buildGrid();

    const ro = new ResizeObserver(buildGrid);
    if (wrapperRef.current) ro.observe(wrapperRef.current);

    return () => ro.disconnect();
  }, [buildGrid, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const onMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onLeave = () => {
      pointerRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const isDark = resolvedTheme === 'dark';
    const baseColor = isDark
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(0, 0, 0, 0.10)';
    const activeR = isDark ? 167 : 139;
    const activeG = isDark ? 139 : 92;
    const activeB = isDark ? 250 : 246;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const alpha = 0.15 + t * 0.85;
          const size = dotSize + t * 2;
          ctx.beginPath();
          ctx.arc(dot.cx, dot.cy, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${activeR}, ${activeG}, ${activeB}, ${alpha})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(dot.cx, dot.cy, dotSize / 2, 0, Math.PI * 2);
          ctx.fillStyle = baseColor;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [mounted, resolvedTheme, dotSize, proximity]);

  if (!mounted) return null;

  return (
    <div
      ref={wrapperRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
