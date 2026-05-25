import type { ClassificationResult, ExpenseCategory } from '../types'
import { CATEGORY_COLORS } from '../types'

interface ResultsTableProps {
  results: ClassificationResult[]
  onExport: () => void
  visible: boolean
}

const CATEGORY_BADGE: Record<ExpenseCategory, string> = {
  'Food & Dining': 'bg-indigo-100 text-indigo-800 ring-indigo-200',
  Transportation: 'bg-violet-100 text-violet-800 ring-violet-200',
  Entertainment: 'bg-purple-100 text-purple-800 ring-purple-200',
  Shopping: 'bg-blue-100 text-blue-800 ring-blue-200',
  Utilities: 'bg-cyan-100 text-cyan-800 ring-cyan-200',
  Other: 'bg-slate-100 text-slate-700 ring-slate-200',
}

function ConfidenceBar({ value }: { value: number }) {
  const color =
    value >= 85 ? 'bg-emerald-500' : value >= 70 ? 'bg-indigo-500' : 'bg-amber-500'

  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100 lg:w-28">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="min-w-[2.5rem] text-right text-sm font-semibold tabular-nums text-slate-700">
        {value}%
      </span>
    </div>
  )
}

export function ResultsTable({ results, onExport, visible }: ResultsTableProps) {
  if (!visible || results.length === 0) return null

  return (
    <section
      className="animate-fade-in rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50"
      aria-live="polite"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Classification Results</h2>
          <p className="text-sm text-slate-500">{results.length} transactions analyzed</p>
        </div>
        <button
          type="button"
          onClick={onExport}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <th className="px-5 py-3 sm:px-6">Transaction</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-5 py-3 sm:px-6">Reason</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {results.map((row, index) => (
              <tr
                key={`${row.transaction}-${index}`}
                className="transition hover:bg-slate-50/60"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <td className="px-5 py-3.5 font-medium text-slate-900 sm:px-6">
                  {row.transaction}
                </td>
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${CATEGORY_BADGE[row.category]}`}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: CATEGORY_COLORS[row.category] }}
                    />
                    {row.category}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <ConfidenceBar value={row.confidence} />
                </td>
                <td className="px-5 py-3.5 text-slate-600 sm:px-6">{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
