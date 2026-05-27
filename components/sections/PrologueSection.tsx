'use client'

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import React from 'react'
import { SectionDivider } from '../ui/SectionDivider'

interface PrologueSectionProps {
  language?: 'english' | 'hindi' | 'telugu'
}

export function PrologueSection({ language = 'english' }: PrologueSectionProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`

  const content = {
    english: {
      beforeHistory: 'BEFORE HISTORY',
      title: 'The Hidden Truth',
      highlight: 'AWAKENING.',
      paragraphs: [
        'Before the dawn of recorded history… before empires rose and fell… humanity lived in the shadow of a far greater intelligence.',
        'A civilization that did not just observe the stars, but engineered the fabric of reality itself. They mastered cosmic energy and dimensional gateways.',
        'Their understanding of universal balance was absolute—a divine science that bridged the gap between mortality and the gods.',
        'But such power was too dangerous to be left in the open. As epochs passed, this sacred technology was deliberately buried.',
        'Now, the secrets sleep beneath ancient stone. Bound by myth. Guarded by the divine.',
      ]
    },
    hindi: {
      beforeHistory: 'इतिहास से पहले',
      title: 'छिपा हुआ सच',
      highlight: 'जागरण।',
      paragraphs: [
        'दर्ज इतिहास की शुरुआत से पहले... साम्राज्यों के उदय और पतन से पहले... मानवता एक कहीं अधिक महान बुद्धि की छाया में रहती थी।',
        'एक ऐसी सभ्यता जिसने न केवल सितारों को देखा, बल्कि स्वयं वास्तविकता के ताने-बाने को गढ़ा। उन्होंने ब्रह्मांडीय ऊर्जा और आयामी द्वारों में महारत हासिल की।',
        'सार्वभौमिक संतुलन के बारे में उनकी समझ पूर्ण थी - एक दिव्य विज्ञान जिसने नश्वरता और देवताओं के बीच की खाई को पाट दिया।',
        'लेकिन ऐसी शक्ति खुले में छोड़ने के लिए बहुत खतरनाक थी। जैसे-जैसे युग बीतते गए, इस पवित्र तकनीक को जानबूझकर दफन कर दिया गया।',
        'अब, रहस्य प्राचीन पत्थरों के नीचे सो रहे हैं। मिथकों से बंधे। देवताओं द्वारा रक्षित।',
      ]
    },
    telugu: {
      beforeHistory: 'చరిత్రకు పూర్వం',
      title: 'దాగి ఉన్న సత్యం',
      highlight: 'మేల్కొలుపు.',
      paragraphs: [
        'నమోదిత చరిత్ర ప్రారంభానికి ముందు... సామ్రాజ్యాలు పెరిగి పతనం కావడానికి ముందు... మానవాళి చాలా గొప్ప మేధస్సు నీడలో జీవించింది.',
        'కేవలం నక్షత్రాలను గమనించడమే కాకుండా, వాస్తవికతను రూపొందించిన నాగరికత. వారు విశ్వ శక్తి మరియు డైమెన్షనల్ ద్వారాలపై పట్టు సాధించారు.',
        'విశ్వ సమతుల్యత గురించి వారి అవగాహన సంపూర్ణమైనది - నశ్వరత మరియు దేవతల మధ్య అంతరాన్ని తగ్గించిన దైవిక శాస్త్రం.',
        'కానీ అటువంటి శక్తిని బహిరంగంగా ఉంచడం చాలా ప్రమాదకరం. యుగాలు గడిచేకొద్దీ, ఈ పవిత్ర సాంకేతికత ఉద్దేశపూర్వకంగా పాతిపెట్టబడింది.',
        'ఇప్పుడు, రహస్యాలు పురాతన రాతి కింద నిద్రపోతున్నాయి. పురాణాలతో ముడిపడి ఉన్నాయి. దైవంచే రక్షించబడుతున్నాయి.',
      ]
    }
  }

  const active = content[language] || content.english

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.1,
      },
    },
  }

  const paragraphVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  }

  return (
    <section
      id="prologue"
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 px-6 md:px-12 flex flex-col items-center justify-center select-none overflow-hidden bg-[#0a0806]"
    >
      {/* Dim Base Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/Image/CaveBG1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      {/* Bright Spotlight Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-50 mix-blend-screen"
        style={{
          backgroundImage: "url('/Image/CaveBG1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          maskImage,
          WebkitMaskImage: maskImage
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0806]/80 via-transparent to-[#0f0c09]/95 pointer-events-none" />

      {/* Ghost Background Kicker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cinzel text-[14vw] font-black text-gold/[0.02] tracking-widest pointer-events-none uppercase z-0">
        {language === 'english' ? 'PROLOGUE' : language === 'hindi' ? 'प्रस्तावना' : 'పీఠిక'}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-3xl w-full z-10 flex flex-col items-center text-center gap-10"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-rajdhani text-[11px] font-bold tracking-[0.3em] text-gold uppercase">
            {active.beforeHistory}
          </span>
          <h3 className="font-cinzel text-3xl md:text-4xl font-semibold text-white tracking-widest">
            {active.title}
          </h3>
        </div>

        {/* Story Prose */}
        <div className="flex flex-col gap-6 font-im-fell text-lg md:text-xl text-parchment/90 leading-relaxed italic font-light max-w-2xl">
          {active.paragraphs.map((p, idx) => (
            <motion.p key={idx} variants={paragraphVariants} className="text-justify md:text-center">
              {p}
            </motion.p>
          ))}
        </div>

        {/* Emphasized highlight tag */}
        <motion.div
          variants={paragraphVariants}
          className="border-l-2 border-r-2 border-gold/30 px-8 py-3 bg-ink/30 ornate-box"
        >
          <span className="font-rajdhani text-sm font-bold tracking-[0.4em] text-gold-bright uppercase animate-pulse">
            {active.highlight}
          </span>
        </motion.div>
      </motion.div>

      {/* Decorative Dharma divider leading to Chapter I */}
      <SectionDivider />
    </section>
  )
}
export default PrologueSection
