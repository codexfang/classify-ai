export function Header() {
  return (
    <header className="border-b border-slate-800/50 bg-slate-900">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <h1 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          Classify AI
        </h1>
        <p className="text-right text-xs font-medium text-slate-400 sm:text-sm">
          Expense Categorization &amp; Insights
        </p>
      </div>
    </header>
  )
}
