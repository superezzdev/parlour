# GLAMOROUS — TECHNICAL ARCHITECTURE

> **Version:** 1.0 | **Date:** 2026-08-27  
> Defines the technical stack, folder structure, data architecture, and implementation patterns.

---

## 1. TECHNOLOGY DECISIONS

### 1.1 Recommended Stack

| Layer | Technology | Rationale |
|---|---|---|
| Build Tool | Vite 5 | Fast HMR, zero-config, excellent static output |
| Language | Vanilla JS (ES2022+) | No framework overhead — pure performance |
| Styling | Vanilla CSS with custom properties | Full control, zero abstraction layers |
| Routing | Single-page with History API | Clean URLs, smooth transitions |
| Templating | HTML + JS template literals | Simple, composable, no JSX |
| Fonts | Google Fonts (preconnect) | Self-host if performance demands |
| Icons | Lucide (tree-shaken) | SVG inline, consistent, lightweight |
| Animation | GSAP (optional) + CSS animations | Premium feel, degradable |
| Map | Google Maps embed iframe | Simplest, most trusted |
| Forms | Vanilla fetch to backend or Formspree/Netlify Forms | Zero JS framework needed |
| Hosting | Vercel or Netlify | Automatic CDN, compression, HTTPS |

> **Upgrade path**: If the project grows to need a CMS or complex state,
> migrate to Next.js with Contentlayer. The current file structure supports
> this migration without major refactoring.

### 1.2 No Framework Justification
A multi-page beauty website with no dynamic data requirements (beyond the booking form) does NOT need React/Vue/Svelte. Vanilla JS + Vite delivers:
- Smaller bundles
- Faster load times
- No hydration overhead
- Simpler maintenance

---

## 2. FOLDER STRUCTURE

```
parlour/
├── docs/                        ← All project documentation
│   ├── GLAMOROUS_MASTER.md
│   ├── CONTENT_PLACEHOLDERS.md
│   ├── DESIGN_SYSTEM.md
│   ├── TECHNICAL_ARCHITECTURE.md
│   ├── SEO.md
│   └── ANIMATION_SYSTEM.md
│
├── public/                      ← Static assets (copied as-is)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.jpg             ← Default Open Graph image (1200×630)
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── images/
│       ├── gallery/
│       │   ├── bridal/
│       │   ├── makeup/
│       │   ├── hair/
│       │   ├── beauty/
│       │   └── details/
│       ├── hero/
│       ├── services/
│       └── about/
│
├── src/
│   ├── index.html               ← App shell / entry point
│   │
│   ├── styles/
│   │   ├── tokens.css           ← All CSS custom properties (design tokens)
│   │   ├── reset.css            ← CSS reset / normalize
│   │   ├── typography.css       ← Type scale, font imports
│   │   ├── layout.css           ← Container, grid, section utilities
│   │   ├── animations.css       ← Reusable animation classes
│   │   └── main.css             ← Global styles, imports all above
│   │
│   ├── data/
│   │   ├── salon.js             ← Single source of truth: business info
│   │   ├── services.js          ← All service categories and services
│   │   ├── gallery.js           ← Gallery image manifest
│   │   ├── bridal.js            ← Bridal packages, process, FAQ
│   │   ├── testimonials.js      ← Verified testimonials only
│   │   └── navigation.js        ← Nav links and structure
│   │
│   ├── components/
│   │   ├── global/
│   │   │   ├── navbar.js
│   │   │   ├── footer.js
│   │   │   ├── whatsapp-fab.js
│   │   │   └── skip-link.js
│   │   ├── ui/
│   │   │   ├── button.js
│   │   │   ├── input.js
│   │   │   ├── accordion.js
│   │   │   ├── filter-pill.js
│   │   │   ├── image-reveal.js
│   │   │   └── divider.js
│   │   └── sections/
│   │       ├── hero-section.js
│   │       ├── brand-intro.js
│   │       ├── service-grid.js
│   │       ├── service-card.js
│   │       ├── editorial-image-block.js
│   │       ├── bridal-teaser.js
│   │       ├── gallery-grid.js
│   │       ├── gallery-lightbox.js
│   │       ├── testimonial-strip.js
│   │       ├── location-block.js
│   │       ├── appointment-cta.js
│   │       ├── bridal-process.js
│   │       ├── bridal-package-card.js
│   │       ├── faq-accordion.js
│   │       ├── contact-form.js
│   │       ├── map-embed.js
│   │       └── page-hero.js
│   │
│   ├── pages/
│   │   ├── home/
│   │   │   ├── home.js
│   │   │   └── home.css
│   │   ├── services/
│   │   │   ├── services.js
│   │   │   └── services.css
│   │   ├── bridal/
│   │   │   ├── bridal.js
│   │   │   └── bridal.css
│   │   ├── gallery/
│   │   │   ├── gallery.js
│   │   │   └── gallery.css
│   │   ├── about/
│   │   │   ├── about.js
│   │   │   └── about.css
│   │   ├── contact/
│   │   │   ├── contact.js
│   │   │   └── contact.css
│   │   └── thank-you/
│   │       ├── thank-you.js
│   │       └── thank-you.css
│   │
│   ├── utils/
│   │   ├── router.js            ← SPA router (History API)
│   │   ├── animations.js        ← IntersectionObserver + GSAP helpers
│   │   ├── form-handler.js      ← Appointment form submission logic
│   │   ├── gallery-filter.js    ← Gallery masonry + filter logic
│   │   ├── meta.js              ← Dynamic meta tag updater per page
│   │   └── schema.js            ← JSON-LD structured data generators
│   │
│   └── main.js                  ← Entry point: initialises router + global components
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 3. DATA ARCHITECTURE

### 3.1 `src/data/salon.js` — Master Business Data

```javascript
/**
 * GLAMOROUS — Salon Data
 * Single source of truth for all business information.
 * Update this file to propagate changes across the entire site.
 */
export const salon = {
  name: 'Glamorous',
  tagline: 'Beauty Crafted for Your Most Memorable Moments', // PLACEHOLDER H01
  description: 'A premium makeup and beauty studio in Sarai Meer, Uttar Pradesh, specialising in bridal artistry and beauty transformations.', // PLACEHOLDER BRAND_INTRO
  phone: '+918837779719',
  phoneDisplay: '+91 88377 79719',
  whatsapp: '+918837779719',
  whatsappUrl: 'https://wa.me/918837779719?text=Hi%20Glamorous!%20I%27d%20like%20to%20book%20an%20appointment.',
  instagram: [
    { handle: '@glamorous', url: 'https://superezz.dev' },
    { handle: '@glamorous_beauty', url: 'https://superezz.dev' },
  ],
  address: {
    line1: 'Glamorous Studio',
    line2: 'Main Market Road',
    city: 'Sarai Meer',
    district: 'Azamgarh',
    state: 'Uttar Pradesh',
    pincode: '276305',
    country: 'India',
    formatted: 'Glamorous Studio, Main Market Road, Sarai Meer, Uttar Pradesh 276305, India',
  },
  googleMapsUrl: 'https://superezz.dev',
  googleMapsEmbedUrl: '', // PLACEHOLDER SEO03 — generate from Google Maps
  hours: [
    // PLACEHOLDER B01 — verify with business owner
    { day: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM', placeholder: true },
    { day: 'Sunday', hours: 'By appointment only', placeholder: true },
  ],
  geo: {
    latitude: null,   // PLACEHOLDER — add coordinates from Google Maps
    longitude: null,
  },
};
```

### 3.2 `src/data/services.js`

```javascript
export const serviceCategories = [
  {
    id: 'makeup',
    name: 'Makeup',
    slug: 'makeup',
    description: 'From subtle day looks to full editorial glamour — every face tells a story.', // PLACEHOLDER S04
    services: [
      // PLACEHOLDER S01 — replace with verified service list from owner
      {
        id: 'makeup-01',
        name: '[Service Name]',
        description: '[Service description]',
        duration: null,     // PLACEHOLDER S03
        priceRange: null,   // PLACEHOLDER S02
        placeholder: true,
      },
    ],
  },
  // ... repeat for bridal, hair, skin, nails, event
];
```

### 3.3 `src/data/testimonials.js`

```javascript
/**
 * IMPORTANT: Only add testimonials that are:
 * 1. Real verified reviews from Google or Instagram
 * 2. Have explicit client consent
 * 3. Are attributed accurately
 * Never fabricate testimonials.
 */
export const testimonials = [
  // PLACEHOLDER T01 — add verified reviews here
  // {
  //   id: 't01',
  //   authorName: 'Real Client Name',
  //   authorInitials: 'RC',
  //   rating: 5,
  //   text: 'Verified review text...',
  //   date: '2024-11-15',
  //   platform: 'google',
  //   verified: true,
  // },
];
```

---

## 4. ROUTING ARCHITECTURE

### 4.1 SPA Router (History API)

```javascript
// src/utils/router.js
const routes = {
  '/':          () => import('../pages/home/home.js'),
  '/services':  () => import('../pages/services/services.js'),
  '/bridal':    () => import('../pages/bridal/bridal.js'),
  '/gallery':   () => import('../pages/gallery/gallery.js'),
  '/about':     () => import('../pages/about/about.js'),
  '/contact':   () => import('../pages/contact/contact.js'),
  '/thank-you': () => import('../pages/thank-you/thank-you.js'),
};
```

### 4.2 Route Transitions
- Outgoing page: fade out + slight translateY(-8px)
- Incoming page: fade in + slight translateY(8px → 0)
- Duration: 350ms ease-in-out
- Respect `prefers-reduced-motion`

---

## 5. APPOINTMENT FORM ARCHITECTURE

### 5.1 Frontend
```javascript
// src/utils/form-handler.js
async function submitAppointment(formData) {
  try {
    // Try primary endpoint
    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      router.navigate('/thank-you');
      return;
    }
  } catch (err) {
    // Silent fallback to WhatsApp
  }
  // Fallback: open WhatsApp with pre-filled message
  window.open(buildWhatsAppUrl(formData), '_blank');
}
```

### 5.2 Backend (Placeholder — implement before launch)

**Option A — Netlify Forms** (simplest):
```html
<form name="appointment" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="appointment">
  <!-- fields -->
</form>
```

**Option B — Formspree**:
```javascript
fetch('https://formspree.io/f/{YOUR_ID}', {
  method: 'POST',
  body: formData,
  headers: { Accept: 'application/json' },
});
```

**Option C — WhatsApp Business API**:
Forward form data to WhatsApp message.

**Option D — Google Sheets via Apps Script**:
POST to published Apps Script web app URL.

---

## 6. SEO IMPLEMENTATION PATTERNS

### 6.1 Meta Updater

```javascript
// src/utils/meta.js
export function updateMeta({ title, description, canonical, ogImage }) {
  document.title = title;
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('link[rel="canonical"]').href = canonical;
  document.querySelector('meta[property="og:url"]').content = canonical;
  document.querySelector('meta[property="og:image"]').content = ogImage;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content = description;
}
```

### 6.2 JSON-LD Generator

```javascript
// src/utils/schema.js
export function localBusinessSchema(salon) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: salon.name,
    description: salon.description,
    url: 'https://glamorous.in', // PLACEHOLDER — set domain
    telephone: salon.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: salon.address.line1 + ', ' + salon.address.line2,
      addressLocality: salon.address.city,
      addressRegion: salon.address.state,
      postalCode: salon.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: salon.geo.latitude,
      longitude: salon.geo.longitude,
    },
    openingHoursSpecification: [], // PLACEHOLDER B01
    sameAs: [
      salon.instagram[0].url,
      salon.instagram[1].url,
      salon.googleMapsUrl,
    ],
  };
}
```

---

## 7. PERFORMANCE ARCHITECTURE

### 7.1 Image Pipeline

```javascript
// vite.config.js — image optimisation config
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
```

### 7.2 Code Splitting Strategy
- Each page module is dynamically imported (lazy-loaded via router)
- Global CSS is inlined critical, rest loaded async
- GSAP only loaded on pages that need animation
- Gallery lightbox loaded on demand (not on page load)

### 7.3 Critical Rendering Path
1. `<head>`: DNS prefetch, preconnect fonts
2. Critical CSS: inlined for above-fold content
3. Deferred JS: all scripts `defer` or loaded after DOMContentLoaded
4. LCP image: `loading="eager"` + `fetchpriority="high"` on hero image

---

## 8. DEPLOYMENT CONFIGURATION

### 8.1 Vercel (Recommended)

```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 8.2 Netlify

```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 9. ENVIRONMENT CONFIGURATION

```javascript
// .env (not committed to git)
VITE_FORMSPREE_ID=xxxx          # Appointment form endpoint
VITE_GOOGLE_MAPS_KEY=xxxx       # Maps embed API key (if needed)
VITE_GA_ID=xxxx                 # Google Analytics (post-launch only)
VITE_SITE_URL=https://glamorous.in
```

---

## 10. DEVELOPMENT WORKFLOW

```bash
# Install
npm install

# Dev server (HMR)
npm run dev

# Production build
npm run build

# Preview production
npm run preview

# Lint
npm run lint

# Type-check (if TS added later)
npm run typecheck
```

---

*End of TECHNICAL_ARCHITECTURE.md — v1.0*
