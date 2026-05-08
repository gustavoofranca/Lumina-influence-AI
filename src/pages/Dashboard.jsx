import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import DashboardHeader        from '../components/dashboard/DashboardHeader.jsx'
import KpiGrid                from '../components/dashboard/KpiGrid.jsx'
import GrowthCard             from '../components/dashboard/GrowthCard.jsx'
import DiagnosticHighlightCard from '../components/dashboard/DiagnosticHighlightCard.jsx'
import TopNetworksTable       from '../components/dashboard/TopNetworksTable.jsx'
import NetworkDensityCard     from '../components/dashboard/NetworkDensityCard.jsx'
import { CAMPAIGN_OPTIONS } from '../mocks/dashboard.js'

export default function Dashboard() {
  const { t } = useTranslation()

  const [period, setPeriod]     = useState('7d')
  const [campaign, setCampaign] = useState('all')

  // Substitui o nome traduzido da opção "Todas as campanhas"
  const campaignOptions = CAMPAIGN_OPTIONS.map((c) =>
    c.value === 'all' ? { ...c, name: t('dashboard.filters.allCampaigns') } : c
  )

  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader
        period={period}
        onPeriodChange={setPeriod}
        campaign={campaign}
        onCampaignChange={setCampaign}
        campaigns={campaignOptions}
      />

      <KpiGrid />

      {/* Linha 1: Growth (2 cols) + Diagnostico em destaque (1 col) */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GrowthCard period={period} />
        </div>
        <div>
          <DiagnosticHighlightCard />
        </div>
      </section>

      {/* Linha 2: Top Networks (2 cols) + Network Density (1 col) */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TopNetworksTable />
        </div>
        <div>
          <NetworkDensityCard />
        </div>
      </section>
    </div>
  )
}
