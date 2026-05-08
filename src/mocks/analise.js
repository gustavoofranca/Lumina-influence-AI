/**
 * Mock detalhado da analise individual de um influenciador (Etapa 7).
 * Reutilizado para qualquer :id — o conteudo da analise é o mesmo,
 * apenas o cabecalho muda conforme o influenciador.
 */

// 4 KPIs do header da tab Diagnostico
export const DIAGNOSTIC_KPIS = [
  { key: 'brandCoherence', value: '92',  suffix: '/100', change:  3.2, changeType: 'positive' },
  { key: 'sentimentIndex', value: '85%', change:  1.8, changeType: 'positive' },
  { key: 'safetyRating',   value: 'A',   hint: 'Top tier' },
  { key: 'botProbability', value: '4%',  change: -0.7, changeType: 'positive' },
]

// Sentiment heatmap — 24 horas
export const SENTIMENT_24H = Array.from({ length: 24 }, (_, h) => {
  // Curva sintetica: pico no fim de tarde / inicio da noite
  const noon = 14
  const dist = Math.abs(h - noon)
  const base = Math.max(0.18, 1 - dist / 16)
  const wobble = (Math.sin(h * 1.3) + 1) / 14
  return { x: String(h).padStart(2, '0') + 'h', value: Math.min(1, base + wobble) }
})

// Sentiment heatmap — 7 dias
export const SENTIMENT_7D = [
  { x: 'Seg', value: 0.62 },
  { x: 'Ter', value: 0.71 },
  { x: 'Qua', value: 0.78 },
  { x: 'Qui', value: 0.66 },
  { x: 'Sex', value: 0.85 },
  { x: 'Sáb', value: 0.92 },
  { x: 'Dom', value: 0.88 },
]

// Clusters de sentimento (somam ~100%)
export const SENTIMENT_CLUSTERS = [
  { key: 'technical',  value: 42 },
  { key: 'purchase',   value: 28 },
  { key: 'neutral',    value: 18 },
  { key: 'skepticism', value: 12 },
]

// Keyword cloud — sentimento define a cor
export const KEYWORDS = [
  { word: 'qualidade',     weight: 0.95, sentiment: 'positive' },
  { word: 'preço alto',    weight: 0.45, sentiment: 'negative' },
  { word: 'entrega',       weight: 0.78, sentiment: 'positive' },
  { word: 'design',        weight: 0.82, sentiment: 'positive' },
  { word: 'bateria',       weight: 0.71, sentiment: 'positive' },
  { word: 'duvida',        weight: 0.40, sentiment: 'neutral' },
  { word: 'recomendo',     weight: 0.92, sentiment: 'positive' },
  { word: 'comprar agora', weight: 0.88, sentiment: 'positive' },
  { word: 'enganação',     weight: 0.30, sentiment: 'negative' },
  { word: 'tutorial',      weight: 0.55, sentiment: 'neutral' },
  { word: 'profissional',  weight: 0.74, sentiment: 'positive' },
  { word: 'vale a pena',   weight: 0.86, sentiment: 'positive' },
]

// Audience integrity (donut + lista)
export const AUDIENCE_INTEGRITY = {
  organic:   92,             // %
  suspicious: 6,             // %
  bots:       2,             // %
  totals: {
    verifiedHumans: 1142000,
    suspicious:       73000,
    bots:             25000,
  },
}

// Confianca neural por dimensao
export const NEURAL_CONFIDENCE = [
  { key: 'scriptAccuracy',  value: 94 },
  { key: 'toneMatching',    value: 87 },
  { key: 'demographicSync', value: 81 },
]

// Transcript com segmentos coloridos
export const TRANSCRIPT_SEGMENTS = [
  {
    time: '00:04', segment: 'hook', tone: 'primary',
    text: 'Olha só esse novo gadget — três meses testando em rotina pesada e ele realmente entregou.',
    highlights: ['três meses testando'],
  },
  {
    time: '00:22', segment: 'exposition', tone: 'secondary',
    text: 'Pra quem trabalha o dia inteiro com edição de vídeo, render 3D ou várias abas pesadas no navegador, a diferença é absurda. A bateria aguenta sem cair de performance.',
    highlights: ['edição de vídeo', 'render 3D', 'sem cair de performance'],
  },
  {
    time: '01:15', segment: 'valueProp', tone: 'success',
    text: 'Vale cada centavo do investimento. Comparado com o anterior, o ganho de produtividade compensou em 2 meses.',
    highlights: ['Vale cada centavo', 'compensou em 2 meses'],
  },
  {
    time: '01:48', segment: 'cta', tone: 'tertiary',
    text: 'Vou deixar o link na bio com 15% off — válido só essa semana, então corre lá.',
    highlights: ['15% off', 'corre lá'],
  },
]

// Recomendacoes da IA
export const RECOMMENDATIONS = [
  {
    id: 'rec-001', priority: 'high',
    title: 'Aumentar peso do Plano Pro nas próximas campanhas',
    description: 'Sentiment Index de 85% e Brand Coherence de 92% indicam alinhamento ideal. Recomendamos elevar o budget alocado em 30%.',
  },
  {
    id: 'rec-002', priority: 'medium',
    title: 'Usar este criador como benchmark para o nicho de tech',
    description: 'Comparar resonance score (92) com a média do segmento (76) sugere que outros criadores podem se inspirar nesse formato de hook.',
  },
  {
    id: 'rec-003', priority: 'low',
    title: 'Monitorar variação de bot probability em campanhas pagas',
    description: 'Quando há mídia paga ativa, a probabilidade de bot pode subir 3-5%. Reanalisar 48h após o boost.',
  },
]

// Posts analisados — para a tab "Posts Analisados"
export const POSTS_ANALISADOS = [
  { id: 'p1', titulo: 'Review do novo gadget', data: '2026-05-04', plataforma: 'instagram', alcance: 1240000, sentimentScore: 85, botProbability: 4 },
  { id: 'p2', titulo: 'Setup completo 2026',   data: '2026-05-01', plataforma: 'tiktok',    alcance:  890000, sentimentScore: 78, botProbability: 6 },
  { id: 'p3', titulo: 'Comparativo flagships', data: '2026-04-28', plataforma: 'youtube',   alcance:  410000, sentimentScore: 81, botProbability: 5 },
  { id: 'p4', titulo: 'Dicas de produtividade', data: '2026-04-25', plataforma: 'instagram', alcance:  620000, sentimentScore: 72, botProbability: 8 },
  { id: 'p5', titulo: 'Q&A com a comunidade',  data: '2026-04-20', plataforma: 'tiktok',    alcance:  340000, sentimentScore: 88, botProbability: 3 },
]

// Historico de analises — para a tab "Historico"
export const HISTORICO_ANALISES = [
  { id: 'PX-9921', data: '2026-05-04', escopo: '7 posts', brandCoherence: 92, sentimentScore: 85 },
  { id: 'PX-9912', data: '2026-04-25', escopo: '12 posts', brandCoherence: 89, sentimentScore: 81 },
  { id: 'PX-9904', data: '2026-04-15', escopo: '8 posts',  brandCoherence: 86, sentimentScore: 78 },
  { id: 'PX-9891', data: '2026-04-04', escopo: '15 posts', brandCoherence: 84, sentimentScore: 76 },
  { id: 'PX-9876', data: '2026-03-22', escopo: '10 posts', brandCoherence: 81, sentimentScore: 73 },
]
