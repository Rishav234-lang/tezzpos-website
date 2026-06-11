import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <Reveal
      className={
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      }
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  )
}
