import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Building2, Globe, Hash, MapPin, Tag, Sparkles } from 'lucide-react'

import { cn } from '../../lib/cn.js'
import Card, { CardLabel, CardTitle } from '../ui/Card.jsx'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'
import { AGENCIA } from '../../mocks/agencia.js'

export default function AgenciaSection({ onSave }) {
  const { t } = useTranslation()
  const [fields, setFields] = useState({ ...AGENCIA })

  const set = (key) => (e) =>
    setFields((p) => ({ ...p, [key]: e.target.value }))

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSave?.() }}
      className="flex flex-col gap-6"
    >
      <Card glass className="flex flex-col gap-5">
        <div>
          <CardLabel>{t('configuracoes.agencia.title')}</CardLabel>
          <CardTitle className="mt-1.5">{t('configuracoes.agencia.title')}</CardTitle>
          <p className="mt-1 text-sm text-text-secondary">
            {t('configuracoes.agencia.subtitle')}
          </p>
        </div>

        {/* Marca da agencia (visual) */}
        <div className="flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary-600/5 p-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow-soft">
            <Sparkles size={22} />
          </span>
          <div className="min-w-0">
            <p className="font-display text-lg font-bold text-neutral-100">{fields.tradeName}</p>
            <p className="text-xs text-text-muted">Desde {fields.founded}</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Input
            label={t('configuracoes.agencia.name')}
            leftIcon={Building2}
            value={fields.name}
            onChange={set('name')}
          />
          <Input
            label={t('configuracoes.agencia.tradeName')}
            leftIcon={Tag}
            value={fields.tradeName}
            onChange={set('tradeName')}
          />
          <Input
            label={t('configuracoes.agencia.cnpj')}
            leftIcon={Hash}
            value={fields.cnpj}
            onChange={set('cnpj')}
          />
          <Input
            label={t('configuracoes.agencia.website')}
            leftIcon={Globe}
            value={fields.website}
            onChange={set('website')}
          />
          <Input
            label={t('configuracoes.agencia.industry')}
            leftIcon={Tag}
            value={fields.industry}
            onChange={set('industry')}
          />
          <Input
            label={t('configuracoes.agencia.address')}
            leftIcon={MapPin}
            value={fields.address}
            onChange={set('address')}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-label">
            {t('configuracoes.agencia.description')}
          </label>
          <textarea
            rows={3}
            value={fields.description}
            onChange={set('description')}
            className={cn(
              'w-full rounded-xl bg-bg-input px-3.5 py-3 text-sm text-neutral-100',
              'ring-1 ring-inset ring-neutral-700 transition-all duration-200',
              'placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:shadow-glow-soft'
            )}
          />
        </div>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" variant="primary">
          {t('configuracoes.save')}
        </Button>
      </div>
    </form>
  )
}
