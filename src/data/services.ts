/**
 * GLAMOROUS — Services Data
 * Single source of truth for all service categories and individual offerings.
 *
 * ⚠️ PLACEHOLDER NOTICE:
 * All services and descriptions represent curated studio placeholders.
 * Strictly NO fake pricing: unverified pricing is omitted.
 */

export interface ServiceItem {
  id: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  duration: string | null
  priceRange: string | null
  pricingNote?: string
  isSignature?: boolean
  imageUrl: string
  imageAlt: string
  categoryNumber: string
  categorySlug: string
  placeholder?: boolean
}

export interface ServiceCategory {
  id: string
  number: string
  name: string
  navLabel: string
  slug: string
  tagline: string
  description: string
  icon: string
  heroImage: string
  services: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'makeup',
    number: '01',
    name: 'Makeup Artistry',
    navLabel: 'MAKEUP',
    slug: 'makeup',
    tagline: 'Luminous, sculpted elegance for your defining moments',
    description:
      'From soft daytime refinement to high-impact celebratory glamour, our makeup artistry is tailored to harmonise with your individual facial architecture and skin tone.',
    icon: 'sparkles',
    heroImage: '/images/services/makeup.jpg',
    services: [
      {
        id: 'party-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Party & Occasion Makeup',
        tagline: 'High-definition glamour designed to illuminate every celebration.',
        description:
          'A curated beauty look balancing luminous skin, sculpted dimension, and enduring wear. Whether attending an intimate reception or a grand gala, every element is matched to your outfit and personal comfort.',
        highlights: [
          'High-Definition Custom Complexion Base',
          'Precision Eye Artistry & Lash Application',
          'Lip Shading & Long-Wear Setting',
          '12+ Hour Flawless Endurance',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Custom quote upon consultation',
        isSignature: true,
        imageUrl: '/images/services/makeup.jpg',
        imageAlt: 'High-definition party and celebration makeup by Glamorous studio',
        placeholder: true,
      },
      {
        id: 'natural-glam',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Soft Glamour & Daytime Elegance',
        tagline: 'Understated radiance celebrating your authentic beauty.',
        description:
          'Designed for day events, pre-wedding luncheons, and family gatherings where a featherlight, dewy aesthetic is desired. Soft tones and seamless blending create an effortlessly elevated presence.',
        highlights: [
          'Dewy Skin-First Foundation Application',
          'Soft Neutral Tonal Eyeshadow & Liner',
          'Natural Brow Shaping & Feathering',
          'Weightless, Breathable Setting',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Consultation upon request',
        isSignature: false,
        imageUrl: '/images/gallery/makeup/makeup-01.jpg',
        imageAlt: 'Soft natural daytime beauty look crafted with precision',
        placeholder: true,
      },
      {
        id: 'engagement-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Engagement & Sagan Look',
        tagline: 'Captivating, camera-ready presence from ring ceremony to banquet.',
        description:
          'Structured specifically to transition from afternoon sunlight to evening chandeliers. We integrate reflective pigments and skin-smoothing primers for unforgettable photography.',
        highlights: [
          'Flash-Photography Proof Color Balancing',
          'Custom Glitter / Metallic Accent Detailing',
          'Contouring & Cheekbone Highlighting',
          'Touch-Up Guidance Included',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Consultation upon request',
        isSignature: false,
        imageUrl: '/images/gallery/makeup/makeup-02.jpg',
        imageAlt: 'Captivating engagement makeup designed for photographic brilliance',
        placeholder: true,
      },
    ],
  },
  {
    id: 'bridal',
    number: '02',
    name: 'Bridal Artistry',
    navLabel: 'BRIDAL',
    slug: 'bridal',
    tagline: 'The pinnacle of ceremony-ready precision, patience, and grace',
    description:
      'The centerpiece of Glamorous. We provide an intimate, unhurried bridal experience honoring your cultural heritage, outfit nuances, and emotional journey into marriage.',
    icon: 'diamond',
    heroImage: '/images/services/bridal.jpg',
    services: [
      {
        id: 'signature-bridal',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Signature Bridal Makeup & Styling',
        tagline: 'Bespoke, timeless wedding day artistry crafted for the spotlight.',
        description:
          'A comprehensive bridal transformation incorporating couture base preparation, tears-and-humidity-resistant formulas, personalized eye design, and harmonized color palettes tailored to your bridal lehenga.',
        highlights: [
          'Complete Bridal Skin Prep & Priming Ritual',
          'Full-Coverage Waterproof & Sweat-Resistant Base',
          'Bespoke Eye Artistry with Premium Lashes',
          'Jewelry, Dupatta & Veil Artistry Coordination',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Bespoke bridal consultation required',
        isSignature: true,
        imageUrl: '/images/services/bridal.jpg',
        imageAlt: 'Timeless luxury Indian bridal makeup and jewellery styling',
        placeholder: true,
      },
      {
        id: 'bridal-trial',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Bridal Consultation & Trial Session',
        tagline: 'An exploratory preview to perfect every nuance ahead of your wedding.',
        description:
          'A dedicated studio consultation where we test color palettes, evaluate skin response, and map your hair design against your attire, ensuring complete peace of mind on the main day.',
        highlights: [
          'Skin Diagnostics & Tone Color Matching',
          'Eyeshadow & Lip Palette Experimentation',
          'Lighting Check & Test Photography',
          'Day-Of Schedule & Routine Planning',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Advance booking recommended',
        isSignature: false,
        imageUrl: '/images/bridal/bridal-portrait.jpg',
        imageAlt: 'Bridal consultation and personalized look preview session',
        placeholder: true,
      },
      {
        id: 'pre-bridal-rituals',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Pre-Bridal Radiance Series',
        tagline: 'Curated wellness and skin polishing in the weeks leading to the aisle.',
        description:
          'A multi-session series of nourishing facials, gentle exfoliation, and body polish therapies designed to cultivate glass-like translucence and relaxation before your wedding festivities begin.',
        highlights: [
          'Multi-Stage Brightening Facial Therapy',
          'Targeted Skin Hydration & Barrier Support',
          'Full-Body Polishing & Glow Enhancement',
          'Custom Timeline Tailored to Wedding Date',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Custom package upon consultation',
        isSignature: false,
        imageUrl: '/images/hero/editorial-moment.jpg',
        imageAlt: 'Pre-bridal skin radiance and rejuvenation therapy',
        placeholder: true,
      },
    ],
  },
  {
    id: 'hair',
    number: '03',
    name: 'Hair Styling & Draping',
    navLabel: 'HAIR',
    slug: 'hair',
    tagline: 'Architectural crowns, flowing textures, and immaculate draping',
    description:
      'Hair styled to frame your face and withstand long celebratory hours, paired with immaculate dupatta, veil, and saree draping executed with master craftsmanship.',
    icon: 'scissors',
    heroImage: '/images/services/hair.jpg',
    services: [
      {
        id: 'bridal-hair',
        categoryNumber: '03',
        categorySlug: 'hair',
        name: 'Bridal Hair Architecture & Fresh Floral Styling',
        tagline: 'Intricate updos and structured buns built to hold heavy headpieces.',
        description:
          'From traditional ornate buns framed with fresh gajra and matha patti to modern textured crowns. Engineered with hidden structural foundations so your hair remains impeccable throughout ceremonies.',
        highlights: [
          'Structural Padding & Heavy Matha Patti Anchoring',
          'Fresh Floral & Ornamental Brooch Integration',
          'Heat-Activated Long-Hold Setting',
          'Dupatta & Veil Pinning Included',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Tailored on consultation',
        isSignature: true,
        imageUrl: '/images/services/hair.jpg',
        imageAlt: 'Intricate traditional bridal hairstyle with floral and jewellery accents',
        placeholder: true,
      },
      {
        id: 'party-hair',
        categoryNumber: '03',
        categorySlug: 'hair',
        name: 'Festive Waves & Contemporary Upstyles',
        tagline: 'Romantic textured curls, Hollywood waves, and effortless twists.',
        description:
          'Versatile styling for sangeets, cocktail dinners, and receptions. Tailored to flatter your neckline and harmonize with western gowns, anarkalis, or contemporary lehengas.',
        highlights: [
          'High-Gloss Thermal Wave & Curl Styling',
          'Volume & Texture Boosting Foundations',
          'Anti-Frizz Humidity Shield Treatment',
          'Accessory Placement Assistance',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Consultation upon request',
        isSignature: false,
        imageUrl: '/images/gallery/hair/hair-01.jpg',
        imageAlt: 'Romantic flowing textured waves and elegant festive hair styling',
        placeholder: true,
      },
    ],
  },
  {
    id: 'beauty',
    number: '04',
    name: 'Festive & Occasion Beauty',
    navLabel: 'BEAUTY',
    slug: 'beauty',
    tagline: 'Radiant, celebratory aesthetics tailored for cultural festivities',
    description:
      'From Mehendi afternoons to Sangeet dance stages, our festive beauty services celebrate vibrant color palettes, playful illuminators, and camera-ready durability.',
    icon: 'star',
    heroImage: '/images/services/event.jpg',
    services: [
      {
        id: 'mehendi-sangeet-look',
        categoryNumber: '04',
        categorySlug: 'beauty',
        name: 'Mehendi & Sangeet Festive Look',
        tagline: 'Vibrant, sweat-proof glamour engineered for lively dancing and joy.',
        description:
          'Luminous skin paired with jewel-toned accents, shimmering eyes, and lightweight setting formulas that stay fresh through energetic dance performances and long festivities.',
        highlights: [
          'Vibrant Pigment & Glitter Coordinated to Attire',
          'Sweat-Resistant & Non-Transferable Base',
          'Glow-Boosting Cheek Illuminators',
          'Playful & Expressive Eye Detailing',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Consultation upon request',
        isSignature: true,
        imageUrl: '/images/services/event.jpg',
        imageAlt: 'Vibrant celebratory Mehendi and Sangeet festive makeup',
        placeholder: true,
      },
      {
        id: 'reception-editorial',
        categoryNumber: '04',
        categorySlug: 'beauty',
        name: 'Grand Reception & Evening Glamour',
        tagline: 'Sculpted, high-contrast drama under evening chandelier lighting.',
        description:
          'Deep smoky eyes, defined contouring, and velvet or glossy lips designed to make a regal entrance at wedding receptions and formal galas.',
        highlights: [
          'Dramatic Smoky or Cut-Crease Eye Design',
          'Chiseled Sculpt & Velvet Highlight',
          'High-Pigment Transfer-Proof Lip Styling',
          'Luminous Decolletage Shimmer Finish',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Consultation upon request',
        isSignature: false,
        imageUrl: '/images/gallery/makeup/makeup-03.jpg',
        imageAlt: 'Dramatic evening reception beauty look with sculpted features',
        placeholder: true,
      },
    ],
  },
  {
    id: 'skin',
    number: '05',
    name: 'Skin Care & Rituals',
    navLabel: 'SKIN',
    slug: 'skin',
    tagline: 'Nourishing therapies awakening natural luminosity from within',
    description:
      'We believe makeup is only as radiant as the canvas beneath it. Our skin rituals focus on deep hydration, gentle exfoliation, and targeted care to reveal smooth, glowing skin.',
    icon: 'leaf',
    heroImage: '/images/services/skin.jpg',
    services: [
      {
        id: 'radiance-facial',
        categoryNumber: '05',
        categorySlug: 'skin',
        name: 'Glow & Radiance Facial Ritual',
        tagline: 'Deep cellular hydration restoring clarity, tone, and vitality.',
        description:
          'A multi-step restorative facial including gentle ultrasonic cleansing, enzyme exfoliation, botanical serum infusion, and a calming lymphatic drainage massage for an instant lit-from-within glow.',
        highlights: [
          'Skin Analysis & Personalized Serum Selection',
          'Non-Abrasive Pore Clarification & Exfoliation',
          'Rejuvenating Facial Lymphatic Massage',
          'Deep Hydration Alginate Finishing Mask',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Consultation upon request',
        isSignature: true,
        imageUrl: '/images/services/skin.jpg',
        imageAlt: 'Restorative skin care facial treatment and relaxation ritual',
        placeholder: true,
      },
      {
        id: 'precision-threading',
        categoryNumber: '05',
        categorySlug: 'skin',
        name: 'Precision Threading & Brow Architecture',
        tagline: 'Meticulous brow shaping that frames your eyes with clean perfection.',
        description:
          'Expert brow shaping and facial threading using gentle, hygienic cotton thread to define arches, remove fine facial peach fuzz, and optimize the canvas for seamless makeup application.',
        highlights: [
          'Bespoke Eyebrow Mapping & Architecture',
          'Full-Face or Targeted Threading Options',
          'Soothing Rosewater & Aloe Post-Care',
          'Zero Disruption to Delicate Skin Barrier',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Walk-in or appointment',
        isSignature: false,
        imageUrl: '/images/gallery/beauty/beauty-02.jpg',
        imageAlt: 'Precision eyebrow threading and facial definition care',
        placeholder: true,
      },
    ],
  },
  {
    id: 'nails',
    number: '06',
    name: 'Manicure & Nail Artistry',
    navLabel: 'NAILS',
    slug: 'nails',
    tagline: 'Impeccably finished details completing your head-to-toe styling',
    description:
      'Hands hold the garland, receive blessings, and showcase rings. Our nail artistry ensures every fingertip is shaped, conditioned, and polished to perfection.',
    icon: 'hand',
    heroImage: '/images/services/nails.jpg',
    services: [
      {
        id: 'bridal-nail-art',
        categoryNumber: '06',
        categorySlug: 'nails',
        name: 'Bridal & Festive Custom Nail Art',
        tagline: 'Hand-painted motifs, gold foil accents, and durable gel finishes.',
        description:
          'Custom nail embellishments created to harmonize with your bridal henna, jewelry stones, and outfit palette. Built with chip-resistant gel formulas for weeks of immaculate shine.',
        highlights: [
          'Detailed Cuticle Conditioning & Shaping',
          'Hand-Painted Bridal Embellishments & Foiling',
          'High-Gloss Long-Wear Gel Coating',
          'Nail Extension Options Available',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Consultation upon request',
        isSignature: true,
        imageUrl: '/images/services/nails.jpg',
        imageAlt: 'Custom bridal nail art with delicate foiling and high-gloss polish',
        placeholder: true,
      },
      {
        id: 'classic-manicure',
        categoryNumber: '06',
        categorySlug: 'nails',
        name: 'Studio Spa Manicure',
        tagline: 'A revitalizing care treatment for velvety soft hands and clean nails.',
        description:
          'Gentle soaking, cuticle restoration, exfoliation scrub, relaxing hand massage, and professional lacquer application in your choice of classic nude, rose, or vibrant hues.',
        highlights: [
          'Aromatherapy Hand Soak & Exfoliation',
          'Deep Cuticle Hydration & Buffing',
          'Therapeutic Hand & Wrist Massage',
          'Chip-Resistant Lacquer or Gel Polish',
        ],
        duration: null,
        priceRange: null,
        pricingNote: 'Walk-in or appointment',
        isSignature: false,
        imageUrl: '/images/gallery/details/details-02.jpg',
        imageAlt: 'Studio spa manicure with hand care treatment',
        placeholder: true,
      },
    ],
  },
]

/** Backward compatibility alias */
export type Service = ServiceItem

/** Convenience helper: signature services */
export const signatureServices: ServiceItem[] = serviceCategories
  .flatMap((cat) => cat.services.filter((s) => s.isSignature))
