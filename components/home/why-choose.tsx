'use client'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ShieldCheck, Zap, Headphones, Smartphone, RefreshCw, IndianRupee } from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Industry-Tailored Solutions',
    description:
      'Unlike generic POS software, TezzPOS is purpose-built for Retail, Restro, Garage, Krishi, Mandi, and Liquor businesses.',
    Icon: Zap,
    gradient: 'from-amber-500/10 to-orange-500/5',
    iconBg: 'bg-amber-500/10 text-amber-500',
  },
  {
    title: 'Trusted Across India',
    description:
      'From Gujarat to Kerala, businesses in 28+ states rely on TezzPOS for their daily operations and growth.',
    Icon: ShieldCheck,
    gradient: 'from-emerald-500/10 to-teal-500/5',
    iconBg: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    title: 'Works Online & Offline',
    description:
      'Run your business from a desktop, tablet, or phone — even without internet. Syncs automatically when back online.',
    Icon: Smartphone,
    gradient: 'from-blue-500/10 to-cyan-500/5',
    iconBg: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'Built for Indian Businesses',
    description:
      'GST-compliant, multi-language support, and pricing plans designed specifically for the Indian market.',
    Icon: IndianRupee,
    gradient: 'from-violet-500/10 to-purple-500/5',
    iconBg: 'bg-violet-500/10 text-violet-500',
  },
  {
    title: 'Always Evolving',
    description:
      'New features, vertical-specific tools, and compliance updates roll out automatically — at no extra cost.',
    Icon: RefreshCw,
    gradient: 'from-rose-500/10 to-pink-500/5',
    iconBg: 'bg-rose-500/10 text-rose-500',
  },
  {
    title: 'Premium 24/7 Support',
    description:
      'A dedicated support team that understands your business vertical and responds fast, any time of day.',
    Icon: Headphones,
    gradient: 'from-cyan-500/10 to-sky-500/5',
    iconBg: 'bg-cyan-500/10 text-cyan-500',
  },
]

export function WhyChoose() {
  return (
    <section id="why" className="relative scroll-mt-20 py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,oklch(0.97_0.03_47/0.4),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why TezzPOS"
          title="Why India chooses TezzPOS"
          description="India's number one POS platform, trusted by businesses that demand reliability, speed, and industry-specific excellence."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Gradient accent */}
                <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${reason.gradient} blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${reason.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <reason.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
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
