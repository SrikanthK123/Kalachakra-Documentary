'use client'

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import React, { useState, useEffect, useMemo } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  // Generate stable random particle data only on the client
  const particles = useMemo(() =>
    Array.from({ length: 20 }, () => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      opacity: Math.random() * 0.5 + 0.2,
      yEnd: Math.random() * -100 - 50,
      duration: Math.random() * 5 + 3,
    })),
  []) // runs once on client mount

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div 
      className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden font-cinzel text-white select-none"
      onMouseMove={handleMouseMove}
    >
      {/* Base Dark Image (Dimly lit compass, hand not clear) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[length:auto_165%] bg-bottom md:bg-[length:cover] md:bg-center"
        style={{
          backgroundImage: "url('/Kalachakra-Documentary/Image/CompasstitleNVara.png')",
        }}
      />

      {/* Static Center Glow (Mobile - Shifted slightly up) */}
      <div 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-[length:auto_165%] bg-bottom md:hidden"
        style={{
          backgroundImage: "url('/Kalachakra-Documentary/Image/CompasstitleNVara.png')",
          maskImage: "radial-gradient(300px circle at 50% 42%, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(300px circle at 50% 42%, black, transparent 80%)",
        }}
      />

      {/* Static Center Glow (Desktop - Centered) */}
      <div 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-[length:cover] bg-center hidden md:block"
        style={{
          backgroundImage: "url('/Kalachakra-Documentary/Image/CompasstitleNVara.png')",
          maskImage: "radial-gradient(300px circle at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(300px circle at center, black, transparent 80%)",
        }}
      />

      {/* Spotlight Masked Image (Bright hand reveals on hover) */}
      <motion.div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none bg-[length:auto_165%] bg-bottom md:bg-[length:cover] md:bg-center"
        style={{
          backgroundImage: "url('/Kalachakra-Documentary/Image/CompasstitleNVara.png')",
          maskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)`,
        }}
      />

      {/* Dark gradient to keep text legible */}
      <div className="absolute inset-0 z-0 bg-black/50 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-[42%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gold rounded-full blur-[100px] md:blur-[150px] opacity-20" />
      </div>

      {/* Floating particles — client-only to avoid SSR/hydration mismatch */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {isMounted && particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            initial={{
              x: p.x,
              y: p.y,
              opacity: p.opacity
            }}
            animate={{
              y: [null, p.yEnd],
              opacity: [null, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>


      {/* Container for exact centering */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        className="absolute top-[42%] md:top-1/2 left-1/2 w-full flex flex-col items-center justify-center z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex flex-col items-center justify-center w-full">
          {/* Animated THE WHEEL OF TIME Subtitle (Positioned above) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute bottom-full mb-6 w-full flex justify-center"
          >
            <p className="text-gold tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] font-rajdhani font-bold uppercase">
              THE WHEEL OF TIME
            </p>
          </motion.div>

          {/* Animated KALACHAKRA Text (Exactly centered) */}
          <motion.h1 
            className="text-[12vw] sm:text-[10vw] md:text-[8rem] lg:text-[10rem] font-cinzel-decorative font-normal tracking-normal md:tracking-wide uppercase drop-shadow-[0_0_20px_rgba(200,168,75,0.3)] leading-none px-4 text-center w-full"
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            KALACHAKRA
          </motion.h1>

          {/* Bottom section (Positioned below) */}
          <div className="absolute top-full mt-6 flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="flex items-center gap-4 mb-16 overflow-hidden"
            >
              <div className="w-12 md:w-24 h-[1px] bg-gold/50" />
              <p className="text-gold tracking-[0.5em] text-[10px] md:text-sm font-rajdhani whitespace-nowrap">
                A CINEMATIC DOCUMENTARY
              </p>
              <div className="w-12 md:w-24 h-[1px] bg-gold/50" />
            </motion.div>

            {/* Enter Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              onClick={onComplete}
              className="px-8 py-4 bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-black hover:border-gold transition-all duration-500 font-rajdhani tracking-[0.3em] text-xs md:text-sm uppercase group relative overflow-hidden mt-4"
            >
              <span className="relative z-10 font-bold">ENTER THE MULTIVERSE</span>
              <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Best viewed on desktop hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <p className="text-[9px] md:text-[11px] font-rajdhani tracking-[0.2em] text-white/40 uppercase">
          * For the ultimate experience, view on Desktop with Audio Enabled
        </p>
      </motion.div>
    </div>
  )
}
