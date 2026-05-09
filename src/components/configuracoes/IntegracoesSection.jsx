import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link2, Unlink, Plus } from 'lucide-react'

import { cn } from '../../lib/cn.js'
import Card, { CardLabel, CardTitle } from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import Badge from '../ui/Badge.jsx'
import StatusIndicator from '../ui/StatusIndicator.jsx'
import { PLATFORM_META } from '../icons/PlatformIcons.jsx'
import { INTEGRACOES } from '../../mocks/agencia.js'

function formatRelative(iso, locale) {
  if (!iso) return '—'
  try {
    const d = new Date(iso)
    return d.toLocaleString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
    })
  } catch { return iso }
}

function IntegracaoCard({ integ, t, locale }) {
  const meta = PLATFORM_META[integ.platform]
  const Icon = meta.Icon

  return (
    <div className={cn(
      'flex flex-col gap-4 rounded-2xl border p-5 transition-all duration-200',
      integ.connected
        ? 'border-primary/15 bg-primary-600/5 hover:border-primary/30'
        : 'border-neutral-700/60 bg-neutral-900/40 hover:border-neutral-600'
    )}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset',
            integ.connected
              ? 'bg-neutral-800 text-neutral-100 ring-primary/30'
              : 'bg-neutral-800/60 text-text-muted ring-neutral-700'
          )}>
            <Icon size={22} />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-neutral-100">{meta.name}</h3>
            {integ.accountHandle && (
              <p className="text-xs text-text-muted">{integ.accountHandle}</p>
            )}
          </div>
        </div>
        {integ.connected
          ? <StatusIndicator label={t('configuracoes.integracoes.connected')} color="success" />
          : <Badge variant="neutral" uppercase={false}>{t('configuracoes.integracoes.disconnected')}</Badge>
        }
      </div>

      {integ.connected && (
        <div className="grid grid-cols-2 gap-3 border-t border-neutral-800 pt-4 text-xs">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-label text-text-muted">
              {t('configuracoes.integracoes.lastSync')}
            </span>
            <span className="mt-1 block font-medium text-neutral-200">
              {formatRelative(integ.lastSync, locale)}
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-label text-text-muted">
              {t('configuracoes.integracoes.scopes')}
            </span>
            <span className="mt-1 block font-medium text-neutral-200">
              {integ.scopes.length} OAuth
            </span>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        {integ.connected ? (
          <Button variant="outlined" size="sm" leftIcon={Unlink}>
            {t('configuracoes.integracoes.disconnect')}
          </Button>
        ) : (
          <Button variant="primary" size="sm" leftIcon={Link2}>
            {t('configuracoes.integracoes.connect')}
          </Button>
        )}
      </div>
    </div>
  )
}

export default function IntegracoesSection() {
  const { t, i18n } = useTranslation()
  const [items] = useState(INTEGRACOES)

  return (
    <Card glass className="flex flex-col gap-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <CardLabel>{t('configuracoes.integracoes.title')}</CardLabel>
          <CardTitle className="mt-1.5">{t('configuracoes.integracoes.title')}</CardTitle>
          <p className="mt-1 max-w-2xl text-sm text-text-secondary">
            {t('configuracoes.integracoes.subtitle')}
          </p>
        </div>
        <Button variant="primary" leftIcon={Plus} size="sm">
          {t('configuracoes.integracoes.addNew')}
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((i) => (
          <IntegracaoCard key={i.platform} integ={i} t={t} locale={i18n.language} />
        ))}
      </div>
    </Card>
  )
}
