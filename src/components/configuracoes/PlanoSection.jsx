import { useTranslation } from 'react-i18next'
import { Sparkles, ArrowUp, CreditCard, X, Check } from 'lucide-react'

import { cn } from '../../lib/cn.js'
import Card, { CardLabel, CardTitle } from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import Badge from '../ui/Badge.jsx'
import { PLANO_ATUAL } from '../../mocks/agencia.js'

function formatDate(iso, locale) {
  try {
    return new Date(iso).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      day: '2-digit', month: 'long', year: 'numeric',
    })
  } catch { return iso }
}

function UsageRow({ label, used, limit }) {
  const pct  = Math.min(100, (used / limit) * 100)
  const tone = pct >= 90 ? 'bg-tertiary-500' : pct >= 70 ? 'bg-amber-500' : 'bg-gradient-brand'

  return (
    <div>
      <div className="mb-2 flex items-end justify-between">
        <span className="text-sm text-text-secondary">{label}</span>
        <span className="text-sm">
          <span className="font-display font-bold text-neutral-100 tabular-nums">{used}</span>
          <span className="text-text-muted"> / {limit}</span>
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-neutral-700/60">
        <div
          className={cn('h-full rounded-full transition-all duration-500', tone)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function PlanoSection() {
  const { t, i18n } = useTranslation()
  const plano = PLANO_ATUAL

  return (
    <div className="flex flex-col gap-6">
      {/* Card do plano atual + acoes principais */}
      <Card glass className={cn(
        'relative overflow-hidden border-2 border-primary-500/50',
        'shadow-glow-primary'
      )}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ background: 'radial-gradient(50% 60% at 100% 0%, rgba(124,58,237,0.25) 0%, transparent 65%)' }}
        />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-label">{t('configuracoes.plano.current')}</span>
                <Badge variant="organic">MAIS POPULAR</Badge>
              </div>
              <CardTitle className="mt-2 text-2xl">{plano.name}</CardTitle>
              <div className="mt-2 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold text-gradient-brand">
                  {plano.price}
                </span>
                <span className="mb-1 text-sm text-text-muted">{plano.period}</span>
              </div>
              <p className="mt-2 text-xs text-text-muted">
                {t('configuracoes.plano.renewsOn')} <span className="font-semibold text-neutral-200">{formatDate(plano.renewsOn, i18n.language)}</span>
              </p>
            </div>

            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow-soft">
              <Sparkles size={22} />
            </span>
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {plano.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                <Check size={14} className="shrink-0 text-primary-400" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-primary/10 pt-5">
            <Button variant="primary" leftIcon={ArrowUp}>
              {t('configuracoes.plano.actions.upgrade')}
            </Button>
            <Button variant="secondary" leftIcon={CreditCard}>
              {t('configuracoes.plano.actions.manageBilling')}
            </Button>
            <button
              type="button"
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-text-muted transition-colors hover:bg-tertiary-500/10 hover:text-tertiary-300"
            >
              <X size={13} />
              {t('configuracoes.plano.actions.cancel')}
            </button>
          </div>
        </div>
      </Card>

      {/* Uso */}
      <Card glass className="flex flex-col gap-5">
        <div>
          <CardLabel>{t('configuracoes.plano.usage.title')}</CardLabel>
          <CardTitle className="mt-1.5">{t('configuracoes.plano.usage.title')}</CardTitle>
          <p className="mt-1 text-sm text-text-secondary">
            {t('configuracoes.plano.usage.subtitle')}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <UsageRow
            label={t('configuracoes.plano.usage.influencers')}
            used={plano.usage.influencers.used}
            limit={plano.usage.influencers.limit}
          />
          <UsageRow
            label={t('configuracoes.plano.usage.analyses')}
            used={plano.usage.analyses.used}
            limit={plano.usage.analyses.limit}
          />
          <UsageRow
            label={t('configuracoes.plano.usage.reports')}
            used={plano.usage.reports.used}
            limit={plano.usage.reports.limit}
          />
        </div>
      </Card>
    </div>
  )
}
