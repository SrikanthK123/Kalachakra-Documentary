'use client'

import { useScrollProgress } from '@/lib/useScrollProgress'
import { motion } from 'framer-motion'

interface NavBarProps {
  currentLanguage: 'english' | 'hindi' | 'telugu'
  onLanguageChange: (lang: 'english' | 'hindi' | 'telugu') => void
}

export function NavBar({ currentLanguage, onLanguageChange }: NavBarProps) {
  const progress = useScrollProgress()

  const navItems = {
    english: [
      { label: 'PROLOGUE', href: '#prologue' },
      { label: 'VARA', href: '#ch1' },
      { label: 'COMPASS', href: '#compass-showcase' },
      { label: 'TIMELINE', href: '#asteroid-timeline' },
      { label: 'CLIMAX', href: '#climax-final' },
    ],
    hindi: [
      { label: 'प्रस्तावना', href: '#prologue' },
      { label: 'वारा', href: '#ch1' },
      { label: 'कम्पास', href: '#compass-showcase' },
      { label: 'समयरेखा', href: '#asteroid-timeline' },
      { label: 'चरमोत्कर्ष', href: '#climax-final' },
    ],
    telugu: [
      { label: 'పీఠిక', href: '#prologue' },
      { label: 'వారా', href: '#ch1' },
      { label: 'దిక్సూచి', href: '#compass-showcase' },
      { label: 'సమయక్రమం', href: '#asteroid-timeline' },
      { label: 'క్లైమాక్స్', href: '#climax-final' },
    ],
  }

  const currentNavItems = navItems[currentLanguage] || navItems.english

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-ink/75 backdrop-blur-md border-b border-gold/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-cinzel-decorative font-bold text-lg text-gold-bright tracking-widest hover:text-white transition-colors"
        >
          <span className="text-xl animate-spin-slow duration-[15s]">☸</span>
          <span>KALACHAKRA</span>
        </a>

        {/* Navigation & Language Selectors */}
        <div className="flex items-center gap-6">
          {/* Menu - Hidden on mobile, visible on desktop */}
          <nav className="hidden md:flex items-center gap-6 font-rajdhani text-xs font-semibold tracking-[0.2em] text-cream/70">
            {currentNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="relative hover:text-white hover:glow-gold transition-colors duration-300 py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-bright transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Multilingual Selector Pill Capsule */}
          <div className="flex items-center gap-1 bg-black/60 px-1.5 py-1 rounded-full border border-white/5 backdrop-blur-md select-none flex-shrink-0">
            <button
              onClick={() => onLanguageChange('english')}
              className={`font-rajdhani text-[10px] font-bold min-w-[28px] h-6 flex items-center justify-center rounded-full transition-all duration-300 flex-shrink-0 ${
                currentLanguage === 'english'
                  ? 'bg-gold text-black shadow-[0_0_10px_rgba(200,168,75,0.4)]'
                  : 'text-cream/50 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hindi')}
              className={`font-rajdhani text-[10px] font-bold min-w-[28px] h-6 flex items-center justify-center rounded-full transition-all duration-300 flex-shrink-0 ${
                currentLanguage === 'hindi'
                  ? 'bg-gold text-black shadow-[0_0_10px_rgba(200,168,75,0.4)]'
                  : 'text-cream/50 hover:text-white'
              }`}
            >
              हिं
            </button>
            <button
              onClick={() => onLanguageChange('telugu')}
              className={`font-rajdhani text-[10px] font-bold min-w-[28px] h-6 flex items-center justify-center rounded-full transition-all duration-300 flex-shrink-0 ${
                currentLanguage === 'telugu'
                  ? 'bg-gold text-black shadow-[0_0_10px_rgba(200,168,75,0.4)]'
                  : 'text-cream/50 hover:text-white'
              }`}
            >
              తె
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Scroll Progress Bar */}
      <div className="w-full h-[2px] bg-gold/10 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-gold-bright to-gold"
          style={{ width: `${progress * 100}%` }}
          layoutId="scrollProgress"
        />
      </div>
    </motion.header>
  )
}
export default NavBar
