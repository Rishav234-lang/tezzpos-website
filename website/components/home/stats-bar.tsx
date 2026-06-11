import { Reveal } from '@/components/reveal'
import { Trophy, Layers, MapPin, Headset } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const stats: { value: string; label: string; Icon: LucideIcon }[] = [
  { value: '#1', label: 'POS Software in India', Icon: Trophy },
  { value: '8+', label: 'Specialized Verticals', Icon: Layers },
  { value: '28+', label: 'States Covered', Icon: MapPin },
  { value: '24/7', label: 'Premium Support', Icon: Headset },
]

export function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.3_0.05_47/0.3),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <div className="group mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
              <stat.Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 font-heading text-4xl font-extrabold text-primary sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-secondary-foreground/70">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
