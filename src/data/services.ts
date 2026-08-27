/**
 * GLAMOROUS — Services Data
 * All service categories and services.
 *
 * ⚠️ PLACEHOLDER NOTICE:
 * ALL service names, descriptions, durations, and pricing are placeholders.
 * MUST be verified with the business owner before launch.
 * See CONTENT_PLACEHOLDERS.md items S01–S07.
 */

export interface Service {
  id: string
  name: string
  description: string
  /** [PLACEHOLDER S03] — verify with owner */
  duration: string | null
  /** [PLACEHOLDER S02] — verify with owner — NEVER publish unconfirmed pricing */
  priceRange: string | null
  isSignature?: boolean
  imageUrl?: string
  /** true = content not yet confirmed */
  placeholder?: boolean
}

export interface ServiceCategory {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'makeup',
    name: 'Makeup',
    slug: 'makeup',
    description:
      'From subtle day looks to full editorial glamour — every face tells a story worth telling beautifully.',
    icon: 'sparkles',
    services: [
      {
        id: 'makeup-01',
        name: 'Party Makeup',
        description: 'A curated look crafted for celebrations — luminous, lasting, entirely yours.',
        duration: null,
        priceRange: null,
        isSignature: true,
        imageUrl: '/images/services/makeup.jpg',
        placeholder: true,
      },
      {
        id: 'makeup-02',
        name: 'Day / Natural Makeup',
        description: 'Effortless elegance for everyday occasions.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/gallery/makeup/makeup-01.jpg',
        placeholder: true,
      },
      {
        id: 'makeup-03',
        name: 'Engagement / Occasion Makeup',
        description: 'Designed to photograph beautifully from every angle.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/services/event.jpg',
        placeholder: true,
      },
    ],
  },
  {
    id: 'bridal',
    name: 'Bridal',
    slug: 'bridal',
    description:
      'Your wedding day deserves a look that is entirely, unmistakably you — crafted with patience and precision.',
    icon: 'diamond',
    services: [
      {
        id: 'bridal-01',
        name: 'Bridal Makeup',
        description: 'A bespoke bridal look, tailored to your personality, style, and ceremony.',
        duration: null,
        priceRange: null,
        isSignature: true,
        imageUrl: '/images/services/bridal.jpg',
        placeholder: true,
      },
      {
        id: 'bridal-02',
        name: 'Bridal Trial Session',
        description:
          'A relaxed session to explore your look ahead of your wedding day.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/bridal/bridal-portrait.jpg',
        placeholder: true,
      },
      {
        id: 'bridal-03',
        name: 'Pre-Bridal Package',
        description:
          'A personalised series of treatments in the lead-up to your big day.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/hero/editorial-moment.jpg',
        placeholder: true,
      },
    ],
  },
  {
    id: 'hair',
    name: 'Hair',
    slug: 'hair',
    description: 'From classic updos to flowing waves — hair styled to complement your look.',
    icon: 'scissors',
    services: [
      {
        id: 'hair-01',
        name: 'Bridal Hair Styling',
        description: 'Traditional and contemporary bridal hair, crafted to last all day.',
        duration: null,
        priceRange: null,
        isSignature: true,
        imageUrl: '/images/services/hair.jpg',
        placeholder: true,
      },
      {
        id: 'hair-02',
        name: 'Party Hair Styling',
        description: 'Elegant styling for events, functions, and celebrations.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/gallery/hair/hair-01.jpg',
        placeholder: true,
      },
    ],
  },
  {
    id: 'skin',
    name: 'Skin & Beauty',
    slug: 'skin',
    description: 'Considered skin treatments that enhance your natural radiance.',
    icon: 'leaf',
    services: [
      {
        id: 'skin-01',
        name: 'Facial Treatment',
        description: 'Restore glow and clarity with a tailored facial.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/services/skin.jpg',
        placeholder: true,
      },
      {
        id: 'skin-02',
        name: 'Threading & Waxing',
        description: 'Clean, precise shaping for brows and face.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/gallery/beauty/beauty-02.jpg',
        placeholder: true,
      },
    ],
  },
  {
    id: 'nails',
    name: 'Nails',
    slug: 'nails',
    description: 'Perfectly finished nails to complete every look.',
    icon: 'hand',
    services: [
      {
        id: 'nails-01',
        name: 'Manicure',
        description: 'Classic manicure with cuticle care and polish of your choice.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/services/nails.jpg',
        placeholder: true,
      },
      {
        id: 'nails-02',
        name: 'Nail Art',
        description: 'Intricate nail art for weddings and special occasions.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/gallery/details/details-02.jpg',
        placeholder: true,
      },
    ],
  },
  {
    id: 'event',
    name: 'Event & Party',
    slug: 'event',
    description: 'Look your best at every function — mehndi, sangeet, reception, and beyond.',
    icon: 'star',
    services: [
      {
        id: 'event-01',
        name: 'Mehendi / Sangeet Look',
        description: 'Vibrant, festive looks tailored to your outfit and occasion.',
        duration: null,
        priceRange: null,
        isSignature: true,
        imageUrl: '/images/services/event.jpg',
        placeholder: true,
      },
      {
        id: 'event-02',
        name: 'Reception Makeup',
        description: 'A striking look for your evening celebrations.',
        duration: null,
        priceRange: null,
        imageUrl: '/images/services/makeup.jpg',
        placeholder: true,
      },
    ],
  },
]

/** Convenience: get signature services for the home page (4-6 services) */
export const signatureServices: Service[] = serviceCategories
  .flatMap((cat) => cat.services.filter((s) => s.isSignature))
  .slice(0, 5)
