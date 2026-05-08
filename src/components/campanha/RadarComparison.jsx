import { useTranslation } from 'react-i18next'

import Card, { CardLabel, CardTitle } from '../ui/Card.jsx'
import RadarChart from '../charts/RadarChart.jsx'
import { findInfluenciador } from '../../mocks/influenciadores.js'

const RADAR_COLORS = ['#7C3AED', '#0EA5E9', '#22C55E', '#F43F5E']

export default function RadarComparison({ campanha }) {
  const { t } = useTranslation()

  const participants = campanha.participations
    .map((p) => findInfluenciador(p.influenciadorId))
    .filter(Boolean)
    .slice(0, 4) // radar suporta até 4 com legibilidade

  // Eixos do radar (todos normalizados para 0-100)
  const axes = [
    { key: 'brandCoherence',  label: t('campanhas.detail.radar.axes.brandCoherence') },
    { key: 'sentimentIndex',  label: t('campanhas.detail.radar.axes.sentimentIndex') },
    { key: 'resonanceScore',  label: t('campanhas.detail.radar.axes.resonanceScore') },
    { key: 'engagement',      label: t('campanhas.detail.radar.axes.engagement') },
    { key: 'organicReach',    label: t('campanhas.detail.radar.axes.organicReach') },
    { key: 'botSafety',       label: t('campanhas.detail.radar.axes.botSafety') },
  ]

  // Pivota os dados — uma linha por eixo, uma coluna por influenciador
  const data = axes.map((axis) => {
    const row = { axis: axis.label }
    participants.forEach((p) => {
      let value
      switch (axis.key) {
        case 'brandCoherence':  value = p.brandCoherence; break
        case 'sentimentIndex':  value = p.sentimentScore; break
        case 'resonanceScore':  value = p.resonanceScore; break
        case 'engagement':      value = Math.min(100, p.engagement * 10); break // 0-10% -> 0-100
        case 'organicReach':    value = p.organicReach; break
        case 'botSafety':       value = 100 - p.botProbability; break
        default: value = 0
      }
      row[p.id] = value
    })
    return row
  })

  const entities = participants.map((p, i) => ({
    key:   p.id,
    label: p.name,
    color: RADAR_COLORS[i],
  }))

  return (
    <Card glass className="flex flex-col gap-5">
      <div>
        <CardLabel>{t('campanhas.detail.radar.title')}</CardLabel>
        <CardTitle className="mt-1.5">{t('campanhas.detail.radar.title')}</CardTitle>
        <p className="mt-1 text-sm text-text-secondary">{t('campanhas.detail.radar.subtitle')}</p>
      </div>

      <RadarChart data={data} entities={entities} height={360} />
    </Card>
  )
}
