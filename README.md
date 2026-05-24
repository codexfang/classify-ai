# Classify AI

**Intelligent expense categorization** dashboard that classifies transaction descriptions into spending categories using a weighted keyword scoring engine.

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

## Usage

1. Paste transaction descriptions (one per line) into the input panel.
2. Click **Analyze Expenses** or **Try Sample Data**.
3. Review the results table and analytics dashboard.
4. Export results as CSV when needed.

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/) + [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/)

## License

MIT
