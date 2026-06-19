'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'Owner, Patel Retail',
    location: 'Pune, Maharashtra',
    vertical: 'TezzPOS Retail',
    accent: 'from-amber-500 to-orange-600',
    quote:
      'TezzPOS transformed our store operations. Billing is 3x faster, inventory is always accurate, and GST reports are ready in one click. Best investment we made.',
  },
  {
    name: 'Mayur Patil',
    role: 'Manager, Sharma Dhaba',
    location: 'Jaipur, Rajasthan',
    vertical: 'TezzPOS Restro',
    accent: 'from-emerald-500 to-teal-600',
    quote:
      'The KOT and table management features are incredible. Our kitchen has never been more organized, and customers love the faster service.',
  },
  {
    name: 'Amit Jayle',
    role: 'Proprietor, Vada Restaurant',
    location: 'Pune, Maharashtra',
    vertical: 'TezzPOS Garage',
    accent: 'from-blue-500 to-indigo-600',
    quote:
      'Billing, kitchen management, and inventory tracking — TezzPos has streamlined our entire restaurant operations. The team found it very easy to adapt.',
  },
]

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 text-white lg:py-28">
      {/* Glowing background orbs */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Customer Stories
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Trusted by businesses
            </span>
            <br />
            <span className="text-white/90">across India</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60 text-pretty">
            See how business owners in every corner of the country are growing with TezzPOS.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/20"
              >
                {/* Top accent line */}
                <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${t.accent}`} />

                {/* Quote icon with glow */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-white/10" />
                  <Quote className="absolute left-0 top-0 h-8 w-8 text-white/5 blur-sm" />
                </div>

                {/* Stars */}
                <div className="mt-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} text-sm font-bold text-white shadow-lg`}>
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">
                      {t.role} &middot; {t.location}
                    </p>
                  </div>
                </div>

                <div className={`mt-4 inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r ${t.accent} px-3 py-1 text-xs font-medium text-white shadow-lg`}>
                  {t.vertical}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
