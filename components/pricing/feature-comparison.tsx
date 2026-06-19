import { Fragment } from 'react'
import { Check, Minus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { comparisonFeatures, plans } from '@/lib/pricing'
import { cn } from '@/lib/utils'

const categories = [...new Set(comparisonFeatures.map((f) => f.category))]

function AvailabilityIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
        <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
      </span>
    )
  }
  return (
    <span className="flex h-6 w-6 items-center justify-center">
      <Minus className="h-4 w-4 text-muted-foreground/40" />
    </span>
  )
}

export function FeatureComparison() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-card px-6 py-6 md:px-8">
        <h2 className="mb-6 text-center font-heading text-xl font-semibold text-foreground md:text-left">
          Compare all features across plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 pr-4 text-left font-medium text-muted-foreground">Feature</th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className={cn(
                      'px-2 pb-4 text-center font-heading font-semibold',
                      plan.recommended ? 'text-primary' : 'text-foreground',
                    )}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <Fragment key={category}>
                  <tr>
                    <td
                      colSpan={plans.length + 1}
                      className="pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {category}
                    </td>
                  </tr>
                  {comparisonFeatures
                    .filter((f) => f.category === category)
                    .map((feature) => (
                      <tr key={feature.name} className="border-t border-border/60">
                        <td className="py-3.5 pr-4 text-foreground">{feature.name}</td>
                        {plans.map((plan) => (
                          <td key={plan.id} className="px-2 py-3.5">
                            <div className="flex justify-center">
                              <AvailabilityIcon included={feature.availability[plan.id]} />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  )
}
