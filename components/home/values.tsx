'use client'

import { Reveal } from '@/components/reveal'
import { Target, Heart, Lightbulb, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Customer First',
    description: 'Every decision starts with what helps our customers succeed across India.',
    Icon: Heart,
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Simplicity',
    description: 'We turn complex business operations into intuitive, simple workflows.',
    Icon: Target,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Innovation',
    description: 'We keep improving so your software grows with your business ambitions.',
    Icon: Lightbulb,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Trust',
    description: 'We earn trust with transparency, reliability, and unwavering integrity.',
    Icon: Handshake,
    gradient: 'from-emerald-500 to-teal-600',
  },
]

export function Values() {
  return (
    <section className="relative bg-muted/40 py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,oklch(0.97_0.03_47/0.5),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
            Our values
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            The principles behind everything we build
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08} className="text-center">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110`}>
                  <value.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
