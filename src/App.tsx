import { useCallback, useEffect, useState } from 'react'
import { AnalyticsDashboard } from './components/AnalyticsDashboard'
import { Header } from './components/Header'
import { InputPanel } from './components/InputPanel'
import { ResultsTable } from './components/ResultsTable'
import type { AnalyticsSummary, ClassificationResult } from './types'
import { buildAnalytics, classifyTransactions } from './utils/classification'
import { exportResultsToCsv } from './utils/exportCsv'
import { SAMPLE_TRANSACTIONS } from './utils/keywords'
import { loadState, saveState } from './utils/storage'

const EMPTY_SUMMARY: AnalyticsSummary = {
  totalTransactions: 0,
  topCategory: null,
  topCategoryCount: 0,
  mostFrequentKeyword: null,
  categoryCounts: {
    'Food & Dining': 0,
    Transportation: 0,
    Entertainment: 0,
    Shopping: 0,
    Utilities: 0,
    Other: 0,
  },
}

export default function App() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<ClassificationResult[]>([])
  const [summary, setSummary] = useState<AnalyticsSummary>(EMPTY_SUMMARY)
  const [showResults, setShowResults] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    const saved = loadState()
    if (saved) {
      setInput(saved.input)
      setResults(saved.results)
      setSummary(buildAnalytics(saved.results))
      setShowResults(saved.results.length > 0)
    }
  }, [])

  useEffect(() => {
    if (input || results.length > 0) {
      saveState({ input, results })
    }
  }, [input, results])

  const runAnalysis = useCallback((text: string) => {
    setIsAnalyzing(true)
    setShowResults(false)

    window.setTimeout(() => {
      const classified = classifyTransactions(text)
      setResults(classified)
      setSummary(buildAnalytics(classified))
      setShowResults(true)
      setIsAnalyzing(false)
    }, 400)
  }, [])

  const handleAnalyze = () => {
    if (!input.trim()) return
    runAnalysis(input)
  }

  const handleSample = () => {
    setInput(SAMPLE_TRANSACTIONS)
    runAnalysis(SAMPLE_TRANSACTIONS)
  }

  const handleExport = () => exportResultsToCsv(results)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-indigo-50/40">
      <Header />

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
        <InputPanel
          value={input}
          onChange={setInput}
          onAnalyze={handleAnalyze}
          onSample={handleSample}
          isAnalyzing={isAnalyzing}
        />

        <ResultsTable
          results={results}
          onExport={handleExport}
          visible={showResults}
        />

        <AnalyticsDashboard summary={summary} visible={showResults} />
      </main>

      <footer className="border-t border-slate-200/80 bg-white/60 py-6 text-center text-sm text-slate-500">
        <p>
          Classify AI — Smart keyword classification runs entirely in your browser.
        </p>
      </footer>
    </div>
  )
}
