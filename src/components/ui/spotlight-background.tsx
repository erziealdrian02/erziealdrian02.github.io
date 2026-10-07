'use client';

// Transform-only animation (runs on the compositor, no per-frame repaint).
export function SpotlightBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="spotlight-orb" />
      <div className="absolute inset-0 bg-grid-small-white/[0.05]" />
    </div>
  );
}
