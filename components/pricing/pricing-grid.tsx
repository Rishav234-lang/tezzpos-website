'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import {
  billingOptions,
  formatPrice,
  getYearlySavings,
  plans,
  type BillingPeriod,
  type Plan,
} from '@/lib/pricing'
import { cn } from '@/lib/utils'

function BillingToggle({
  period,
  onChange,
}: {
  period: BillingPeriod
  onChange: (period: BillingPeriod) => void
}) {
  const maxSavings = Math.max(...plans.map(getYearlySavings))

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="inline-flex rounded-full border border-border bg-muted/60 p-1">
        {billingOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-medium transition-all',
              period === option.id
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
      {period === 'yearly' && maxSavings > 0 ? (
        <p className="text-sm text-muted-foreground">
          Save up to <span className="font-semibold text-primary">{maxSavings}%</span> with yearly billing
        </p>
      ) : null}
    </div>
  )
}

function PlanCard({ plan, period }: { plan: Plan; period: BillingPeriod }) {
  const suffix = billingOptions.find((o) => o.id === period)?.suffix ?? 'month'
  const price = plan.prices[period]

  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-shadow',
        plan.recommended
          ? 'z-10 border-primary shadow-xl shadow-primary/10 xl:-mt-4 xl:mb-4 xl:scale-[1.03] xl:pb-10 xl:pt-10'
          : 'border-border shadow-sm hover:shadow-md',
      )}
    >
      {plan.recommended ? (
        <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-primary-foreground shadow-md">
          <Sparkles className="h-3 w-3" />
          Most Popular
        </div>
      ) : null}

      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-medium text-muted-foreground">₹</span>
          <span className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
            {formatPrice(price)}
          </span>
          <span className="ml-1 text-sm font-medium text-muted-foreground">+ GST</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">per {suffix}</p>
        <p className="mt-3 text-xs font-medium text-muted-foreground/80">{plan.deviceAccess}</p>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

      <ul className="mb-8 flex-1 space-y-3">
        {plan.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        variant={plan.recommended ? 'default' : 'outline'}
        className="w-full"
      >
        <Link href="/contact">Get started</Link>
      </Button>
    </div>
  )
}

export function PricingGrid() {
  const [period, setPeriod] = useState<BillingPeriod>('monthly')

  return (
    <div className="space-y-12">
      <Reveal>
        <BillingToggle period={period} onChange={setPeriod} />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-end xl:gap-5">
        {plans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 0.06} className={plan.recommended ? 'xl:order-none' : undefined}>
            <PlanCard plan={plan} period={period} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
