import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FeatureComparison } from '@/components/pricing/feature-comparison'
import { LifetimePlans } from '@/components/pricing/lifetime-plans'
import { PricingGrid } from '@/components/pricing/pricing-grid'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { planNotes } from '@/lib/pricing'

export const metadata: Metadata = {
  title: 'Pricing & Plans',
  description:
    'TezzPOS Restro pricing — Starter, Growth, Main Course, and Enterprise plans for every restaurant size. Transparent monthly, yearly, and 3-year options. Fully offline POS software.',
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans that grow with your restaurant"
        subtitle="Start simple, scale when you're ready. Every plan runs fully offline with a free first year of support."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <PricingGrid />
      </section>

      <LifetimePlans />

      <section className="mx-auto max-w-5xl px-4 pb-16 md:pb-24">
        <FeatureComparison />
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {planNotes.map((note) => (
                <li key={note} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Need help choosing?
          </h2>
          <p className="text-secondary-foreground/70">
            Tell us about your restaurant and we&apos;ll recommend the right plan — no sales pressure.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Talk to our team</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
