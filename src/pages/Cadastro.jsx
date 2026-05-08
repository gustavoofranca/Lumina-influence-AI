import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { User, Building2, Mail, Lock } from 'lucide-react'

import AuthLayout from '../layouts/AuthLayout.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { cn } from '../lib/cn.js'

function validate({ name, company, email, password }) {
  const erros = {}
  if (!name.trim()) erros.name = 'Nome obrigatório.'
  if (!company.trim()) erros.company = 'Empresa obrigatória.'
  if (!email) erros.email = 'E-mail obrigatório.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.email = 'Formato inválido.'
  if (!password) erros.password = 'Senha obrigatória.'
  else if (password.length < 8) erros.password = 'Mínimo 8 caracteres.'
  return erros
}

export default function Cadastro() {
  const { t } = useTranslation()
  const { login } = useAuth()
  const navigate = useNavigate()

  const [fields, setFields] = useState({ name: '', company: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const set = (key) => (e) => {
    setFields((p) => ({ ...p, [key]: e.target.value }))
    setErrors((p) => ({ ...p, [key]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const erros = validate(fields)
    if (Object.keys(erros).length) { setErrors(erros); return }

    setLoading(true)
    setTimeout(() => {
      login({ name: fields.name, email: fields.email })
      navigate('/app/dashboard')
    }, 600)
  }

  return (
    <AuthLayout>
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-neutral-100">
          {t('auth.cadastro.title')}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">{t('auth.cadastro.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <Input
          label={t('auth.cadastro.name')}
          placeholder="Marina Costa"
          leftIcon={User}
          value={fields.name}
          onChange={set('name')}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          label={t('auth.cadastro.company')}
          placeholder="Agência XYZ"
          leftIcon={Building2}
          value={fields.company}
          onChange={set('company')}
          error={errors.company}
          autoComplete="organization"
        />
        <Input
          label={t('auth.cadastro.email')}
          type="email"
          placeholder="voce@agencia.com"
          leftIcon={Mail}
          value={fields.email}
          onChange={set('email')}
          error={errors.email}
          autoComplete="email"
        />
        <Input
          label={t('auth.cadastro.password')}
          type="password"
          placeholder="••••••••"
          leftIcon={Lock}
          value={fields.password}
          onChange={set('password')}
          error={errors.password}
          helperText={!errors.password ? 'Mínimo 8 caracteres.' : undefined}
          autoComplete="new-password"
        />

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          loading={loading}
          className="mt-2"
        >
          {t('auth.cadastro.submit')}
        </Button>
      </form>

      <p className={cn('mt-6 text-center text-sm text-text-secondary')}>
        {t('auth.cadastro.hasAccount')}{' '}
        <Link to="/login" className="font-semibold text-primary-300 hover:text-primary-200">
          {t('auth.cadastro.login')}
        </Link>
      </p>
    </AuthLayout>
  )
}
