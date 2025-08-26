// Simple, safe-ish Markdown renderer for bullets, links, emphasis
// Escapes HTML and supports a small subset of Markdown commonly used for notes
export function renderMarkdownSafe(src: string): string {
  const text = (src ?? '').replace(/\r\n/g, '\n')
  const escapeHtml = (s: string) => s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  const lines = text.split('\n')
  const out: string[] = []
  let inList = false

  const pushParagraph = (para: string) => {
    if (!para.trim()) return
    let html = escapeHtml(para)
    // inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
    // bold **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // italic _text_
    html = html.replace(/_([^_]+)_/g, '<em>$1</em>')
    // links [text](url)
    html = html.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1<\/a>')
    out.push(`<p>${html}</p>`)
  }

  for (const raw of lines) {
    const line = raw.trimEnd()
    if (line.startsWith('- ')) {
      if (!inList) { out.push('<ul>'); inList = true }
      const item = line.slice(2)
      let html = escapeHtml(item)
      html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
      html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      html = html.replace(/_([^_]+)_/g, '<em>$1</em>')
      html = html.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1<\/a>')
      out.push(`<li>${html}</li>`)
      continue
    }
    if (inList && line.trim() === '') {
      out.push('</ul>'); inList = false; continue
    }
    if (line.trim() === '') {
      out.push('')
    } else {
      pushParagraph(line)
    }
  }
  if (inList) out.push('</ul>')
  return out.join('\n')
}

