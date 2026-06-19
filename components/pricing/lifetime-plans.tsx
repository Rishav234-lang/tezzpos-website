import Link from 'next/link'
import {
  Check,
  Database,
  Infinity,
  Monitor,
  Shield,
  WifiOff,
  Wrench,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import {
  formatPrice,
  lifetimeMaintenance,
  lifetimePlans,
  lifetimeTrustPoints,
  type LifetimePlan,
} from '@/lib/pricing'
import { cn } from '@/lib/utils'

const trustIcons = [WifiOff, Shield, Infinity] //Database

function LifetimeCard({ plan, delay }: { plan: LifetimePlan; delay: number }) {
  const savings = plan.regularPrice - plan.offerPrice

  return (
    <Reveal delay={delay}>
      <article
        className={cn(
          'flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm',
          plan.accent.border,
        )}
      >
        {/* Header */}
        <div className={cn('px-6 py-5 text-center', plan.accent.headerBg, plan.accent.headerText)}>
          <p className="text-xs font-medium uppercase tracking-widest opacity-80">One-time purchase</p>
          <h3 className="font-heading mt-1 text-2xl font-bold">{plan.name}</h3>
          <p className="mt-1 text-sm opacity-90">{plan.tagline}</p>
        </div>

        <div className="flex flex-1 flex-col p-6">
          {/* Pricing */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground line-through">
              ₹{formatPrice(plan.regularPrice)}
            </p>
            <div className="mt-1 flex items-center justify-center gap-3">
              <div className="flex items-baseline gap-0.5">
                <span className="text-lg font-medium text-muted-foreground">₹</span>
                <span className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
                  {formatPrice(plan.offerPrice)}
                </span>
              </div>
              {savings > 0 ? (
                <span className={cn('rounded-full px-2.5 py-1 text-xs font-semibold', plan.accent.badge)}>
                  Save ₹{formatPrice(savings)}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{plan.offerNote}</p>
          </div>

          {/* Perks */}
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {plan.perks.map((perk) => (
              <li
                key={perk}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
                  plan.accent.checkBg,
                  plan.accent.check,
                )}
              >
                <Check className="h-3 w-3" strokeWidth={2.5} />
                {perk}
              </li>
            ))}
          </ul>

          {/* All features */}
          <div className="mt-8 flex-1">
            <h4 className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What&apos;s included
            </h4>
            <ul className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                  <span
                    className={cn(
                      'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                      plan.accent.checkBg,
                    )}
                  >
                    <Check className={cn('h-2.5 w-2.5', plan.accent.check)} strokeWidth={3} />
                  </span>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button asChild variant="outline" className="mt-8 w-full">
            <Link href="/contact">Get {plan.name}</Link>
          </Button>
        </div>
      </article>
    </Reveal>
  )
}

export function LifetimePlans() {
  return (
    <section className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* Section header */}
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <Monitor className="h-3.5 w-3.5" />
            Lifetime plans
          </span>
          <h2 className="font-heading mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Pay once, use forever
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Fully offline software with no monthly subscription. Perfect for restaurants and cafes
            that prefer a one-time investment.
          </p>
        </Reveal>

        {/* Plan cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
          {lifetimePlans.map((plan, i) => (
            <LifetimeCard key={plan.id} plan={plan} delay={i * 0.06} />
          ))}
        </div>

        {/* Trust points */}
        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {lifetimeTrustPoints.map((point, i) => {
              const Icon = trustIcons[i] ?? Check
              return (
                <li key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {point}
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* Maintenance */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-xl border border-border bg-background px-6 py-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
              <Wrench className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Annual service & maintenance — ₹{formatPrice(lifetimeMaintenance.price)}/
                {lifetimeMaintenance.period}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Starts after {lifetimeMaintenance.startsAfter}. Includes{' '}
                {lifetimeMaintenance.includes.join(', ').toLowerCase()}.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
