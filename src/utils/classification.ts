import type {
  AnalyticsSummary,
  ClassificationResult,
  ExpenseCategory,
} from '../types'
import { EXPENSE_CATEGORIES } from '../types'
import { CATEGORY_KEYWORDS } from './keywords'

interface CategoryScore {
  category: ExpenseCategory
  score: number
  matchedKeyword: string
  weight: number
}

function normalizeText(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9+.&\s-]/g, ' ').replace(/\s+/g, ' ').trim()
}

function scoreTransaction(description: string): CategoryScore[] {
  const normalized = normalizeText(description)
  const scores: CategoryScore[] = []

  for (const category of EXPENSE_CATEGORIES) {
    if (category === 'Other') continue

    for (const { keyword, weight } of CATEGORY_KEYWORDS[category]) {
      if (normalized.includes(keyword)) {
        scores.push({ category, score: weight, matchedKeyword: keyword, weight })
      }
    }
  }

  return scores
}

function computeConfidence(bestScore: number, runnerUpScore: number): number {
  if (bestScore <= 0) return 45

  const gap = bestScore - runnerUpScore
  const base = 55 + bestScore * 3 + gap * 2
  return Math.min(99, Math.max(52, Math.round(base)))
}

export function classifyTransaction(description: string): ClassificationResult {
  const trimmed = description.trim()
  if (!trimmed) {
    return {
      transaction: description,
      category: 'Other',
      confidence: 0,
      reason: 'Empty transaction description',
    }
  }

  const scores = scoreTransaction(trimmed)

  if (scores.length === 0) {
    return {
      transaction: trimmed,
      category: 'Other',
      confidence: 48,
      reason: 'No keyword matches — classified as miscellaneous',
    }
  }

  scores.sort((a, b) => b.score - a.score)

  const best = scores[0]
  const runnerUp = scores.find((s) => s.category !== best.category)
  const runnerUpScore = runnerUp?.score ?? 0
  const confidence = computeConfidence(best.score, runnerUpScore)

  const reason = `Matched keyword: '${best.matchedKeyword}'`

  return {
    transaction: trimmed,
    category: best.category,
    confidence,
    reason,
    matchedKeyword: best.matchedKeyword,
  }
}

export function classifyTransactions(input: string): ClassificationResult[] {
  return input
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map(classifyTransaction)
}

export function buildAnalytics(results: ClassificationResult[]): AnalyticsSummary {
  const categoryCounts = Object.fromEntries(
    EXPENSE_CATEGORIES.map((c) => [c, 0]),
  ) as Record<ExpenseCategory, number>

  const keywordFreq = new Map<string, number>()

  for (const result of results) {
    categoryCounts[result.category] += 1
    if (result.matchedKeyword) {
      const key = result.matchedKeyword.toLowerCase()
      keywordFreq.set(key, (keywordFreq.get(key) ?? 0) + 1)
    }
  }

  let topCategory: ExpenseCategory | null = null
  let topCategoryCount = 0

  for (const category of EXPENSE_CATEGORIES) {
    if (categoryCounts[category] > topCategoryCount) {
      topCategoryCount = categoryCounts[category]
      topCategory = category
    }
  }

  let mostFrequentKeyword: string | null = null
  let maxFreq = 0

  for (const [keyword, count] of keywordFreq) {
    if (count > maxFreq) {
      maxFreq = count
      mostFrequentKeyword = keyword
    }
  }

  return {
    totalTransactions: results.length,
    topCategory,
    topCategoryCount,
    mostFrequentKeyword,
    categoryCounts,
  }
}
