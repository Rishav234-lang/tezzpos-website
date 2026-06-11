import type { Metadata } from "next"
import Link from "next/link"
import { Target, Eye, Rocket, Heart, ShieldCheck, Headphones } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TezzPOS Technologies — India's number one POS and business management platform, serving Retail, Restro, Garage, Krishi, Mandi, and Liquor businesses across 28+ states.",
}

const pillars = [
  {
    Icon: Target,
    title: "Our Mission",
    body: "To empower every Indian business — from the local kirana store to the multi-location enterprise — with powerful, industry-specific software that removes friction and accelerates growth.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    body: "To be India's most trusted business operating system, powering the digital transformation of every business vertical from Kashmir to Kanyakumari.",
  },
  {
    Icon: Rocket,
    title: "Our Approach",
    body: "We don't build one-size-fits-all software. We build specialized solutions for Retail, Restro, Garage, Krishi, Mandi, and Liquor — each tailored to how that industry actually works.",
  },
]

const values = [
  {
    Icon: Heart,
    title: "Customer First",
    body: "Every feature we build, every update we ship, starts with what's best for the businesses we serve across India.",
  },
  {
    Icon: ShieldCheck,
    title: "Trust & Security",
    body: "Bank-grade security, reliable uptime, and complete data protection for businesses that can't afford to stop.",
  },
  {
    Icon: Headphones,
    title: "Always-On Support",
    body: "A dedicated support team available 24/7, speaking your language and understanding your business vertical.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TezzPOS"
        title="India's #1 POS & Business Management Platform"
        subtitle="From a single counter in Gujarat to multi-location chains across 28+ states — we power the businesses that power India."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            {company.name} was founded with a clear vision: Indian businesses deserve software that understands their
            industry, their challenges, and their ambitions. Not generic tools imported from abroad — but solutions
            purpose-built for how business is actually done in India.
          </p>
          <p>
            That&apos;s why we built <span className="font-semibold text-foreground">{company.brand}</span>, India&apos;s
            number one business management platform. From <strong>TezzPOS Retail</strong> for busy stores,{" "}
            <strong>TezzPOS Restro</strong> for restaurants, <strong>TezzPOS Garage</strong> for automotive workshops,{" "}
            <strong>TezzPOS Krishi</strong> for agriculture businesses, <strong>TezzPOS Mandi</strong> for market yards, and{" "}
            <strong>TezzPOS Liquor</strong> for beverage outlets — we offer specialized vertical solutions that work exactly
            the way your business does.
          </p>
          <p>
            Today, businesses across 28+ states trust TezzPOS to handle billing, inventory, GST compliance, accounting,
            and analytics — so they can focus on what they do best: serving their customers and growing.
          </p>
        </Reveal>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                    <p.Icon className="h-6 w-6 text-primary" />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <SectionHeading
          eyebrow="What we stand for"
          title="Values that guide everything we do"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <v.Icon className="h-7 w-7 text-primary" />
                <h3 className="font-heading text-lg font-bold text-foreground">{v.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center md:py-20">
          <h2 className="font-heading max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Ready to manage, service, and grow with India&apos;s #1 POS?
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-secondary-foreground/70">
            Whether you run a retail store, restaurant, garage, or mandi — our team is ready to show you how TezzPOS
            transforms your business operations.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
