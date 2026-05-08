import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'

import AuthLayout from '../layouts/AuthLayout.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'

export default function RecuperarSenha() {
  const { t } = useTranslation()

  const [email, setEmail]     = useState('')
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent]       = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) { setError('E-mail obrigatório.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Formato inválido.'); return }

    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 800)
  }

  return (
    <AuthLayout>
      {sent ? (
        /* Estado de sucesso */
        <div className="flex flex-col items-center gap-4 py-4 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-500/25">
            <CheckCircle size={28} />
          </div>
          <h1 className="font-display text-2xl font-bold text-neutral-100">
            Link enviado!
          </h1>
          <p className="text-sm leading-relaxed text-text-secondary">
            {t('auth.recover.successMessage')}
          </p>
          <Link
            to="/login"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200"
          >
            <ArrowLeft size={14} />
            {t('auth.recover.backToLogin')}
          </Link>
        </div>
      ) : (
        /* Formulário */
        <>
          <div className="mb-8 text-center">
            <h1 className="font-display text-3xl font-bold text-neutral-100">
              {t('auth.recover.title')}
            </h1>
            <p className="mt-2 text-sm text-text-secondary">{t('auth.recover.subtitle')}</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Input
              label={t('auth.recover.email')}
              type="email"
              placeholder="voce@agencia.com"
              leftIcon={Mail}
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError('') }}
              error={error}
              autoComplete="email"
            />

            <Button type="submit" variant="primary" fullWidth size="lg" loading={loading}>
              {t('auth.recover.submit')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-neutral-100"
            >
              <ArrowLeft size={14} />
              {t('auth.recover.backToLogin')}
            </Link>
          </div>
        </>
      )}
    </AuthLayout>
  )
}
