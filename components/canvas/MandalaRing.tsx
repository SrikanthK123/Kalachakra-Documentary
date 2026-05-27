'use client'

import { motion } from 'framer-motion'

export function MandalaRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-20">
      {/* Outer Golden Geometric Ring - Spins Clockwise */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] text-gold animate-spin-slow duration-[140s] ease-linear"
        role="img"
        aria-label="Outer Mandala Astrological Ring"
      >
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5" />
        
        {/* Ornate spokes / rays */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24
          return (
            <line
              key={`spoke-${i}`}
              x1="100"
              y1="100"
              x2={100 + 85 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 85 * Math.sin((angle * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="0.25"
              opacity="0.5"
            />
          )
        })}

        {/* Outer spikes / teeth */}
        {Array.from({ length: 72 }).map((_, i) => {
          const angle = (i * 360) / 72
          const rad = (angle * Math.PI) / 180
          const x1 = 100 + 85 * Math.cos(rad)
          const y1 = 100 + 85 * Math.sin(rad)
          const x2 = 100 + 90 * Math.cos(rad)
          const y2 = 100 + 90 * Math.sin(rad)
          return (
            <line
              key={`tooth-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          )
        })}
      </motion.svg>

      {/* Inner Golden Astronomic Ring - Spins Counter-Clockwise */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] text-gold-bright animate-spin-reverse duration-[100s] ease-linear"
        role="img"
        aria-label="Inner Mandala Cosmic Ring"
      >
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.6" />

        {/* Triangle nodes representing dimensions */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8
          const rad = (angle * Math.PI) / 180
          const cx = 100 + 45 * Math.cos(rad)
          const cy = 100 + 45 * Math.sin(rad)
          return (
            <g key={`triangle-${i}`}>
              <polygon
                points={`${cx},${cy - 3} ${cx - 3},${cy + 3} ${cx + 3},${cy + 3}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle cx={cx} cy={cy} r="1" fill="currentColor" />
            </g>
          )
        })}

        {/* Concentric solar spokes */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16
          const rad = (angle * Math.PI) / 180
          return (
            <line
              key={`in-spoke-${i}`}
              x1={100 + 30 * Math.cos(rad)}
              y1={100 + 30 * Math.sin(rad)}
              x2={100 + 60 * Math.cos(rad)}
              y2={100 + 60 * Math.sin(rad)}
              stroke="currentColor"
              strokeWidth="0.35"
              opacity="0.7"
            />
          )
        })}
      </motion.svg>
    </div>
  )
}
export default MandalaRing
