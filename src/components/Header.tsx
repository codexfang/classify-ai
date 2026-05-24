export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-violet-950 px-4 py-10 sm:px-6 sm:py-14">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-200">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          AI-Powered Classification Engine
        </div>

        <h1 className="bg-gradient-to-r from-white via-violet-100 to-blue-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
          Classify AI
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
          Intelligent expense categorization and insights
        </p>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          Paste your transaction descriptions and get instant category labels,
          confidence scores, and spending analytics — all processed locally in your
          browser.
        </p>
      </div>
    </header>
  )
}
