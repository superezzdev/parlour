/**
 * GLAMOROUS — Testimonials
 *
 * ⚠️ CRITICAL NOTICE [T01]:
 * ONLY add testimonials that are:
 *   1. Real verified reviews from Google or Instagram
 *   2. Have explicit client consent
 *   3. Are accurately attributed
 *
 * NEVER fabricate testimonials. Leave this array empty until
 * real reviews are available. The site gracefully handles
 * an empty testimonials array.
 */

export type TestimonialPlatform = 'google' | 'instagram' | 'direct'

export interface Testimonial {
  id: string
  authorName: string
  authorInitials: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  /** ISO date string: YYYY-MM-DD */
  date: string
  platform: TestimonialPlatform
  verified: true
}

// [PLACEHOLDER T01] — add verified reviews here
// Uncomment and populate once real reviews are available:
//
// export const testimonials: Testimonial[] = [
//   {
//     id: 't01',
//     authorName: 'Client Name',
//     authorInitials: 'CN',
//     rating: 5,
//     text: 'Verified review text from Google / Instagram...',
//     date: '2025-01-01',
//     platform: 'google',
//     verified: true,
//   },
// ]

export const testimonials: Testimonial[] = []
