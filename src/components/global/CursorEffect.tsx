'use client'

import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '@/utils/animations'

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Don't render on touch devices or reduced-motion
    if (prefersReducedMotion()) return
    if (typeof window === 'undefined') return

    // Check for touch / mobile (no cursor on touch or mobile devices)
    const isTouchOrMobile = window.matchMedia('(pointer: coarse), (hover: none), (max-width: 1023px)').matches
    if (isTouchOrMobile) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0
    let ringY = 0
    let dotX = 0
    let dotY = 0
    let animId: number

    const moveCursor = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
      setIsVisible(true)
    }

    const animate = () => {
      // Dot follows exactly
      dot.style.left = `${dotX}px`
      dot.style.top = `${dotY}px`

      // Ring follows with slight lag
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      animId = requestAnimationFrame(animate)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('a, button, [role="button"], [role="tab"], input, select, textarea, label')) {
        ring.classList.add('is-hovering')
      } else {
        ring.classList.remove('is-hovering')
      }
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
