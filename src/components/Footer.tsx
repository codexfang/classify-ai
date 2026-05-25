const FOOTER_SECTIONS = [
  {
    title: 'Features',
    items: [
      'Automatic expense categorization',
      'Confidence scores per transaction',
      'Spending breakdown & top categories',
    ],
  },
  {
    title: 'How it works',
    items: [
      'Paste one description per line',
      'Run analysis on your transaction list',
      'Export results as CSV when ready',
    ],
  },
  {
    title: 'Categories',
    items: [
      'Food & Dining',
      'Transportation & Entertainment',
      'Shopping, Utilities & more',
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-slate-900">{section.title}</h3>
              <ul className="mt-3 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-slate-600 before:shrink-0 before:content-['•'] before:text-indigo-500"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-100 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Classify AI. All rights reserved.</p>
          <p>Built for fast, clear expense review.</p>
        </div>
      </div>
    </footer>
  )
}
