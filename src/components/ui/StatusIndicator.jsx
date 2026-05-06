import { cn } from '../../lib/cn.js'

const COLORS = {
  success: { dot: 'bg-success', halo: 'bg-success/60', text: 'text-emerald-300' },
  warning: { dot: 'bg-warning', halo: 'bg-warning/60', text: 'text-amber-300' },
  danger:  { dot: 'bg-tertiary-500', halo: 'bg-tertiary-500/60', text: 'text-tertiary-300' },
  info:    { dot: 'bg-secondary-500', halo: 'bg-secondary-500/60', text: 'text-secondary-300' },
  primary: { dot: 'bg-primary-500', halo: 'bg-primary-500/60', text: 'text-primary-300' },
  neutral: { dot: 'bg-neutral-500', halo: 'bg-neutral-500/60', text: 'text-neutral-400' },
}

/**
 * StatusIndicator — bolinha pulsante + label uppercase.
 * Assinatura visual recorrente do produto (ex: "SYSTEM ACTIVE").
 */
export default function StatusIndicator({
  label,
  color = 'success',
  className = '',
  pulse = true,
}) {
  const c = COLORS[color] || COLORS.success
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span className="relative inline-flex h-2 w-2">
        {pulse ? (
          <span className={cn('absolute inline-flex h-full w-full animate-pulse-dot rounded-full opacity-75', c.halo)} />
        ) : null}
        <span className={cn('relative inline-flex h-2 w-2 rounded-full', c.dot)} />
      </span>
      <span className={cn('text-[11px] font-semibold uppercase tracking-label', c.text)}>
        {label}
      </span>
    </span>
  )
}
