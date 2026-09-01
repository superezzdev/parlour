'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    // Use sensible lagSmoothing so frame drops on mobile/bad internet do not cause visual jumping
    gsap.ticker.lagSmoothing(500, 33)

    // Refresh ScrollTrigger after initial paint, font readiness, and complete window load
    const refreshTimer1 = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 300)

    const refreshTimer2 = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 1200)

    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh()
      })
    }

    const handleLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', handleLoad, { passive: true })

    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      clearTimeout(refreshTimer1)
      clearTimeout(refreshTimer2)
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('resize', handleResize)
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
