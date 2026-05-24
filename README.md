# Classify AI

**Intelligent expense categorization and insights** — a polished, client-side fintech dashboard that classifies transaction descriptions into spending categories using a weighted keyword scoring engine.

Live demo: [https://codexfang.github.io/classify-ai](https://codexfang.github.io/classify-ai)

![Classify AI](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## Features

- **Smart classification** — Keyword matching with per-category weighted scoring
- **Confidence scores** — 0–100% with human-readable reasoning per transaction
- **Analytics dashboard** — Doughnut chart, summary cards (total, top category, top keyword)
- **Persistence** — Input and results saved to `localStorage`
- **CSV export** — Download classification results
- **Responsive UI** — Modern AI SaaS aesthetic with smooth fade-in animations
- **Privacy-first** — All processing happens locally in the browser

## Categories

| Category | Example keywords |
|----------|------------------|
| Food & Dining | restaurant, cafe, coffee, pizza, whole foods |
| Transportation | uber, lyft, gas, shell, chevron |
| Entertainment | netflix, spotify, movie, theater |
| Shopping | amazon, walmart, target |
| Utilities | electric, water, internet, comcast |
| Other | Fallback when no keywords match |

## Quick Start

```bash
git clone https://github.com/codexfang/classify-ai.git
cd classify-ai
npm install
npm run dev
```

Open [http://localhost:5173/classify-ai/](http://localhost:5173/classify-ai/) in your browser.

## Usage

1. Paste transaction descriptions (one per line) into the input panel.
2. Click **Analyze Expenses** or **Try Sample Data**.
3. Review the results table and analytics dashboard.
4. Export results as CSV when needed.

### Example input

```
WHOLE FOODS MARKET
UBER TRIP
NETFLIX.COM
SHELL GAS STATION
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── InputPanel.tsx
│   ├── ResultsTable.tsx
│   └── AnalyticsDashboard.tsx
├── utils/
│   ├── keywords.ts          # Category keyword mappings
│   ├── classification.ts  # Scoring engine
│   ├── storage.ts           # localStorage persistence
│   └── exportCsv.ts         # CSV export
├── App.tsx
├── main.tsx
└── types.ts
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Deployment (GitHub Pages)

This project is configured for GitHub Pages at `https://codexfang.github.io/classify-ai`.

1. Create a repository named `classify-ai` under the `codexfang` account.
2. Push this code to the `main` branch.
3. In repository **Settings → Pages**, set source to **Deploy from branch** → `gh-pages` / root (or use the `gh-pages` branch created by the deploy script).
4. Run:

```bash
npm run deploy
```

The Vite `base` path is set to `/classify-ai/` in `vite.config.ts`, and `package.json` includes the correct `homepage` URL.

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/)
- [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment

## License

MIT
