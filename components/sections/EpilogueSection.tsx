'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { chapters } from '@/lib/chapterData'
import { SectionDivider } from '../ui/SectionDivider'

interface EpilogueSectionProps {
  language: 'english' | 'hindi' | 'telugu'
}

export function EpilogueSection({ language }: EpilogueSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  
  // Find the original epilogue chapter data to extract translations dynamically
  const epilogueChapter = chapters.find(ch => ch.id === 'ch23')
  
  // Localized title & UI labels
  const uiTexts = {
    english: {
      chapterLabel: 'CHAPTER XXIII',
      chapterTitle: 'EPILOGUE',
      subtitle: 'A Hidden Truth',
      scrollerTitle: 'THE STORY SO FAR',
      instruction: 'Move cursor to illuminate the ancient Sanskrit inscription',
      summaryTitle: 'CINEMATIC SYNOPSIS',
      summary: 'A few days after the temple chamber\'s collapse, a newly exposed ancient Sanskrit inscription reveals that whoever activates the Kalachakra\'s divine mechanism will bear the mark of Garuda and be protected from death. In a dark, distant cave, the protagonist Vara is revealed to have survived the cosmic explosion. As the Kalachakra Compass awakens once more, the faint Garuda tattoo on his palm pulses with golden light, confirming that he has transcended humanity to become a powerful, immortal guardian between worlds, accompanied by the echoing whisper: "Dharma protects those who protect it."',
    },
    hindi: {
      chapterLabel: 'अध्याय XXIII',
      chapterTitle: 'उपसंहार',
      subtitle: 'छिपा हुआ सच',
      scrollerTitle: 'अब तक की कहानी',
      instruction: 'प्राचीन संस्कृत शिलालेख को रोशन करने के लिए कर्सर घुमाएं',
      summaryTitle: 'सिनेमाई सारांश',
      summary: 'मंदिर के कक्ष के ढहने के कुछ दिनों बाद, एक नया खोजा गया प्राचीन संस्कृत शिलालेख प्रकट करता है कि जो कोई भी कालचक्र के दिव्य तंत्र को सक्रिय करेगा, वह गरुड़ का चिह्न धारण करेगा और मृत्यु से सुरक्षित रहेगा। एक अंधेरी, सुदूर गुफा में, यह पता चलता है कि वारा उस ब्रह्मांडीय विस्फोट में जीवित बच गया था। जैसे ही कालचक्र कम्पास फिर से जागृत होता है, उसकी हथेली पर बना धुंधला गरुड़ टैटू सुनहरी रोशनी से धड़कने लगता है, जिससे यह पुष्टि होती है कि वह मानवता से परे जाकर दुनिया के बीच एक शक्तिशाली, अमर रक्षक बन गया है, और एक फुसफुसाहट गूँजती है: "धर्मो रक्षति रक्षितः" (धर्म उसकी रक्षा करता है जो धर्म की रक्षा करता है)।',
    },
    telugu: {
      chapterLabel: 'అధ్యాయం XXIII',
      chapterTitle: 'ఉపసంహారం',
      subtitle: 'దాగి ఉన్న సత్యం',
      scrollerTitle: 'ఇప్పటివరకు కథ',
      instruction: 'పురాతన సంస్కృత శాసనాన్ని వెలిగించడానికి కర్సర్‌ను కదిలించండి',
      summaryTitle: 'సినీ సారాంశం',
      summary: 'ఆలయ గది కూలిపోయిన కొన్ని రోజుల తర్వాత, కొత్తగా బయటపడిన ఒక పురాతన సంస్కృత శాసనం ప్రకారం కాలచక్ర దైవిక యంత్రాంగాన్ని క్రియాశీలం చేసే ప్రతి ఒక్కరూ గరుడ చిహ్నాన్ని కలిగి ఉంటారని మరియు మరణం నుండి రక్షించబడతారని వెల్లడిస్తుంది. ఒక చీకటి, సుదూర గుహలో వారా ఆ విశ్వ మహాస్ఫోటం నుండి బతికినట్లు వెల్లడవుతుంది. కాలచక్ర దిక్సూచి మళ్లీ మేల్కొనడంతో, అతని అరచేతిలోని మసక గరుడ పచ్చబొట్టు బంగారు కాంతితో స్పందిస్తుంది, అతను మానవాతీతంగా మారి లోకాల మధ్య ఒక శక్తివంతమైన, అమర రక్షకుడిగా రూపాంతరం చెందాడని నిర్ధారిస్తుంది, ఆపై ఒక గుసగుస ప్రతిధ్వనిస్తుంది: "ధర్మో రక్షతి రక్షితః" (ధర్మాన్ని రక్షించే వారిని ధర్మం రక్షిస్తుంది).',
    }
  }

  const activeUI = uiTexts[language] || uiTexts.english
  
  // Extract correct chapter details based on language
  const chapterDetails = (() => {
    if (!epilogueChapter) return null
    if (language === 'hindi' && epilogueChapter.translations?.hindi) {
      return {
        number: epilogueChapter.translations.hindi.number,
        title: epilogueChapter.translations.hindi.title,
        body: epilogueChapter.translations.hindi.body,
        highlight: epilogueChapter.translations.hindi.highlight
      }
    }
    if (language === 'telugu' && epilogueChapter.translations?.telugu) {
      return {
        number: epilogueChapter.translations.telugu.number,
        title: epilogueChapter.translations.telugu.title,
        body: epilogueChapter.translations.telugu.body,
        highlight: epilogueChapter.translations.telugu.highlight
      }
    }
    return {
      number: epilogueChapter.number,
      title: epilogueChapter.title,
      body: epilogueChapter.body,
      highlight: epilogueChapter.highlight
    }
  })()

  // Mouse Move Event Listener
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  // Smooth Auto-Scrolling Effect for cinematic scroll
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let animationFrameId: number
    let scrollPos = 0
    const scrollSpeed = 0.45 // smooth majestic crawl speed

    const scroll = () => {
      if (!scroller) return
      scrollPos += scrollSpeed
      // Reset scroll if it reaches the end
      if (scrollPos >= scroller.scrollHeight - scroller.clientHeight) {
        scrollPos = 0
      }
      scroller.scrollTop = scrollPos
      animationFrameId = requestAnimationFrame(scroll)
    }

    // Delay start of auto-scroll slightly for entrance transitions
    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll)
    }, 1500)

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(timer)
    }
  }, [language])

  // Custom radial gradient for flashlight effect overlay
  const flashlightStyle = isHovered
    ? {
        background: `radial-gradient(circle 260px at ${mousePos.x}px ${mousePos.y}px, rgba(10, 8, 6, 0.05) 0%, rgba(10, 8, 6, 0.88) 45%, rgba(10, 8, 6, 0.98) 85%, #0a0806 100%)`,
      }
    : {
        background: `radial-gradient(circle at center, rgba(10, 8, 6, 0.82) 0%, #0a0806 100%)`,
        transition: 'background 0.8s ease-in-out',
      }

  return (
    <section
      ref={sectionRef}
      id="epilogue-interactive"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-screen py-24 px-6 bg-deep flex flex-col items-center justify-between overflow-hidden select-none"
    >
      
      {/* 1. Flashlight Background Layer with Gradient Mask */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ 
          backgroundImage: `url('/Kalachakra-Documentary/Image/SankritSlokamWideView.png')`,
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      />
      
      {/* 2. Interactive Mask Overlay Layer */}
      <div 
        className="absolute inset-0 z-10 transition-all duration-300 pointer-events-none"
        style={flashlightStyle}
      />

      {/* 3. Ambient Fog and Dust Particle Effects */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-color-dodge bg-[radial-gradient(circle_at_bottom,rgba(139,58,31,0.15),transparent_60%)] animate-pulse-glow" />

      {/* 4. Overlay Content Layer */}
      <div className="relative z-20 max-w-5xl w-full flex flex-col items-center gap-12 text-center pointer-events-none">
        
        {/* Header Title with Glowing Gold shadow */}
        <div className="flex flex-col items-center gap-1 pointer-events-auto">
          <span className="font-rajdhani text-[11px] font-bold tracking-[0.4em] text-gold-bright uppercase animate-pulse">
            {activeUI.chapterLabel}
          </span>
          <h3 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(232,201,106,0.35)]">
            {activeUI.chapterTitle}
          </h3>
          <span className="font-im-fell text-lg text-parchment italic opacity-85">
            {activeUI.subtitle}
          </span>
        </div>

        {/* Hover Hint Instruction */}
        <div className="font-rajdhani text-[9px] md:text-[10px] tracking-[0.3em] text-cream/40 uppercase bg-deep/60 px-4 py-2 border border-gold/15 rounded-full backdrop-blur-sm pointer-events-auto">
          {activeUI.instruction}
        </div>

        {/* Interactive Center Sanskrit Slokam Inscription Board */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-[850px] border border-gold/25 bg-[#0e0c0a]/85 backdrop-blur-[6px] p-8 md:p-12 rounded-xl shadow-[inset_0_0_40px_rgba(200,168,75,0.06),0_0_80px_rgba(0,0,0,0.8)] border-double flex flex-col items-center justify-center gap-6 pointer-events-auto"
        >
          {/* Sanskrit Header Inscription */}
          <div className="font-cinzel text-base md:text-xl font-bold text-gold tracking-widest uppercase mb-1 opacity-75">
            INSCRIPTION ON STONE
          </div>
          
          <div className="font-cinzel text-lg md:text-2xl font-bold text-cream tracking-wider leading-relaxed px-4 max-w-3xl border-y border-gold/20 py-6 my-2 shadow-[0_0_30px_rgba(232,201,106,0.05)] text-center font-light">
            “यः कालचक्रयन्त्रं स्पृशति। यः दिव्यबटनं जागरूकं करोति। गरुडचिह्नं तस्य हस्ते प्रकटते। यावत् पुनः कालचक्रं न जाग्रति। तावत् मृत्युस्तं न स्पृशति।”
          </div>

          {/* Chapter Narrative Text Block */}
          {chapterDetails && (
            <div className="flex flex-col gap-4 mt-6 text-left max-w-3xl">
              {chapterDetails.body.map((line, idx) => (
                <p 
                  key={idx}
                  className={`font-im-fell text-base md:text-lg leading-relaxed text-parchment/90 ${
                    line.startsWith('Translation') || line.startsWith('అnuవాదం') || line.startsWith('अनुवाद')
                      ? 'text-gold border-l-2 border-gold/40 pl-4 py-1 italic font-normal bg-gold/5'
                      : line.startsWith('FINAL SCENE') || line.startsWith('చివరి సన్నివేశం') || line.startsWith('अंतिम दृश्य')
                      ? 'text-white/80 border-l-2 border-danger/40 pl-4 py-1 italic font-light'
                      : ''
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </motion.div>

        {/* 5. Ancient Cinematic Vertical Smooth Scroller for Epilogue Summary */}
        <div className="w-full max-w-[700px] flex flex-col items-center gap-4 mt-8 pointer-events-auto">
          <div className="font-rajdhani text-[11px] font-bold tracking-[0.35em] text-gold-bright/60 uppercase">
            {activeUI.summaryTitle}
          </div>

          <div className="relative w-full h-[190px] border-t border-b border-gold/15 bg-deep/50 rounded-lg overflow-hidden flex flex-col items-center">
            {/* Cinematic Feather-Fade Edge Masks */}
            <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-deep to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-deep to-transparent z-10 pointer-events-none" />

            {/* Auto Scrolling Text Wrap */}
            <div 
              ref={scrollerRef}
              className="w-full h-full overflow-y-auto hide-scrollbar py-6 px-8 flex flex-col gap-8 text-center scroll-smooth animate-scroll-vertical"
              style={{ scrollbarWidth: 'none' }}
            >
              {/* Extra spacing for continuous majestic scroll loop feel */}
              <div className="h-6 shrink-0" />
              <p className="font-cinzel text-base md:text-lg leading-loose text-gold/90 font-light max-w-xl mx-auto italic select-none">
                {activeUI.summary}
              </p>
              <div className="h-24 shrink-0" />
            </div>
          </div>
        </div>

      </div>

      <SectionDivider />
    </section>
  )
}
export default EpilogueSection
