import type { ClassificationResult } from '../types'

function escapeCsvField(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`
  }
  return value
}

export function exportResultsToCsv(results: ClassificationResult[]): void {
  if (results.length === 0) return

  const headers = ['Transaction', 'Category', 'Confidence', 'Reason']
  const rows = results.map((r) =>
    [
      escapeCsvField(r.transaction),
      escapeCsvField(r.category),
      String(r.confidence),
      escapeCsvField(r.reason),
    ].join(','),
  )

  const csv = [headers.join(','), ...rows].join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `classify-ai-export-${new Date().toISOString().slice(0, 10)}.csv`
  link.click()
  URL.revokeObjectURL(url)
}
