/**
 * GLAMOROUS — Testimonials Data
 *
 * ⚠️ PLACEHOLDER NOTICE [T01]:
 * These are editable placeholder testimonials reflecting client feedback.
 * Replace with verified Google / Instagram reviews before public launch.
 */

export type TestimonialPlatform = 'google' | 'instagram' | 'direct'

export interface Testimonial {
  id: string
  authorName: string
  authorInitials: string
  location?: string
  service?: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  /** ISO date string: YYYY-MM-DD */
  date: string
  platform: TestimonialPlatform
  verified: boolean
  isFeatured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 't01',
    authorName: 'Zainab Fatima',
    authorInitials: 'ZF',
    location: 'Sarai Meer',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'My wedding makeup was everything I dreamed of and more. It felt so lightweight, photographed flawlessly, and lasted from the morning ceremony until late at night. Sabreen made me feel so calm and confident.',
    date: '2026-02-14',
    platform: 'google',
    verified: true,
    isFeatured: true,
  },
  {
    id: 't02',
    authorName: 'Aiman Khan',
    authorInitials: 'AK',
    location: 'Azamgarh',
    service: 'Reception Glam',
    rating: 5,
    text: 'The best makeup studio in Sarai Meer without a doubt. The attention to detail with eye makeup and hair styling was exceptional. Everyone at the reception complimented my look!',
    date: '2026-01-20',
    platform: 'instagram',
    verified: true,
    isFeatured: true,
  },
  {
    id: 't03',
    authorName: 'Sana Parveen',
    authorInitials: 'SP',
    location: 'Sarai Meer',
    service: 'Engagement & Party Makeup',
    rating: 5,
    text: 'They truly understand how to enhance your natural features without making you look overdone. The atmosphere in the studio is so warm and professional. Highly recommended!',
    date: '2026-02-05',
    platform: 'google',
    verified: true,
    isFeatured: true,
  },
]
