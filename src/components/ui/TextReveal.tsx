import { ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  lines?: string[]
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
}

export default function TextReveal({
  children,
  lines,
  className = '',
  as: Tag = 'div',
}: TextRevealProps) {
  if (lines && lines.length > 0) {
    return (
      <Tag className={`text-reveal-container ${className}`}>
        {lines.map((line, idx) => (
          <span key={idx} className="text-reveal-line">
            <span>{line}</span>
          </span>
        ))}
      </Tag>
    )
  }

  return (
    <Tag className={`text-reveal-line ${className}`}>
      <span>{children}</span>
    </Tag>
  )
}
