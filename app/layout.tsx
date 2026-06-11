import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Manrope } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const manrope = Manrope({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'TezzPOS — India\'s #1 POS & Business Management Software',
    template: '%s | TezzPOS',
  },
  description:
    'TezzPOS is India\'s number one POS and business management platform. Manage billing, inventory, GST, accounting, and analytics with specialized solutions for Retail, Restaurants, Garage, Krishi, Mandi, and Liquor businesses across India.',
  keywords: [
    'POS software India',
    'best POS software India',
    'billing software',
    'inventory management',
    'GST billing',
    'retail POS',
    'restaurant POS',
    'garage management software',
    'mandi software',
    'liquor POS',
    'TezzPOS',
  ],
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ScrollProgress />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <BackToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
