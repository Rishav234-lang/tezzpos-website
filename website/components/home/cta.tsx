'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background glows */}
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Start your free trial today
          </motion.div>

          <h2 className="font-heading max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-white via-primary-foreground to-primary bg-clip-text text-transparent">
              Join India&apos;s #1
            </span>
            <br />
            <span className="text-white/90">business management platform</span>
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
            From single stores to multi-location enterprises, TezzPOS powers businesses
            across Retail, Restro, Garage, Krishi, Mandi, and Liquor verticals nationwide.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
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
              className="border-2 border-white/20 bg-transparent text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
