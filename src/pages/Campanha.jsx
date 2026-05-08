import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Megaphone } from 'lucide-react'

import Button from '../components/ui/Button.jsx'
import CampanhaHeader     from '../components/campanha/CampanhaHeader.jsx'
import ParticipantesGrid  from '../components/campanha/ParticipantesGrid.jsx'
import BenchmarkTable     from '../components/campanha/BenchmarkTable.jsx'
import RadarComparison    from '../components/campanha/RadarComparison.jsx'
import { findCampanha } from '../mocks/campanhas.js'

export default function Campanha() {
  const { t } = useTranslation()
  const { id } = useParams()
  const campanha = findCampanha(id)

  if (!campanha) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-800 text-text-muted">
          <Megaphone size={22} />
        </span>
        <h2 className="font-display text-xl font-bold text-neutral-100">
          {t('campanhas.list.empty.title')}
        </h2>
        <Link to="/app/campanhas">
          <Button variant="primary" leftIcon={ArrowLeft}>
            {t('campanhas.detail.back')}
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <CampanhaHeader campanha={campanha} />

      <ParticipantesGrid campanha={campanha} />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BenchmarkTable campanha={campanha} />
        </div>
        <div>
          <RadarComparison campanha={campanha} />
        </div>
      </section>
    </div>
  )
}
