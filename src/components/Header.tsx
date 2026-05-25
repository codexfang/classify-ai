export function Header() {
  return (
    <header className="border-b border-slate-800/50 bg-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-md shadow-indigo-900/40"
            aria-hidden
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-semibold tracking-tight text-white sm:text-xl">
              Classify AI
            </h1>
            <p className="truncate text-xs text-slate-400 sm:text-sm">
              Expense categorization &amp; insights
            </p>
          </div>
        </div>

        <p className="hidden max-w-md text-right text-sm leading-snug text-slate-400 md:block">
          Paste transaction descriptions, classify spending, and review analytics in one place.
        </p>
      </div>
    </header>
  )
}
