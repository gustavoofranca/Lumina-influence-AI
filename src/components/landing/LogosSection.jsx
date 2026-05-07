import { useTranslation } from 'react-i18next'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.33 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.12C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.57A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.12C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.57a3.02 3.02 0 0 0 2.12-2.12C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  )
}

const PLATFORMS = [
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'TikTok',   Icon: TikTokIcon },
  { name: 'YouTube',  Icon: YouTubeIcon },
]

export default function LogosSection() {
  const { t } = useTranslation()
  return (
    <section className="border-y border-primary/10 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-label">{t('landing.logos.label')}</p>
        <div className="flex items-center justify-center gap-16">
          {PLATFORMS.map(({ name, Icon }, i) => (
            <div
              key={name}
              data-reveal
              style={{ '--delay': `${i * 100}ms` }}
              className="flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-300"
            >
              <Icon />
              <span className="text-xs font-semibold tracking-label">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
