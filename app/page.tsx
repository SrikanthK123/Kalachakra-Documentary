'use client'

import { useState } from 'react'
import { NavBar } from '@/components/ui/NavBar'
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

export default function Page() {
  const [language, setLanguage] = useState<'english' | 'hindi' | 'telugu'>('english')
  const [hasEntered, setHasEntered] = useState(false)

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
      {/* Dynamic Utilities Layer */}
      <NavBar currentLanguage={language} onLanguageChange={setLanguage} />
      <CustomCursor />
      <AmbientAudio />

      {/* 1. Hero & Prologue Initial Scroll */}
      <HeroSection language={language} />
      <PrologueSection language={language} />

      {/* 2. Chapters and Story Flow */}
      {chapters.map((ch, i) => {
        const elements = []

        // Render the main chapter component
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

        // Insert special visual sections after specific chapters
        if (ch.id === 'ch2') {
          elements.push(<CompassSection key="compass-section" />)
        }
        if (ch.id === 'ch9-10') {
          elements.push(<BreakingNewsSection key="breaking-news" />)
        }
        if (ch.id === 'world_changes') {
          elements.push(<AsteroidSection key="asteroid-section" />)
        }
        if (ch.id === 'ch11') {
          elements.push(<OtherWorldSection key="other-world" />)
        }

        return elements
      })}

      {/* 3. OutroCTA */}
      <OutroSection />
    </main>
  )
}
