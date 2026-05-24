import type { ClassificationResult } from '../types'

const STORAGE_KEY = 'classify-ai-state'

export interface PersistedState {
  input: string
  results: ClassificationResult[]
}

export function loadState(): PersistedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as PersistedState
    if (typeof parsed.input !== 'string' || !Array.isArray(parsed.results)) {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function saveState(state: PersistedState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Storage quota or private mode — ignore silently
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
