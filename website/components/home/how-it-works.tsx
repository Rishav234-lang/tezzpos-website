'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Download, Settings, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Setup in Minutes',
    description:
      'Download TezzPOS, create your business profile, and configure your products, pricing, and tax settings — no technical expertise required.',
    Icon: Download,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: '02',
    title: 'Customize for Your Industry',
    description:
      'Choose your vertical — Retail, Restro, Garage, Krishi, Mandi, or Liquor. All features, workflows, and reports are tailored automatically.',
    Icon: Settings,
    color: 'from-amber-500 to-orange-600',
  },
  {
    number: '03',
    title: 'Grow Your Business',
    description:
      'Start billing, tracking inventory, managing GST, and analyzing sales. Watch your business efficiency soar with real-time insights.',
    Icon: Rocket,
    color: 'from-emerald-500 to-teal-600',
  },
]

export function HowItWorks() {
  return (
    <section className="relative scroll-mt-20 py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,oklch(0.97_0.03_47/0.3),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple Setup"
          title="Get started in three simple steps"
          description="No complex installation. No lengthy onboarding. Just powerful business software ready to go in minutes."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8"
              >
                {/* Top gradient bar */}
                <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${step.color}`} />

                {/* Step number */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <step.Icon className="h-6 w-6" />
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Step {step.number}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
