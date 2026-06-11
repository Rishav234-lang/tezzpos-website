import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { company } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TezzPOS Technologies — India's #1 POS platform. Reach our sales and support teams 24/7 by phone, email, or send us a message.",
}

const details = [
  { Icon: Mail, label: "Sales Email", value: company.email, href: `mailto:${company.email}` },
  { Icon: Mail, label: "Support Email", value: company.support, href: `mailto:${company.support}` },
  { Icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
  { Icon: MapPin, label: "Head Office", value: company.address },
  { Icon: Clock, label: "Support", value: "24/7 Premium Support Available" },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let&apos;s power your business together"
        subtitle="Questions, demos, or support — our team is available 24/7 to help you get the most out of TezzPOS, India&apos;s #1 business management platform."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Get in touch</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Reach out through any channel below, or fill out the form and we&apos;ll get back to you shortly.
                </p>
              </div>
              <ul className="flex flex-col gap-5">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent">
                      <d.Icon className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
