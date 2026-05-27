'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { SectionDivider } from '../ui/SectionDivider'

// Dynamically load the WebGL canvas wrapper with SSR disabled
const CompassCanvas = dynamic(() => import('../canvas/CompassModel').then((mod) => mod.CompassCanvas), {
  ssr: false,
})

export function CompassSection() {
  const features = [
    {
      title: 'ENERGY CORE',
      description: 'A floating crystalline core radiating high-frequency cosmic energy, acting as the power hub of the compass.',
    },
    {
      title: 'INTER-UNIVERSAL MARKERS',
      description: 'Coded dials and protective scripts indicating dimensional pathways to corresponding parallel timelines.',
    },
    {
      title: 'TIMER MECHANISM',
      description: 'An ancient ticking countdown locking dimensional gateways to protect the cosmic balance of timelines.',
    },
    {
      title: 'SIGNAL DETECTOR',
      description: 'A sub-atomic receiver scanning for incoming temporal vibrations and parallel universe connections.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  }

  return (
    <section
      id="compass-showcase"
      className="relative w-full py-24 px-6 md:px-12 bg-[radial-gradient(circle_at_center,#1c150b_0%,#0a0806_70%)] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <div className="max-w-6xl w-full z-10 flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <span className="font-rajdhani text-[11px] font-bold tracking-[0.35em] text-gold uppercase animate-pulse">
            INTERDIMENSIONAL INTERFACE
          </span>
          <h3 className="font-cinzel text-3xl md:text-5xl font-semibold text-white tracking-widest leading-none drop-shadow-[0_0_15px_rgba(232,201,106,0.15)]">
            THE ANCIENT COMPASS
          </h3>
          <p className="font-im-fell text-sm md:text-base text-parchment/60 italic max-w-xl mt-2">
            &ldquo;Neither ordinary technology nor magic. An organic navigation device built to connect and stabilize two mirror-opposite worlds.&rdquo;
          </p>
        </div>

        {/* 3D Model + Feature List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mt-4">
          {/* 3D WebGL Canvas (Left) */}
          <div className="w-full flex items-center justify-center order-1 lg:order-1">
            <div className="w-full max-w-[450px] relative border border-gold/10 bg-black/40 rounded-xl shadow-[0_0_50px_rgba(200,168,75,0.06)] ornate-box overflow-hidden py-6">
              <CompassCanvas />
              {/* Concentric rotating indicators */}
              <div className="absolute inset-0 border border-dashed border-gold/5 rounded-xl pointer-events-none scale-95" />
            </div>
          </div>

          {/* Interactive Feature Cards (Right) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6 order-2 lg:order-2"
          >
            {features.map((feat) => (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                className="group border border-gold/10 bg-ink/60 hover:bg-gold/[0.02] hover:border-gold/30 hover:shadow-[0_0_20px_rgba(200,168,75,0.05)] rounded-lg p-5 transition-all duration-300 relative cursor-default"
              >
                {/* Micro corner accent hover indicator */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-gold-bright transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-gold-bright transition-all duration-300" />

                <h4 className="font-rajdhani text-sm font-bold tracking-[0.2em] text-gold-bright mb-2 group-hover:translate-x-1 transition-transform">
                  {feat.title}
                </h4>
                <p className="font-im-fell text-sm md:text-base text-parchment/80 leading-relaxed italic font-light">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <SectionDivider />
    </section>
  )
}
export default CompassSection
