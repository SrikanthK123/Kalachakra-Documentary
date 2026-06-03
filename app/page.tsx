'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavBar, type Season } from '@/components/ui/NavBar'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { AmbientAudio } from '@/components/ui/AmbientAudio'
import { HeroSection } from '@/components/sections/HeroSection'
import { PrologueSection } from '@/components/sections/PrologueSection'
import { ChapterSection } from '@/components/sections/ChapterSection'
import { CompassSection } from '@/components/sections/CompassSection'
import { AsteroidSection } from '@/components/sections/AsteroidSection'
import { BreakingNewsSection } from '@/components/sections/BreakingNewsSection'
import { OtherWorldSection } from '@/components/sections/OtherWorldSection'
import { ClimaxSection } from '@/components/sections/ClimaxSection'
import { EpilogueSection } from '@/components/sections/EpilogueSection'
import { OutroSection } from '@/components/sections/OutroSection'
import { chapters } from '@/lib/chapterData'
import { SplashScreen } from '@/components/ui/SplashScreen'
import { Season2Page } from '@/components/seasons/Season2Page'

export default function Page() {
  const [language, setLanguage] = useState<'english' | 'hindi' | 'telugu'>('english')
  const [hasEntered, setHasEntered] = useState(false)
  const [currentSeason, setCurrentSeason] = useState<Season>('S1')

  if (!hasEntered) {
    return (
      <main className="relative bg-black w-full min-h-screen">
        <CustomCursor />
        <SplashScreen onComplete={() => setHasEntered(true)} />
      </main>
    )
  }

  return (
    <main className="relative bg-deep text-off-white selection:bg-rust selection:text-white w-full min-h-screen">
      {/* ── Shared utilities (always visible) ── */}
      <NavBar
        currentLanguage={language}
        onLanguageChange={setLanguage}
        currentSeason={currentSeason}
        onSeasonChange={setCurrentSeason}
      />
      <CustomCursor />
      <AmbientAudio />

      {/* ── Season-conditional content ── */}
      <AnimatePresence mode="wait">
        {currentSeason === 'S1' ? (
          <motion.div
            key="season1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 1. Hero & Prologue */}
            <HeroSection language={language} />
            <PrologueSection language={language} />

            {/* 2. Chapters and story flow */}
            {chapters.map((ch, i) => {
              const elements = []

              if (ch.id === 'ch23') {
                elements.push(<EpilogueSection key={ch.id} language={language} />)
              } else if (ch.id === 'climax') {
                elements.push(
                  <ChapterSection key={ch.id} chapter={ch} index={i} language={language} showDivider={false} />
                )
                elements.push(<ClimaxSection key="climax-special" />)
              } else {
                elements.push(
                  <ChapterSection key={ch.id} chapter={ch} index={i} language={language} showDivider={ch.id !== 'ch22'} />
                )
              }

              if (ch.id === 'ch2')          elements.push(<CompassSection key="compass-section" />)
              if (ch.id === 'ch9-10')       elements.push(<BreakingNewsSection key="breaking-news" />)
              if (ch.id === 'world_changes') elements.push(<AsteroidSection key="asteroid-section" />)
              if (ch.id === 'ch11')         elements.push(<OtherWorldSection key="other-world" />)

              return elements
            })}

            {/* 3. Outro CTA */}
            <OutroSection />
          </motion.div>
        ) : (
          <motion.div
            key="season2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16" // offset for fixed navbar
          >
            <Season2Page language={language} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
