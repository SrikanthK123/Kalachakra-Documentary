'use client'

import { motion } from 'framer-motion'
import { SectionDivider } from '../ui/SectionDivider'

export function AsteroidSection() {
  const phases = [
    {
      step: 'PHASE 01',
      title: 'ENVIRONMENTAL MUTATION',
      target: 'NATURE',
      color: 'border-rust/40 text-rust',
      hoverColor: 'group-hover:border-rust group-hover:bg-rust/[0.02]',
      bullet: 'border-rust text-rust',
      bullets: [
        'Trees dry instantly, trunks turn to carbon ash',
        'Leaves burn from the inside, glowing with orange veins',
        'Lush vegetation turns pitch-black within minutes',
      ],
    },
    {
      step: 'PHASE 02',
      title: 'BIOLOGICAL INSTABILITY',
      target: 'ANIMALS',
      color: 'border-gold/40 text-gold-bright',
      hoverColor: 'group-hover:border-gold group-hover:bg-gold/[0.02]',
      bullet: 'border-gold text-gold-bright',
      bullets: [
        'Birds lose internal radar, falling from clear skies',
        'Canines and predators howl in continuous distress',
        'Marine life undergoes rapid cellular calcification',
      ],
    },
    {
      step: 'PHASE 03',
      title: 'DIMENSIONAL CONGESTION',
      target: 'HUMANS',
      color: 'border-danger/40 text-danger',
      hoverColor: 'group-hover:border-danger group-hover:bg-danger/[0.02]',
      bullet: 'border-danger text-danger',
      bullets: [
        'Burning skin sensation & systemic muscle weakness',
        'Extreme dizziness, blurred vision & severe ocular pain',
        'Atmospheric oxygen depletion & acute breathing collapse',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const phaseVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] as const },
    },
  }

  return (
    <section
      id="asteroid-timeline"
      className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-[#0a0806] to-black flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Translucent background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cinzel text-[10vw] font-black text-danger/[0.015] tracking-widest pointer-events-none uppercase">
        COLLAPSE
      </div>

      <div className="max-w-6xl w-full z-10 flex flex-col items-center gap-16">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <span className="font-rajdhani text-[11px] font-bold tracking-[0.35em] text-danger uppercase animate-pulse">
            INTERDIMENSIONAL IMPACT EFFECT
          </span>
          <h3 className="font-cinzel text-3xl md:text-5xl font-semibold text-white tracking-widest leading-none">
            THE SYSTEMIC COLLAPSE
          </h3>
          <p className="font-im-fell text-sm md:text-base text-parchment/65 italic max-w-xl mt-3 leading-relaxed">
            &ldquo;Every 30 minutes the interdimensional energy waves accelerate. Earth is not merely colliding — its cellular matrix is warping.&rdquo;
          </p>
        </div>

        {/* 3-column chronological timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {phases.map((phase) => (
            <motion.div
              key={phase.step}
              variants={phaseVariants}
              className={`group border ${phase.color} ${phase.hoverColor} bg-black/60 p-6 rounded-lg transition-all duration-300 relative cursor-default ornate-box flex flex-col gap-6`}
            >
              {/* Header Details */}
              <div className="flex flex-col gap-1 border-b border-white/5 pb-4">
                <span className="font-rajdhani text-[11px] font-bold tracking-widest opacity-60">
                  {phase.step}
                </span>
                <span className={`font-rajdhani text-xs font-semibold tracking-wider ${phase.bullet.split(' ')[1]}`}>
                  {phase.title}
                </span>
                <h4 className="font-cinzel text-2xl font-bold text-white tracking-wider mt-1">
                  {phase.target}
                </h4>
              </div>

              {/* Decay bullets */}
              <ul className="flex flex-col gap-4">
                {phase.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-3 items-start text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full border ${phase.bullet.split(' ')[0]} bg-transparent mt-1.5 flex-shrink-0 animate-ping`} />
                    <span className="font-im-fell text-parchment/80 italic leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  )
}
export default AsteroidSection
