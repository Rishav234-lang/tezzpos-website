'use client'

import { motion } from 'framer-motion'

const states = [
  'Gujarat', 'Maharashtra', 'Rajasthan', 'Delhi', 'Uttar Pradesh',
  'Karnataka', 'Tamil Nadu', 'Kerala', 'Punjab', 'Haryana',
  'Madhya Pradesh', 'Bihar', 'West Bengal', 'Telangana', 'Andhra Pradesh',
]

export function TrustMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-background py-8">
      <div className="mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by businesses across India
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex shrink-0 gap-8 pr-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...states, ...states].map((state, i) => (
            <div
              key={`${state}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-5 py-2 text-sm font-medium text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-primary/60" />
              {state}
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex shrink-0 gap-8 pr-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...states, ...states].map((state, i) => (
            <div
              key={`${state}-dup-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-5 py-2 text-sm font-medium text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-primary/60" />
              {state}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
