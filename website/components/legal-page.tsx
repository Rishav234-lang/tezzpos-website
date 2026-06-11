import type { ReactNode } from "react"
import { PageHero } from "@/components/page-hero"

export type LegalSection = {
  heading: string
  body: ReactNode
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={intro} />
      <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-8 flex flex-col gap-8">
          {sections.map((s) => (
            <section key={s.heading} className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">{s.heading}</h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">{s.body}</div>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
