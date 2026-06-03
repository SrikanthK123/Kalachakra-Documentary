'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChapterArtType } from '@/types/story'

interface ChapterArtProps {
  artType: ChapterArtType
  image?: string
  hoverImage?: string
  atmosphere?: 'normal' | 'fire' | 'cosmic' | 'danger'
  chapterTitle?: string
  chapterNumber?: string
  extraImages?: string[]
}

export function ChapterArt({ 
  artType, 
  image, 
  hoverImage, 
  atmosphere = 'normal',
  chapterTitle,
  chapterNumber,
  extraImages = []
}: ChapterArtProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToSlide = (index: number) => {
    setActiveSlide(index)
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth'
      })
    }
  }

  // Mount confirmation for SSR safety inside Portals
  useEffect(() => {
    setMounted(true)
  }, [])

  // Reset to first slide when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setActiveSlide(0)
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0
      }
    }
  }, [isModalOpen])

  // Keyboard shortcut listener to close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  // Disable background body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])
  // Render the appropriate high-fidelity responsive SVG vector
  const renderSVG = () => {
    switch (artType) {
      case 'mandala':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold max-w-[340px]" role="img" aria-label="Sacred Mandala Art">
            <defs>
              <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e8c96a" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#c8a84b" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#goldGlow)" />
            <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <polygon points="100,25 165,138 35,138" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
            <polygon points="100,175 165,62 35,62" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8
              const rad = (angle * Math.PI) / 180
              return (
                <circle
                  key={i}
                  cx={100 + 40 * Math.cos(rad)}
                  cy={100 + 40 * Math.sin(rad)}
                  r="3"
                  fill="currentColor"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              )
            })}
          </svg>
        )

      case 'researcher':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-cream max-w-[340px]" role="img" aria-label="Mythological Researcher Art">
            <defs>
              <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c8a84b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b3a1f" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Background Grid */}
            <rect x="10" y="10" width="180" height="180" fill="url(#blueGlow)" stroke="#c8a84b" strokeWidth="0.25" opacity="0.3" />
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={i} x1="10" y1={10 + i * 25} x2="190" y2={10 + i * 25} stroke="#c8a84b" strokeWidth="0.1" opacity="0.2" />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={i} x1={10 + i * 25} y1="10" x2={10 + i * 25} y2="190" stroke="#c8a84b" strokeWidth="0.1" opacity="0.2" />
            ))}
            
            {/* Silhouette Profile representing Vara */}
            <path
              d="M30 190 C 35 150, 50 140, 70 135 C 75 130, 75 115, 70 110 C 60 100, 55 90, 60 70 C 65 50, 85 45, 100 45 C 120 45, 135 55, 138 75 C 140 90, 135 100, 125 110 C 120 115, 120 130, 125 135 C 145 140, 160 150, 165 190"
              fill="none"
              stroke="#c4a882"
              strokeWidth="1.5"
            />
            {/* Mind / Knowledge Node */}
            <circle cx="100" cy="75" r="15" fill="none" stroke="#e8c96a" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="100" cy="75" r="4" fill="#e8c96a" className="animate-ping" />
          </svg>
        )

      case 'temple':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold max-w-[340px]" role="img" aria-label="Ancient Hindu Temple Pillars">
            <defs>
              <linearGradient id="templeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0a0806" />
                <stop offset="100%" stopColor="#c8a84b" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Base platform */}
            <rect x="20" y="160" width="160" height="15" fill="url(#templeGrad)" stroke="currentColor" strokeWidth="0.5" />
            <rect x="30" y="150" width="140" height="10" fill="none" stroke="currentColor" strokeWidth="0.5" />

            {/* Massive Stone Pillars */}
            <path d="M 45,150 L 45,50 L 60,50 L 60,150 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 140,150 L 140,50 L 155,50 L 155,150 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
            {/* Pillar Carvings details */}
            <line x1="52.5" y1="50" x2="52.5" y2="150" stroke="currentColor" strokeWidth="0.25" strokeDasharray="4 2" />
            <line x1="147.5" y1="50" x2="147.5" y2="150" stroke="currentColor" strokeWidth="0.25" strokeDasharray="4 2" />

            {/* Central Arch */}
            <path d="M 60,70 A 40,40 0 0,1 140,70" fill="none" stroke="currentColor" strokeWidth="0.5" />

            {/* Garuda Shield Protective Lock Door */}
            <g transform="translate(100, 105)">
              <circle cx="0" cy="0" r="22" fill="#12100e" stroke="#c8a84b" strokeWidth="0.75" />
              {/* Garuda Wings representation */}
              <path d="M -15,-5 C -25,-12, -22,5, -5,2 C -2,10, 2,10, 5,2 C 22,5, 25,-12, 15,-5" fill="none" stroke="#e8c96a" strokeWidth="0.5" />
              <polygon points="0,-12 -4,-4 4,-4" fill="currentColor" />
            </g>
          </svg>
        )

      case 'night':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold max-w-[340px]" role="img" aria-label="Brahma Muhurta Hour 3-4 AM">
            {/* Circular frame representing Time */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {/* Clock ticks */}
            <line x1="100" y1="20" x2="100" y2="28" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="180" x2="100" y2="172" stroke="currentColor" strokeWidth="0.5" />
            <line x1="20" y1="100" x2="28" y2="100" stroke="currentColor" strokeWidth="0.5" />
            <line x1="180" y1="100" x2="172" y2="100" stroke="currentColor" strokeWidth="0.5" />

            {/* 3 AM - 4 AM active sector highlighted */}
            <path d="M 100,100 L 100,30 A 70,70 0 0,1 149.5,51 Z" fill="#c8a84b" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.5" />
            
            {/* Rotating Solar / Divine Rays */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12
              const rad = (angle * Math.PI) / 180
              return (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 65 * Math.cos(rad)}
                  y2={100 + 65 * Math.sin(rad)}
                  stroke="currentColor"
                  strokeWidth="0.25"
                  opacity="0.3"
                />
              )
            })}

            {/* Glowing Celestial Stars */}
            <circle cx="70" cy="60" r="1.5" fill="#faf5ed" className="animate-pulse" />
            <circle cx="130" cy="120" r="2" fill="#e8c96a" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            <circle cx="60" cy="130" r="1" fill="#faf5ed" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <polygon points="120,45 122,49 126,49 123,52 124,56 120,53 116,56 117,52 114,49 118,49" fill="#e8c96a" />
          </svg>
        )

      case 'cave':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-cream max-w-[340px]" role="img" aria-label="Deep Glowing Tunnel Cave">
            <defs>
              <radialGradient id="caveGlow" cx="50%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#e8c96a" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#8b3a1f" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0a0806" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Blinding Center Light */}
            <circle cx="100" cy="100" r="60" fill="url(#caveGlow)" />
            
            {/* Concentric Tunnel Outlines */}
            <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
            <circle cx="100" cy="100" r="48" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
            <circle cx="100" cy="100" r="32" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
            <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.4" />

            {/* Fractured Cave cracks */}
            <path d="M 25,100 L 45,95 L 62,105 L 100,100" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.5" />
            <path d="M 175,100 L 155,105 L 138,92 L 100,100" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.5" />
            <path d="M 100,25 L 98,55 L 105,72 L 100,100" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.5" />
          </svg>
        )

      case 'compass':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold max-w-[340px]" role="img" aria-label="Ancient Compass Interface Blueprint">
            {/* Outer Circle Grid */}
            <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="0.5" />

            {/* Astrological ticks */}
            {Array.from({ length: 36 }).map((_, i) => {
              const angle = (i * 360) / 36
              const rad = (angle * Math.PI) / 180
              const x1 = 100 + 80 * Math.cos(rad)
              const y1 = 100 + 80 * Math.sin(rad)
              const x2 = 100 + 85 * Math.cos(rad)
              const y2 = 100 + 85 * Math.sin(rad)
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.4" />
              )
            })}

            {/* Glowing Core structure */}
            <circle cx="100" cy="100" r="14" fill="none" stroke="#e8c96a" strokeWidth="1" />
            <circle cx="100" cy="100" r="8" fill="#e8c96a" className="animate-pulse" />

            {/* Compass Needle silhouette */}
            <polygon points="100,35 106,90 94,90" fill="#e8c96a" opacity="0.8" />
            <polygon points="100,165 105,110 95,110" fill="#8b3a1f" opacity="0.6" />
          </svg>
        )

      case 'asteroid':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-rust max-w-[340px]" role="img" aria-label="Fiery Asteroid Target Earth">
            <defs>
              <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cc3300" />
                <stop offset="60%" stopColor="#8b3a1f" />
                <stop offset="100%" stopColor="#0a0806" />
              </linearGradient>
            </defs>
            {/* Impact Target rings */}
            <circle cx="140" cy="140" r="30" fill="none" stroke="#cc3300" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="140" cy="140" r="15" fill="none" stroke="#cc3300" strokeWidth="0.75" />
            <circle cx="140" cy="140" r="2" fill="#cc3300" />

            {/* Flying Asteroid */}
            <g transform="translate(60, 60) rotate(-45)">
              {/* Burning Tail */}
              <path d="M 0,0 L -80,-15 L -60,0 L -80,15 Z" fill="url(#fireGrad)" opacity="0.8" />
              {/* Core Rock */}
              <circle cx="0" cy="0" r="16" fill="#12100e" stroke="#cc3300" strokeWidth="1" />
              <path d="M -8,-5 C -4,-12 4,-12 8,-5 C 12,2 8,10 0,6 C -8,10 -12,2 -8,-5" fill="none" stroke="#c8a84b" strokeWidth="0.5" />
            </g>
          </svg>
        )

      case 'news':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-danger max-w-[340px]" role="img" aria-label="Global Emergency Signal">
            {/* Grid Box */}
            <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="0.5" />
            
            {/* Scanning Radar Rings */}
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.3" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 4" opacity="0.6" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.75" className="animate-ping" style={{ animationDuration: '4s' }} />

            {/* Dynamic Signal spikes */}
            <path d="M 20,100 L 60,100 L 70,40 L 85,150 L 98,80 L 110,120 L 120,30 L 135,160 L 148,100 L 180,100" fill="none" stroke="#cc3300" strokeWidth="1.25" />

            {/* Alert Exclamation Warning Indicator */}
            <g transform="translate(100, 100)">
              <circle cx="0" cy="0" r="12" fill="#12100e" stroke="currentColor" strokeWidth="0.75" />
              <rect x="-1" y="-6" width="2" height="7" fill="currentColor" />
              <circle cx="0" cy="3" r="1.2" fill="currentColor" />
            </g>
          </svg>
        )

      case 'shiftedCity':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-danger max-w-[340px]" role="img" aria-label="Shifted Dimensional Grid City">
            {/* Shifted architectural boxes */}
            <g transform="rotate(15 100 100)">
              {/* Normal Grid */}
              <rect x="30" y="30" width="60" height="130" fill="none" stroke="#6b5f4f" strokeWidth="0.5" opacity="0.5" />
              <line x1="30" y1="60" x2="90" y2="60" stroke="#6b5f4f" strokeWidth="0.25" />
              <line x1="30" y1="90" x2="90" y2="90" stroke="#6b5f4f" strokeWidth="0.25" />
              <line x1="30" y1="120" x2="90" y2="120" stroke="#6b5f4f" strokeWidth="0.25" />
            </g>
            
            {/* Fractured overlay (collapsing dimension) */}
            <g transform="rotate(-20 120 90)">
              <rect x="100" y="40" width="70" height="110" fill="none" stroke="#cc3300" strokeWidth="1" />
              <line x1="100" y1="70" x2="170" y2="70" stroke="#cc3300" strokeWidth="0.5" />
              <line x1="100" y1="100" x2="170" y2="100" stroke="#cc3300" strokeWidth="0.5" />
              <line x1="100" y1="130" x2="170" y2="130" stroke="#cc3300" strokeWidth="0.5" />
            </g>

            {/* Axis grid lines intersecting violently */}
            <line x1="0" y1="0" x2="200" y2="200" stroke="#c8a84b" strokeWidth="0.5" strokeDasharray="10 5" />
            <line x1="200" y1="0" x2="0" y2="200" stroke="#cc3300" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        )

      case 'phases':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-danger max-w-[340px]" role="img" aria-label="3 Phases of Decay">
            {/* Left box: Withered Leaves (Nature) */}
            <g transform="translate(10, 40)">
              <rect x="0" y="0" width="50" height="110" fill="none" stroke="#6b5f4f" strokeWidth="0.5" />
              {/* Dying leaf shape */}
              <path d="M 25,20 C 35,40 35,70 25,90 C 15,70 15,40 25,20" fill="none" stroke="#8b3a1f" strokeWidth="0.75" />
              <line x1="25" y1="20" x2="25" y2="90" stroke="#8b3a1f" strokeWidth="0.5" />
              <line x1="25" y1="40" x2="32" y2="35" stroke="#8b3a1f" strokeWidth="0.25" />
              <line x1="25" y1="60" x2="18" y2="55" stroke="#8b3a1f" strokeWidth="0.25" />
            </g>

            {/* Center box: Dog/Wolf Howling silhouette (Animals) */}
            <g transform="translate(75, 40)">
              <rect x="0" y="0" width="50" height="110" fill="none" stroke="#6b5f4f" strokeWidth="0.5" />
              {/* Howling wolf snout simple representation */}
              <path d="M 12,85 C 15,65 20,60 30,55 C 38,50 42,42 45,30 C 42,40 32,48 25,50 C 18,52 15,60 10,85 Z" fill="none" stroke="#c8a84b" strokeWidth="0.75" />
              <circle cx="32" cy="42" r="1" fill="#cc3300" className="animate-ping" />
            </g>

            {/* Right box: Burning Cells (Humans) */}
            <g transform="translate(140, 40)">
              <rect x="0" y="0" width="50" height="110" fill="none" stroke="#6b5f4f" strokeWidth="0.5" />
              {/* Respiratory lungs or cells */}
              <circle cx="25" cy="45" r="10" fill="none" stroke="#cc3300" strokeWidth="0.75" strokeDasharray="3 3" />
              <circle cx="25" cy="45" r="3" fill="#cc3300" />
              <circle cx="25" cy="75" r="10" fill="none" stroke="#cc3300" strokeWidth="0.75" strokeDasharray="3 3" />
              <circle cx="25" cy="75" r="3" fill="#cc3300" />
            </g>
          </svg>
        )

      case 'descent':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold max-w-[340px]" role="img" aria-label="Sacred Temple Cave Descent">
            {/* Descending structural stairs */}
            <path d="M 20,40 L 50,40 L 50,70 L 80,70 L 80,100 L 110,100 L 110,130 L 140,130 L 140,160 L 180,160" fill="none" stroke="currentColor" strokeWidth="1" />
            
            {/* Glowing runes along the stairs */}
            {Array.from({ length: 4 }).map((_, i) => (
              <g key={i} transform={`translate(${40 + i * 30}, ${60 + i * 30})`}>
                <circle cx="0" cy="0" r="4" fill="none" stroke="#e8c96a" strokeWidth="0.5" strokeDasharray="1 1" />
                <polygon points="0,-2 -2,2 2,2" fill="#e8c96a" />
              </g>
            ))}

            {/* Safe zone dome representation */}
            <path d="M 120,180 A 50,50 0 0,0 195,180" fill="none" stroke="#e8c96a" strokeWidth="0.75" strokeDasharray="4 2" opacity="0.8" />
          </svg>
        )

      case 'otherWorld':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-rust max-w-[340px]" role="img" aria-label="Parallel Fiery Universe">
            <defs>
              <linearGradient id="portalGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a0806" />
                <stop offset="50%" stopColor="#8b3a1f" />
                <stop offset="100%" stopColor="#cc3300" />
              </linearGradient>
            </defs>
            {/* Double portals overlapping */}
            <circle cx="75" cy="100" r="50" fill="none" stroke="#c8a84b" strokeWidth="0.5" opacity="0.6" />
            <circle cx="125" cy="100" r="50" fill="none" stroke="#cc3300" strokeWidth="0.5" opacity="0.6" />

            {/* Glowing lens intersection */}
            <path d="M 100,59 A 50,50 0 0,1 125,100 A 50,50 0 0,1 100,141 A 50,50 0 0,1 75,100 A 50,50 0 0,1 100,59 Z" fill="url(#portalGrad)" opacity="0.4" />
            
            {/* Moving cosmic flames inside the loop */}
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * 360) / 6
              const rad = (angle * Math.PI) / 180
              return (
                <circle
                  key={i}
                  cx={100 + 20 * Math.cos(rad)}
                  cy={100 + 20 * Math.sin(rad)}
                  r="2.5"
                  fill="#e8c96a"
                  className="animate-pulse"
                />
              )
            })}
          </svg>
        )

      case 'otherVara':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-rust max-w-[340px]" role="img" aria-label="Dual Silhouette Mirror Vara">
            {/* Splitting timeline dividing line */}
            <line x1="100" y1="10" x2="100" y2="190" stroke="#6b5f4f" strokeWidth="0.5" strokeDasharray="6 3" />

            {/* Left Vara (Light / Cosmic) */}
            <g transform="translate(0, 0)">
              <path
                d="M 20,170 C 25,140, 35,130, 45,128 C 50,123, 50,110, 46,105 C 38,97, 35,88, 38,72 C 42,54, 58,50, 70,50 C 75,50, 80,55, 84,65 C 80,72, 78,82, 80,95 L 85,115"
                fill="none"
                stroke="#c8a84b"
                strokeWidth="1.25"
              />
              <circle cx="65" cy="72" r="3" fill="#c8a84b" />
            </g>

            {/* Right Vara (Mirror / Fire / Suffering) */}
            <g transform="translate(200, 0) scale(-1, 1)">
              <path
                d="M 20,170 C 25,140, 35,130, 45,128 C 50,123, 50,110, 46,105 C 38,97, 35,88, 38,72 C 42,54, 58,50, 70,50 C 75,50, 80,55, 84,65 C 80,72, 78,82, 80,95 L 85,115"
                fill="none"
                stroke="#cc3300"
                strokeWidth="1.25"
              />
              <circle cx="65" cy="72" r="3" fill="#cc3300" className="animate-pulse" />
            </g>
          </svg>
        )

      case 'balanceWarning':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-danger max-w-[340px]" role="img" aria-label="Sanskrit Balance Warning Emblem">
            <defs>
              <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#cc3300" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0a0806" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="82" fill="url(#redGlow)" />
            {/* Triple outline concentric warnings */}
            <circle cx="100" cy="100" r="76" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="8 4" />
            
            {/* Ornate corner warning spikes */}
            {Array.from({ length: 4 }).map((_, i) => {
              const angle = i * 90 + 45
              const rad = (angle * Math.PI) / 180
              return (
                <polygon
                  key={i}
                  points={`${100 + 76 * Math.cos(rad)},${100 + 76 * Math.sin(rad)} ${100 + 86 * Math.cos(rad - 0.05)},${100 + 86 * Math.sin(rad - 0.05)} ${100 + 86 * Math.cos(rad + 0.05)},${100 + 86 * Math.sin(rad + 0.05)}`}
                  fill="currentColor"
                />
              )
            })}

            {/* Inner Sacred symbol node placeholder representing violation */}
            <g transform="translate(100, 100)">
              {/* Sanskrit OM representing equilibrium */}
              <circle cx="0" cy="0" r="30" fill="#12100e" stroke="currentColor" strokeWidth="1" />
              <path
                d="M -12,-8 C -15,-2, -8,5, 0,2 C 8,-2, 12,-12, 5,-15 C -4,-12, -6,2, 4,6 L 10,12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.85"
              />
              <path d="M -8,12 L 8,-12" stroke="#cc3300" strokeWidth="2.5" />
            </g>
          </svg>
        )

      default:
        return null
    }
  }

  if (image) {
    const atmosphereGlowMap = {
      normal: 'shadow-[0_0_20px_rgba(200,168,75,0.06)] border-gold/15',
      cosmic: 'shadow-[0_0_30px_rgba(232,201,106,0.12)] border-gold/30',
      fire: 'shadow-[0_0_30px_rgba(255,85,0,0.12)] border-rust/40',
      danger: 'shadow-[0_0_35px_rgba(204,51,0,0.15)] border-danger/40',
    }

    const glowClass = atmosphereGlowMap[atmosphere] || atmosphereGlowMap.normal
    const effectiveHoverImage = hoverImage || (extraImages && extraImages.length > 0 ? extraImages[0] : undefined)
    const allImages = [image, hoverImage, ...extraImages].filter(Boolean) as string[]

    return (
      <>
        <div 
          className={`relative w-full h-[240px] md:h-[300px] rounded-lg overflow-hidden border bg-ink/65 transition-all duration-500 flex items-center justify-center select-none group cursor-zoom-in ${glowClass}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsModalOpen(true)}
        >
        {/* Cinematic Base Image */}
        <motion.img
          src={image}
          alt={`${artType} scene illustration`}
          className="absolute inset-0 w-full h-full object-cover object-center z-10"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            filter: isHovered && effectiveHoverImage ? 'brightness(0.7) blur(2px)' : 'brightness(0.9) blur(0px)'
          }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* Cinematic Cross-Fade Hover Image */}
        {effectiveHoverImage && (
          <motion.img
            src={effectiveHoverImage}
            alt={`${artType} scene transition`}
            className="absolute inset-0 w-full h-full object-cover object-center z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.02 : 0.98
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        )}

        {/* Ambient atmospheric border lines (Ornate Corners) */}
        <div className="absolute inset-0 border border-white/5 pointer-events-none z-30" />
        
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold pointer-events-none z-30 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold pointer-events-none z-30 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
        {/* Bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold pointer-events-none z-30 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold pointer-events-none z-30 transition-all duration-300 group-hover:w-6 group-hover:h-6" />

        {/* Scanning grid micro-animation overlay (Sci-fi holographic feel) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-30" />
        
        {/* Subtle scanline sweep */}
        <div className="absolute inset-x-0 h-[2px] bg-gold/15 top-0 pointer-events-none animate-scan z-30 opacity-50" />

        {/* Subtle SVG Blueprint Watermark Badge in the corner */}
        <div className="absolute bottom-3 right-3 w-10 h-10 border border-gold/25 bg-black/60 rounded-full flex items-center justify-center p-1.5 opacity-65 hover:opacity-100 transition-all duration-300 z-30 backdrop-blur-sm pointer-events-none">
          <div className="w-full h-full scale-[1.3] text-gold/80 flex items-center justify-center">
            {renderSVG()}
          </div>
        </div>
      </div>

      {/* 2K Full-screen Lightbox Modal Overlay using React Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8 cursor-zoom-out select-none"
            >
              {/* Subtle atmospheric back-glow */}
              <div className={`absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full filter blur-[80px] md:blur-[150px] opacity-10 pointer-events-none z-0 ${
                atmosphere === 'cosmic' ? 'bg-gold' : 
                atmosphere === 'fire' ? 'bg-rust' : 
                atmosphere === 'danger' ? 'bg-danger' : 'bg-gold'
              }`} />

              {/* Glowing Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-[110] text-xl font-light"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsModalOpen(false)
                }}
              >
                ✕
              </motion.button>

              {/* Cinematic 2K Image Carousel Box */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full flex flex-col items-center gap-4 z-10"
              >
                {/* Image scroll window */}
                <div 
                  ref={scrollContainerRef}
                  onScroll={(e) => {
                    const el = e.currentTarget
                    const index = Math.round(el.scrollLeft / el.clientWidth)
                    if (index !== activeSlide) {
                      setActiveSlide(index)
                    }
                  }}
                  className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth border border-white/10 rounded-xl bg-black/40 max-h-[66vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {/* Dynamic Images */}
                  {allImages.map((imgSrc, idx) => (
                    <div key={idx} className="w-full h-[60vh] md:h-auto flex-shrink-0 snap-center flex items-center justify-center relative p-2 md:aspect-auto">
                      <img
                        src={imgSrc}
                        alt={`${chapterTitle} scene ${idx + 1}`}
                        className="w-full h-full max-h-[62vh] object-contain rounded-lg"
                      />
                      {/* Tech golden corner brackets */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold pointer-events-none" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold pointer-events-none" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold pointer-events-none" />
                    </div>
                  ))}
                </div>

                {/* Carousel Navigation buttons */}
                {allImages.length > 1 && (
                  <div className="flex items-center justify-center flex-wrap gap-3 mt-1 bg-black/60 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
                    {allImages.map((_, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <button 
                          onClick={() => scrollToSlide(idx)}
                          className={`font-rajdhani text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border transition-all duration-300 ${activeSlide === idx ? 'bg-gold border-gold text-black shadow-[0_0_15px_rgba(200,168,75,0.4)]' : 'border-white/10 text-white/50 hover:text-white'}`}
                        >
                          {idx === 0 ? '1. SCENE RECORD' : idx === 1 && hoverImage ? '2. ALTERNATE VIEW' : `${idx + 1}. ARCHIVE FILE`}
                        </button>
                        {idx < allImages.length - 1 && <div className="w-[1px] h-3 bg-white/10" />}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Cinematic Title & Meta Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 }}
                className="mt-6 flex flex-col items-center gap-1 z-10 text-center max-w-xl cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                {chapterNumber && (
                  <span className="font-rajdhani text-xs font-bold tracking-[0.4em] text-gold uppercase">
                    {chapterNumber}
                  </span>
                )}
                {chapterTitle && (
                  <h4 className="font-cinzel text-xl md:text-2xl font-semibold text-white tracking-widest leading-normal">
                    {chapterTitle}
                  </h4>
                )}
                <span className="font-rajdhani text-[9px] font-bold text-white/30 tracking-[0.25em] uppercase mt-2 border border-white/10 px-2 py-0.5 rounded">
                  2K Ultra-Resolution Projection
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
    )
  }

  return (
    <div className="w-full h-full min-h-[220px] max-h-[360px] flex items-center justify-center relative p-4 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] as const }}
        className="w-full h-full flex items-center justify-center"
      >
        {renderSVG()}
      </motion.div>
    </div>
  )
}
export default ChapterArt
