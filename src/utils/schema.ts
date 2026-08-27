/**
 * GLAMOROUS — JSON-LD Schema Generators
 * Structured data for local SEO.
 */

import type { SalonData } from '@/data/salon'

export function localBusinessSchema(salon: SalonData): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: salon.name,
    description: salon.description,
    url: salon.domain,
    telephone: salon.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${salon.address.line1}, ${salon.address.line2}`,
      addressLocality: salon.address.city,
      addressRegion: salon.address.state,
      postalCode: salon.address.pincode,
      addressCountry: 'IN',
    },
    geo:
      salon.geo.latitude && salon.geo.longitude
        ? {
            '@type': 'GeoCoordinates',
            latitude: salon.geo.latitude,
            longitude: salon.geo.longitude,
          }
        : undefined,
    openingHoursSpecification: [
      // [PLACEHOLDER SEO01] — replace with verified hours
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      ...salon.instagram.map((ig) => ig.url),
      salon.googleMapsUrl,
    ],
    image: `${salon.domain}/og-home.jpg`,
    // [PLACEHOLDER SEO02] — priceRange: verify with owner
    // [PLACEHOLDER SEO04] — aggregateRating: only add with real review data
  }
}

export function breadcrumbSchema(
  items: Array<{ name: string; item: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  }
}

export function faqSchema(
  items: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
