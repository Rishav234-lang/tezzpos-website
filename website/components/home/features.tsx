'use client'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { features } from '@/lib/content'
import { motion } from 'framer-motion'

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 py-20 lg:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.97_0.03_47/0.4),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Powerful Platform"
          title="Everything you need to manage, service, and grow"
          description="One premium platform that replaces spreadsheets, registers, and disconnected tools — built specifically for Indian businesses."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Gradient border glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/50 text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20">
                    <feature.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
