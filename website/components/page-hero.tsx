import { Reveal } from "@/components/reveal"

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-24">
        <Reveal>
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-heading mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
