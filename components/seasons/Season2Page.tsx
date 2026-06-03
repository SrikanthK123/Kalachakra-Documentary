'use client'

/**
 * Season 2 — The Navagraha Awakening
 * Standard scrollable layout with alternating text and image cards.
 * Reverts the sticky scrollytelling layout to restore natural scrolling,
 * and adds a high-fidelity image card (ChapterArt) with a 2K lightbox zoom for every chapter.
 */

import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { season2Chapters, type S2ChapterData, type S2Line } from '@/lib/season2Data'
import { ChapterArt } from '@/components/chapters/ChapterArt'

type Language = 'english' | 'hindi' | 'telugu'
interface Props { language: Language }

// Map Season 2 chapters to their context-specific ChapterArt types
const getArtTypeForChapter = (id: string) => {
  switch (id) {
    case 's2-prologue':
      return 'cave'
    case 's2-ch1':
      return 'otherVara'
    case 's2-ch2':
      return 'night'
    case 's2-ch3':
      return 'descent'
    case 's2-ch4':
      return 'otherWorld'
    case 's2-ch5':
      return 'compass'
    case 's2-ch6':
      return 'temple'
    case 's2-ch7':
      return 'researcher'
    case 's2-ch8':
      return 'asteroid'
    case 's2-ch9':
      return 'mandala'
    case 's2-ch10':
      return 'balanceWarning'
    case 's2-ch11':
      return 'phases'
    case 's2-ch12':
      return 'researcher'
    case 's2-ch13':
      return 'news'
    case 's2-ch14':
      return 'shiftedCity'
    case 's2-ch15':
      return 'otherWorld'
    case 's2-ch16':
      return 'balanceWarning'
    default:
      return 'mandala'
  }
}

// Map Season 2 chapters to their matching atmosphere themes
const getAtmosphereForChapter = (id: string): 'normal' | 'fire' | 'cosmic' | 'danger' => {
  switch (id) {
    case 's2-prologue':
    case 's2-ch2':
    case 's2-ch6':
      return 'cosmic'
    case 's2-ch4':
    case 's2-ch5':
    case 's2-ch8':
      return 'fire'
    case 's2-ch10':
    case 's2-ch16':
      return 'danger'
    default:
      return 'normal'
  }
}

// ─── Surya Mandala SVG ────────────────────────────────────────────────────────
export function SuryaMandala({
  size = 120, className = '', opacity = 1,
}: { size?: number; className?: string; opacity?: number }) {
  return (
    <div className={`relative select-none pointer-events-none ${className}`} style={{ width: size, height: size, opacity }}>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(232,201,106,0.25) 0%, rgba(232,201,106,0.05) 55%, transparent 75%)', filter: 'blur(12px)' }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 200 200" width={size} height={size} className="relative z-10" aria-hidden="true">
        <defs>
          <radialGradient id="suryaCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffde4" /><stop offset="35%" stopColor="#e8c96a" /><stop offset="100%" stopColor="#c8a84b" stopOpacity="0.9" />
          </radialGradient>
          <radialGradient id="suryaHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8c96a" stopOpacity="0.15" /><stop offset="100%" stopColor="#e8c96a" stopOpacity="0" />
          </radialGradient>
          <filter id="suryaGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <circle cx="100" cy="100" r="97" fill="url(#suryaHalo)" />
        <motion.circle cx="100" cy="100" r="91" fill="none" stroke="#c8a84b" strokeWidth="0.6" strokeDasharray="2 7" opacity="0.35" style={{ transformOrigin: '100px 100px' }} animate={{ rotate: -360 }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }} />
        <motion.g style={{ transformOrigin: '100px 100px' }} animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={i} x1="100" y1="6" x2="100" y2={i % 2 === 0 ? '22' : '15'} stroke="#e8c96a" strokeWidth={i % 2 === 0 ? '2' : '1'} opacity={i % 2 === 0 ? '0.85' : '0.4'} filter="url(#suryaGlow)" transform={`rotate(${i * 22.5} 100 100)`} />
          ))}
        </motion.g>
        <motion.circle cx="100" cy="100" r="72" fill="none" stroke="#c8a84b" strokeWidth="0.8" opacity="0.25" style={{ transformOrigin: '100px 100px' }} animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
        <motion.g style={{ transformOrigin: '100px 100px' }} animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={i} cx="100" cy="63" rx="4.5" ry="13" fill="#e8c96a" opacity="0.18" transform={`rotate(${i * 45} 100 100)`} />
          ))}
        </motion.g>
        <motion.circle cx="100" cy="100" r="43" fill="none" stroke="#e8c96a" strokeWidth="1.5" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.circle cx="100" cy="100" r="32" fill="url(#suryaCore)" filter="url(#suryaGlow)" animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
        <text x="100" y="108" textAnchor="middle" fill="#fffde4" fontSize="24" fontFamily="serif" opacity="0.92" filter="url(#suryaGlow)">☀</text>
      </svg>
    </div>
  )
}

// ─── Film grain overlay ───────────────────────────────────────────────────────
const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`

function FilmGrain() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[15]"
      style={{ backgroundImage: GRAIN_SVG, backgroundRepeat: 'repeat', backgroundSize: '180px 180px', opacity: 0.065, mixBlendMode: 'overlay' }}
    />
  )
}

// ─── Season 2 Opening Hero ────────────────────────────────────────────────────
function S2OpeningHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-black" style={{ backgroundImage: "url('/Kalachakra-Documentary/Image/Season-2 Images/HeroPageS2.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />
      </motion.div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle 75% 75% at 50% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.95) 100%)' }} />
      <FilmGrain />

      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }} 
        className="relative z-10 text-center flex flex-col items-center gap-6 px-6 max-w-4xl mx-auto"
      >
        <motion.p 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, delay: 0.8 }} 
          className="font-rajdhani text-xs tracking-[0.6em] text-gold-bright/90 uppercase font-bold"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
        >
          SEASON-2
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} 
          className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest leading-tight flex flex-col items-center gap-3"
        >
          <span style={{ textShadow: '0 4px 12px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.7)' }}>KALACHAKRA</span>
          <span className="text-xl md:text-3xl lg:text-4xl font-cinzel-decorative font-semibold tracking-[0.3em] mt-1" style={{ color: '#e8c96a', textShadow: '0 0 20px rgba(232,201,106,0.65), 0 4px 10px rgba(0,0,0,0.9)' }}>
            THE NAVAGRAHA AWAKENING
          </span>
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, delay: 2 }} className="w-40 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2, delay: 2.4 }} 
          className="font-im-fell text-parchment/90 text-lg italic max-w-md"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
        >
          The Surya Gem awakens. Eight Grahas remain. The chosen bearer returns.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="font-rajdhani text-[9px] tracking-[0.4em] text-white/25 uppercase">Scroll to begin</p>
          <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} className="w-[1px] h-8 bg-gradient-to-b from-gold/40 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  )
}

// ─── Season 2 Chapter Section Divider (Sun Theme) ────────────────────────────
function S2SectionDivider({ accentColor }: { accentColor: string }) {
  return (
    <div className="w-full flex items-center justify-center my-8 py-4 md:my-16 md:py-8 relative overflow-hidden select-none">
      <div className="w-24 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-gold" style={{ backgroundImage: `linear-gradient(to right, transparent, ${accentColor}40, ${accentColor})` }} />
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] as const }}
        className="mx-6 text-2xl relative flex items-center justify-center cursor-default group"
        style={{ color: accentColor }}
      >
        <span className="animate-spin-slow duration-[35s] group-hover:scale-110 transition-all filter drop-shadow-[0_0_8px_rgba(232,201,106,0.45)]">☀️</span>
        <span className="absolute w-6 h-6 rounded-full blur-sm -z-10 animate-pulse" style={{ backgroundColor: `${accentColor}20` }} />
      </motion.div>
      <div className="w-24 md:w-48 h-[1px] bg-gradient-to-l from-transparent via-gold/40 to-gold" style={{ backgroundImage: `linear-gradient(to left, transparent, ${accentColor}40, ${accentColor})` }} />
    </div>
  )
}

// ─── Stealth Shloka Caption ──────────────────────────────────────────────────
function StealthShlokaCaption({ language }: { language: Language }) {
  const [copied, setCopied] = useState(false)
  const shlokaText = "जयाय जयभद्राय हर्यश्वाय नमो नमः।\nनमो नमः सहस्रांशो आदित्याय नमो नमः॥"

  const handleCopy = () => {
    navigator.clipboard.writeText(shlokaText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const feedbackText = language === 'hindi'
    ? "कंपन कॉपी किया गया"
    : language === 'telugu'
    ? "కంపనం కాపీ చేయబడింది"
    : "Vibration Copied"

  return (
    <div className="mt-4 text-center select-none">
      <p 
        onClick={handleCopy}
        className="font-cinzel text-[11px] md:text-xs text-gold/30 hover:text-gold/45 transition-colors duration-300 leading-relaxed tracking-wider cursor-default active:text-gold-bright"
        style={{
          textShadow: copied ? '0 0 8px rgba(232, 201, 106, 0.6)' : 'none'
        }}
      >
        जयाय जयभद्राय हर्यश्वाय नमो नमः।
        <br />
        नमो नमः सहस्रांशो आदित्याय नमो नमः॥
      </p>
      {copied && (
        <motion.span 
          initial={{ opacity: 0, y: 5 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="block font-rajdhani text-[9px] text-gold/60 tracking-widest mt-1.5 uppercase"
        >
          {feedbackText}
        </motion.span>
      )}
    </div>
  )
}

// ─── Season 2 Chapter Section (Alternating scroll layout) ────────────────────
interface ChapterSectionProps {
  chapter: S2ChapterData
  index: number
  language: Language
  showDivider: boolean
}

function S2ChapterSection({ chapter, index, language, showDivider }: ChapterSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  const isArtLeft = index % 2 === 0
  const artType = getArtTypeForChapter(chapter.id)
  const atmosphere = getAtmosphereForChapter(chapter.id)
  const filter = chapter.cssFilter || 'none'

  const flashlightStyle = isHovered
    ? {
        background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(10, 8, 6, 0.15) 0%, rgba(10, 8, 6, 0.85) 50%, rgba(10, 8, 6, 0.98) 85%, #0a0806 100%)`,
      }
    : {
        background: `radial-gradient(circle at center, rgba(10, 8, 6, 0.82) 0%, #0a0806 100%)`,
        transition: 'background 0.8s ease-in-out',
      }

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  }

  const isLanguageNotEnglish = language !== 'english'
  const translation = isLanguageNotEnglish ? chapter.translations?.[language] : null

  const displayLabel = translation?.chapterLabel || chapter.chapterLabel
  const displayTitle = translation?.title || chapter.title
  const displaySubtitle = translation?.subtitle || chapter.subtitle
  const displayHighlight = translation?.highlight || chapter.lines.find(l => l.type === 'highlight')?.text

  return (
    <section
      ref={containerRef}
      id={chapter.sectionId}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full py-12 md:py-24 px-6 md:px-12 bg-black flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Background Image Layer with Gradient Mask */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 opacity-[0.25]"
        style={{
          backgroundImage: `url('${chapter.imagePath}')`,
          filter: `${filter} blur(4px)`,
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      />

      {/* Flashlight Mask Overlay */}
      <div
        className="absolute inset-0 z-10 transition-all duration-300 pointer-events-none"
        style={flashlightStyle}
      />

      {/* Translucent background Ghost Number */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cinzel text-[11vw] font-black tracking-widest pointer-events-none uppercase whitespace-nowrap z-20"
        style={{ color: `${chapter.accentColor}06` }}
      >
        {chapter.romanNumeral}
      </div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl w-full z-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center"
      >
        {/* ChapterArt Image Card Container - Alternating Position */}
        <div className={`w-full flex justify-center ${isArtLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="w-full max-w-[400px] border border-gold/15 bg-ink/40 p-4 md:p-6 rounded-lg shadow-[0_0_30px_rgba(200,168,75,0.03)] ornate-box flex flex-col justify-between">
            <ChapterArt
              artType={artType}
              image={chapter.imagePath}
              atmosphere={atmosphere}
              chapterTitle={displayTitle}
              chapterNumber={displayLabel}
              extraImages={chapter.extraImages}
            />
            {chapter.id === 's2-ch10' && <StealthShlokaCaption language={language} />}
          </div>
        </div>

        {/* Content Prose Container - Alternating Position */}
        <div className={`w-full flex flex-col gap-6 text-left ${isArtLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          {/* Chapter tag label */}
          <div className="flex flex-col gap-1">
            <span className="inline-flex items-center gap-1.5 font-rajdhani text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: chapter.accentColor }}>
              <span className="text-[10px] animate-spin-slow inline-block">☀️</span> {displayLabel}
            </span>
            <h3 className="font-cinzel text-2xl md:text-3xl font-semibold text-white tracking-wider leading-tight">
              {displayTitle}
            </h3>
            {displaySubtitle && (
              <p className="font-im-fell text-sm italic font-light mt-1" style={{ color: `${chapter.accentColor}bb` }}>
                {displaySubtitle}
              </p>
            )}
          </div>

          {/* Paragraphs prose */}
          <div className="flex flex-col gap-4 font-im-fell text-base md:text-lg text-parchment/85 leading-relaxed italic font-light">
            {chapter.lines.map((line, lineIdx) => {
              if (line.type === 'pause') return null
              if (line.type === 'highlight') return null

              if (line.type === 'sanskrit') {
                const displayTranslation = (isLanguageNotEnglish && translation?.lines?.[lineIdx])
                  ? translation.lines[lineIdx]
                  : line.translation
                return (
                  <div key={lineIdx} className="pl-4 border-l-2 py-2 rounded-r-sm my-2" style={{ borderColor: chapter.accentColor + '80', background: chapter.accentColor + '0d' }}>
                    <p className="font-cinzel-decorative text-xl md:text-2xl leading-snug" style={{ color: chapter.accentColor }}>{line.text}</p>
                    {displayTranslation && <p className="font-im-fell text-sm italic text-cream/50 mt-1">{displayTranslation}</p>}
                  </div>
                )
              }

              const displayLineText = (isLanguageNotEnglish && translation?.lines?.[lineIdx])
                ? translation.lines[lineIdx]
                : line.text

              const isEmphasis = line.type === 'emphasis'
              return (
                <p
                  key={lineIdx}
                  className={isEmphasis ? "font-cinzel text-lg md:text-xl tracking-wide font-semibold text-white mt-2" : ""}
                  style={isEmphasis ? { color: chapter.accentColor, textShadow: `0 0 15px ${chapter.accentColor}44` } : {}}
                >
                  {displayLineText}
                </p>
              )
            })}
          </div>

          {/* Highlight pull-quote */}
          {displayHighlight && (
            <div className="border-l-[3px] bg-gold/[0.03] pl-5 py-3 pr-4 rounded-r-md mt-2" style={{ borderColor: chapter.accentColor }}>
              <p className="font-im-fell text-sm md:text-base tracking-wide italic font-medium text-cream/90">
                {displayHighlight}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Chapter completion divider */}
      {showDivider && <S2SectionDivider accentColor={chapter.accentColor} />}
    </section>
  )
}

// ─── Arc End ──────────────────────────────────────────────────────────────────
function ArcEndSection({ language }: { language: Language }) {
  const isHindi = language === 'hindi'
  const isTelugu = language === 'telugu'

  const lines = [
    { 
      text: isHindi 
        ? "सूर्य मणि ने अपनी शक्ति खो दी है।" 
        : isTelugu 
        ? "సూర్య మణి తన శక్తిని కోల్పోయింది." 
        : "The Surya Gem has lost its power." 
    },
    { 
      text: isHindi 
        ? "छिपा हुआ सूर्य मंदिर जागृत हो गया है।" 
        : isTelugu 
        ? "దాగి ఉన్న సూర్య దేవాలయం మేల్కొంది." 
        : "The hidden Sun Temple has awakened." 
    },
    { 
      text: isHindi 
        ? "लेकिन अशोक चक्र अभी भी अनसुलझा है।" 
        : isTelugu 
        ? "కానీ అశోక చక్రం ఇప్పటికీ పరిష్కరించబడలేదు." 
        : "But the Ashoka Chakram remains unsolved." 
    },
    { text: "" },
    { 
      text: isHindi 
        ? "और मंदिर के भीतर कहीं गहराई में..." 
        : isTelugu 
        ? "మరియు ఆలయం లోపల ఎక్కడో లోతుగా..." 
        : "And somewhere deep inside the temple…" 
    },
    { 
      text: isHindi 
        ? "एक प्राचीन शक्ति वारा के गलत कदम उठाने का इंतजार कर रही है।" 
        : isTelugu 
        ? "వారా తప్పుడు అడుగు వేయడానికి ఒక పురాతన శక్తి వేచి ఉంది." 
        : "an ancient force waits for Vara to make the wrong move.", 
      bold: true 
    },
  ]

  const subtitle = isHindi ? "☀️ सीजन 2 का अंत ☀️" : isTelugu ? "☀️ సీజన్ 2 ముగింపు ☀️" : "☀️ END OF SEASON 2 ☀️"
  const title = isHindi ? "सूर्य ग्रहण" : isTelugu ? "సూర్య గ్రహణం" : "THE ECLIPSE OF SURYA"

  return (
    <section id="s2-arc-end" className="relative py-32 bg-black flex flex-col items-center text-center overflow-hidden">
      {/* Background Image Layer with Dark Gradient Masks */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.55]" 
          style={{ backgroundImage: "url('/Kalachakra-Documentary/Image/Season-2 Images/AshokaChakramUnlockWideShot.png')" }} 
        />
        {/* Dark radial and vertical gradients for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/35 to-black pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 75%, #000 100%)' }} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-10">
        <SuryaMandala size={700} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.6, ease: [0.34, 1.56, 0.64, 1] }} className="mb-10"><SuryaMandala size={90} /></motion.div>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-10" />
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="font-rajdhani text-[11px] tracking-[0.55em] text-gold/70 uppercase mb-5">{subtitle}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="font-cinzel-decorative text-4xl md:text-6xl font-bold text-white tracking-widest mb-12 px-6">{title}</motion.h2>
        <div className="flex flex-col items-center gap-1 max-w-xl px-6">
          {lines.map((l, i) =>
            !l.text ? <div key={i} className="h-4" /> : (
              <motion.p key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className={(l as { text: string; bold?: boolean }).bold ? 'font-cinzel text-gold text-xl md:text-2xl mt-4 tracking-wide' : 'font-im-fell text-cream/65 text-lg md:text-xl italic'}>
                {l.text}
              </motion.p>
            )
          )}
        </div>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1.2 }} className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mt-14" />
      </div>
    </section>
  )
}

// ─── Fixed Surya watermark ────────────────────────────────────────────────────
function FixedSuryaWatermark() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])
  if (!visible) return null
  return (
    <div className="fixed bottom-8 right-8 z-40 pointer-events-none" aria-hidden="true">
      <SuryaMandala size={44} opacity={0.22} />
    </div>
  )
}

// ─── Shloka Lock Section ──────────────────────────────────────────────────────
function ShlokaLockSection({
  onUnlock,
  unlocked,
  onLock,
  language,
}: {
  onUnlock: () => void
  unlocked: boolean
  onLock: () => void
  language: Language
}) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const TARGET_SHLOKA = "जयाय जयभद्राय हर्यश्वाय नमो नमः।\nनमो नमः सहस्रांशो आदित्याय नमो नमः॥"

  const clean = (str: string) => {
    return str.replace(/[\s\r\n\t।॥\.\,\-\_\?\'\"\‘\’\“\”\:\;\(\)\[\]\{\}]/g, '')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (clean(input) === clean(TARGET_SHLOKA)) {
      setError(false)
      onUnlock()
    } else {
      setError(true)
    }
  }

  const isHindi = language === 'hindi'
  const isTelugu = language === 'telugu'

  const labels = {
    title: isHindi ? "अशोक चक्रम् सील" : isTelugu ? "అశోక చక్రం సీల్" : "THE ASHOKA CHAKRAM SEAL",
    description: isHindi
      ? "अशोक चक्र अवरुद्ध है। प्राचीन गियरों को संरेखित करने और सूर्य के अंतिम ग्रहण को प्रकट करने के लिए, आपको पवित्र सक्रियण श्लोक का उच्चारण करना होगा।"
      : isTelugu
      ? "అశోక చక్రం లాక్ చేయబడింది. పురాతన గేర్‌లను సరిచేసి, సూర్యుని చివరి గ్రహణాన్ని వెల్లడించడానికి, మీరు పవిత్రమైన శ్లోకాన్ని పఠించాలి।"
      : "The Ashoka Chakram is locked. To align the ancient gears and reveal the final eclipse of Surya, you must chant the sacred activation shloka.",
    prompt: isHindi
      ? "यदि आप जानते हैं कि अनलॉक करने के लिए कौन सा श्लोक सही है तो बस यहाँ पेस्ट करें और अगला अनलॉक करें:"
      : isTelugu
      ? "లాక్ తెరవడానికి ఏ శ్లోకం సరైనదో మీకు తెలిస్తే ఇక్కడ పేస్ట్ చేసి తదుపరి దాన్ని అన్‌లాక్ చేయండి:"
      : "If you know what slokam is perfect to unlock just paste here and unlock the next:",
    placeholder: "जयाय जयभद्राय...",
    button: isHindi ? "चक्र संरेखित करें और अनलॉक करें" : isTelugu ? "చక్రాన్ని సరిచేసి అన్‌లాక్ చేయండి" : "Align Chakram & Unlock",
    hintTriggerShow: isHindi ? "संकेत चाहिए?" : isTelugu ? "హింట్ కావాలా?" : "Need a Hint?",
    hintTriggerHide: isHindi ? "संकेत छिपाएँ" : isTelugu ? "హింట్ దాచు" : "Hide Hint",
    hintText: isHindi
      ? "उस कक्ष की दीवारों को खोजें जहाँ अध्याय X (बुझती रोशनी) में सूर्य मणि का अनावरण किया गया था। पवित्र श्लोक गुफा की दीवारों पर उकेरा गया है..."
      : isTelugu
      ? "అధ్యాయం X (క్షీణిస్తున్న కాంతి) లో సూర్య మణి వెలికితీసిన గది గోడలపై వెతకండి. పవిత్ర శ్లోకం గుహ గోడలపై చెక్కబడి ఉంది..."
      : "Search the walls of the chamber where the Surya Gem was unveiled in Chapter X (The Failing Light). The sacred shloka is engraved on the cave walls...",
    error: isHindi
      ? "सील बंद रहती है। कंपन मेल नहीं खाता। पुनः प्रयास करें।"
      : isTelugu
      ? "లాక్ తెరుచుకోలేదు. శ్లోకం సరిపోలలేదు. మళ్లీ ప్రయత్నించండి."
      : "The seal remains shut. The vibration does not match. Try again.",
    success: isHindi
      ? "चक्र अनलॉक — प्रमाणीकरण स्वीकृत"
      : isTelugu
      ? "Chakram Unlocked — Authentication Accepted"
      : "Chakram Unlocked — Authentication Accepted",
    reset: isHindi ? "चक्र को फिर से लॉक करें" : isTelugu ? "చక్రాన్ని మళ్లీ లాక్ చేయి" : "Lock Chakram Again"
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 bg-black relative border-t border-gold/10 overflow-hidden">
      {/* Radiant glow effect in background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle 400px at center, rgba(232, 201, 106, 0.04) 0%, transparent 80%)'
        }}
      />
      
      <div className="max-w-xl w-full z-10 border border-gold/15 bg-ink/60 backdrop-blur-md p-8 rounded-lg shadow-[0_0_40px_rgba(200,168,75,0.05)] ornate-box text-center relative">
        <div className="absolute top-2 left-2 text-[10px] text-gold/30">⚜</div>
        <div className="absolute top-2 right-2 text-[10px] text-gold/30">⚜</div>
        <div className="absolute bottom-2 left-2 text-[10px] text-gold/30">⚜</div>
        <div className="absolute bottom-2 right-2 text-[10px] text-gold/30">⚜</div>

        <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white tracking-widest mb-3 flex items-center justify-center gap-2">
          <span className="animate-spin-slow text-gold text-lg">☀️</span>
          {labels.title}
          <span className="animate-spin-slow text-gold text-lg">☀️</span>
        </h3>
        
        <p className="font-im-fell text-cream/70 text-sm md:text-base italic mb-6 leading-relaxed">
          {labels.description}
        </p>

        {!unlocked ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="text-left">
              <label className="block font-rajdhani text-[11px] font-bold tracking-[0.2em] text-gold/80 uppercase mb-2">
                {labels.prompt}
              </label>
              <textarea
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                  if (error) setError(false)
                }}
                rows={3}
                placeholder={labels.placeholder}
                className="w-full bg-black/80 border border-gold/20 rounded-md p-3 font-cinzel text-white text-base focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/60 transition-all placeholder-white/20 resize-none text-center leading-relaxed"
              />
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="font-im-fell text-xs text-red-500 italic"
              >
                {labels.error}
              </motion.p>
            )}

            <button
              type="submit"
              className="mt-2 w-full py-3 px-6 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 hover:from-gold/20 hover:via-gold/30 hover:to-gold/20 border border-gold/30 hover:border-gold/60 text-gold-bright hover:text-white font-rajdhani font-bold tracking-[0.2em] uppercase rounded transition-all text-xs duration-300 shadow-[0_0_15px_rgba(200,168,75,0.05)] active:scale-[0.98]"
            >
              {labels.button}
            </button>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="font-rajdhani text-[10px] tracking-[0.15em] text-white/40 hover:text-gold uppercase transition-colors"
              >
                {showHint ? labels.hintTriggerHide : labels.hintTriggerShow}
              </button>
              
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="font-im-fell text-xs text-gold/60 italic bg-gold/[0.02] border border-gold/10 p-3 rounded text-center leading-relaxed">
                      {labels.hintText}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-4"
          >
            <div className="w-12 h-12 rounded-full border border-green-500/30 bg-green-950/20 flex items-center justify-center text-green-400 text-xl shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              ✓
            </div>
            <p className="font-cinzel text-green-400 text-sm tracking-widest uppercase">
              {labels.success}
            </p>
            <button
              onClick={onLock}
              className="font-rajdhani text-[9px] tracking-[0.15em] text-white/30 hover:text-white/60 uppercase transition-colors mt-2"
            >
              {labels.reset}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// ─── Main Season 2 Page ───────────────────────────────────────────────────────
export function Season2Page({ language }: Props) {
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    // Reset unlock status on page refresh/load so user has to enter it again
    localStorage.setItem('s2-climax-unlocked', 'false')
  }, [])

  const handleUnlock = () => {
    setUnlocked(true)
    localStorage.setItem('s2-climax-unlocked', 'true')
  }

  const handleLock = () => {
    setUnlocked(false)
    localStorage.setItem('s2-climax-unlocked', 'false')
  }

  return (
    <div className="bg-black text-off-white relative">
      <S2OpeningHero />

      {season2Chapters.map((chapter, index) => (
        <S2ChapterSection
          key={chapter.id}
          chapter={chapter}
          index={index}
          language={language}
          showDivider={index < season2Chapters.length - 1}
        />
      ))}

      <ShlokaLockSection 
        unlocked={unlocked} 
        language={language}
        onUnlock={handleUnlock} 
        onLock={handleLock}
      />

      <AnimatePresence>
        {unlocked && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <ArcEndSection language={language} />
          </motion.div>
        )}
      </AnimatePresence>

      <FixedSuryaWatermark />
    </div>
  )
}

export default Season2Page

