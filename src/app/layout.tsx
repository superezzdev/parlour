import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, Space_Mono } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import PageLoader from '@/components/ui/PageLoader'
import CursorEffect from '@/components/global/CursorEffect'
import ScrollProgress from '@/components/global/ScrollProgress'
import ScrollAnimationProvider from '@/components/global/ScrollAnimationProvider'
import LenisProvider from '@/components/providers/LenisProvider'
import PWARegister from '@/components/global/PWARegister'
import { salon } from '@/data/salon'
import { localBusinessSchema } from '@/utils/schema'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
  variable: '--font-dmsans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://glamorous.in'), // [PLACEHOLDER B04]
  applicationName: 'Glamorous',
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
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Glamorous',
  },
  formatDetection: {
    telephone: true,
  },
  manifest: '/manifest.webmanifest',
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
      className={`${cormorant.variable} ${dmSans.variable} ${spaceMono.variable}`}
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
        {/* PWA Service Worker Registration */}
        <PWARegister />

        {/* Cinematic page loader (runs once per session) */}
        <PageLoader />

        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* Global navigation */}
        <Navbar />

        {/* Main page content */}
        <main id="main-content" tabIndex={-1}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </main>

        {/* Global footer */}
        <Footer />

        {/* Desktop: custom cursor */}
        <CursorEffect />

        {/* Scroll animations (IntersectionObserver) */}
        <ScrollAnimationProvider />
      </body>
    </html>
  )
}
