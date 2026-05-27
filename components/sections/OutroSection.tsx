'use client'

import { motion } from 'framer-motion'

export function OutroSection() {
  const handleReset = () => {
    // Smooth scroll back to the top of the teaser to reset the experience
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAction = () => {
    alert('Compass Calibration Initialized. Bracing for inter-universal feedback...')
  }

  return (
    <section
      id="teaser-outro"
      className="relative w-full min-h-[90vh] py-24 px-6 bg-black flex flex-col items-center justify-between overflow-hidden select-none"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url('/Image/PostCreditPoster.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none" />

      {/* 1. Subtle Floating Gold Particles Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-bright animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Spacer to push content below the tilakam in the background image */}
      <div className="h-64 md:h-96 w-full shrink-0" />

      {/* 2. Outro Core Content */}
      <div className="max-w-3xl w-full z-10 flex flex-col items-center text-center gap-10">


        {/* Closing Headers */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-rajdhani text-[11px] font-bold tracking-[0.4em] text-gold uppercase animate-pulse">
            EXPERIENCE TEASER COMPLETED
          </span>
          <h2 className="font-cinzel-decorative text-4xl md:text-6xl font-extrabold text-white tracking-widest leading-none drop-shadow-[0_0_15px_rgba(200,168,75,0.15)]">
            THE WHEEL TURNETH
          </h2>
          <p className="font-im-fell text-base md:text-lg text-parchment/70 max-w-xl italic leading-relaxed font-light mt-2">
            Will Vara reconstruct the alignment grid and restore equilibrium before the timeline threshold is breached? The future of two universes lies encrypted in the compass.
          </p>
        </div>

        {/* Ornate Call-To-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-md mt-2">
          {/* Main Primary Action */}
          <button
            onClick={handleAction}
            className="w-full sm:w-auto px-8 py-3.5 border border-gold-bright bg-gold-bright text-ink font-rajdhani text-xs font-bold tracking-[0.25em] uppercase hover:bg-transparent hover:text-gold-bright transition-all duration-300 shadow-[0_0_25px_rgba(232,201,106,0.35)] cursor-pointer active:scale-95 hover:scale-105"
          >
            CALIBRATE COMPASS
          </button>
          
          {/* Secondary Reset Action */}
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-8 py-3.5 border border-gold/30 bg-ink/75 text-cream hover:text-white hover:border-white transition-all duration-300 font-rajdhani text-xs font-bold tracking-[0.25em] uppercase cursor-pointer active:scale-95 hover:scale-105"
          >
            RESET CHRONOLOGY
          </button>
        </div>
      </div>

      {/* 3. Footer credits */}
      <div className="z-10 mt-12">
        <p className="font-rajdhani text-[9px] tracking-[0.3em] text-cream/30 uppercase">
          &copy; 2026 THE COMPASS OF KALACHAKRA • ALL TIMELINES RESERVED
        </p>
      </div>
    </section>
  )
}
export default OutroSection
