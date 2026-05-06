import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina classes condicionais (clsx) e resolve conflitos do Tailwind (twMerge).
 * Uso: cn('px-2 py-1', isActive && 'bg-primary-600', extraClass)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
