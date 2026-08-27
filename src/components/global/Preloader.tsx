'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Auto-dismiss after 1.5s — never blocks the page
    const timer = setTimeout(() => {
      setIsDone(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isDone) return null

  return (
    <div
      className={`preloader${isDone ? ' is-done' : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      <p className="preloader-wordmark">Glamorous</p>
      <p className="preloader-tagline">Makeup &amp; Beauty</p>
      <div className="preloader-bar-track">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  )
}
