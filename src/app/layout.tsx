import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import Preloader from '@/components/global/Preloader'
import CursorEffect from '@/components/global/CursorEffect'
import ScrollProgress from '@/components/global/ScrollProgress'
import WhatsAppFAB from '@/components/global/WhatsAppFAB'
import ScrollAnimationProvider from '@/components/global/ScrollAnimationProvider'
import { salon } from '@/data/salon'
import { localBusinessSchema } from '@/utils/schema'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dmsans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://glamorous.in'), // [PLACEHOLDER B04]
  title: {
    default: 'Glamorous — Makeup & Beauty Studio | Sarai Meer, Uttar Pradesh',
    template: '%s | Glamorous, Sarai Meer',
  },
  description:
    'Premium makeup and beauty studio in Sarai Meer. Specialising in bridal makeup, party looks, and beauty transformations. Book an appointment today — +91 70078 75415.',
  keywords: [
    'Glamorous makeup Sarai Meer',
    'bridal makeup Sarai Meer',
    'makeup artist Sarai Meer',
    'beauty parlour Sarai Meer',
    'beauty salon Sarai Meer',
    'bridal makeup near Azamgarh',
    'wedding makeup Sarai Meer',
  ],
  authors: [{ name: salon.name }],
  creator: salon.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://glamorous.in',
    siteName: salon.name,
    title: 'Glamorous — Makeup & Beauty Studio | Sarai Meer',
    description:
      'Premium makeup and beauty studio in Sarai Meer. Bridal, party, and everyday beauty artistry.',
    images: [
      {
        url: '/og-home.jpg', // [PLACEHOLDER SEO05]
        width: 1200,
        height: 630,
        alt: 'Glamorous Makeup & Beauty Studio — Sarai Meer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glamorous — Makeup & Beauty Studio | Sarai Meer',
    description: 'Premium makeup and beauty studio. Bridal specialists.',
    images: ['/og-home.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = localBusinessSchema(salon)

  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${dmSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* JSON-LD: LocalBusiness / BeautySalon — every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        {/* Branded preloader */}
        <Preloader />

        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* Global navigation */}
        <Navbar />

        {/* Main page content */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        {/* Global footer */}
        <Footer />

        {/* Mobile: floating WhatsApp button */}
        <WhatsAppFAB />

        {/* Desktop: custom cursor */}
        <CursorEffect />

        {/* Scroll animations (IntersectionObserver) */}
        <ScrollAnimationProvider />
      </body>
    </html>
  )
}
