import { useMemo } from 'react'
import './Starfield.css'

// A sparse, faintly-twinkling pixel starfield that sits behind all content
// (fixed, z-index below the page). Purely decorative. Colours come from the
// theme tokens, and the twinkle is disabled under prefers-reduced-motion.
export default function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 120 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() < 0.16 ? 3 : 2,
        opacity: (0.22 + Math.random() * 0.5).toFixed(2),
        delay: (Math.random() * 5).toFixed(2),
        dur: (3 + Math.random() * 3).toFixed(2),
      })),
    []
  )
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            '--o': s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  )
}
