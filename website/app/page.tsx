import { Hero } from "@/components/home/hero"
import { TrustMarquee } from "@/components/home/trust-marquee"
import { StatsBar } from "@/components/home/stats-bar"
import { Features } from "@/components/home/features"
import { Industries } from "@/components/home/industries"
import { HowItWorks } from "@/components/home/how-it-works"
import { WhyChoose } from "@/components/home/why-choose"
import { Testimonials } from "@/components/home/testimonials"
import { Values } from "@/components/home/values"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatsBar />
      <Features />
      <Industries />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <Values />
      <CTA />
    </>
  )
}
