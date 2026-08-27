'use client'

import { useRef, useState, ReactNode, MouseEvent } from 'react'
import Link from 'next/link'
import { prefersReducedMotion } from '@/utils/animations'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'filled' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  strength?: number
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  strength = 0.3,
  type = 'button',
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const classes = `btn btn-${variant} btn-${size} ${className}`.trim()
  const transformStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition:
      position.x === 0 && position.y === 0
        ? 'transform 0.5s var(--ease-out)'
        : 'transform 0.1s linear',
    display: 'inline-block',
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
    >
      {href ? (
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </button>
      )}
    </div>
  )
}
