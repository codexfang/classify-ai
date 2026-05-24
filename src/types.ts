export type ExpenseCategory =
  | 'Food & Dining'
  | 'Transportation'
  | 'Entertainment'
  | 'Shopping'
  | 'Utilities'
  | 'Other'

export interface ClassificationResult {
  transaction: string
  category: ExpenseCategory
  confidence: number
  reason: string
  matchedKeyword?: string
}

export interface AnalyticsSummary {
  totalTransactions: number
  topCategory: ExpenseCategory | null
  topCategoryCount: number
  mostFrequentKeyword: string | null
  categoryCounts: Record<ExpenseCategory, number>
}

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  'Food & Dining',
  'Transportation',
  'Entertainment',
  'Shopping',
  'Utilities',
  'Other',
]

export const CATEGORY_COLORS: Record<ExpenseCategory, string> = {
  'Food & Dining': '#6366f1',
  Transportation: '#8b5cf6',
  Entertainment: '#a855f7',
  Shopping: '#3b82f6',
  Utilities: '#06b6d4',
  Other: '#94a3b8',
}
