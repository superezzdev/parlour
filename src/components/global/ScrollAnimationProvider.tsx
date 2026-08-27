'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initScrollAnimations, initParallax } from '@/utils/animations'

/**
 * ScrollAnimationProvider
 * Initializes IntersectionObserver-based scroll animations and parallax.
 * Automatically re-evaluates targets upon client route navigation.
 */
export default function ScrollAnimationProvider() {
  const pathname = usePathname()

  useEffect(() => {
    const cleanupAnimations = initScrollAnimations()
    const cleanupParallax = initParallax()

    return () => {
      cleanupAnimations?.()
      cleanupParallax?.()
    }
  }, [pathname])

  // This component renders nothing — it only sets up side effects
  return null
}
