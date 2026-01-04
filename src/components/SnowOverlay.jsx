import { useMemo } from "react";

/**
 * Natural snow:
 * - ukuran, speed, delay random
 * - drift angin random + sedikit spin
 * - fade in/out biar realistis
 */
export default function SnowOverlay({ count = 110 }) {
  const flakes = useMemo(() => {
    const rand = (min, max) => Math.random() * (max - min) + min;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() < 0.85 ? rand(1.2, 3.2) : rand(3.6, 6.8);
      const duration = rand(8, 20);
      const delay = -rand(0, duration);
      const left = rand(0, 100);
      const opacity = rand(0.25, 0.85);
      const drift = rand(-12, 12);
      const spin = rand(-35, 35);
      const blur = size > 4 ? rand(0.25, 0.8) : rand(0, 0.35);
      const color = pick([
        "rgba(245,240,255,0.95)",
        "rgba(245,240,255,0.85)",
        "rgba(192,132,252,0.75)"
      ]);

      return { id: i, left, size, duration, delay, opacity, drift, spin, blur, color };
    });
  }, [count]);

  return (
    <div className="snowWrap" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="flake"
          style={{
            left: `${f.left}%`,
            "--size": `${f.size}px`,
            "--dur": `${f.duration}s`,
            "--delay": `${f.delay}s`,
            "--opacity": f.opacity,
            "--drift": `${f.drift}vw`,
            "--spin": `${f.spin}deg`,
            "--blur": `${f.blur}px`,
            "--c": f.color,
          }}
        />
      ))}
    </div>
  );
}
