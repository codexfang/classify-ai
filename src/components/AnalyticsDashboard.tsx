import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import type { AnalyticsSummary, ExpenseCategory } from '../types'
import { CATEGORY_COLORS, EXPENSE_CATEGORIES } from '../types'

ChartJS.register(ArcElement, Tooltip, Legend)

interface AnalyticsDashboardProps {
  summary: AnalyticsSummary
  visible: boolean
}

interface SummaryCardProps {
  label: string
  value: string
  sub?: string
  accent: 'indigo' | 'violet' | 'blue'
}

const ACCENT_STYLES = {
  indigo: 'from-indigo-500/10 to-indigo-600/5 border-indigo-200/60 text-indigo-700',
  violet: 'from-violet-500/10 to-violet-600/5 border-violet-200/60 text-violet-700',
  blue: 'from-blue-500/10 to-blue-600/5 border-blue-200/60 text-blue-700',
}

function SummaryCard({ label, value, sub, accent }: SummaryCardProps) {
  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br p-5 shadow-sm ${ACCENT_STYLES[accent]}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider opacity-80">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      {sub && <p className="mt-1 text-sm text-slate-500">{sub}</p>}
    </div>
  )
}

export function AnalyticsDashboard({ summary, visible }: AnalyticsDashboardProps) {
  if (!visible || summary.totalTransactions === 0) return null

  const labels = EXPENSE_CATEGORIES.filter((c) => summary.categoryCounts[c] > 0)
  const data = labels.map((c) => summary.categoryCounts[c])
  const colors = labels.map((c) => CATEGORY_COLORS[c])

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderColor: '#ffffff',
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 16,
          usePointStyle: true,
          font: { family: 'Inter, system-ui, sans-serif', size: 12 },
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { label?: string; parsed?: number; dataset: { data: number[] } }) => {
            const total = ctx.dataset.data.reduce((a, b) => a + b, 0)
            const value = ctx.parsed ?? 0
            const pct = total > 0 ? Math.round((value / total) * 100) : 0
            return ` ${ctx.label}: ${value} (${pct}%)`
          },
        },
      },
    },
  }

  const topCategoryLabel = summary.topCategory ?? '—'
  const keywordLabel = summary.mostFrequentKeyword
    ? `'${summary.mostFrequentKeyword}'`
    : '—'

  return (
    <section className="animate-fade-in space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Total Transactions"
          value={String(summary.totalTransactions)}
          sub="Analyzed in this session"
          accent="indigo"
        />
        <SummaryCard
          label="Top Category"
          value={topCategoryLabel}
          sub={
            summary.topCategory
              ? `${summary.topCategoryCount} transaction${summary.topCategoryCount !== 1 ? 's' : ''}`
              : undefined
          }
          accent="violet"
        />
        <SummaryCard
          label="Most Frequent Keyword"
          value={keywordLabel}
          sub="Across matched transactions"
          accent="blue"
        />
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-slate-200/50 sm:p-6">
        <h2 className="text-lg font-semibold text-slate-900">Spending Distribution</h2>
        <p className="mt-1 mb-6 text-sm text-slate-500">
          Category breakdown across your analyzed transactions
        </p>

        <div className="mx-auto max-w-sm">
          <Doughnut data={chartData} options={chartOptions} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {EXPENSE_CATEGORIES.map((category: ExpenseCategory) => {
            const count = summary.categoryCounts[category]
            if (count === 0) return null
            return (
              <div
                key={category}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm"
              >
                <span className="flex items-center gap-2 text-slate-700">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: CATEGORY_COLORS[category] }}
                  />
                  {category}
                </span>
                <span className="font-semibold tabular-nums text-slate-900">{count}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
