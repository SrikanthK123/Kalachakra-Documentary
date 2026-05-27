'use client'

import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MandalaRing } from '../canvas/MandalaRing'
import { ScrollHint } from '../ui/ScrollHint'

// Dynamic load WebGL StarField to bypass SSR hydration mismatches
const StarFieldCanvas = dynamic(() => import('../canvas/StarFieldCanvas'), {
  ssr: false,
})

interface HeroSectionProps {
  language?: 'english' | 'hindi' | 'telugu'
}

export function HeroSection({ language = 'english' }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const { scrollY } = useScroll()

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  const flashlightStyle = isHovered
    ? {
        background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(10, 8, 6, 0.15) 0%, rgba(10, 8, 6, 0.85) 50%, rgba(10, 8, 6, 0.98) 85%, #0a0806 100%)`,
      }
    : {
        background: `radial-gradient(circle at center, rgba(10, 8, 6, 0.82) 0%, #0a0806 100%)`,
        transition: 'background 0.8s ease-in-out',
      }

  // Parallax translation effects based on scroll coordinates
  const mandalaY = useTransform(scrollY, [0, 600], [0, 180])
  const textY = useTransform(scrollY, [0, 600], [0, -60])
  const textOpacity = useTransform(scrollY, [0, 450], [1, 0])

  const content = {
    english: {
      kicker: 'THE WHEEL OF TIME',
      title: 'KALACHAKRA',
      subtitle: 'The Compass of Kalachakra',
      tagline: '“Before recorded history… before civilization… an ancient interdimensional artifact awakens. Vara touches the key, freezing parallel time and initiating an inescapable 36-hour collapse.”'
    },
    hindi: {
      kicker: 'समय का चक्र',
      title: 'कालचक्र',
      subtitle: 'कालचक्र का कम्पास',
      tagline: '“दर्ज इतिहास से पहले... सभ्यता से पहले... एक प्राचीन अंतरायामी कलाकृति जागृत होती है। वारा कुंजी को छूता है, समानांतर समय को जमा देता है और एक अपरिहार्य ३६ घंटे के पतन की शुरुआत करता है।”'
    },
    telugu: {
      kicker: 'కాల చక్రం',
      title: 'కాలచక్ర',
      subtitle: 'కాలచక్ర దిక్సూచి',
      tagline: '“లిఖిత చరిత్ర కంటే ముందు... నాగరికత కంటే ముందు... ఒక పురాతన అంతర్-డైమెన్షనల్ కళాఖండం మేల్కొంటుంది. వారా కీని తాకడం వల్ల సమాంతర సమయం స్తంభిస్తుంది మరియు అనివార్యమైన 36 గంటల పతనం ప్రారంభమవుతుంది.”'
    }
  }

  const active = content[language] || content.english

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  }

  const childVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  }

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-screen flex flex-col items-center justify-between py-12 px-6 overflow-hidden bg-deep select-none"
    >
      {/* Background Image Layer with Gradient Mask to fade harsh edges */}
      <div 
        className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat transition-transform duration-1000"
        style={{ 
          backgroundImage: `url('/Image/LordVishnuInCave.png')`,
          maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
        }}
      />
      
      {/* Flashlight Mask Overlay */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-300 pointer-events-none"
        style={flashlightStyle}
      />

      {/* 1. StarField Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <StarFieldCanvas />
      </div>

      {/* 2. Concentric Counter-Rotating SVG Mandalas with Parallax */}
      <motion.div style={{ y: mandalaY }} className="absolute inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-none">
        <MandalaRing />
      </motion.div>

      {/* Dummy empty spacer for vertical alignment */}
      <div className="h-10" />

      {/* 4. Core Hero Headers */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: textY, opacity: textOpacity }}
        className="text-center z-10 max-w-4xl w-full px-2 sm:px-6 flex flex-col items-center gap-6"
      >
        {/* Kicker tag in uppercase letter-spaced Rajdhani */}
        <motion.span
          variants={childVariants}
          className="font-rajdhani text-[9px] sm:text-[11px] font-bold text-gold tracking-[0.25em] sm:tracking-[0.4em] uppercase"
        >
          {active.kicker}
        </motion.span>

        {/* Cinematic Main Title in Cinzel Decorative */}
        <motion.h1
          variants={childVariants}
          className="font-cinzel-decorative text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold text-white tracking-wider sm:tracking-widest leading-none drop-shadow-[0_0_20px_rgba(200,168,75,0.25)] select-all"
        >
          {active.title}
        </motion.h1>

        {/* Golden fading divider */}
        <motion.div
          variants={childVariants}
          className="w-24 sm:w-40 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent my-1"
        />

        {/* Subtitle in clean Cinzel */}
        <motion.h2
          variants={childVariants}
          className="font-cinzel text-xs sm:text-lg md:text-2xl font-medium tracking-[0.15em] sm:tracking-[0.25em] text-cream px-4 text-center leading-normal"
        >
          {active.subtitle}
        </motion.h2>

        {/* Mystical story tagline in IM Fell English (italic) */}
        <motion.p
          variants={childVariants}
          className="font-im-fell text-xs sm:text-base md:text-xl text-parchment/80 max-w-2xl italic leading-relaxed font-light mt-2 sm:mt-4 px-4 text-center"
        >
          {active.tagline}
        </motion.p>
      </motion.div>

      {/* 5. Scroll Down Prompt at footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="z-10"
      >
        <ScrollHint />
      </motion.div>
    </section>
  )
}
export default HeroSection
