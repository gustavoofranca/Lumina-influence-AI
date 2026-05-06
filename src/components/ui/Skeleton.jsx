import { cn } from '../../lib/cn.js'

/**
 * Skeleton — bloco placeholder com shimmer animado.
 * Usar enquanto dados estao carregando (ex: cards de KPI).
 */
export default function Skeleton({
  className = '',
  rounded = 'rounded-md',
  ...rest
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'animate-shimmer bg-[length:800px_100%]',
        // Gradiente sutil entre dois tons de neutral para o efeito shimmer
        'bg-[linear-gradient(90deg,theme(colors.neutral.800)_0%,theme(colors.neutral.700)_50%,theme(colors.neutral.800)_100%)]',
        rounded,
        className
      )}
      {...rest}
    />
  )
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn('h-3', i === lines - 1 ? 'w-2/3' : 'w-full')} />
      ))}
    </div>
  )
}
