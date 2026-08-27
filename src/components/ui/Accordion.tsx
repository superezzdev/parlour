'use client'

import { useState } from 'react'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className={`accordion ${className}`} role="list">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className="accordion-item" role="listitem">
            <button
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              onClick={() => toggle(item.id)}
            >
              <span>{item.question}</span>
              {/* Plus / X icon */}
              <svg
                className="accordion-icon"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="10" y1="4" x2="10" y2="16" />
                <line x1="4" y1="10" x2="16" y2="10" />
              </svg>
            </button>

            <div
              id={`accordion-content-${item.id}`}
              className={`accordion-content${isOpen ? ' is-open' : ''}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              hidden={!isOpen}
            >
              <p className="accordion-body">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
