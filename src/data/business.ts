/**
 * GLAMOROUS — Business & Brand Master Data
 * Single editable source of truth for:
 * - name, tagline, description
 * - address & location
 * - phone & WhatsApp
 * - Instagram & social links
 * - Google map URL & embed
 * - opening hours
 * - service offerings & categories
 * - bridal packages & FAQs
 *
 * Update this file to propagate changes across the entire website.
 */

export * from './salon'
export * from './services'
export * from './bridal'
export * from './gallery'
export * from './navigation'
export * from './testimonials'

import { salon } from './salon'
import { serviceCategories, signatureServices } from './services'
import { bridalPackages, bridalProcess, bridalFAQs } from './bridal'
import { navLinks, footerLinks, ctaLink } from './navigation'
import { testimonials } from './testimonials'
import { galleryImages, galleryCategories } from './gallery'

export const business = {
  ...salon,
  services: serviceCategories,
  signatureServices,
  bridalPackages,
  bridalProcess,
  bridalFAQs,
  navLinks,
  footerLinks,
  ctaLink,
  testimonials,
  galleryImages,
  galleryCategories,
}

export default business
