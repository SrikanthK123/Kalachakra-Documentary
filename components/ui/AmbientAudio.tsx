'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const oscillatorsRef = useRef<OscillatorNode[]>([])
  const gainNodeRef = useRef<GainNode | null>(null)

  // Function to create a deep, meditative temple drone
  const startDrone = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) return

      const ctx = new AudioContextClass()
      audioCtxRef.current = ctx

      const masterGain = ctx.createGain()
      masterGain.gain.setValueAtTime(0, ctx.currentTime)
      // Fade in drone
      masterGain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 3)
      masterGain.connect(ctx.destination)
      gainNodeRef.current = masterGain

      // Create a complex low-frequency harmonic drone
      const freqs = [90, 135, 180, 270] // Fundamental + clean harmonics
      const oscillators: OscillatorNode[] = []

      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator()
        const oscGain = ctx.createGain()

        // Distribute volume amongst harmonics
        oscGain.gain.value = index === 0 ? 0.6 : index === 1 ? 0.3 : 0.1
        osc.type = index % 2 === 0 ? 'sawtooth' : 'sine' // Blend waveforms
        osc.frequency.setValueAtTime(freq, ctx.currentTime)

        // Subtle pitch modulation (detuning) for organic warmth
        osc.detune.setValueAtTime(Math.sin(index) * 5, ctx.currentTime)

        // Add a lowpass filter to make the sawtooth warm
        const filter = ctx.createBiquadFilter()
        filter.type = 'lowpass'
        filter.frequency.value = index === 0 ? 120 : 250

        osc.connect(filter)
        filter.connect(oscGain)
        oscGain.connect(masterGain)
        osc.start()
        oscillators.push(osc)
      })

      oscillatorsRef.current = oscillators
    } catch (e) {
      console.warn('AudioContext could not start', e)
    }
  }

  const stopDrone = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current
      const currentGain = gainNodeRef.current.gain.value
      // Fade out smoothly
      gainNodeRef.current.gain.setValueAtTime(currentGain, ctx.currentTime)
      gainNodeRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8)

      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop()
          } catch (_) {}
        })
        try {
          audioCtxRef.current?.close()
        } catch (_) {}
        audioCtxRef.current = null
        oscillatorsRef.current = []
        gainNodeRef.current = null
      }, 900)
    }
  }

  const togglePlayback = () => {
    if (isPlaying) {
      stopDrone()
      setIsPlaying(false)
    } else {
      startDrone()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    return () => {
      // Cleanup audio context on unmount
      if (audioCtxRef.current) {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop()
          } catch (_) {}
        })
        try {
          audioCtxRef.current.close()
        } catch (_) {}
      }
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-[49] flex items-center gap-3">
      {/* Visual audio feedback bars */}
      {isPlaying && (
        <div className="flex items-end gap-[2px] h-4 px-2 bg-ink/80 backdrop-blur border border-gold/20 rounded-full py-1">
          <div className="w-[2px] h-full bg-gold-bright rounded animate-pulse" style={{ animationDelay: '0.1s' }} />
          <div className="w-[2px] h-1/2 bg-gold rounded animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-[2px] h-[75%] bg-gold-bright rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-[2px] h-[30%] bg-gold rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={togglePlayback}
        className="w-12 h-12 rounded-full border border-gold/30 bg-ink/90 text-gold-bright flex items-center justify-center cursor-pointer hover:bg-gold hover:text-ink hover:border-gold hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(200,168,75,0.2)] focus:outline-none"
        aria-label={isPlaying ? 'Mute background drone' : 'Play background drone'}
        title={isPlaying ? 'Mute background drone' : 'Play background drone'}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-bounce [animation-duration:2s]" />
        ) : (
          <VolumeX className="w-5 h-5 text-cream/50" />
        )}
      </button>
    </div>
  )
}
export default AmbientAudio
