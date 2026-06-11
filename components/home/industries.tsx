'use client'

import { Reveal } from '@/components/reveal'
import { industries } from '@/lib/content'
import { motion } from 'framer-motion'

const accentColors = [
  'from-blue-500/20 to-blue-600/5',
  'from-orange-500/20 to-orange-600/5',
  'from-emerald-500/20 to-emerald-600/5',
  'from-green-500/20 to-green-600/5',
  'from-amber-500/20 to-amber-600/5',
  'from-violet-500/20 to-violet-600/5',
  'from-cyan-500/20 to-cyan-600/5',
  'from-rose-500/20 to-rose-600/5',
]

const iconColors = [
  'bg-blue-500/10 text-blue-400',
  'bg-orange-500/10 text-orange-400',
  'bg-emerald-500/10 text-emerald-400',
  'bg-green-500/10 text-green-400',
  'bg-amber-500/10 text-amber-400',
  'bg-violet-500/10 text-violet-400',
  'bg-cyan-500/10 text-cyan-400',
  'bg-rose-500/10 text-rose-400',
]

export function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-20 overflow-hidden bg-slate-900 py-20 text-white lg:py-28">
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Specialized Solutions
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-white via-primary-foreground to-primary bg-clip-text text-transparent">
              Purpose-built for every
            </span>
            <br />
            <span className="text-white/90">business vertical</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60 text-pretty">
            From retail stores to mandi yards, garage workshops to liquor outlets —
            TezzPOS offers specialized solutions tailored to how your industry works.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/20"
              >
                {/* Accent gradient */}
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${accentColors[i % accentColors.length]} blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`} />

                <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconColors[i % iconColors.length]} transition-transform duration-300 group-hover:scale-110`}>
                  <industry.Icon className="h-5 w-5" />
                </div>
                <div className="relative">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {industry.description}
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
