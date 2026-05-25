interface InputPanelProps {
  value: string
  onChange: (value: string) => void
  onAnalyze: () => void
  onSample: () => void
  isAnalyzing: boolean
}

export function InputPanel({
  value,
  onChange,
  onAnalyze,
  onSample,
  isAnalyzing,
}: InputPanelProps) {
  const lineCount = value.split('\n').filter((l) => l.trim()).length

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-slate-200/50 sm:p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Transaction Input</h2>
          <p className="mt-1 text-sm text-slate-500">
            Enter one transaction description per line
          </p>
        </div>
        {lineCount > 0 && (
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            {lineCount} transaction{lineCount !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`WHOLE FOODS MARKET\nUBER TRIP\nNETFLIX.COM\nSHELL GAS STATION`}
        rows={10}
        className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 font-mono text-sm text-slate-800 placeholder:text-slate-400 transition focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        spellCheck={false}
      />

      {isAnalyzing && (
        <div
          className="mt-3 overflow-hidden rounded-xl border border-indigo-200/80 bg-indigo-50/90"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-indigo-300 border-t-indigo-600" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-indigo-900">Analyzing your transactions…</p>
              <p className="mt-0.5 text-xs text-indigo-600/90">
                Matching categories and preparing results
              </p>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden bg-indigo-100">
            <div className="h-full w-1/3 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onAnalyze}
          disabled={isAnalyzing || !value.trim()}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:from-indigo-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isAnalyzing ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Analyzing…
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Analyze Expenses
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onSample}
          className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
        >
          Try Sample Data
        </button>
      </div>
    </section>
  )
}
