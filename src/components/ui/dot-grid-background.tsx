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
  const visibleRef = useRef(true);
  const drawRef = useRef<() => void>(() => {});
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only redraw when something changed (pointer moved, resize, theme) instead
  // of every animation frame.
  const requestDraw = useCallback(() => {
    if (rafRef.current || !visibleRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      drawRef.current();
    });
  }, []);

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const { width, height } = wrapper.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

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
    requestDraw();
  }, [dotSize, gap, requestDraw]);

  useEffect(() => {
    if (!mounted) return;

    buildGrid();

    const ro = new ResizeObserver(buildGrid);
    if (wrapperRef.current) ro.observe(wrapperRef.current);

    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting) requestDraw();
    });
    if (wrapperRef.current) io.observe(wrapperRef.current);

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, [buildGrid, mounted, requestDraw]);

  useEffect(() => {
    if (!mounted) return;
    // Touch devices have no hover, so the static grid is enough.
    if (!window.matchMedia('(hover: hover)').matches) return;

    const onMove = (e: PointerEvent) => {
      if (!visibleRef.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      requestDraw();
    };

    const onLeave = () => {
      pointerRef.current = { x: -9999, y: -9999 };
      requestDraw();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [mounted, requestDraw]);

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
    const r = dotSize / 2;

    drawRef.current = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: px, y: py } = pointerRef.current;

      // Batch all idle dots into a single path / fill call.
      ctx.beginPath();
      for (const dot of dotsRef.current) {
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        if (dx * dx + dy * dy > proxSq) {
          ctx.moveTo(dot.cx + r, dot.cy);
          ctx.arc(dot.cx, dot.cy, r, 0, Math.PI * 2);
        }
      }
      ctx.fillStyle = baseColor;
      ctx.fill();

      for (const dot of dotsRef.current) {
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;
        if (dsq > proxSq) continue;
        const t = 1 - Math.sqrt(dsq) / proximity;
        ctx.beginPath();
        ctx.arc(dot.cx, dot.cy, (dotSize + t * 2) / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${activeR}, ${activeG}, ${activeB}, ${0.15 + t * 0.85})`;
        ctx.fill();
      }
    };

    requestDraw();
  }, [mounted, resolvedTheme, dotSize, proximity, requestDraw]);

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
