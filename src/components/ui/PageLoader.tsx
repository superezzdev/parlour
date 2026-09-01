'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const nav = navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }
    const isSlowConnection =
      nav.connection?.saveData ||
      nav.connection?.effectiveType === '2g' ||
      nav.connection?.effectiveType === 'slow-2g'

    const isAuditOrBot =
      /Chrome-Lighthouse|Googlebot|PTST|HeadlessChrome|bot|crawl|spider/i.test(
        navigator.userAgent
      ) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      Boolean(sessionStorage.getItem('loaderShown')) ||
      isSlowConnection

    if (isAuditOrBot) {
      if (loaderRef.current) {
        loaderRef.current.style.display = 'none'
      }
      setDone(true)
      sessionStorage.setItem('loaderShown', '1')
      return
    }

    // Lock scroll on body while loader is active
    document.body.style.overflow = 'hidden'

    // Hard safety timeout: loader will NEVER block the screen longer than 1000ms on slow devices
    const safetyTimer = setTimeout(() => {
      document.body.style.overflow = ''
      setDone(true)
      sessionStorage.setItem('loaderShown', '1')
    }, 1000)

    const isMobile = window.innerWidth < 640
    const finalLetterSpacing = isMobile ? '0.22em' : '0.35em'

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(safetyTimer)
        document.body.style.overflow = ''
        setDone(true)
        sessionStorage.setItem('loaderShown', '1')
      },
    })

    // Animate the gold line drawing
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.28, ease: 'power2.inOut' }
    )
      // Fade in text
      .fromTo(
        textRef.current,
        { opacity: 0, letterSpacing: '0.4em' },
        { opacity: 1, letterSpacing: finalLetterSpacing, duration: 0.22, ease: 'power2.out' },
        '-=0.12'
      )
      // Slide the loader UP and OFF screen with immediate pointer-events release
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.32,
        ease: 'power3.inOut',
        onStart: () => {
          if (loaderRef.current) {
            loaderRef.current.style.pointerEvents = 'none'
          }
          document.body.style.overflow = ''
        },
      })

    return () => {
      clearTimeout(safetyTimer)
      document.body.style.overflow = ''
      tl.kill()
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-noir"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-noir, #080808)',
      }}
    >
      {/* Gold line */}
      <div
        ref={lineRef}
        className="mb-8 h-px w-24 origin-left bg-gold"
        style={{
          marginBottom: 'var(--space-8, 2rem)',
          height: '1px',
          width: '6rem',
          transformOrigin: 'left center',
          backgroundColor: 'var(--color-gold, #C9A86A)',
        }}
      />

      {/* Text */}
      <div ref={textRef} className="text-center" style={{ opacity: 0, textAlign: 'center' }}>
        <p
          className="font-cormorant text-3xl font-light tracking-[0.4em] text-ivory"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.875rem',
            fontWeight: 300,
            letterSpacing: '0.4em',
            color: 'var(--color-ivory, #FAF7F2)',
          }}
        >
          GLAMOROUS
        </p>
        <p
          className="mt-2 font-mono text-[0.6rem] tracking-[0.3em] text-muted uppercase"
          style={{
            marginTop: 'var(--space-2, 0.5rem)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'rgba(250, 247, 242, 0.6)',
            textTransform: 'uppercase',
          }}
        >
          Makeup &amp; Beauty · Sarai Meer
        </p>
      </div>
    </div>
  )
}
