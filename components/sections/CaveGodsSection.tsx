'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionDivider } from '../ui/SectionDivider'

interface CaveGodsSectionProps {
  language: 'english' | 'hindi' | 'telugu'
}

interface GodCardProps {
  imageSrc: string
  title: string
  desc: string
  layout: 'left' | 'right'
}

function GodCard({ imageSrc, title, desc, layout }: GodCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  // Soft-edged radial gradient reveal mask
  const flashlightStyle = isHovered
    ? {
        background: `radial-gradient(circle 240px at ${mousePos.x}px ${mousePos.y}px, rgba(10, 8, 6, 0.05) 0%, rgba(10, 8, 6, 0.7) 40%, rgba(10, 8, 6, 0.95) 80%, #0a0806 100%)`,
      }
    : {
        background: `radial-gradient(circle at center, rgba(10, 8, 6, 0.85) 0%, #0a0806 100%)`,
        transition: 'background 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
      }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[380px] md:h-[460px] rounded-xl overflow-hidden border border-gold/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col justify-end p-6 md:p-8 transition-transform duration-700 hover:scale-[1.02] cursor-none group"
    >
      {/* Background Image with epic smooth scale zoom on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      />
      
      {/* Dark overlay mask reacting to cursor */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={flashlightStyle} />

      {/* Ambient subtle fog layer inside the card */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-color-dodge bg-[radial-gradient(circle_at_bottom,rgba(200,168,75,0.05),transparent_70%)] opacity-60" />

      {/* Decorative Corner borders */}
      <div className="absolute inset-4 border border-gold/5 pointer-events-none group-hover:border-gold/15 transition-colors duration-500 rounded-lg" />

      {/* Text Content Overlay */}
      <div className="relative z-20 flex flex-col gap-2 pointer-events-none">
        <span className="font-rajdhani text-[9px] font-bold tracking-[0.35em] text-gold-bright uppercase opacity-75">
          {layout === 'left' ? 'Sovereign Portal' : 'Balance Portal'}
        </span>
        <h4 className="font-cinzel text-xl md:text-2xl font-bold text-white tracking-widest group-hover:text-gold-bright transition-colors duration-300">
          {title}
        </h4>
        <p className="font-im-fell text-sm md:text-base text-parchment/85 leading-relaxed font-light mt-1 max-w-md">
          {desc}
        </p>
      </div>

      {/* Custom Tactical Cursor Sight inside card bounds */}
      {isHovered && (
        <div 
          className="absolute z-30 pointer-events-none w-12 h-12 border border-gold-bright/35 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_25px_rgba(232,201,106,0.35)] bg-gold/5 transition-transform duration-75"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <div className="w-1.5 h-1.5 bg-gold-bright rounded-full animate-ping" />
          {/* Subtle crosshair lines */}
          <div className="absolute w-2 h-[1px] bg-gold-bright/60 left-0" />
          <div className="absolute w-2 h-[1px] bg-gold-bright/60 right-0" />
          <div className="absolute h-2 w-[1px] bg-gold-bright/60 top-0" />
          <div className="absolute h-2 w-[1px] bg-gold-bright/60 bottom-0" />
        </div>
      )}
    </div>
  )
}

export function CaveGodsSection({ language }: CaveGodsSectionProps) {
  // Localized texts
  const texts = {
    english: {
      subLabel: 'SUBTERRANEAN TIME REVELATIONS',
      title: 'Cave of the Ancient Guardians',
      prose: 'Vara descends into the deepest subterranean vaults of the forgotten temple, discovering colossal statues of Indian deities carved directly into the living rock. Ethereal, pulse-like cosmic energy glows along left and right cavern pathways, revealing the timeless masters of Kalachakra balance.',
      leftColumnTitle: 'The Left Vault: Time Keepers',
      rightColumnTitle: 'The Right Vault: Balance Keepers',
      cards: [
        {
          title: 'Vedic Time Deity',
          desc: 'Colossal time deity carved into stone walls, glowing with gold cosmic radiation.',
        },
        {
          title: 'Portal of the Multiple Guardians',
          desc: 'Panoramic vista of multiple glowing statues of ancient Indian gods standing sentinel.',
        },
        {
          title: 'Subterranean Runes',
          desc: 'Mystic subterranean chamber with giant cosmic guardians and celestial runic writings.',
        },
        {
          title: ' Hindu Deities Gateway',
          desc: 'Colossal figures of Hindu deities merged majestically into the cavern archways.',
        }
      ]
    },
    hindi: {
      subLabel: 'भूमिगत काल के रहस्य',
      title: 'प्राचीन संरक्षकों की गुफा',
      prose: 'वारा भूल चुके मंदिर के सबसे गहरे भूमिगत कक्षों में उतरता है, और जीवित चट्टान में सीधे तराशी गई भारतीय देवताओं की विशाल मूर्तियां खोजता है। ईथरीय, स्पंदन जैसी ब्रह्मांडीय ऊर्जा गुफा के बाएं और दाएं रास्तों पर चमकती है, जो कालचक्र संतुलन के कालातीत स्वामियों को प्रकट करती है।',
      leftColumnTitle: 'बायां कक्ष: काल के रक्षक',
      rightColumnTitle: 'दायां कक्ष: संतुलन के रक्षक',
      cards: [
        {
          title: 'वैदिक काल देवता',
          desc: 'पत्थर की दीवारों में तराशे गए विशाल काल देवता, सुनहरे ब्रह्मांडीय विकिरण से चमकते हुए।',
        },
        {
          title: 'अनेक संरक्षकों का पोर्टल',
          desc: 'प्रहरी के रूप में खड़े प्राचीन भारतीय देवताओं की कई चमकती मूर्तियों का एक मनोरम दृश्य।',
        },
        {
          title: 'भूमिगत रूनिक शिलालेख',
          desc: 'विशाल ब्रह्मांडीय संरक्षकों और आकाशीय रूनिक लेखों के साथ भूमिगत कक्ष।',
        },
        {
          title: 'हिंदू देवता प्रवेश द्वार',
          desc: 'गुफा के तोरणद्वारों में भव्य रूप से विलीन हुई हिंदू देवताओं की विशाल आकृतियाँ।',
        }
      ]
    },
    telugu: {
      subLabel: 'భూగర్భ కాల రహస్యాలు',
      title: 'పురాతన రక్షకుల గుహ',
      prose: 'వారా మరచిపోయిన ఆలయం యొక్క అత్యంత లోతైన భూగర్భ గదుల్లోకి దిగి, రాతిలోనే నేరుగా చెక్కబడిన భారతీయ దేవతల భారీ విగ్రహాలను కనుగొంటాడు. గుహ యొక్క ఎడమ మరియు కుడి మార్గాలలో విశ్వ దైవిక కాంతి ప్రసరిస్తూ, కాలచక్ర సమతుల్యతను కాపాడే నిత్య రక్షకులను వెల్లడిస్తుంది.',
      leftColumnTitle: 'ఎడమ చాంబర్: కాల రక్షకులు',
      rightColumnTitle: 'కుడి చాంబర్: సమతుల్యత రక్షకులు',
      cards: [
        {
          title: 'వైదిక కాల దేవత',
          desc: 'రాతి గోడలలో చెక్కబడిన భారీ కాల దేవత, బంగారు విశ్వ కిరణాలతో మెరుస్తూ ఉంది.',
        },
        {
          title: 'అనేక రక్షకుల ద్వారం',
          desc: 'కాపలాదారులుగా నిలిచిన పురాతన భారతీయ దేవతల అనేక మెరుస్తున్న విగ్రహాల అద్భుత దృశ్యం.',
        },
        {
          title: 'భూగర్భ రూనిక్ శాసనాలు',
          desc: 'భారీ విశ్వ రక్షకులు మరియు ఖగోళ రూనిక్ లిఖితాలతో కూడిన భూగర్భ గది.',
        },
        {
          title: 'హిందూ దేవతల గోపురం',
          desc: 'గుహ తోరణాలలో గంభీరంగా విలీనమైన హిందూ దేవతల భారీ రూపాలు.',
        }
      ]
    }
  }

  const activeText = texts[language] || texts.english

  return (
    <section 
      id="cave-gods-reveal" 
      className="relative w-full py-28 px-6 bg-[radial-gradient(circle_at_center,rgba(200,168,75,0.08)_0%,#0a0806_85%)] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full z-10 flex flex-col items-center gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
          <div className="flex flex-col items-center gap-1">
            <span className="font-rajdhani text-[11px] font-bold tracking-[0.4em] text-gold-bright uppercase animate-pulse">
              {activeText.subLabel}
            </span>
            <h3 className="font-cinzel text-3xl md:text-5xl font-semibold text-white tracking-widest drop-shadow-[0_0_20px_rgba(200,168,75,0.25)] mt-1">
              {activeText.title}
            </h3>
          </div>
          <p className="font-im-fell text-lg text-parchment/90 italic leading-relaxed max-w-2xl font-light">
            {activeText.prose}
          </p>
        </div>

        {/* Responsive Grid showcasing Left and Right Side Perfectly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mt-4">
          
          {/* Left Column - Cave Gods Side 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3 border-b border-gold/20 pb-3 mb-2">
              <span className="w-2.5 h-2.5 bg-gold-bright rounded-full animate-pulse shadow-[0_0_8px_#e8c96a]" />
              <h4 className="font-cinzel text-lg md:text-xl font-bold text-gold tracking-widest uppercase">
                {activeText.leftColumnTitle}
              </h4>
            </div>

            <div className="flex flex-col gap-8">
              <GodCard 
                imageSrc="/Kalachakra-Documentary/Image/CaveGods1.png"
                title={activeText.cards[0].title}
                desc={activeText.cards[0].desc}
                layout="left"
              />
              <GodCard 
                imageSrc="/Kalachakra-Documentary/Image/AllGodsViewWithVara.png"
                title={activeText.cards[1].title}
                desc={activeText.cards[1].desc}
                layout="left"
              />
            </div>
          </motion.div>

          {/* Right Column - Cave Gods Side 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3 border-b border-danger/30 pb-3 mb-2">
              <span className="w-2.5 h-2.5 bg-danger rounded-full animate-pulse shadow-[0_0_8px_#cc3300]" />
              <h4 className="font-cinzel text-lg md:text-xl font-bold text-white tracking-widest uppercase">
                {activeText.rightColumnTitle}
              </h4>
            </div>

            <div className="flex flex-col gap-8">
              <GodCard 
                imageSrc="/Kalachakra-Documentary/Image/CaveGods2.png"
                title={activeText.cards[2].title}
                desc={activeText.cards[2].desc}
                layout="right"
              />
              <GodCard 
                imageSrc="/Kalachakra-Documentary/Image/AllGodsInCave2.png"
                title={activeText.cards[3].title}
                desc={activeText.cards[3].desc}
                layout="right"
              />
            </div>
          </motion.div>

        </div>

      </div>

      <SectionDivider />
    </section>
  )
}
export default CaveGodsSection
