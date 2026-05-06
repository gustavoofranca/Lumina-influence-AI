import { cn } from '../../lib/cn.js'

const TRACK = 'overflow-hidden rounded-full bg-neutral-700/60'

const VARIANTS = {
  primary: 'bg-gradient-brand',           // primary -> secondary
  danger:  'bg-gradient-danger',          // tertiary -> tertiary-700
  success: 'bg-gradient-to-r from-emerald-500 to-emerald-300',
  warning: 'bg-gradient-to-r from-amber-500 to-amber-300',
  neutral: 'bg-gradient-to-r from-neutral-500 to-neutral-300',
}

const HEIGHTS = {
  sm: 'h-1',
  md: 'h-1.5',
  lg: 'h-2.5',
}

/**
 * ProgressBar — barra horizontal com gradiente.
 * Variante padrao usa o gradiente brand (primary -> secondary).
 */
export default function ProgressBar({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'md',
  showValue = false,
  label,
  className = '',
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between text-xs">
          {label ? <span className="text-label">{label}</span> : <span />}
          {showValue ? (
            <span className="font-semibold text-neutral-200">{Math.round(pct)}%</span>
          ) : null}
        </div>
      )}
      <div
        className={cn(TRACK, HEIGHTS[size])}
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={cn('h-full rounded-full transition-[width] duration-500 ease-out', VARIANTS[variant])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
