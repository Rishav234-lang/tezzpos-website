import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  textClassName,
}: {
  className?: string
  textClassName?: string
}) {
  return (
    <Link href="/" className={cn('group flex items-center gap-2.5', className)}>
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/80 font-heading text-lg font-extrabold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
        T
      </span>
      <span
        className={cn(
          'font-heading text-xl font-extrabold tracking-tight transition-colors',
          textClassName,
        )}
      >
        Tezz<span className="text-primary">POS</span>
      </span>
    </Link>
  )
}
