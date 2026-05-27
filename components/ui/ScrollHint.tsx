'use client'

import { motion } from 'framer-motion'

export function ScrollHint() {
  return (
    <div className="flex flex-col items-center gap-3 select-none pointer-events-none">
      {/* Label */}
      <span className="font-rajdhani text-[10px] tracking-[0.3em] text-cream/40 uppercase">
        SCROLL TO DESCEND
      </span>

      {/* Visual Mouse / Line */}
      <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-4 bg-gold-bright"
          animate={{
            y: [0, 48, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}
export default ScrollHint
