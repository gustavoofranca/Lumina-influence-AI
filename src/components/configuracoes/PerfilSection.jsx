import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { User, Mail, Briefcase, Phone, Trash2, Upload } from 'lucide-react'

import Card, { CardLabel, CardTitle } from '../ui/Card.jsx'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'
import Avatar from '../ui/Avatar.jsx'
import { useAuth } from '../../context/AuthContext.jsx'

export default function PerfilSection({ onSave }) {
  const { t } = useTranslation()
  const { user } = useAuth()

  const [fields, setFields] = useState({
    name:  user?.name  || 'Usuário Lumina',
    email: user?.email || 'voce@lumina-agency.com.br',
    role:  'Founder & Head of Strategy',
    phone: '+55 (11) 99876-5432',
  })

  const set = (key) => (e) =>
    setFields((p) => ({ ...p, [key]: e.target.value }))

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSave?.() }}
      className="flex flex-col gap-6"
    >
      <Card glass className="flex flex-col gap-5">
        <div>
          <CardLabel>{t('configuracoes.perfil.title')}</CardLabel>
          <CardTitle className="mt-1.5">{t('configuracoes.perfil.title')}</CardTitle>
          <p className="mt-1 text-sm text-text-secondary">
            {t('configuracoes.perfil.subtitle')}
          </p>
        </div>

        {/* Avatar */}
        <div>
          <span className="text-label">{t('configuracoes.perfil.avatarLabel')}</span>
          <div className="mt-3 flex items-center gap-4">
            <Avatar name={fields.name} size="xl" />
            <div className="flex flex-col gap-2">
              <Button type="button" variant="secondary" size="sm" leftIcon={Upload}>
                {t('configuracoes.perfil.changeAvatar')}
              </Button>
              <Button type="button" variant="outlined" size="sm" leftIcon={Trash2}>
                {t('configuracoes.perfil.removeAvatar')}
              </Button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Input
            label={t('configuracoes.perfil.name')}
            leftIcon={User}
            value={fields.name}
            onChange={set('name')}
          />
          <Input
            label={t('configuracoes.perfil.email')}
            leftIcon={Mail}
            type="email"
            value={fields.email}
            onChange={set('email')}
          />
          <Input
            label={t('configuracoes.perfil.role')}
            leftIcon={Briefcase}
            value={fields.role}
            onChange={set('role')}
          />
          <Input
            label={t('configuracoes.perfil.phone')}
            leftIcon={Phone}
            value={fields.phone}
            onChange={set('phone')}
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
