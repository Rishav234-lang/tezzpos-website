'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DashboardPreview } from '@/components/home/dashboard-preview'

const highlights = [
  "India's #1 POS Software",
  '8 Specialized Verticals',
  'Trusted Across 28+ States',
]

function FloatingOrb({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.96_0.04_47)_0%,transparent_70%)]" />
        <FloatingOrb className="-right-20 -top-20 h-96 w-96 bg-primary/10" />
        <FloatingOrb className="-left-20 top-40 h-72 w-72 bg-primary/5" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              India&apos;s Most Trusted POS & Business Management Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
            >
              Manage. Service.{' '}
              <span className="relative inline-block text-primary">
                Grow.
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.path
                    d="M2 8C50 2 100 2 198 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty"
            >
              TezzPOS is India&apos;s number one business management platform, powering
              Retail, Restaurants, Garages, Krishi, Mandi, and Liquor businesses
              across the country — all in one powerful solution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-primary px-8 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <Link href="/contact">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-border bg-background/50 backdrop-blur-sm hover:bg-accent"
              >
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-primary text-xs font-bold text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Trusted by businesses across 28+ states</p>
              </div>
            </motion.div>
          </div>

          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
