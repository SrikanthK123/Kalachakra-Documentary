'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { SectionDivider } from '../ui/SectionDivider'

export function OtherWorldSection() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => { setIsMounted(true) }, [])

  const embers = useMemo(() =>
    Array.from({ length: 15 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    })),
  [])

  const anomalies = [
    {
      label: 'ATMOSPHERE',
      value: 'INCANDESCENT HEAT',
      desc: 'Temperatures averaging over 60 degrees. The atmosphere contains floating volcanic dust particles reacting with dimensional friction.',
    },
    {
      label: 'GEOGRAPHY',
      value: 'MIRROR FRACTURE',
      desc: 'Identical buildings and cities exist, but are structural husks, glowing from within with crackling electric charges.',
    },
    {
      label: 'ENERGY STATUS',
      value: 'RETALIATIVE TIMESTOP',
      desc: 'The flow of cosmic energy from Earth has halted, causing their sun to freeze. Their universe is rapidly cooling or burning out, fueling their retaliation.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  const childVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  }

  return (
    <section
      id="other-world-showcase"
      className="relative w-full py-24 px-6 md:px-12 bg-[linear-gradient(135deg,#1f0a02_0%,#090301_70%)] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Floating Ember Particles Overlay — client-only */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        {isMounted && embers.map((e, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-danger animate-pulse"
            style={e}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full z-10 flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <span className="font-rajdhani text-[11px] font-bold tracking-[0.35em] text-danger uppercase animate-pulse">
            ALTERNATE DIMENSIONAL INTRUSION
          </span>
          <h3 className="font-cinzel text-3xl md:text-5xl font-semibold text-white tracking-widest leading-none drop-shadow-[0_0_15px_rgba(204,51,0,0.2)]">
            THE OTHER WORLD
          </h3>
          <p className="font-im-fell text-sm md:text-base text-parchment/60 italic max-w-xl mt-3">
            &ldquo;Vara crosses the barrier. The compass needle spins wild, pointing to an interdimensional east. A world identical to our own, but burning.&rdquo;
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6"
        >
          {anomalies.map((anom) => (
            <motion.div
              key={anom.label}
              variants={childVariants}
              className="border border-danger/25 bg-black/60 p-6 rounded-lg relative ornate-box group hover:border-danger/60 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Corner hover decoration */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-danger transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-danger transition-all duration-300" />

              <div className="flex flex-col gap-1 border-b border-danger/10 pb-3">
                <span className="font-rajdhani text-[11px] font-bold tracking-widest text-danger">
                  {anom.label}
                </span>
                <h4 className="font-cinzel text-lg font-bold text-white tracking-wider">
                  {anom.value}
                </h4>
              </div>
              <p className="font-im-fell text-sm md:text-base text-parchment/80 leading-relaxed italic font-light">
                {anom.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  )
}
export default OtherWorldSection
