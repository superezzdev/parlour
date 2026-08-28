/**
 * GLAMOROUS — Business Data
 * Single source of truth for all business information.
 * Update this file to propagate changes across the entire site.
 *
 * ⚠️ PLACEHOLDER NOTICE: Items marked with [PLACEHOLDER] must be
 * verified with the business owner before launch.
 * See docs/CONTENT_PLACEHOLDERS.md for full audit list.
 */

export interface Address {
  line1: string
  line2: string
  city: string
  district: string
  state: string
  pincode: string
  country: string
  formatted: string
}

export interface OpeningHours {
  day: string
  hours: string
  closed?: boolean
  /** true = not yet verified with business owner */
  placeholder?: boolean
}

export interface InstagramAccount {
  name?: string
  handle: string
  url: string
  label: string
}

export interface GeoCoordinates {
  latitude: number | null
  longitude: number | null
}

export interface SalonData {
  name: string
  tagline: string
  description: string
  phone: string
  phoneDisplay: string
  whatsapp: string
  whatsappUrl: string
  instagram: InstagramAccount[]
  address: Address
  googleMapsUrl: string
  /** [PLACEHOLDER B03] — generate from Google Maps embed */
  googleMapsEmbedUrl: string
  hours: OpeningHours[]
  geo: GeoCoordinates
  domain: string
  email: string | null
}

export const salon: SalonData = {
  name: 'Glamorous',
  tagline: 'Bridal and Occasion Makeup by Sabreen in Sarai Meer',
  description:
    'A boutique makeup and beauty studio on Sabji Mandi Road, Sarai Meer. Specialising in bridal makeup, party glam, hair styling, and skin care — crafted with patience, precision, and care.',

  phone: '+917007875415',
  phoneDisplay: '+91 70078 75415',
  whatsapp: '+917007875415',
  whatsappUrl:
    'https://wa.me/917007875415?text=Hi%20Glamorous!%20I%27d%20like%20to%20book%20an%20appointment.',

  instagram: [
    {
      name: 'SABREEN SIDDIQUI',
      handle: '@glamorouse_makeup_beauty',
      url: 'https://www.instagram.com/glamorouse_makeup_beauty',
      label: 'Sabreen Siddiqui',
    },
    {
      name: 'GLAMOROUS MAKEUP & BEAUTI',
      handle: '@makeup_by_sabreen_786',
      url: 'https://www.instagram.com/makeup_by_sabreen_786',
      label: 'Glamorous Makeup & Beauti',
    },
  ],

  address: {
    line1: '1st Floor, Mumtaz Bangle Store',
    line2: 'Sabji Mandi Rd, Sarai Meer',
    city: 'Sarai Meer',
    district: 'Azamgarh',
    state: 'Uttar Pradesh',
    pincode: '276305',
    country: 'India',
    formatted:
      '1st Floor, Mumtaz Bangle Store, Sabji Mandi Rd, Sarai Meer, Uttar Pradesh 276305, India',
  },

  googleMapsUrl: 'https://maps.app.goo.gl/LEeeeG6BkDa33Xdc6',
  googleMapsEmbedUrl: '', // [PLACEHOLDER B03] — replace with embed src from Google Maps

  hours: [
    // [PLACEHOLDER B01] — verify actual hours with business owner before launch
    { day: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM', placeholder: true },
    { day: 'Sunday', hours: 'By appointment only', placeholder: true },
  ],

  geo: {
    latitude: null,   // [PLACEHOLDER] — add from Google Maps
    longitude: null,  // [PLACEHOLDER] — add from Google Maps
  },

  domain: 'https://glamorous.in', // [PLACEHOLDER B04] — TBD by owner
  email: null, // [PLACEHOLDER B05] — verify with business owner
}
