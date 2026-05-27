'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Chapter } from '@/types/story'
import { ChapterArt } from '../chapters/ChapterArt'
import { SectionDivider } from '../ui/SectionDivider'

interface ChapterSectionProps {
  chapter: Chapter
  index: number
  showDivider?: boolean
  language?: 'english' | 'hindi' | 'telugu'
}

export function ChapterSection({ 
  chapter, 
  index, 
  showDivider = true,
  language = 'english'
}: ChapterSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  // Alternating configurations based on section index
  const isArtLeft = index % 2 === 0
  const bgImages = [
    '/Kalachakra-Documentary/Image/CaveGods1.png',
    '/Kalachakra-Documentary/Image/CaveGods2.png',
    '/Kalachakra-Documentary/Image/AllGodsViewWithVara.png',
    '/Kalachakra-Documentary/Image/AllGodsInCave2.png'
  ]
  const bgImage = bgImages[index % bgImages.length]

  const flashlightStyle = isHovered
    ? {
        background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(10, 8, 6, 0.15) 0%, rgba(10, 8, 6, 0.85) 50%, rgba(10, 8, 6, 0.98) 85%, #0a0806 100%)`,
      }
    : {
        background: `radial-gradient(circle at center, rgba(10, 8, 6, 0.82) 0%, #0a0806 100%)`,
        transition: 'background 0.8s ease-in-out',
      }

  // Dynamic multilingual translation layers
  const displayTitle = language === 'english'
    ? chapter.title
    : (chapter.translations?.[language]?.title || chapter.title)

  const displayNumber = language === 'english'
    ? chapter.number
    : (chapter.translations?.[language]?.number || chapter.number)

  const displayBody = language === 'english'
    ? chapter.body
    : (chapter.translations?.[language]?.body || chapter.body)

  const displayHighlight = language === 'english'
    ? chapter.highlight
    : (chapter.translations?.[language]?.highlight !== undefined
        ? chapter.translations?.[language]?.highlight
        : chapter.highlight)

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

  return (
    <section
      ref={containerRef}
      id={chapter.id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full py-20 px-6 md:px-12 bg-deep flex flex-col items-center justify-center overflow-hidden select-none`}
    >
      {/* Background Image Layer with Gradient Mask */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ 
          backgroundImage: `url('${bgImage}')`,
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      />
      
      {/* Flashlight Mask Overlay */}
      <div 
        className="absolute inset-0 z-10 transition-all duration-300 pointer-events-none"
        style={flashlightStyle}
      />

      {/* Translucent background Ghost Number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cinzel text-[11vw] font-black text-gold/[0.04] tracking-widest pointer-events-none uppercase whitespace-nowrap z-20">
        {displayNumber}
      </div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-6xl w-full z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* SVG Illustration Container - Alternating Position */}
        <div className={`w-full flex justify-center ${isArtLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="w-full max-w-[400px] border border-gold/15 bg-ink/40 p-6 rounded-lg shadow-[0_0_30px_rgba(200,168,75,0.03)] ornate-box">
            <ChapterArt 
              artType={chapter.artType} 
              image={chapter.image}
              hoverImage={chapter.hoverImage}
              extraImages={chapter.extraImages}
              atmosphere={chapter.atmosphere}
              chapterTitle={displayTitle}
              chapterNumber={displayNumber}
            />
          </div>
        </div>

        {/* Content Prose Container - Alternating Position */}
        <div className={`w-full flex flex-col gap-6 text-left ${isArtLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          {/* Chapter tag label */}
          <div className="flex flex-col gap-1">
            <span className="font-rajdhani text-[11px] font-bold tracking-[0.3em] text-gold uppercase">
              {displayNumber}
            </span>
            <h3 className="font-cinzel text-2xl md:text-3xl font-semibold text-white tracking-wider leading-tight">
              {displayTitle}
            </h3>
          </div>

          {/* Paragraphs prose */}
          <div className="flex flex-col gap-4 font-im-fell text-base md:text-lg text-parchment/85 leading-relaxed italic font-light">
            {displayBody.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>

          {/* Optional Pull-quote Highlight block */}
          {displayHighlight && (
            <div className="border-l-[3px] border-gold-bright bg-gold/[0.03] pl-5 py-3 pr-4 rounded-r-md">
              <p className="font-im-fell text-sm md:text-base text-gold-bright tracking-wide italic font-medium">
                {displayHighlight}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Chapter completion divider */}
      {showDivider && <SectionDivider />}
    </section>
  )
}
export default ChapterSection
