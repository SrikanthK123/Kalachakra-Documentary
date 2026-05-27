'use client'

import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center my-16 py-8 relative overflow-hidden select-none">
      {/* Golden Fading Horizontal Line Left */}
      <div className="w-24 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-gold" />

      {/* Rotating Wheel Icon Center */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] as const }}
        className="mx-6 text-gold text-2xl relative flex items-center justify-center cursor-default group"
      >
        <span className="animate-spin-slow duration-[35s] group-hover:scale-110 group-hover:text-gold-bright transition-all">☸</span>
        {/* Subtle radial glow */}
        <span className="absolute w-6 h-6 rounded-full bg-gold/10 blur-sm -z-10" />
      </motion.div>

      {/* Golden Fading Horizontal Line Right */}
      <div className="w-24 md:w-48 h-[1px] bg-gradient-to-l from-transparent via-gold/40 to-gold" />
    </div>
  )
}
export default SectionDivider
