/**
 * Mock central de relatorios (Etapa 9).
 * Cada relatorio aponta para uma campanha + influenciadores selecionados
 * + secoes incluidas + metadados de criacao.
 */

export const SECTION_KEYS = ['kpis', 'growth', 'benchmark', 'diagnostic', 'recommendations']

export const RELATORIOS = [
  {
    id: 'rep-001',
    name: 'Verão 2026 — Relatório Q2',
    campaignId: 'cmp-001',
    createdAt: '2026-05-01',
    period: { start: '2026-04-01', end: '2026-04-30' },
    influencerIds: ['inf-001', 'inf-005', 'inf-011', 'inf-014'],
    sections: ['kpis', 'growth', 'benchmark', 'diagnostic', 'recommendations'],
    pages: 14,
    generatedBy: 'Marina Souza',
  },
  {
    id: 'rep-002',
    name: 'Lançamento Pro Series — Final',
    campaignId: 'cmp-004',
    createdAt: '2026-04-05',
    period: { start: '2026-02-01', end: '2026-03-31' },
    influencerIds: ['inf-007', 'inf-003', 'inf-005', 'inf-006'],
    sections: ['kpis', 'growth', 'benchmark', 'diagnostic'],
    pages: 11,
    generatedBy: 'Pedro Lima',
  },
  {
    id: 'rep-003',
    name: 'Fitness Challenge — Snapshot Mensal',
    campaignId: 'cmp-003',
    createdAt: '2026-04-30',
    period: { start: '2026-04-01', end: '2026-04-30' },
    influencerIds: ['inf-002', 'inf-012', 'inf-013'],
    sections: ['kpis', 'benchmark'],
    pages: 7,
    generatedBy: 'Marina Souza',
  },
  {
    id: 'rep-004',
    name: 'Influencer Spotlight — Q1',
    campaignId: 'cmp-005',
    createdAt: '2026-04-12',
    period: { start: '2026-03-15', end: '2026-04-10' },
    influencerIds: ['inf-009', 'inf-010', 'inf-015'],
    sections: ['kpis', 'recommendations'],
    pages: 6,
    generatedBy: 'Aline Tavares',
  },
]

export const findRelatorio = (id) => RELATORIOS.find((r) => r.id === id)
