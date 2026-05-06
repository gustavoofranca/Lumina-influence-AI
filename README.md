# Lumina Influence AI

> SaaS de auditoria de performance de influenciadores digitais, com IA multimodal (Google Gemini).
> TCC de Engenharia de Software — Gustavo Henrique França.

**Tagline:** *"Pare de queimar verba com métricas de vaidade."*

---

## Status

**Etapa 0 — Setup** concluída. Base do front-end pronta com identidade visual oficial aplicada, i18n bilíngue funcional e design tokens carregados.

Roadmap completo em [`CLAUDE.md`](./CLAUDE.md) (Parte 2 — Plano de etapas).

---

## Stack

- **Vite** + **React 18** (JS, sem TypeScript nesta fase)
- **Tailwind CSS v3** com paleta customizada
- **React Router** v6
- **react-i18next** (pt-BR padrão, en fallback)
- **Lucide React** (ícones), **Recharts** (gráficos)
- **clsx** + **tailwind-merge** via helper `cn()`

---

## Comandos

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Build de produção em ./dist
npm run build

# Preview local do build
npm run preview
```

---

## Estrutura de pastas

```
src/
├── components/
│   ├── ui/         # botão, card, input, etc. (Etapa 1)
│   ├── layout/     # sidebar, topbar (Etapa 4)
│   └── charts/     # wrappers de Recharts
├── pages/          # telas roteadas
├── layouts/        # PublicLayout, AppLayout, AuthLayout
├── mocks/          # dados mockados centralizados
├── lib/            # cn(), helpers
├── i18n/
│   ├── index.js    # configuração do i18next
│   └── locales/    # pt.json, en.json
├── App.jsx         # rotas
├── main.jsx        # entry-point
└── index.css       # tokens CSS + Tailwind layers
```

---

## Paleta oficial (resumo)

| Token       | Hex       | Uso                                            |
| ----------- | --------- | ---------------------------------------------- |
| `primary`   | `#7C3AED` | Violeta — CTAs, destaques, links ativos        |
| `secondary` | `#0EA5E9` | Cyan — dados positivos, gráficos               |
| `tertiary`  | `#F43F5E` | Rosa coral — alertas, perigo, bot detection    |
| `neutral`   | `#0F172A` | Azul-marinho profundo — background base do app |

Escala completa (50–900/950) e tokens semânticos (`bg-base`, `bg-surface`, `text-primary` etc.) em [`tailwind.config.js`](./tailwind.config.js).

**Tipografia:**
- **Plus Jakarta Sans** (`font-display`) — headlines, display (600/700/800)
- **Inter** (`font-sans`) — body, labels, UI (400/500/600/700)

Detalhes completos da identidade visual em [`CLAUDE.md`](./CLAUDE.md).

---

## Convenções

- **Modo escuro sempre** — não há modo claro nesta fase.
- **Sem `localStorage`/`sessionStorage`** — Context + state em memória. Refresh perde estado, está OK no protótipo.
- **Sem TypeScript** nesta fase.
- **Sem libs de UI prontas** (Material/Chakra/Antd) — tudo construído do zero com Tailwind.
- Toda string visível ao usuário passa por `t('chave')` do `react-i18next`.
- Composição de classes Tailwind sempre via `cn()` (`src/lib/cn.js`).

---

## Referências de design

- Layouts e fluxos vivem no Stitch (anexar links/screenshots por etapa).
- Identidade visual e regras de negócio: [`CLAUDE.md`](./CLAUDE.md).
