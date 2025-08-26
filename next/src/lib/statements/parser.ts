import { DetectedProvider, Transaction } from './types'

// CSV parsing with delimiter detection and BOM handling
export function parseCSVWithDelimiter(text: string, delimiter: string): string[][] {
  const rows: string[][] = []
  let cur = ''
  let row: string[] = []
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    const next = text[i + 1]

    if (inQuotes) {
      if (c === '"' && next === '"') {
        cur += '"'
        i++
      } else if (c === '"') {
        inQuotes = false
      } else {
        cur += c
      }
    } else {
      if (c === '"') {
        inQuotes = true
      } else if (c === delimiter) {
        row.push(cur)
        cur = ''
      } else if (c === '\n') {
        row.push(cur)
        rows.push(row)
        row = []
        cur = ''
      } else if (c === '\r') {
        // ignore
      } else {
        cur += c
      }
    }
  }

  if (cur.length > 0 || row.length > 0) {
    row.push(cur)
    rows.push(row)
  }

  // Clean BOM and trim cells
  if (rows.length && rows[0].length) {
    rows[0][0] = rows[0][0].replace(/^\ufeff/, '')
  }
  for (let r = 0; r < rows.length; r++) {
    rows[r] = rows[r].map(v => (v == null ? '' : String(v).trim()))
  }
  return rows
}

export function parseCSV(text: string): string[][] {
  const candidates = [',', ';', '\t']
  let best: string[][] | null = null
  let bestScore = -1

  for (const d of candidates) {
    const rows = parseCSVWithDelimiter(text, d)
    let count = 0, cols = 0
    for (const r of rows) {
      const nonEmpty = r.filter(x => x && x.trim() !== '').length
      if (nonEmpty > 1) {
        cols += r.length
        count++
      }
      if (count >= 5) break
    }
    const score = count ? cols / count : 0
    if (score > bestScore) {
      bestScore = score
      best = rows
    }
  }

  return best || [[]]
}

export function detectProvider(rows: string[][]): DetectedProvider {
  for (let i = 0; i < Math.min(5, rows.length); i++) {
    const headerStr = rows[i].join(' ').toLowerCase()
    if (
      headerStr.includes('dateop') || headerStr.includes('dateval') ||
      headerStr.includes('categoryparent') || headerStr.includes('accountlabel')
    ) {
      return { provider: 'boursorama', headerRow: i }
    }
    if (
      headerStr.includes('date operation') || headerStr.includes('categorie operation') ||
      headerStr.includes('libelle operation') || headerStr.includes('montant operation')
    ) {
      return { provider: 'bnp', headerRow: i }
    }
    if (
      headerStr.includes('started date') || headerStr.includes('completed date') ||
      (headerStr.includes('type') && headerStr.includes('product') && headerStr.includes('amount'))
    ) {
      return { provider: 'revolut', headerRow: i }
    }
  }
  return { provider: 'unknown', headerRow: 0 }
}

export function parseDate(dateStr: string, provider: Transaction['provider']): string | null {
  if (!dateStr) return null
  if (provider === 'boursorama') {
    const match = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/)
    if (match) return `${match[1]}-${match[2]}-${match[3]}`
  } else if (provider === 'revolut') {
    const match = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/)
    if (match) return `${match[1]}-${match[2]}-${match[3]}`
  } else if (provider === 'bnp') {
    const match = dateStr.match(/(\d{2})-(\d{2})-(\d{4})/)
    if (match) return `${match[3]}-${match[2]}-${match[1]}`
  } else {
    const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})/)
    if (match) return `${match[3]}-${match[2]}-${match[1]}`
  }
  return null
}

export function parseAmount(v: unknown): number {
  if (typeof v === 'number') return v
  if (v == null) return 0
  let s = String(v).trim()
  if (!s) return 0
  s = s.replace(/\s/g, '')
  if (s.includes(',')) {
    if (s.indexOf('.') < s.indexOf(',')) {
      s = s.replace(/\./g, '').replace(',', '.')
    } else {
      s = s.replace(',', '.')
    }
  }
  s = s.replace(/[^\d.-]/g, '')
  const n = parseFloat(s)
  return isNaN(n) ? 0 : n
}

export function categorizeTransaction(description: string, rulesText?: string): string {
  const desc = (description || '').toLowerCase()
  const categories: Record<string, string[]> = {
    'Transport': ['sncf', 'ratp', 'uber', 'taxi', 'metro', 'bus', 'train'],
    'E-commerce': ['amazon', 'cdiscount', 'fnac', 'ebay', 'aliexpress'],
    'Food & Restaurants': ['carrefour', 'franprix', 'monoprix', 'auchan', 'restaurant', 'cafe', 'boulangerie'],
    'Utilities': ['edf', 'orange', 'sfr', 'free', 'bouygues', 'internet', 'mobile'],
    'Health': ['pharmacy', 'pharmacie', 'doctor', 'docteur', 'medical', 'hopital'],
    'Accommodation': ['airbnb', 'hotel', 'booking', 'loyer', 'rent'],
    'Entertainment': ['cinema', 'netflix', 'spotify', 'steam', 'playstation', 'xbox']
  }
  if (rulesText) {
    const lines = rulesText.split('\n')
    for (const line of lines) {
      const [keyword, category] = line.split('=').map(s => s?.trim() ?? '')
      if (keyword && category && desc.includes(keyword.toLowerCase())) return category
    }
  }
  for (const [category, keywords] of Object.entries(categories)) {
    for (const keyword of keywords) {
      if (desc.includes(keyword)) return category
    }
  }
  return 'Other'
}

export function parseBoursoramaRow(row: string[], headers: string[], accountLabel: string, rulesText?: string): Transaction | null {
  const dateIdx = headers.findIndex(h => h.toLowerCase().includes('dateop'))
  const descIdx = headers.findIndex(h => h.toLowerCase() === 'label' || h.toLowerCase().includes('label'))
  const amountIdx = headers.findIndex(h => h.toLowerCase() === 'amount')
  const categoryIdx = headers.findIndex(h => h.toLowerCase() === 'categoryparent' || h.toLowerCase().includes('categoryparent'))
  const accountIdx = headers.findIndex(h => h.toLowerCase() === 'accountlabel' || h.toLowerCase().includes('accountlabel'))
  const balIdx = headers.findIndex(h => h.toLowerCase() === 'accountbalance' || h.toLowerCase().includes('accountbalance'))
  if (dateIdx === -1 || descIdx === -1 || amountIdx === -1) return null
  const date = parseDate(row[dateIdx], 'boursorama')
  const description = row[descIdx] || ''
  const amount = parseAmount(row[amountIdx])
  const category = row[categoryIdx] || categorizeTransaction(description, rulesText)
  const account = accountIdx !== -1 ? (row[accountIdx] || accountLabel) : accountLabel
  const balance = balIdx !== -1 ? parseAmount(row[balIdx]) : undefined
  return { date: date || '', description, amount, currency: 'EUR', category, account, provider: 'boursorama', balance, balanceCurrency: balance == null ? undefined : 'EUR', originalAmount: amount, originalCurrency: 'EUR' }
}

export function parseBNPRow(row: string[], headers: string[], accountLabel: string, rulesText?: string): Transaction | null {
  const dateIdx = headers.findIndex(h => h.toLowerCase().includes('date'))
  const descIdx = headers.findIndex(h => h.toLowerCase().includes('libelle'))
  const amountIdx = headers.findIndex(h => h.toLowerCase().includes('montant'))
  const categoryIdx = headers.findIndex(h => h.toLowerCase().includes('categorie') && !h.toLowerCase().includes('sous'))
  if (dateIdx === -1 || descIdx === -1 || amountIdx === -1) return null
  const date = parseDate(row[dateIdx], 'bnp')
  const description = row[descIdx] || ''
  const amount = parseAmount(row[amountIdx])
  const bnpCategory = row[categoryIdx] || ''
  const category = bnpCategory || categorizeTransaction(description, rulesText)
  return { date: date || '', description, amount, currency: 'EUR', category, account: accountLabel, provider: 'bnp', originalAmount: amount, originalCurrency: 'EUR' }
}

export function parseRevolutRow(row: string[], headers: string[], accountLabel: string, gbpToEurRate: number, rulesText?: string): Transaction | null {
  const startedIdx = headers.findIndex(h => h.toLowerCase().includes('started'))
  const completedIdx = headers.findIndex(h => h.toLowerCase().includes('completed'))
  const descIdx = headers.findIndex(h => h.toLowerCase().includes('description'))
  const amountIdx = headers.findIndex(h => h.toLowerCase() === 'amount' || h.toLowerCase().includes('amount'))
  const currencyIdx = headers.findIndex(h => h.toLowerCase() === 'currency' || h.toLowerCase().includes('currency'))
  const balIdx = headers.findIndex(h => h.toLowerCase() === 'balance' || h.toLowerCase().includes('balance'))
  if ((startedIdx === -1 && completedIdx === -1) || descIdx === -1 || amountIdx === -1) return null
  const dateRaw = startedIdx !== -1 ? row[startedIdx] : row[completedIdx]
  const date = parseDate(dateRaw, 'revolut')
  const description = row[descIdx] || ''
  const amountRaw = parseAmount(row[amountIdx])
  const currency = (currencyIdx !== -1 ? row[currencyIdx] : 'EUR') || 'EUR'
  const amountEUR = currency.toUpperCase() === 'GBP' ? amountRaw * gbpToEurRate : amountRaw
  const category = categorizeTransaction(description, rulesText)
  const rawBalance = balIdx !== -1 ? parseAmount(row[balIdx]) : undefined
  return { date: date || '', description, amount: amountEUR, currency: 'EUR', category, account: accountLabel, provider: 'revolut', balance: rawBalance, balanceCurrency: rawBalance == null ? undefined : (currency || 'GBP'), originalAmount: amountRaw, originalCurrency: (currency || 'GBP') }
}

export async function parseFiles(files: { boursoramaPersonal?: File | null; boursoramaJoint?: File | null; boursorama?: File | null; bnp?: File | null; revolut?: File | null }, gbpToEurRate: number, rulesText?: string): Promise<Transaction[]> {
  const all: Transaction[] = []
  const entries = Object.entries(files) as [keyof typeof files, File | null | undefined][]
  for (const [bank, file] of entries) {
    if (!file) continue
    const text = await file.text()
    const rows = parseCSV(text)
    if (rows.length < 2) continue
    const { provider, headerRow } = detectProvider(rows)
    const headers = rows[headerRow]
    for (let i = headerRow + 1; i < rows.length; i++) {
      const row = rows[i]
      if (row.length < 3) continue
      if (row.every(cell => !cell || cell.trim() === '')) continue
      let t: Transaction | null = null
      if (provider === 'boursorama') {
        let defaultLabel = 'Boursorama'
        if (bank === 'boursoramaPersonal') defaultLabel = 'BoursoBank'
        else if (bank === 'boursoramaJoint') defaultLabel = 'BoursoBank (joint)'
        t = parseBoursoramaRow(row, headers, defaultLabel, rulesText)
      }
      else if (provider === 'bnp') t = parseBNPRow(row, headers, 'BNP', rulesText)
      else if (provider === 'revolut') t = parseRevolutRow(row, headers, 'Revolut', gbpToEurRate, rulesText)
      if (t && t.date && t.amount !== 0) all.push(t)
    }
  }
  all.sort((a, b) => b.date.localeCompare(a.date))
  return all
}
