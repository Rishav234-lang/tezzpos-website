import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  textClassName: _textClassName,
  size = 'md',
}: {
  className?: string
  textClassName?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20',
  }

  return (
    <Link href="/" className={cn('group flex items-center', className)}>
      <Image
        src="/logo.png"
        alt="TezzPOS"
        width={240}
        height={72}
        className={cn('w-auto object-contain', sizeClasses[size])}
        priority
      />
    </Link>
  )
}
