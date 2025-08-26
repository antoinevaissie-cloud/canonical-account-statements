"use client";
import React from "react";
import Link from "next/link";
import { parseFiles } from "@/lib/statements/parser";
import type { Transaction } from "@/lib/statements/types";

function formatEUR(value: number) {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2
    }).format(value);
  } catch {
    const sign = value < 0 ? '-' : '';
    return `${sign}€${Math.abs(value).toFixed(2)}`;
  }
}

type SortKey = 'date' | 'account' | 'description' | 'category' | 'amount'
type Tx = Transaction & { _id: string }

function normalizeDesc(s: string) {
  return (s || '').toLowerCase().replace(/\s+/g, ' ').trim()
}
function stableKey(t: Transaction) {
  const amt = (t.originalAmount ?? t.amount ?? 0)
  const cur = (t.originalCurrency ?? t.currency ?? 'EUR').toUpperCase()
  return [t.provider, t.date, normalizeDesc(t.description), t.account || '', `${cur}:${amt.toFixed(2)}`].join('|')
}

export default function PLPage() {
  const [files, setFiles] = React.useState<{boursoramaPersonal?: File|null; boursoramaJoint?: File|null; bnp?: File|null; revolut?: File|null}>({})
  const [rate, setRate] = React.useState<number>(() => {
    if (typeof window === 'undefined') return 1.17
    const saved = window.localStorage.getItem('rateGbpEur')
    return saved ? Number(saved) || 1.17 : 1.17
  })
  const [rules, setRules] = React.useState<string>(() => (typeof window !== 'undefined' ? window.localStorage.getItem('rulesText') || '' : ''))
  const [all, setAll] = React.useState<Tx[]>([])
  const [filtered, setFiltered] = React.useState<Tx[]>([])
  const [busy, setBusy] = React.useState(false)
  const [sortKey, setSortKey] = React.useState<SortKey>('date')
  const [sortDir, setSortDir] = React.useState<'asc'|'desc'>('desc')
  const [activeCategory, setActiveCategory] = React.useState<string>('')
  const [categories, setCategories] = React.useState<string[]>([])
  const [editingId, setEditingId] = React.useState<string>('')
  const [pendingSelect, setPendingSelect] = React.useState<string>('')
  const [newCategoryName, setNewCategoryName] = React.useState<string>('')
  const [original, setOriginal] = React.useState<Tx[]>([])
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set())
  const [bulkSelect, setBulkSelect] = React.useState<string>('')
  const [bulkNewCat, setBulkNewCat] = React.useState<string>('')
  const [undoStack, setUndoStack] = React.useState<Tx[]>([])
  const [bsoView, setBsoView] = React.useState<'all'|'personal'|'joint'>('all')
  const [providers, setProviders] = React.useState<{bso:boolean; bnp:boolean; rev:boolean}>({ bso: true, bnp: true, rev: true })
  const [uploadCounts, setUploadCounts] = React.useState<{bsoPersonal:number; bsoJoint:number; bnp:number; revolut:number; total:number}>({bsoPersonal:0,bsoJoint:0,bnp:0,revolut:0,total:0})
  const [processMessage, setProcessMessage] = React.useState<string>('')
  const [editsMap, setEditsMap] = React.useState<Record<string, string>>({})
  const [deletedMap, setDeletedMap] = React.useState<Record<string, boolean>>({})
  const prevMonth = React.useMemo(() => {
    const today = new Date()
    const start = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    const end = new Date(today.getFullYear(), today.getMonth(), 0)
    const fmt = (d: Date) => {
      const y = d.getFullYear()
      const m = String(d.getMonth() + 1).padStart(2, '0')
      const dd = String(d.getDate()).padStart(2, '0')
      return `${y}-${m}-${dd}`
    }
    return { start: fmt(start), end: fmt(end) }
  }, [])
  const [startDate, setStartDate] = React.useState<string>(() => prevMonth.start)
  const [endDate, setEndDate] = React.useState<string>(() => prevMonth.end)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('rateGbpEur', String(rate))
    }
  }, [rate])
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('rulesText', rules)
    }
  }, [rules])

  // Load persisted transactions on first mount
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const savedAll = window.localStorage.getItem('plAllTx')
      const savedOriginal = window.localStorage.getItem('plOriginalTx')
      const savedEdits = window.localStorage.getItem('plEdits')
      const savedDeletes = window.localStorage.getItem('plDeletes')
      if (savedAll) {
        const parsed: Tx[] = JSON.parse(savedAll)
        setAll(parsed)
        const cats = Array.from(new Set(parsed.map(t=>t.category))).sort((a,b)=>a.localeCompare(b))
        setCategories(cats)
      }
      if (savedOriginal) {
        const parsedOrig: Tx[] = JSON.parse(savedOriginal)
        setOriginal(parsedOrig)
      }
      if (savedEdits) setEditsMap(JSON.parse(savedEdits))
      if (savedDeletes) setDeletedMap(JSON.parse(savedDeletes))
    } catch (e) {
      // ignore
    }
  }, [])

  function persistAll(nextAll: Tx[], nextOriginal?: Tx[]) {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem('plAllTx', JSON.stringify(nextAll))
      if (nextOriginal) window.localStorage.setItem('plOriginalTx', JSON.stringify(nextOriginal))
    } catch (e) {
      // ignore quota errors
    }
  }
  function persistMaps(nextEdits?: Record<string,string>, nextDeletes?: Record<string,boolean>) {
    if (typeof window === 'undefined') return
    try {
      if (nextEdits) window.localStorage.setItem('plEdits', JSON.stringify(nextEdits))
      if (nextDeletes) window.localStorage.setItem('plDeletes', JSON.stringify(nextDeletes))
    } catch {}
  }

  async function onProcess() {
    setBusy(true)
    setProcessMessage('')
    try {
      const tx = await parseFiles(files, rate, rules)
      const withIds: Tx[] = tx.map((t, i) => ({
        ...t,
        _id: `${t.provider}-${t.date}-${i}-${Math.random().toString(36).slice(2,8)}`,
      }))
      // apply prior edits and deletions using stable keys
      const applied: Tx[] = withIds
        .filter(t => !deletedMap[stableKey(t)])
        .map(t => {
          const k = stableKey(t)
          const cat = editsMap[k]
          return cat ? ({ ...t, category: cat }) as Tx : (t as Tx)
        })
      setAll(applied)
      setOriginal(withIds)
      setActiveCategory('')
      const cats = Array.from(new Set(withIds.map(t=>t.category))).sort((a,b)=>a.localeCompare(b))
      setCategories(cats)
      setEditingId('')
      setPendingSelect('')
      setNewCategoryName('')
      setSelectedIds(new Set())
      setUndoStack([])
      persistAll(applied, withIds)

      const bsoPersonal = withIds.filter(t=>t.provider==='boursorama' && !/joint/i.test(t.account)).length
      const bsoJoint = withIds.filter(t=>t.provider==='boursorama' && /joint/i.test(t.account)).length
      const bnp = withIds.filter(t=>t.provider==='bnp').length
      const revolut = withIds.filter(t=>t.provider==='revolut').length
      setUploadCounts({ bsoPersonal, bsoJoint, bnp, revolut, total: withIds.length })
      if (applied.length === 0) {
        setProcessMessage('No transactions detected. Please confirm you selected the correct CSVs (Bourso personal/joint, BNP, Revolut) and try again.')
      } else {
        setProcessMessage(`Loaded ${applied.length} transactions · Bourso P: ${bsoPersonal}, J: ${bsoJoint} · BNP: ${bnp} · Revolut: ${revolut}`)
      }
    } finally {
      setBusy(false)
    }
  }

  function updateSort(key: SortKey) {
    if (key === sortKey) setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    else {
      setSortKey(key)
      setSortDir((key === 'date' || key === 'amount') ? 'desc' : 'asc')
    }
  }
  const sorted = React.useMemo(() => {
    const dir = sortDir === 'asc' ? 1 : -1
    const getVal = (t: Tx) => {
      switch (sortKey) {
        case 'amount': return t.amount
        case 'date': return t.date || ''
        case 'account': return (t.account || '').toLowerCase()
        case 'description': return (t.description || '').toLowerCase()
        case 'category': return (t.category || '').toLowerCase()
      }
    }
    return [...filtered].sort((a,b) => {
      const va = getVal(a) as any
      const vb = getVal(b) as any
      if (typeof va === 'number' && typeof vb === 'number') return (va - vb)*dir
      return (va < vb ? -1 : va > vb ? 1 : 0) * dir
    })
  }, [filtered, sortKey, sortDir])

  const income = sorted.filter(t => t.amount>0).reduce((s,t)=>s+t.amount,0)
  const expenses = sorted.filter(t => t.amount<0).reduce((s,t)=>s+Math.abs(t.amount),0)
  const net = income - expenses
  // const datesInData = sorted.map(t=>t.date).filter(Boolean).sort()
  
  // Keep filtered list in sync with date range and all transactions
  React.useEffect(() => {
    if (!all.length) { setFiltered([]); return }
    const next = all.filter(t =>
      (!startDate || t.date >= startDate) &&
      (!endDate || t.date <= endDate) &&
      (!activeCategory || t.category === activeCategory) &&
      (
        (t.provider === 'boursorama' && providers.bso && (bsoView === 'all' || (bsoView === 'personal' ? !/joint/i.test(t.account) : /joint/i.test(t.account)))) ||
        (t.provider === 'bnp' && providers.bnp) ||
        (t.provider === 'revolut' && providers.rev)
      )
    )
    setFiltered(next)
    // keep categories in sync with current data
    const cats = Array.from(new Set(all.map(t=>t.category))).sort((a,b)=>a.localeCompare(b))
    setCategories(cats)
    persistAll(all)
  }, [all, startDate, endDate, activeCategory, bsoView])

  function clearCategory() { setActiveCategory('') }
  function onSelectCategory(cat: string) {
    setActiveCategory(c => c === cat ? '' : cat)
  }
  function deleteRow(id: string) {
    setAll(prev => {
      const found = prev.find(t=>t._id===id)
      if (found) {
        setUndoStack(stack => [found, ...stack])
        const k = stableKey(found)
        setDeletedMap(map => { const next = { ...map, [k]: true }; persistMaps(undefined, next); return next })
      }
      return prev.filter(t => t._id !== id)
    })
  }
  function startEditCategory(id: string, current: string) {
    setEditingId(id)
    setPendingSelect(current)
    setNewCategoryName('')
  }
  function applyCategory(id: string, category: string) {
    const newCat = category.trim()
    if (!newCat) return
    setAll(prev => prev.map(t => {
      if (t._id !== id) return t
      const updated = { ...t, category: newCat }
      const k = stableKey(updated)
      setEditsMap(map => { const next = { ...map, [k]: newCat }; persistMaps(next, undefined); return next })
      return updated
    }))
    setEditingId('')
    setPendingSelect('')
    setNewCategoryName('')
  }
  function cancelEdit() {
    setEditingId('')
    setPendingSelect('')
    setNewCategoryName('')
  }

  // Bulk selection
  function toggleSelect(id: string, checked: boolean) {
    setSelectedIds(prev => {
      const next = new Set(prev)
      if (checked) next.add(id); else next.delete(id)
      return next
    })
  }
  function toggleSelectAll(checked: boolean) {
    if (checked) {
      setSelectedIds(new Set(filtered.map(t=>t._id)))
    } else {
      setSelectedIds(new Set())
    }
  }
  function bulkApplyCategory() {
    const cat = bulkSelect === '__new' ? bulkNewCat : bulkSelect
    if (!cat || !cat.trim() || selectedIds.size === 0) return
    const newCat = cat.trim()
    setAll(prev => prev.map(t => {
      if (!selectedIds.has(t._id)) return t
      const updated = { ...t, category: newCat }
      const k = stableKey(updated)
      setEditsMap(map => { const next = { ...map, [k]: newCat }; persistMaps(next, undefined); return next })
      return updated
    }))
    setBulkSelect('')
    setBulkNewCat('')
  }
  function bulkDelete() {
    if (selectedIds.size === 0) return
    setAll(prev => {
      const removed = prev.filter(t=>selectedIds.has(t._id))
      if (removed.length) setUndoStack(stack => [...removed, ...stack])
      if (removed.length) setDeletedMap(map => { const next = { ...map }; for (const r of removed) next[stableKey(r)] = true; persistMaps(undefined, next); return next })
      return prev.filter(t=>!selectedIds.has(t._id))
    })
    setSelectedIds(new Set())
  }
  function undoLastDelete() {
    setUndoStack(prev => {
      const [last, ...rest] = prev
      if (last) {
        setAll(allPrev => [last, ...allPrev])
        const k = stableKey(last)
        setDeletedMap(map => { const next = { ...map }; delete next[k]; persistMaps(undefined, next); return next })
      }
      return rest
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">P&L and Budgeting</h2>
        <p className="text-gray-600">Upload and analyze your account statements (processed client-side)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <UploadCard label="BoursoBank (EUR) – Personal" bankKey="boursoramaPersonal" onChange={(f)=>setFiles(p=>({...p, boursoramaPersonal:f}))} />
        <UploadCard label="BoursoBank (EUR) – Joint" bankKey="boursoramaJoint" onChange={(f)=>setFiles(p=>({...p, boursoramaJoint:f}))} />
        <UploadCard label="BNP Paribas (EUR)" bankKey="bnp" onChange={(f)=>setFiles(p=>({...p, bnp:f}))} />
        <UploadCard label="Revolut (GBP)" bankKey="revolut" onChange={(f)=>setFiles(p=>({...p, revolut:f}))} />
      </div>

      <div className="flex items-end justify-between gap-4">
        <label className="text-sm text-gray-700 flex items-center gap-2">
          <span>GBP→EUR Exchange Rate</span>
          <input type="number" step="0.0001" min={0} value={rate} onChange={e=>setRate(Number(e.target.value) || 0)} className="w-28 rounded border px-2 py-1"/>
        </label>
        <div className="flex items-center gap-3 text-sm">
          <label className="flex items-center gap-2">
            <span>From</span>
            <input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} className="rounded border px-2 py-1" />
          </label>
          <label className="flex items-center gap-2">
            <span>To</span>
            <input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)} className="rounded border px-2 py-1" />
          </label>
          <div className="ml-2 flex items-center gap-2">
            <span className="text-gray-600">Banks</span>
            <button type="button" onClick={()=>setProviders(p=>({...p, bso: !p.bso}))} className={`rounded px-2 py-1 text-xs border ${providers.bso? 'bg-blue-600 text-white':'bg-white'}`}>Bourso</button>
            {providers.bso && all.some(t=>t.provider==='boursorama') && (
              <div className="inline-flex rounded border overflow-hidden">
                {(['all','personal','joint'] as const).map(v => (
                  <button key={v} type="button" onClick={()=>setBsoView(v)} className={`px-2 py-1 text-xs ${bsoView===v? 'bg-blue-600 text-white':'bg-white'}`}>{v==='all'?'All':v==='personal'?'Personal':'Joint'}</button>
                ))}
              </div>
            )}
            <button type="button" onClick={()=>setProviders(p=>({...p, bnp: !p.bnp}))} className={`rounded px-2 py-1 text-xs border ${providers.bnp? 'bg-blue-600 text-white':'bg-white'}`}>BNP</button>
            <button type="button" onClick={()=>setProviders(p=>({...p, rev: !p.rev}))} className={`rounded px-2 py-1 text-xs border ${providers.rev? 'bg-blue-600 text-white':'bg-white'}`}>Revolut</button>
          </div>
        </div>
        <button onClick={onProcess} disabled={busy} className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50 whitespace-nowrap">
          {busy ? 'Processing…' : 'Process Files'}
        </button>
      </div>

      <details className="rounded border p-3 bg-white">
        <summary className="cursor-pointer font-medium">Custom Category Rules (optional)</summary>
        <div className="mt-3 space-y-2">
          <p className="text-sm text-gray-600">Define custom keyword→category mappings (one per line):</p>
          <pre className="text-xs bg-gray-50 p-2 rounded">amazon = Shopping\nuber = Transport\nspotify = Entertainment</pre>
          <textarea value={rules} onChange={e=>setRules(e.target.value)} rows={5} className="w-full rounded border p-2 font-mono text-sm" placeholder="merchant or keyword = Category" />
        </div>
      </details>

      {processMessage && (
        <div className="rounded border bg-gray-50 p-2 text-sm text-gray-800">{processMessage}</div>
      )}

      {all.length === 0 ? (
        <div className="rounded border bg-white p-8 text-center text-gray-600">No data yet — upload CSV files and click Process.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PLCard title="Income" value={income} positive />
            <PLCard title="Expenses" value={-expenses} negative />
            <PLCard title="Net Profit/Loss" value={net} emphasize />
          </div>
          <div className="text-sm text-gray-600 flex items-center gap-3">
            <span>{startDate} to {endDate} • {sorted.length} transactions</span>
            {activeCategory && (
              <button onClick={clearCategory} className="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-800">Clear category: {activeCategory}</button>
            )}
            {startDate && (
              <Link href={`/review?month=${startDate.slice(0,7)}`} className="ml-auto rounded border px-2 py-1 text-xs hover:bg-gray-50">
                Open Review for {startDate.slice(0,7)}
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CategoryBreakdown title="Income by Category" items={filtered.filter(t=>t.amount>0)} positive activeCategory={activeCategory} onSelect={onSelectCategory} />
            <CategoryBreakdown title="Expenses by Category" items={filtered.filter(t=>t.amount<0)} activeCategory={activeCategory} onSelect={onSelectCategory} />
          </div>

          <BalancesAtGlance rows={filtered} rate={rate} counts={uploadCounts} periodStart={startDate} periodEnd={endDate} />

          {undoStack.length > 0 && (
            <div className="flex items-center justify-between rounded border bg-yellow-50 p-2 text-sm text-yellow-900">
              <span>Deleted items: {undoStack.length}</span>
              <div className="flex items-center gap-2">
                <button onClick={undoLastDelete} className="rounded bg-yellow-600 px-2 py-1 text-xs text-white">Undo last delete</button>
                <button onClick={()=>setUndoStack([])} className="rounded border px-2 py-1 text-xs">Dismiss</button>
              </div>
            </div>
          )}

          {selectedIds.size > 0 && (
            <div className="flex flex-wrap items-center gap-2 rounded border bg-blue-50 p-2 text-sm text-blue-900">
              <span>{selectedIds.size} selected</span>
              <select value={bulkSelect} onChange={(e)=>setBulkSelect(e.target.value)} className="rounded border px-2 py-1">
                <option value="">Set category…</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                <option value="__new">Add new…</option>
              </select>
              {bulkSelect === '__new' && (
                <input value={bulkNewCat} onChange={(e)=>setBulkNewCat(e.target.value)} placeholder="New category" className="rounded border px-2 py-1" />
              )}
              <button onClick={bulkApplyCategory} disabled={!(bulkSelect && (bulkSelect !== '__new' || bulkNewCat.trim()))} className="rounded bg-blue-600 px-2 py-1 text-xs text-white disabled:opacity-50">Apply</button>
              <button onClick={bulkDelete} className="rounded border px-2 py-1 text-xs text-red-700 hover:bg-red-50">Delete selected</button>
              <button onClick={()=>setSelectedIds(new Set())} className="rounded border px-2 py-1 text-xs">Clear selection</button>
              <button onClick={()=>{ setAll(original); setEditsMap({}); setDeletedMap({}); persistMaps({}, {}); }} className="rounded border px-2 py-1 text-xs">Reset to parsed data</button>
            </div>
          )}

          <div className="overflow-x-auto rounded border bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="px-3 py-2"><input type="checkbox" aria-label="Select all" onChange={e=>toggleSelectAll(e.currentTarget.checked)} checked={selectedIds.size>0 && filtered.every(t=>selectedIds.has(t._id))} /></th>
                  <SortableTh label="Date" k="date" sortKey={sortKey} sortDir={sortDir} onSort={updateSort} />
                  <SortableTh label="Account" k="account" sortKey={sortKey} sortDir={sortDir} onSort={updateSort} />
                  <SortableTh label="Description" k="description" sortKey={sortKey} sortDir={sortDir} onSort={updateSort} />
                  <SortableTh label="Category" k="category" sortKey={sortKey} sortDir={sortDir} onSort={updateSort} />
                  <SortableTh label="Amount (EUR)" k="amount" sortKey={sortKey} sortDir={sortDir} onSort={updateSort} right />
                  <th className="px-3 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((t, idx) => (
                  <tr key={t._id} className={idx%2? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-3 py-2"><input type="checkbox" checked={selectedIds.has(t._id)} onChange={e=>toggleSelect(t._id, e.currentTarget.checked)} /></td>
                    <td className="px-3 py-2">{t.date}</td>
                    <td className="px-3 py-2">{t.account}</td>
                    <td className="px-3 py-2">{t.description}</td>
                    <td className="px-3 py-2">
                      {editingId === t._id ? (
                        <div className="flex items-center gap-2">
                          <select
                            value={pendingSelect}
                            onChange={(e)=>{
                              const v = e.target.value
                              setPendingSelect(v)
                              if (v !== '__new') applyCategory(t._id, v)
                            }}
                            className="rounded border px-2 py-1 text-sm"
                          >
                            {categories.map(c => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                            <option value="__new">Add new…</option>
                          </select>
                          {pendingSelect === '__new' && (
                            <>
                              <input
                                value={newCategoryName}
                                onChange={(e)=>setNewCategoryName(e.target.value)}
                                placeholder="New category"
                                className="rounded border px-2 py-1 text-sm"
                              />
                              <button
                                onClick={()=>applyCategory(t._id, newCategoryName)}
                                disabled={!newCategoryName.trim()}
                                className="rounded bg-blue-600 px-2 py-1 text-xs text-white disabled:opacity-50"
                              >Save</button>
                              <button onClick={cancelEdit} className="rounded border px-2 py-1 text-xs">Cancel</button>
                            </>
                          )}
                        </div>
                      ) : (
                        <button onClick={()=>startEditCategory(t._id, t.category)} className="underline text-blue-700 hover:text-blue-900">
                          {t.category}
                        </button>
                      )}
                    </td>
                    <td className={`px-3 py-2 text-right ${t.amount>=0? 'text-green-700':'text-red-700'}`}>{formatEUR(t.amount)}</td>
                    <td className="px-3 py-2 text-right">
                      <button onClick={() => deleteRow(t._id)} className="rounded border px-2 py-1 text-xs text-red-700 hover:bg-red-50">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function UploadCard({label, bankKey, onChange}:{label:string; bankKey:'boursoramaPersonal'|'boursoramaJoint'|'bnp'|'revolut'; onChange:(f:File|null)=>void}){
  const [name, setName] = React.useState<string>('No file chosen')
  return (
    <div className="rounded border bg-white p-4">
      <div className="font-medium mb-2">{label}</div>
      <label className="flex items-center justify-between gap-3 rounded border border-dashed p-3 cursor-pointer">
        <span className="text-sm text-gray-600 truncate">{name}</span>
        <span className="rounded bg-blue-600 px-3 py-1 text-white text-sm">Upload CSV File</span>
        <input type="file" accept=".csv,text/csv" className="hidden" onChange={e=>{
          const f = e.target.files?.[0]||null
          setName(f? f.name : 'No file chosen')
          onChange(f)
        }} />
      </label>
    </div>
  )
}

function PLCard({title, value, positive, negative, emphasize}:{title:string; value:number; positive?:boolean; negative?:boolean; emphasize?:boolean}){
  return (
    <div className="rounded border bg-white p-4">
      <div className="text-sm text-gray-600">{title}</div>
      <div className={`text-2xl font-semibold ${positive? 'text-green-700':''} ${negative? 'text-red-700':''}`}>{formatEUR(value)}</div>
    </div>
  )
}

function SortableTh({label, k, sortKey, sortDir, onSort, right}:{label:string; k:SortKey; sortKey:SortKey; sortDir:'asc'|'desc'; onSort:(k:SortKey)=>void; right?:boolean}){
  const active = k === sortKey
  return (
    <th className={`px-3 py-2 ${right? 'text-right':''}`}>
      <button className={`inline-flex items-center gap-1 ${active? 'text-blue-700':''}`} onClick={()=>onSort(k)}>
        <span>{label}</span>
        {active && <span>{sortDir==='asc'? '▲':'▼'}</span>}
      </button>
    </th>
  )
}

function CategoryBreakdown({title, items, positive, activeCategory, onSelect}:{title:string; items:Tx[]; positive?:boolean; activeCategory?:string; onSelect?:(cat:string)=>void}){
  const totals = React.useMemo(() => {
    const map = new Map<string, number>()
    for (const t of items) {
      const amt = positive ? Math.max(t.amount, 0) : Math.abs(Math.min(t.amount, 0))
      map.set(t.category, (map.get(t.category)||0) + amt)
    }
    return Array.from(map.entries()).sort((a,b)=>b[1]-a[1]).slice(0,10)
  }, [items, positive])
  return (
    <div className="rounded border bg-white p-4">
      <div className="font-medium mb-2">{title}</div>
      {totals.length === 0 ? (
        <div className="text-sm text-gray-500">No transactions</div>
      ) : (
        <div className="divide-y text-sm">
          {totals.map(([cat, amt]) => {
            const active = activeCategory === cat
            return (
              <button key={cat} onClick={onSelect? ()=>onSelect(cat): undefined} className={`w-full flex items-center justify-between py-2 text-left ${onSelect? 'hover:bg-gray-50':''} ${active? 'bg-blue-50 text-blue-700':''}`}>
                <span>{cat}</span>
                <span className="font-semibold">{formatEUR(amt)}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function BalancesAtGlance({ rows, rate, counts, periodStart, periodEnd }:{ rows: Tx[]; rate:number; counts?: {bsoPersonal:number; bsoJoint:number; bnp:number; revolut:number; total:number}; periodStart?: string; periodEnd?: string }){
  // Rows are already filtered for date/category/provider
  const inPeriod = rows

  const lastBy = (arr: Tx[], pred: (t: Tx)=>boolean) => {
    let cand: Tx | undefined
    for (const t of arr) {
      if (!pred(t)) continue
      if (t.balance == null) continue
      if (!cand || t.date > cand.date) cand = t
    }
    return cand
  }

  const boursoramaPersonal = lastBy(inPeriod, t => t.provider==='boursorama' && !/joint/i.test(t.account))
  const boursoramaJoint = lastBy(inPeriod, t => t.provider==='boursorama' && /joint/i.test(t.account))
  const boursoramaTotal = ((boursoramaPersonal?.balance ?? 0) + (boursoramaJoint?.balance ?? 0)) || undefined

  const revolut = lastBy(inPeriod, t => t.provider==='revolut')
  const revBalance = revolut?.balance
  const revCurrency = revolut?.balanceCurrency || 'GBP'
  const revAsEur = revBalance != null ? (revCurrency.toUpperCase()==='GBP' ? revBalance * rate : revBalance) : undefined

  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="font-medium">Balances at a glance</span>
          <span title="Balances are read from the latest transaction in the selected period that contains a balance value (Boursorama: accountbalance, Revolut: balance). When no such transaction exists in the period, the balance is shown as —.">
            ⓘ
          </span>
        </div>
        {counts && (
          <div className="flex flex-wrap items-center gap-2">
            <Badge label={`Bourso Personal: ${counts.bsoPersonal}`} />
            <Badge label={`Bourso Joint: ${counts.bsoJoint}`} />
            <Badge label={`BNP: ${counts.bnp}`} />
            <Badge label={`Revolut: ${counts.revolut}`} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-gray-600">Boursorama (Personal)</div>
          <div className="text-xl font-semibold">{boursoramaPersonal?.balance!=null ? formatEUR(boursoramaPersonal.balance) : '—'}</div>
        </div>
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-gray-600">Boursorama (Joint)</div>
          <div className="text-xl font-semibold">{boursoramaJoint?.balance!=null ? formatEUR(boursoramaJoint.balance) : '—'}</div>
        </div>
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-gray-600">Revolut</div>
          <div className="text-xl font-semibold">{revBalance!=null ? `${revCurrency.toUpperCase()==='GBP' ? '£' : ''}${revBalance.toFixed(2)}` : '—'}</div>
          {revAsEur!=null && revCurrency.toUpperCase()==='GBP' && (
            <div className="text-xs text-gray-500 mt-1">≈ {formatEUR(revAsEur)}</div>
          )}
        </div>
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-gray-600">Period</div>
          <div className="text-xl font-semibold">{periodStart || '—'} → {periodEnd || '—'}</div>
          {boursoramaTotal!=null && (
            <div className="text-xs text-gray-500 mt-1">Bourso Total: {formatEUR(boursoramaTotal)}</div>
          )}
        </div>
      </div>
    </div>
  )
}

function Badge({ label }:{ label:string }){
  return <span className="inline-block rounded-full border px-2 py-0.5 bg-gray-50 text-gray-800">{label}</span>
}
