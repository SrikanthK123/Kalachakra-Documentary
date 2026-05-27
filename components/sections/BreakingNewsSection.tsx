'use client'

import { useCountdown } from '@/lib/useCountdown'
import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { SectionDivider } from '../ui/SectionDivider'

export function BreakingNewsSection() {
  const { hours, minutes, seconds } = useCountdown(36)

  // Format countdown string
  const formatNum = (num: number) => num.toString().padStart(2, '0')

  const timeString = `${formatNum(hours)}:${formatNum(minutes)}:${formatNum(seconds)}`

  return (
    <section
      id="breaking-news"
      className="relative w-full py-24 px-6 bg-black flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <div className="max-w-4xl w-full z-10 flex flex-col items-center gap-12">
        
        {/* 1. Countdown Widget */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-rajdhani text-xs font-bold tracking-[0.3em] text-danger uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-danger animate-ping" />
            COLLISION THREAT LEVEL: MAXIMUM
          </span>
          
          {/* Huge Gold Digital Countdown Timer */}
          <div className="font-rajdhani text-6xl md:text-8xl font-light text-gold-bright tracking-[0.1em] drop-shadow-[0_0_25px_rgba(232,201,106,0.3)] mt-2">
            {timeString}
          </div>
          
          <span className="font-rajdhani text-[11px] font-semibold tracking-[0.4em] text-cream/40 uppercase">
            IMPACT COUNTDOWN
          </span>
        </div>

        {/* 2. CRT Television Emergency Broadcast Frame */}
        <div className="w-full max-w-[800px] border-4 border-ash bg-[#0c0a08] rounded-xl shadow-[0_0_60px_rgba(204,51,0,0.12)] overflow-hidden ornate-box crt-overlay">
          {/* TV Header with flashing status dots */}
          <div className="h-10 w-full bg-ash/30 border-b border-white/5 px-4 flex items-center justify-between">
            <span className="font-rajdhani text-[10px] font-bold tracking-widest text-parchment/60">
              ANALOG SOURCE // TEMPORAL EMERGENCY RESPONSE SYSTEM
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-danger animate-blink" />
              <span className="font-rajdhani text-[10px] font-bold tracking-wider text-danger uppercase">
                LIVE FEED
              </span>
            </div>
          </div>

          {/* Screen Content */}
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 items-center">
            {/* Left Column: Breaking News Text */}
            <div className="flex flex-col gap-6">
              {/* Red Alert Banner */}
              <div className="bg-danger/25 border border-danger/60 px-4 py-2 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-danger animate-pulse flex-shrink-0" />
                <span className="font-rajdhani text-xs md:text-sm font-bold tracking-[0.25em] text-white uppercase">
                  BREAKING NEWS : GLOBAL DEVIATION WARNING
                </span>
              </div>

              {/* Main Headline */}
              <h4 className="font-cinzel text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                COLLISION DETECTED: UNIDENTIFIED ASTEROID ENTERS THERMOSPHERE; <span className="text-danger">IMPACT PREDICTED IN less than 36 HOURS.</span>
              </h4>

              {/* Body content */}
              <p className="font-im-fell text-base md:text-lg text-parchment/90 leading-relaxed italic font-light">
                &ldquo;Top space agencies confirm a massive rogue astronomical object of unknown composition has suddenly formed in low orbit. The celestial body possesses unusual electromagnetic frequencies, distorting earth&rsquo;s coordinates. Total atmospheric collapse is expected at collision.&rdquo;
              </p>
            </div>

            {/* Right Column: Live Feed TV Screenshot */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-danger/30 shadow-[0_0_20px_rgba(204,51,0,0.12)] group">
              <img
                src="/Image/VaraWakeUpNewsReport.png"
                alt="Breaking News Live Report"
                className="w-full h-full object-cover object-center brightness-90 group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
              />
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-10" />
              <div className="absolute inset-x-0 h-[2px] bg-danger/20 top-0 pointer-events-none animate-scan z-10" />
              
              {/* Red Live Dot Badge */}
              <div className="absolute top-3 right-3 bg-black/60 px-2 py-1 rounded flex items-center gap-1.5 backdrop-blur-sm z-20 pointer-events-none select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-danger animate-ping" />
                <span className="font-rajdhani text-[9px] font-bold text-danger tracking-wider">LIVE FEED</span>
              </div>
            </div>
          </div>

          {/* 3. Scrolling Ticker (CSS Marquee) */}
          <div className="h-8 bg-danger border-t border-danger/60 flex items-center overflow-hidden relative">
            <div className="whitespace-nowrap flex animate-ticker w-full font-rajdhani text-[11px] font-bold tracking-[0.15em] text-white uppercase">
              <span>
                • SYSTEM ALERT: COORDINATE INSTABILITY ENTIRE PLANET • GPS FAILURE • ALL RESCUE SYSTEMS COMMANDED DEEP GROUND CAVES • 36 HOURS MAXIMUM REMAINING • GLOBAL COLLAPSE WARNING •
              </span>
            </div>
          </div>
        </div>

        {/* 4. Compass Signal Connection Warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[550px] border border-gold/25 bg-gold/[0.02] p-4 text-center ornate-box flex flex-col gap-2 animate-pulse"
        >
          <span className="font-rajdhani text-xs font-bold tracking-[0.3em] text-gold-bright uppercase">
            UNKNOWN INCOMING CONNECTION
          </span>
          <p className="font-im-fell text-xs md:text-sm text-parchment/70 italic font-light">
            Compass energy core registers severe sub-atomic frequency. Activating inter-universal bridge...
          </p>
        </motion.div>

      </div>

      <SectionDivider />
    </section>
  )
}
export default BreakingNewsSection
