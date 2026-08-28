'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // If already seen this session, skip instantly via GSAP to avoid synchronous effect setState
    if (typeof window !== 'undefined' && sessionStorage.getItem('loaderShown')) {
      if (loaderRef.current) {
        loaderRef.current.style.display = 'none'
      }
      return
    }

    // Lock scroll on body while loader is active
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setDone(true)
        sessionStorage.setItem('loaderShown', '1')
      },
    })

    // Animate the gold line drawing
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }
    )
      // Fade in text
      .fromTo(
        textRef.current,
        { opacity: 0, letterSpacing: '0.6em' },
        { opacity: 1, letterSpacing: '0.4em', duration: 0.8, ease: 'power2.out' },
        '-=0.8'
      )
      // Pause
      .to({}, { duration: 0.4 })
      // Slide the loader UP and OFF screen
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.inOut',
      })

    return () => {
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
