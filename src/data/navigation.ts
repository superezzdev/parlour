/**
 * GLAMOROUS — Navigation Data
 * Primary nav links, footer links, and CTA config.
 */

export interface NavLink {
  label: string
  href: string
  /** Matches pathname exactly for active state */
  exact?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home',     href: '/',         exact: true },
  { label: 'Services', href: '/services' },
  { label: 'Bridal',   href: '/bridal' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'About',    href: '/about' },
]

export const ctaLink = {
  label: 'Book an Appointment',
  href: '/contact',
}

export const footerLinks: NavLink[] = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bridal',   href: '/bridal' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]
