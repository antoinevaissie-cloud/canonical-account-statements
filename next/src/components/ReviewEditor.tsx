"use client";
import React from 'react'
import { renderMarkdownSafe } from "@/lib/markdown";

export default function ReviewEditor({ monthValue, initial, action }: { monthValue: string; initial: string; action: (formData: FormData) => Promise<void> }) {
  const [mode, setMode] = React.useState<'edit'|'preview'>('edit')
  const [content, setContent] = React.useState<string>(initial || '')

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <button onClick={()=>setMode('edit')} className={`rounded px-3 py-1 text-sm border ${mode==='edit'? 'bg-blue-600 text-white':'bg-white'}`}>Edit</button>
        <button onClick={()=>setMode('preview')} className={`rounded px-3 py-1 text-sm border ${mode==='preview'? 'bg-blue-600 text-white':'bg-white'}`}>Preview</button>
      </div>
      <form action={action} className="space-y-3">
        <input type="hidden" name="month" value={monthValue} />
        {mode==='edit' ? (
          <textarea
            name="content"
            value={content}
            onChange={e=>setContent(e.target.value)}
            rows={12}
            className="w-full rounded border p-3 font-mono text-sm"
            placeholder="- What stood out this month\n- Any anomalies to revisit\n- Follow-ups for next month"
          />
        ) : (
          <div className="rounded border bg-white p-3 text-sm leading-6" dangerouslySetInnerHTML={{ __html: renderMarkdownSafe(content) }} />
        )}
        <div className="flex items-center gap-2">
          <button className="rounded bg-blue-600 px-4 py-2 text-white" onClick={(e)=>{ /* let normal form submit occur */ }}>
            Save Notes
          </button>
        </div>
      </form>
    </div>
  )
}
