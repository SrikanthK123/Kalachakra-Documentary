'use client'

import { useScrollProgress } from '@/lib/useScrollProgress'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { SuryaMandala } from '@/components/seasons/Season2Page'

type Language = 'english' | 'hindi' | 'telugu'
export type Season = 'S1' | 'S2'

interface NavBarProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
  currentSeason: Season
  onSeasonChange: (s: Season) => void
}

interface NavItem {
  label: string
  href: string
  locked?: boolean
}

// ─── Season-aware nav data ────────────────────────────────────────────────────
const NAV_DATA: Record<Season, Record<Language, NavItem[]>> = {
  S1: {
    english: [
      { label: 'PROLOGUE', href: '#prologue' },
      { label: 'VARA',     href: '#ch1' },
      { label: 'COMPASS',  href: '#compass-showcase' },
      { label: 'TIMELINE', href: '#asteroid-timeline' },
      { label: 'CLIMAX',   href: '#climax-final' },
    ],
    hindi: [
      { label: 'प्रस्तावना', href: '#prologue' },
      { label: 'वारा',       href: '#ch1' },
      { label: 'कम्पास',    href: '#compass-showcase' },
      { label: 'समयरेखा',   href: '#asteroid-timeline' },
      { label: 'चरमोत्कर्ष', href: '#climax-final' },
    ],
    telugu: [
      { label: 'పీఠిక',     href: '#prologue' },
      { label: 'వారా',      href: '#ch1' },
      { label: 'దిక్సూచి', href: '#compass-showcase' },
      { label: 'సమయక్రమం', href: '#asteroid-timeline' },
      { label: 'క్లైమాక్స్', href: '#climax-final' },
    ],
  },
  S2: {
    english: [
      { label: 'RETURN',      href: '#s2-awakening' },
      { label: 'TILAKAM',     href: '#s2-split' },
      { label: '36-HR CYCLE', href: '#s2-convergence' },
      { label: 'JOURNEY',     href: '#s2-reckoning' },
      { label: 'SURYA GEM',   href: '#s2-surya-gem' },
    ],
    hindi: [
      { label: 'वापसी',       href: '#s2-awakening' },
      { label: 'तिलकम',      href: '#s2-split' },
      { label: '36-घंटे चक्र', href: '#s2-convergence' },
      { label: 'यात्रा',      href: '#s2-reckoning' },
      { label: 'सूर्य मणि',  href: '#s2-surya-gem' },
    ],
    telugu: [
      { label: 'తిరిగి',      href: '#s2-awakening' },
      { label: 'తిలకం',       href: '#s2-split' },
      { label: '36-గం చక్రం', href: '#s2-convergence' },
      { label: 'ప్రయాణం',    href: '#s2-reckoning' },
      { label: 'సూర్య మణి',  href: '#s2-surya-gem' },
    ],
  },
}

const SEASON_LABELS: Record<Season, string> = {
  S1: 'SEASON  I',
  S2: 'SEASON  II',
}

// ─── Lock icon ────────────────────────────────────────────────────────────────
function LockIcon() {
  return (
    <svg className="w-2.5 h-2.5 opacity-50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  )
}

// ─── Season dropdown ──────────────────────────────────────────────────────────
function SeasonDropdown({
  currentSeason,
  onSeasonChange,
}: {
  currentSeason: Season
  onSeasonChange: (s: Season) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  return (
    <div ref={ref} className="relative flex-shrink-0">
      {/* Trigger pill */}
      <button
        id="season-selector"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-black/60 backdrop-blur-md
                   font-rajdhani text-[10px] font-bold tracking-[0.25em] text-gold
                   hover:border-gold/60 hover:bg-black/80 transition-all duration-300 group"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {currentSeason === 'S2' ? (
          <SuryaMandala size={14} />
        ) : (
          <span className="text-gold text-sm leading-none select-none group-hover:animate-spin" style={{ animationDuration: '2s' }}>
            ☸
          </span>
        )}
        <span>{SEASON_LABELS[currentSeason]}</span>
        <svg
          className={`w-3 h-3 text-gold/60 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-gold/20
                       bg-ink/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.85)] overflow-hidden z-50"
            role="listbox"
            aria-label="Select season"
          >
            <div className="px-3 py-2 border-b border-gold/10">
              <p className="font-rajdhani text-[9px] tracking-[0.3em] text-muted uppercase">Select Season</p>
            </div>

            {(['S1', 'S2'] as Season[]).map((s) => {
              const isActive = currentSeason === s
              return (
                <button
                  key={s}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => { onSeasonChange(s); setOpen(false) }}
                  className={`w-full flex items-center justify-between px-3 py-3 transition-all duration-200
                    ${isActive ? 'bg-gold/10 text-gold' : 'text-cream/60 hover:bg-white/5 hover:text-cream'}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all
                        ${isActive ? 'bg-gold shadow-[0_0_6px_rgba(200,168,75,0.8)]' : 'bg-muted/40'}`}
                    />
                    {s === 'S2' ? (
                      <div className="flex items-center gap-1.5">
                        <SuryaMandala size={14} />
                        <span className="font-rajdhani text-[11px] font-bold tracking-[0.2em]">{SEASON_LABELS[s]}</span>
                      </div>
                    ) : (
                      <span className="font-rajdhani text-[11px] font-bold tracking-[0.2em]">{SEASON_LABELS[s]}</span>
                    )}
                  </div>
                  {isActive && (
                    <svg className="w-3 h-3 text-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const S2_CHECKPOINTS = [
  { percentage: 0,   iconPath: '/Kalachakra-Documentary/Image/Season-2 Images/TempleIcon.png', label: 'Temple' },
  { percentage: 15,  iconPath: '/Kalachakra-Documentary/Image/Season-2 Images/CaveIcon.png', label: 'Cave' },
  { percentage: 28,  iconPath: '/Kalachakra-Documentary/Image/Season-2 Images/LordVishnuIcon2.png', label: 'Vishnu' },
  { percentage: 56,  iconPath: '/Kalachakra-Documentary/Image/Season-2 Images/SuryaGodIcon.png', label: 'Surya God' },
  { percentage: 90,  iconPath: '/Kalachakra-Documentary/Image/Season-2 Images/SunTempleIcon.png', label: 'Sun Temple' }
]

// ─── Main NavBar ──────────────────────────────────────────────────────────────
export function NavBar({ currentLanguage, onLanguageChange, currentSeason, onSeasonChange }: NavBarProps) {
  const progress = useScrollProgress()
  const [showS2Banner, setShowS2Banner] = useState(false)

  const currentNavItems = NAV_DATA[currentSeason][currentLanguage] ?? NAV_DATA[currentSeason].english

  const handleSeasonChange = (s: Season) => {
    onSeasonChange(s)
    if (s === 'S2') {
      setShowS2Banner(true)
      setTimeout(() => setShowS2Banner(false), 4000)
    }
    // Scroll to top on season switch
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    if (item.locked) return
    const target = document.querySelector(item.href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 bg-ink/75 backdrop-blur-md border-b border-gold/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 font-cinzel-decorative font-bold text-lg text-gold-bright tracking-widest hover:text-white transition-colors flex-shrink-0"
          >
            {currentSeason === 'S2' ? (
              <SuryaMandala size={20} />
            ) : (
              <span className="text-xl animate-spin-slow">☸</span>
            )}
            <span className="hidden sm:inline">KALACHAKRA</span>
          </a>

          {/* ── Center: Season Switcher + Nav Links ── */}
          <div className="flex items-center gap-4 md:gap-5 flex-1 justify-center min-w-0">

            {/* Season selector */}
            <SeasonDropdown currentSeason={currentSeason} onSeasonChange={handleSeasonChange} />

            {/* Divider */}
            <div className="hidden md:block w-px h-5 bg-gold/15 flex-shrink-0" />

            {/* Nav links */}
            <nav
              className="hidden md:flex items-center gap-5 font-rajdhani text-xs font-semibold tracking-[0.2em] text-cream/70 min-w-0"
              aria-label={`Season ${currentSeason} navigation`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSeason}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex items-center gap-5"
                >
                  {currentNavItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item)}
                      title={item.locked ? 'Coming in Season II' : undefined}
                      className={`relative flex items-center gap-1.5 py-1 group transition-colors duration-300
                        ${item.locked
                          ? 'text-muted/50 cursor-not-allowed'
                          : 'hover:text-white cursor-pointer'
                        }`}
                    >
                      {item.locked && <LockIcon />}
                      <span>{item.label}</span>
                      {!item.locked && (
                        <span
                          className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                          style={{
                            background: currentSeason === 'S2'
                              ? 'linear-gradient(to right, #e8c96a, #cc5500)'
                              : '#e8c96a',
                          }}
                        />
                      )}
                    </a>
                  ))}
                </motion.div>
              </AnimatePresence>
            </nav>
          </div>

          {/* ── Language selector ── */}
          <div className="flex items-center gap-1 bg-black/60 px-1.5 py-1 rounded-full border border-white/5 backdrop-blur-md select-none flex-shrink-0">
            {(['english', 'hindi', 'telugu'] as Language[]).map((lang) => {
              const label = lang === 'english' ? 'EN' : lang === 'hindi' ? 'हिं' : 'తె'
              return (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  aria-label={`Switch to ${lang}`}
                  className={`font-rajdhani text-[10px] font-bold min-w-[28px] h-6 flex items-center justify-center rounded-full transition-all duration-300 flex-shrink-0
                    ${currentLanguage === lang
                      ? 'bg-gold text-black shadow-[0_0_10px_rgba(200,168,75,0.4)]'
                      : 'text-cream/50 hover:text-white'
                    }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Scroll progress bar ── */}
        <div className="px-6 md:px-12 w-full pb-1">
          <div className="w-full h-[4px] bg-gold/10 relative overflow-visible select-none">
            {/* Checkpoints for Season 2 */}
            {currentSeason === 'S2' && (
              <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
                {S2_CHECKPOINTS.map((cp, idx) => {
                  const isReached = progress * 100 >= cp.percentage
                  return (
                    <div
                      key={idx}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
                      style={{ left: `${cp.percentage}%` }}
                      title={cp.label}
                    >
                      {/* Checkpoint icon */}
                      <img
                        src={cp.iconPath}
                        alt={cp.label}
                        className="w-7 h-7 md:w-9 md:h-9 object-contain transition-all duration-300"
                        style={{
                          filter: isReached
                            ? 'brightness(1.1) drop-shadow(0 0 8px rgba(232,201,106,0.8))'
                            : 'brightness(0.5) grayscale(0.7) drop-shadow(0 0 2px rgba(255,255,255,0.1))',
                          transform: `scale(${isReached ? 1.05 : 0.95})`,
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            )}

            {/* Progress fill */}
            <motion.div
              className="h-full relative"
              style={{
                width: `${progress * 100}%`,
                background:
                  currentSeason === 'S2'
                    ? 'linear-gradient(to right, #c8a84b, #e8881a, #cc5500)'
                    : 'linear-gradient(to right, #c8a84b, #e8c96a, #c8a84b)',
              }}
              layoutId="scrollProgress"
            >
              {/* Walking Vara icon at the tip for Season 2 */}
              {currentSeason === 'S2' && (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center pointer-events-none z-30"
                >
                  <motion.img
                    src={progress >= 0.56 ? "/Kalachakra-Documentary/Image/Season-2 Images/VaraHoldsSunGemIcon.png" : "/Kalachakra-Documentary/Image/Season-2 Images/VaraLoadingChara.png"}
                    alt="Vara Walking"
                    className="w-11 h-11 md:w-14 md:h-14 object-contain filter drop-shadow-[0_0_10px_rgba(232,201,106,0.95)]"
                    style={{ transformOrigin: 'bottom center' }}
                    animate={{
                      y: [0, -3, 0],
                      rotate: [-5, 5, -5]
                    }}
                    transition={{
                      duration: 0.65,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* ── Season II toast banner ── */}
      <AnimatePresence>
        {showS2Banner && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50
                       flex items-center gap-3 px-5 py-3 rounded-lg
                       bg-ink/95 border border-gold/30 backdrop-blur-xl
                       shadow-[0_4px_30px_rgba(0,0,0,0.7)]"
            role="status"
            aria-live="polite"
          >
            <SuryaMandala size={28} />
            <div className="flex flex-col">
              <span className="font-cinzel text-gold text-xs tracking-[0.25em] font-semibold">
                NAVAGRAHA AWAKENING
              </span>
              <span className="font-rajdhani text-cream/55 text-[11px] tracking-widest uppercase">
                The wheel turns again — Season II begins
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
