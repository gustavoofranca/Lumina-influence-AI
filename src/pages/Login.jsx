import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Lock } from 'lucide-react'

import AuthLayout from '../layouts/AuthLayout.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { cn } from '../lib/cn.js'

function validate(email, password) {
  const erros = {}
  if (!email) erros.email = 'E-mail obrigatório.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.email = 'Formato inválido.'
  if (!password) erros.password = 'Senha obrigatória.'
  return erros
}

export default function Login() {
  const { t } = useTranslation()
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors]     = useState({})
  const [loading, setLoading]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const erros = validate(email, password)
    if (Object.keys(erros).length) { setErrors(erros); return }

    setLoading(true)
    setTimeout(() => {
      login({ email })
      navigate('/app/dashboard')
    }, 600)
  }

  return (
    <AuthLayout>
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-neutral-100">
          {t('auth.login.title')}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">{t('auth.login.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <Input
          label={t('auth.login.email')}
          type="email"
          placeholder="voce@agencia.com"
          leftIcon={Mail}
          value={email}
          onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })) }}
          error={errors.email}
          autoComplete="email"
        />
        <Input
          label={t('auth.login.password')}
          type="password"
          placeholder="••••••••"
          leftIcon={Lock}
          value={password}
          onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })) }}
          error={errors.password}
          autoComplete="current-password"
        />

        <div className="flex justify-end">
          <Link
            to="/recuperar-senha"
            className="text-xs text-text-secondary transition-colors hover:text-primary-300"
          >
            {t('auth.login.forgotPassword')}
          </Link>
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          loading={loading}
        >
          {t('auth.login.submit')}
        </Button>
      </form>

      <p className={cn('mt-6 text-center text-sm text-text-secondary')}>
        {t('auth.login.noAccount')}{' '}
        <Link to="/cadastro" className="font-semibold text-primary-300 hover:text-primary-200">
          {t('auth.login.createAccount')}
        </Link>
      </p>
    </AuthLayout>
  )
}
