'use client'

import { useEffect } from 'react'
import { initScrollAnimations, initParallax } from '@/utils/animations'

/**
 * ScrollAnimationProvider
 * Initializes IntersectionObserver-based scroll animations and parallax.
 * Must be mounted in a Client Component subtree.
 */
export default function ScrollAnimationProvider() {
  useEffect(() => {
    const cleanupAnimations = initScrollAnimations()
    const cleanupParallax = initParallax()

    return () => {
      cleanupAnimations()
      cleanupParallax()
    }
  }, [])

  // This component renders nothing — it only sets up side effects
  return null
}
