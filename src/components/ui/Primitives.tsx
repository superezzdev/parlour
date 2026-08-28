import React, { HTMLAttributes, ReactNode, forwardRef } from 'react'
import Link from 'next/link'

interface SectionLabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className = '', ...props }: SectionLabelProps) {
  return (
    <p className={`label ${className}`} aria-label={typeof children === 'string' ? children : undefined} {...props}>
      {children}
    </p>
  )
}

export interface EditorialHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm'
  italic?: boolean
  children: ReactNode
  className?: string
  'data-reveal'?: boolean | string
}

export const EditorialHeading = forwardRef<HTMLHeadingElement, EditorialHeadingProps>(
  function EditorialHeading(
    {
      as: Tag = 'h2',
      size = 'lg',
      italic = false,
      children,
      className = '',
      'data-reveal': dataReveal,
      ...props
    },
    ref
  ) {
    return (
      <Tag
        ref={ref}
        className={`text-display-${size}${italic ? ' text-display-italic' : ''} ${className}`}
        {...(dataReveal !== undefined ? { 'data-reveal': dataReveal === true ? '' : dataReveal } : {})}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'filled' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  external = false,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim()

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: 'default' | 'rose'
  className?: string
}

export function Divider({ variant = 'default', className = '', ...props }: DividerProps) {
  return (
    <hr
      className={`divider${variant === 'rose' ? ' divider--rose' : ''} ${className}`}
      aria-hidden="true"
      {...props}
    />
  )
}
