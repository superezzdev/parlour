/**
 * GLAMOROUS — Bridal Page Data
 * Bridal process steps, FAQ, and packages.
 *
 * ⚠️ PLACEHOLDER NOTICE:
 * Items BR01–BR06 in CONTENT_PLACEHOLDERS.md must be verified before launch.
 */

export interface BridalStep {
  number: string
  title: string
  description: string
}

export interface BridalFAQ {
  id: string
  question: string
  /** [PLACEHOLDER BR05] — verify answers with owner */
  answer: string
  placeholder?: boolean
}

export interface BridalPackage {
  id: string
  name: string
  description: string
  includes: string[]
  /** [PLACEHOLDER BR02] — never publish without owner confirmation */
  priceRange: string | null
  isPopular?: boolean
  placeholder?: boolean
}

/** The four-step bridal process */
export const bridalProcess: BridalStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We begin with an unhurried conversation about your vision, your outfit, and your skin. Every bride is different — and so is every look we create.',
  },
  {
    number: '02',
    title: 'Trial Session',
    description:
      'A dedicated trial run ahead of your big day, ensuring you feel completely at ease with your look — and have time to refine it.', // [PLACEHOLDER BR03]
  },
  {
    number: '03',
    title: 'Your Wedding Day',
    description:
      'We arrive with everything prepared. You relax. We craft your look with patience, precision, and care — so you can focus entirely on your day.',
  },
  {
    number: '04',
    title: 'The Finishing Touch',
    description:
      'Final touches, a moment to see yourself, and the confidence to walk into your most beautiful chapter.',
  },
]

/** Bridal FAQ [PLACEHOLDER BR05] */
export const bridalFAQs: BridalFAQ[] = [
  {
    id: 'faq-01',
    question: 'How far in advance should I book my bridal makeup?',
    answer:
      'We recommend booking your bridal appointment as early as possible — particularly for peak wedding season. Please contact us directly for availability.', // [PLACEHOLDER BR04]
    placeholder: true,
  },
  {
    id: 'faq-02',
    question: 'Do you offer a bridal trial session?',
    answer:
      'Yes, a trial session is highly recommended and can be arranged ahead of your wedding date. This gives you time to explore different looks and arrive at your final style with confidence.', // [PLACEHOLDER BR03]
    placeholder: true,
  },
  {
    id: 'faq-03',
    question: 'Do you travel to the wedding venue?',
    answer:
      'Please enquire directly about at-location and at-home service availability.', // [PLACEHOLDER BR06]
    placeholder: true,
  },
  {
    id: 'faq-04',
    question: 'What information should I bring to my consultation?',
    answer:
      'Bring inspiration images, any references you love, and details of your outfit and jewellery. The more context you share, the more precisely we can tailor your look.',
    placeholder: true,
  },
  {
    id: 'faq-05',
    question: 'How long does bridal makeup take on the day?',
    answer:
      'Please contact us to discuss your specific requirements and allow sufficient time in your schedule. We will guide you based on the look you have chosen.',
    placeholder: true,
  },
]

/** Bridal package cards [PLACEHOLDER BR01 + BR02] */
export const bridalPackages: BridalPackage[] = [
  {
    id: 'pkg-01',
    name: 'Essential Bridal',
    description:
      'A beautifully crafted bridal look for your most important day.', // [PLACEHOLDER BR01]
    includes: [
      'Bridal makeup',
      'Bridal hair styling',
    ],
    priceRange: null, // [PLACEHOLDER BR02]
    placeholder: true,
  },
  {
    id: 'pkg-02',
    name: 'Signature Bridal',
    description:
      'Our most-loved bridal experience — includes a trial session and day-of artistry.',
    includes: [
      'Bridal makeup',
      'Bridal hair styling',
      'Trial session',
    ],
    priceRange: null, // [PLACEHOLDER BR02]
    isPopular: true,
    placeholder: true,
  },
  {
    id: 'pkg-03',
    name: 'Full Bridal Suite',
    description:
      'A complete pre-bridal and wedding day package for the bride who wants everything considered.',
    includes: [
      'Bridal makeup',
      'Bridal hair styling',
      'Trial session',
      'Pre-bridal skin treatment',
    ],
    priceRange: null, // [PLACEHOLDER BR02]
    placeholder: true,
  },
]
