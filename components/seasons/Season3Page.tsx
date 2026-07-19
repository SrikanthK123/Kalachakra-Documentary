'use client'

/**
 * Season 3 — The Hidden Entrance
 * Replicates the premium scrollable layout from Season 2, incorporating
 * alternating story sections, cursor-follow spotlights, 2K lightboxes,
 * and a cinematic "To Be Continued..." ending section.
 */

import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion'
import { season3Chapters, type S3ChapterData, type S3Line } from '@/lib/season3Data'
import { ChapterArt } from '@/components/chapters/ChapterArt'
import { SuryaMandala } from '@/components/seasons/Season2Page'

type Language = 'english' | 'hindi' | 'telugu'
interface Props { language: Language }

// Map Season 3 chapters to their context-specific ChapterArt types
const getArtTypeForChapter = (id: string) => {
  switch (id) {
    case 's3-ch1':
    case 's3-ch2':
      return 'descent'
    case 's3-ch3':
      return 'cave'
    case 's3-ch4':
    case 's3-ch5':
    case 's3-ch6':
      return 'otherWorld'
    case 's3-ch7':
    case 's3-ch9':
      return 'temple'
    case 's3-ch8':
      return 'otherVara'
    case 's3-ch10':
      return 'news'
    case 's3-ch11':
      return 'shiftedCity'
    case 's3-ch12':
      return 'balanceWarning'
    default:
      return 'mandala'
  }
}

// Map Season 3 chapters to their matching atmosphere themes
const getAtmosphereForChapter = (id: string): 'normal' | 'fire' | 'cosmic' | 'danger' => {
  switch (id) {
    case 's3-ch1':
    case 's3-ch3':
    case 's3-ch5':
    case 's3-ch8':
      return 'normal'
    case 's3-ch4':
    case 's3-ch6':
    case 's3-ch9':
    case 's3-ch12':
      return 'cosmic'
    case 's3-ch7':
      return 'fire'
    case 's3-ch2':
    case 's3-ch10':
    case 's3-ch11':
      return 'danger'
    default:
      return 'normal'
  }
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

// ─── Season 3 Opening Hero ────────────────────────────────────────────────────
function S3OpeningHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black opacity-80" 
          style={{ backgroundImage: "url('/Kalachakra-Documentary/Image/New folder/KalachakramS3-1.png')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
      </motion.div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.85) 100%)' }} />
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
          SEASON-3
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} 
          className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest leading-tight flex flex-col items-center gap-3"
        >
          <span style={{ textShadow: '0 4px 12px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.7)' }}>KALACHAKRA</span>
          <span className="text-xl md:text-3xl lg:text-4xl font-cinzel-decorative font-semibold tracking-[0.3em] mt-1" style={{ color: '#e8c96a', textShadow: '0 0 20px rgba(232,201,106,0.65), 0 4px 10px rgba(0,0,0,0.9)' }}>
            THE HIDDEN ENTRANCE
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
          The descent begins. A broken bridge, a mystical barrier, and the Cave of Lord Rama await.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="font-rajdhani text-[9px] tracking-[0.4em] text-white/25 uppercase">Scroll to descend</p>
          <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} className="w-[1px] h-8 bg-gradient-to-b from-gold/40 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  )
}

// ─── Season 3 Chapter Section Divider ─────────────────────────────────────────
function S3SectionDivider({ accentColor }: { accentColor: string }) {
  return (
    <div className="w-full flex items-center justify-center my-8 py-4 md:my-16 md:py-8 relative overflow-hidden select-none">
      <div className="w-24 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-gold" style={{ backgroundImage: `linear-gradient(to right, transparent, ${accentColor}40, ${accentColor})` }} />
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="mx-6 text-2xl relative flex items-center justify-center cursor-default group"
        style={{ color: accentColor }}
      >
        <span className="animate-spin-slow duration-[35s] group-hover:scale-110 transition-all filter drop-shadow-[0_0_8px_rgba(232,201,106,0.45)]">☸</span>
        <span className="absolute w-6 h-6 rounded-full blur-sm -z-10 animate-pulse" style={{ backgroundColor: `${accentColor}20` }} />
      </motion.div>
      <div className="w-24 md:w-48 h-[1px] bg-gradient-to-l from-transparent via-gold/40 to-gold" style={{ backgroundImage: `linear-gradient(to left, transparent, ${accentColor}40, ${accentColor})` }} />
    </div>
  )
}

// ─── Season 3 Chapter Section (Alternating scroll layout) ────────────────────
interface ChapterSectionProps {
  chapter: S3ChapterData
  index: number
  language: Language
  showDivider: boolean
}

function S3ChapterSection({ chapter, index, language, showDivider }: ChapterSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Cursor-follow spotlight reveals for specific key chapters
  const ch1MouseX = useMotionValue(0)
  const ch1MouseY = useMotionValue(0)
  const ch1Mask = useMotionTemplate`radial-gradient(550px circle at ${ch1MouseX}px ${ch1MouseY}px, black 0%, transparent 100%)`

  const ch6MouseX = useMotionValue(0)
  const ch6MouseY = useMotionValue(0)
  const ch6Mask = useMotionTemplate`radial-gradient(550px circle at ${ch6MouseX}px ${ch6MouseY}px, black 0%, transparent 100%)`

  const ch9MouseX = useMotionValue(0)
  const ch9MouseY = useMotionValue(0)
  const ch9Mask = useMotionTemplate`radial-gradient(550px circle at ${ch9MouseX}px ${ch9MouseY}px, black 0%, transparent 100%)`

  const ch12MouseX = useMotionValue(0)
  const ch12MouseY = useMotionValue(0)
  const ch12Mask = useMotionTemplate`radial-gradient(550px circle at ${ch12MouseX}px ${ch12MouseY}px, black 0%, transparent 100%)`

  const isChapter1 = chapter.id === 's3-ch1'
  const isChapter6 = chapter.id === 's3-ch6'
  const isChapter9 = chapter.id === 's3-ch9'
  const isChapter12 = chapter.id === 's3-ch12'

  const BG_IMAGE_1 = "url('/Kalachakra-Documentary/Image/New folder/KalachakramS3-2 (2).png')"
  const BG_IMAGE_6 = "url('/Kalachakra-Documentary/Image/New folder/KalachakramS3-13.png')"
  const BG_IMAGE_9 = "url('/Kalachakra-Documentary/Image/New folder/KalachakramS3-19.png')"
  const BG_IMAGE_12 = "url('/Kalachakra-Documentary/Image/New folder/KalachakramS3-25.png')"

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
    if (isChapter1) { ch1MouseX.set(x); ch1MouseY.set(y) }
    if (isChapter6) { ch6MouseX.set(x); ch6MouseY.set(y) }
    if (isChapter9) { ch9MouseX.set(x); ch9MouseY.set(y) }
    if (isChapter12) { ch12MouseX.set(x); ch12MouseY.set(y) }
  }

  const isArtLeft = index % 2 === 0
  const artType = getArtTypeForChapter(chapter.id)
  const atmosphere = getAtmosphereForChapter(chapter.id)
  const filter = chapter.cssFilter || 'none'

  const flashlightStyle = isHovered
    ? {
        background: `radial-gradient(circle 380px at ${mousePos.x}px ${mousePos.y}px, rgba(10, 8, 6, 0.12) 0%, rgba(10, 8, 6, 0.88) 55%, rgba(10, 8, 6, 0.98) 85%, #0a0806 100%)`,
      }
    : {
        background: `radial-gradient(circle at center, rgba(10, 8, 6, 0.85) 0%, #0a0806 100%)`,
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
      {/* Background layers — key chapters use interactive spotlight masking */}
      {isChapter1 ? (
        <>
          <div
            className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-[0.14]"
            style={{
              backgroundImage: BG_IMAGE_1,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
          />
          <motion.div
            className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-65"
            style={{
              backgroundImage: BG_IMAGE_1,
              mixBlendMode: 'screen',
              maskImage: ch1Mask,
              WebkitMaskImage: ch1Mask,
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/35 to-black/90 pointer-events-none" />
        </>
      ) : isChapter6 ? (
        <>
          <div
            className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-[0.14]"
            style={{
              backgroundImage: BG_IMAGE_6,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
          />
          <motion.div
            className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-65"
            style={{
              backgroundImage: BG_IMAGE_6,
              mixBlendMode: 'screen',
              maskImage: ch6Mask,
              WebkitMaskImage: ch6Mask,
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/35 to-black/90 pointer-events-none" />
        </>
      ) : isChapter9 ? (
        <>
          <div
            className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-[0.14]"
            style={{
              backgroundImage: BG_IMAGE_9,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
          />
          <motion.div
            className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-65"
            style={{
              backgroundImage: BG_IMAGE_9,
              mixBlendMode: 'screen',
              maskImage: ch9Mask,
              WebkitMaskImage: ch9Mask,
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/35 to-black/90 pointer-events-none" />
        </>
      ) : isChapter12 ? (
        <>
          <div
            className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-[0.14]"
            style={{
              backgroundImage: BG_IMAGE_12,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
          />
          <motion.div
            className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-65"
            style={{
              backgroundImage: BG_IMAGE_12,
              mixBlendMode: 'screen',
              maskImage: ch12Mask,
              WebkitMaskImage: ch12Mask,
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/35 to-black/90 pointer-events-none" />
        </>
      ) : (
        <>
          {/* Default background layer */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 opacity-[0.22]"
            style={{
              backgroundImage: `url('${chapter.imagePath}')`,
              filter: `${filter} blur(4px)`,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
          />
          <div
            className="absolute inset-0 z-10 transition-all duration-300 pointer-events-none"
            style={flashlightStyle}
          />
        </>
      )}

      {/* Large background roman numeral watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cinzel text-[11vw] font-black tracking-widest pointer-events-none uppercase whitespace-nowrap z-20 select-none"
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
        {/* ChapterArt Image Card Container (Alternating) */}
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
          </div>
        </div>

        {/* Content Prose Container */}
        <div className={`w-full flex flex-col gap-6 text-left ${isArtLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="flex flex-col gap-1">
            <span className="inline-flex items-center gap-1.5 font-rajdhani text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: chapter.accentColor }}>
              <span className="text-[10px] animate-spin-slow inline-block">☸</span> {displayLabel}
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

          <div className="flex flex-col gap-4 font-im-fell text-base md:text-lg text-parchment/85 leading-relaxed italic font-light">
            {chapter.lines.map((line, lineIdx) => {
              if (line.type === 'pause' || line.type === 'highlight') return null

              const displayLineText = (isLanguageNotEnglish && translation?.lines?.[lineIdx])
                ? translation.lines[lineIdx]
                : line.text

              const isEmphasis = line.type === 'emphasis'
              return (
                <p
                  key={lineIdx}
                  className={isEmphasis ? "font-cinzel text-lg md:text-xl tracking-wide font-semibold text-center mt-2" : ""}
                  style={isEmphasis ? { color: chapter.accentColor, textShadow: `0 0 15px ${chapter.accentColor}44` } : {}}
                >
                  {displayLineText}
                </p>
              )
            })}
          </div>

          {displayHighlight && (
            <div className="border-l-[3px] bg-gold/[0.03] pl-5 py-3 pr-4 rounded-r-md mt-2" style={{ borderColor: chapter.accentColor }}>
              <p className="font-im-fell text-sm md:text-base tracking-wide italic font-medium text-cream/90">
                {displayHighlight}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {showDivider && <S3SectionDivider accentColor={chapter.accentColor} />}
    </section>
  )
}

// ─── Cinematic Ending Section ────────────────────────────────────────────────
function S3EndingSection({ language }: { language: Language }) {
  const isHindi = language === 'hindi'
  const isTelugu = language === 'telugu'

  const subtitle = isHindi ? "☀️ सीजन 3 क्लाइमेक्स ☀️" : isTelugu ? "☀️ సీజన్ 3 క్లైమాక్స్ ☀️" : "☀️ SEASON 3 CLIMAX ☀️"
  const title = isHindi ? "अज्ञात का आगमन" : isTelugu ? "తెలియని వ్యక్తి ఆగమనం" : "THE UNKNOWN ARRIVAL"

  const endingParagraphs = [
    {
      text: isHindi
        ? "वारा गिरी हुई चट्टानों के नीचे बेहोश पड़ा है... सूर्य मणि उसके हाथ से फिसलकर गुफा के फर्श पर धीमी रोशनी बिखेर रही है।"
        : isTelugu
        ? "కూలిపోయిన బండరాళ్ల క్రింద వారా స్పృహ లేకుండా పడి ఉన్నాడు... సూర్య మణి అతని పక్కన నిశ్శబ్దంగా వెలుగుతోంది."
        : "Vara lies unconscious beneath the fallen rocks... The Surya Gem glows faintly beside him."
    },
    {
      text: isHindi
        ? "तभी अंधेरे में भारी कदमों की आवाज गूंजती है। एक रहस्यमयी अजनबी वारा के करीब पहुंचता है।"
        : isTelugu
        ? "అప్పుడే చీకట్లో భారమైన అడుగుజాడల శబ్దం వినిపిస్తుంది. ఒక రహస్య వ్యక్తి వారా వైపు నడుస్తూ వస్తాడు."
        : "Then, heavy footsteps echo through the chamber. A mysterious figure slowly approaches."
    },
    {
      text: isHindi
        ? "जैसे ही वह कदम रोकता है, सूर्य मणि और तेजी से चमकने लगती है... जैसे वह उस अजनबी को पहचानती हो।"
        : isTelugu
        ? "ఆ వ్యక్తి ఆగిపోగానే, సూర్య మణి మరింత కాంతివంతంగా వెలుగుతుంది... ఆ వ్యక్తిని అది గుర్తుపట్టినట్లుగా."
        : "As the figure stops, the Surya Gem begins glowing brighter, as though recognizing the newcomer."
    },
    {
      text: isHindi ? "कहानी अभी समाप्त नहीं हुई है।" : isTelugu ? "కథ ఇంకా ముగియలేదు." : "The cycle continues. The mystery deepens.",
      italic: true
    },
    {
      text: isHindi ? "जारी रहेगा..." : isTelugu ? "ఇంకా ఉంది..." : "TO BE CONTINUED...",
      bold: true
    }
  ]

  return (
    <section className="relative py-32 bg-black flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.5]" 
          style={{ backgroundImage: "url('/Kalachakra-Documentary/Image/New folder/KalachakramS3-25.png')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/45 to-black pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 75%, #000 100%)' }} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-10">
        <SuryaMandala size={700} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.6 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1.6, ease: 'easeOut' }} 
          className="mb-10"
        >
          <SuryaMandala size={90} />
        </motion.div>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-10" />
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="font-rajdhani text-[11px] tracking-[0.55em] text-gold/70 uppercase mb-5">{subtitle}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="font-cinzel-decorative text-4xl md:text-6xl font-bold text-white tracking-widest mb-12 px-6">{title}</motion.h2>
        
        <div className="flex flex-col items-center gap-3.5 max-w-2xl px-6">
          {endingParagraphs.map((l, i) => (
            <motion.p 
              key={i} 
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.8 }} 
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={l.bold 
                ? 'font-cinzel text-gold text-2xl md:text-3xl mt-6 tracking-[0.2em] font-bold animate-pulse' 
                : l.italic 
                  ? 'font-im-fell text-gold/70 text-lg md:text-xl italic mt-3' 
                  : 'font-im-fell text-cream/70 text-lg md:text-xl italic'}
            >
              {l.text}
            </motion.p>
          ))}
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

// ─── Main Season 3 Page ───────────────────────────────────────────────────────
export function Season3Page({ language }: Props) {
  return (
    <div className="bg-black text-off-white relative">
      <S3OpeningHero />

      {season3Chapters.map((chapter, index) => (
        <S3ChapterSection
          key={chapter.id}
          chapter={chapter}
          index={index}
          language={language}
          showDivider={index < season3Chapters.length - 1}
        />
      ))}

      <S3EndingSection language={language} />

      <FixedSuryaWatermark />
    </div>
  )
}

export default Season3Page
