import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Plus, FileText, Download, Eye, FileSearch } from 'lucide-react'

import { cn } from '../lib/cn.js'
import Button from '../components/ui/Button.jsx'
import Search from '../components/ui/Search.jsx'
import Card, { CardLabel, CardTitle } from '../components/ui/Card.jsx'
import Toast from '../components/ui/Toast.jsx'
import { RELATORIOS } from '../mocks/relatorios.js'
import { findCampanha, formatDateRange } from '../mocks/campanhas.js'

function formatDate(iso, locale) {
  try {
    return new Date(iso).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
      day: '2-digit', month: 'short', year: 'numeric',
    })
  } catch {
    return iso
  }
}

function RelatorioRow({ relatorio, onPreview, onDownload, t, locale }) {
  const campanha = findCampanha(relatorio.campaignId)
  return (
    <div className={cn(
      'flex flex-col gap-4 rounded-2xl border border-neutral-700/60 bg-neutral-900/40 p-5',
      'transition-all duration-200 hover:border-primary/30 hover:bg-neutral-800/50',
      'lg:flex-row lg:items-center'
    )}>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-600/15 text-primary-300 ring-1 ring-inset ring-primary-500/25">
        <FileText size={18} />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-display text-base font-bold text-neutral-100">
          {relatorio.name}
        </h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted">
          <span>{campanha?.brand} · {campanha?.name}</span>
          <span>·</span>
          <span>{formatDateRange(relatorio.period.start, relatorio.period.end, locale)}</span>
          <span>·</span>
          <span>{relatorio.pages} {t('relatorios.list.columns.pages').toLowerCase()}</span>
        </div>
      </div>

      <div className="hidden flex-col items-end text-xs text-text-muted lg:flex">
        <span className="font-semibold uppercase tracking-label">
          {formatDate(relatorio.createdAt, locale)}
        </span>
        <span>{relatorio.generatedBy}</span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" leftIcon={Eye} onClick={onPreview}>
          {t('relatorios.list.actions.preview')}
        </Button>
        <Button variant="primary" size="sm" leftIcon={Download} onClick={onDownload}>
          {t('relatorios.list.actions.download')}
        </Button>
      </div>
    </div>
  )
}

export default function Relatorios() {
  const { t, i18n } = useTranslation()
  const [search, setSearch] = useState('')
  const [toastOpen, setToastOpen] = useState(false)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return RELATORIOS
    return RELATORIOS.filter((r) => {
      const c = findCampanha(r.campaignId)
      return `${r.name} ${c?.name || ''} ${c?.brand || ''}`.toLowerCase().includes(q)
    })
  }, [search])

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-neutral-100 lg:text-4xl">
            {t('relatorios.list.title')}
          </h1>
          <p className="mt-1.5 text-sm text-text-secondary">{t('relatorios.list.subtitle')}</p>
        </div>

        <Link to="/app/relatorios/novo">
          <Button variant="primary" leftIcon={Plus}>
            {t('relatorios.list.newButton')}
          </Button>
        </Link>
      </header>

      <div className="max-w-lg">
        <Search
          placeholder={t('relatorios.list.search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Lista */}
      <Card glass padding="md">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-800 text-text-muted">
              <FileSearch size={20} />
            </span>
            <CardTitle>{t('relatorios.list.empty.title')}</CardTitle>
            <p className="max-w-sm text-sm text-text-secondary">
              {t('relatorios.list.empty.subtitle')}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <CardLabel>
              {t('relatorios.list.title')} · {filtered.length}
            </CardLabel>
            {filtered.map((r) => (
              <RelatorioRow
                key={r.id}
                relatorio={r}
                onPreview={() => setToastOpen(true)}
                onDownload={() => setToastOpen(true)}
                t={t}
                locale={i18n.language}
              />
            ))}
          </div>
        )}
      </Card>

      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        message={t('relatorios.wizard.exportSoon')}
        description={t('relatorios.wizard.exportSoonDesc')}
        type="info"
      />
    </div>
  )
}
