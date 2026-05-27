'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from '../ui/SectionDivider'

export function ClimaxSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={containerRef}
      id="climax-final"
      className="relative w-full py-28 px-6 bg-[radial-gradient(circle_at_center,rgba(139,58,31,0.25)_0%,#0a0806_80%)] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <div className="max-w-4xl w-full z-10 flex flex-col items-center text-center gap-8">
        
        {/* 1. Header label */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-rajdhani text-[11px] font-bold tracking-[0.4em] text-danger uppercase animate-pulse">
            THE CRITICAL WARNING
          </span>
          <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-white tracking-widest">
            Final Revelation
          </h3>
        </div>

        {/* 2. Leading Prose */}
        <p className="font-im-fell text-lg md:text-xl text-parchment/90 italic leading-relaxed font-light max-w-2xl">
          A massive sound echoes through the cave, like celestial pathways unlocking. An ancient, deep, non-human voice speaks in decrypted Sanskrit. One final glowing message appears on the screen of the compass:
        </p>

        {/* 3. Ornate Warning Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] as const }}
          className="w-full max-w-[650px] border-2 border-danger/40 bg-[#120a08] p-8 md:p-12 rounded-xl shadow-[0_0_80px_rgba(204,51,0,0.15)] ornate-box flex flex-col items-center justify-center gap-6 mt-4"
        >
          {/* Sanskrit Text */}
          <div className="font-cinzel text-xl md:text-3xl font-bold text-gold tracking-widest uppercase mb-1">
            ॐ संतुलन भंग हुआ
          </div>
          
          <div className="w-16 h-[1px] bg-gold/30" />

          {/* Compass Message note */}
          <span className="font-rajdhani text-[10px] font-bold tracking-[0.3em] text-cream/40 uppercase">
            ONE LINE APPEARS ON THE COMPASS:
          </span>

          {/* Giant Pulsing Warning - BALANCE VIOLATED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="font-cinzel-decorative text-4xl md:text-6xl font-extrabold text-danger tracking-wider leading-none drop-shadow-[0_0_20px_rgba(204,51,0,0.8)] animate-pulse-glow"
          >
            BALANCE VIOLATED
          </motion.div>
        </motion.div>

      </div>

      <SectionDivider />
    </section>
  )
}
export default ClimaxSection
