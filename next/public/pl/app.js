// ============================
// Global State
// ============================
let allTransactions = [];
let filteredTransactions = [];
// Sorting state for transactions table
let sortKey = 'date'; // one of: date, account, description, category, amount
let sortDir = 'desc'; // 'asc' | 'desc'
let uploadedFiles = {
  boursorama: null,
  bnp: null,
  revolut: null
};
let reviewEntries = JSON.parse(localStorage.getItem('reviewEntries') || '[]');

// ============================
// Navigation & Tabs
// ============================
function initNavigation() {
  // Sidebar navigation
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetSection = item.dataset.section;
      
      // Update nav active state
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      // Update section visibility
      sections.forEach(section => section.classList.remove('active'));
      const target = document.getElementById(targetSection);
      if (target) target.classList.add('active');
    });
  });
  
  // Tab navigation within P&L section
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Update tab active state
      tabButtons.forEach(tab => tab.classList.remove('active'));
      button.classList.add('active');
      
      // Update panel visibility
      tabPanels.forEach(panel => panel.classList.remove('active'));
      const target = document.getElementById(`tab-${targetTab}`);
      if (target) target.classList.add('active');
    });
  });
  
  // Mobile sidebar toggle
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

// ============================
// File Upload Handling
// ============================
function initFileUploads() {
  // Handle file inputs
  const fileInputs = {
    boursorama: document.getElementById('file-boursorama'),
    bnp: document.getElementById('file-bnp'),
    revolut: document.getElementById('file-revolut')
  };
  
  Object.entries(fileInputs).forEach(([bank, input]) => {
    if (input) {
      input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          uploadedFiles[bank] = file;
          const nameSpan = document.getElementById(`file-name-${bank}`);
          if (nameSpan) {
            nameSpan.textContent = file.name;
            nameSpan.style.color = 'var(--text-primary)';
          }
        }
      });
    }
  });
  
  // Process files button
  const processBtn = document.getElementById('btn-process');
  if (processBtn) {
    processBtn.addEventListener('click', processFiles);
  }

  // Persist and restore GBP→EUR rate
  const rateInput = document.getElementById('rate-gbp-eur');
  if (rateInput) {
    const savedRate = localStorage.getItem('rateGbpEur');
    if (savedRate) rateInput.value = savedRate;
    rateInput.addEventListener('input', () => {
      localStorage.setItem('rateGbpEur', rateInput.value);
    });
  }

  // Persist and restore custom rules
  const rules = document.getElementById('rules-text');
  if (rules) {
    const savedRules = localStorage.getItem('rulesText');
    if (savedRules) rules.value = savedRules;
    rules.addEventListener('input', () => {
      localStorage.setItem('rulesText', rules.value);
    });
  }
}

// ============================
// CSV Parsing Functions
// ============================
function parseCSVWithDelimiter(text, delimiter) {
  const rows = [];
  let cur = '';
  let row = [];
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];
    
    if (inQuotes) {
      if (c === '"' && next === '"') {
        cur += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        cur += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === delimiter) {
        row.push(cur);
        cur = '';
      } else if (c === '\n') {
        row.push(cur);
        rows.push(row);
        row = [];
        cur = '';
      } else if (c === '\r') {
        // ignore
      } else {
        cur += c;
      }
    }
  }
  
  if (cur.length > 0 || row.length > 0) {
    row.push(cur);
    rows.push(row);
  }
  
  // Clean BOM and trim cells
  if (rows.length && rows[0].length) {
    rows[0][0] = rows[0][0].replace(/^\ufeff/, '');
  }
  
  for (let r = 0; r < rows.length; r++) {
    rows[r] = rows[r].map(v => (v == null ? '' : String(v).trim()));
  }
  
  return rows;
}

function parseCSV(text) {
  const candidates = [',', ';', '\t'];
  let best = null;
  let bestScore = -1;
  
  for (const d of candidates) {
    const rows = parseCSVWithDelimiter(text, d);
    let count = 0, cols = 0;
    
    for (const r of rows) {
      const nonEmpty = r.filter(x => x && x.trim() !== '').length;
      if (nonEmpty > 1) {
        cols += r.length;
        count++;
      }
      if (count >= 5) break;
    }
    
    const score = count ? cols / count : 0;
    if (score > bestScore) {
      bestScore = score;
      best = rows;
    }
  }
  
  return best || [[]];
}

// ============================
// Transaction Processing
// ============================
function detectProvider(rows) {
  // Check first few rows for headers
  for (let i = 0; i < Math.min(5, rows.length); i++) {
    const headerStr = rows[i].join(' ').toLowerCase();
    
    // Boursorama: dateOp, dateVal, label, category, categoryParent, amount
    if (headerStr.includes('dateop') || headerStr.includes('dateval') || 
        headerStr.includes('categoryparent') || headerStr.includes('accountlabel')) {
      return { provider: 'boursorama', headerRow: i };
    }
    // BNP: Date operation, Categorie operation, Libelle operation, Montant operation
    if (headerStr.includes('date operation') || headerStr.includes('categorie operation') || 
        headerStr.includes('libelle operation') || headerStr.includes('montant operation')) {
      return { provider: 'bnp', headerRow: i };
    }
    // Revolut: Type, Product, Started Date, Completed Date, Amount, Currency
    if (headerStr.includes('started date') || headerStr.includes('completed date') || 
        (headerStr.includes('type') && headerStr.includes('product') && headerStr.includes('amount'))) {
      return { provider: 'revolut', headerRow: i };
    }
  }
  
  return { provider: 'unknown', headerRow: 0 };
}

function parseDate(dateStr, provider) {
  if (!dateStr) return null;
  
  // Handle different date formats based on provider
  if (provider === 'boursorama') {
    // Boursorama: YYYY-MM-DD format
    const match = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  } else if (provider === 'revolut') {
    // Revolut: YYYY-MM-DD HH:MM:SS
    const match = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  } else if (provider === 'bnp') {
    // BNP: DD-MM-YYYY (with dashes)
    const match = dateStr.match(/(\d{2})-(\d{2})-(\d{4})/);
    if (match) {
      return `${match[3]}-${match[2]}-${match[1]}`;
    }
  } else {
    // Fallback: try DD/MM/YYYY (with slashes)
    const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (match) {
      return `${match[3]}-${match[2]}-${match[1]}`;
    }
  }
  
  return null;
}

function parseAmount(v) {
  if (typeof v === 'number') return v;
  if (v == null) return 0;
  
  let s = String(v).trim();
  if (!s) return 0;
  
  // Remove spaces
  s = s.replace(/\s/g, '');
  
  // Check for European format with comma as decimal separator
  // Examples: -41,80  or  1.234,56
  if (s.includes(',')) {
    // If there's a dot before the comma, it's thousands separator
    if (s.indexOf('.') < s.indexOf(',')) {
      s = s.replace(/\./g, '').replace(',', '.');
    } else {
      // Just comma as decimal separator
      s = s.replace(',', '.');
    }
  }
  
  // Remove any remaining non-numeric characters except . and -
  s = s.replace(/[^\d.-]/g, '');
  const n = parseFloat(s);
  
  return isNaN(n) ? 0 : n;
}

function categorizeTransaction(description) {
  const desc = description.toLowerCase();
  
  // Default categories
  const categories = {
    'Transport': ['sncf', 'ratp', 'uber', 'taxi', 'metro', 'bus', 'train'],
    'E-commerce': ['amazon', 'cdiscount', 'fnac', 'ebay', 'aliexpress'],
    'Food & Restaurants': ['carrefour', 'franprix', 'monoprix', 'auchan', 'restaurant', 'cafe', 'boulangerie'],
    'Utilities': ['edf', 'orange', 'sfr', 'free', 'bouygues', 'internet', 'mobile'],
    'Health': ['pharmacy', 'pharmacie', 'doctor', 'docteur', 'medical', 'hopital'],
    'Accommodation': ['airbnb', 'hotel', 'booking', 'loyer', 'rent'],
    'Entertainment': ['cinema', 'netflix', 'spotify', 'steam', 'playstation', 'xbox']
  };
  
  // Check custom rules from textarea
  const rulesText = document.getElementById('rules-text')?.value || '';
  if (rulesText) {
    const lines = rulesText.split('\n');
    for (const line of lines) {
      const [keyword, category] = line.split('=').map(s => s.trim());
      if (keyword && category && desc.includes(keyword.toLowerCase())) {
        return category;
      }
    }
  }
  
  // Check default categories
  for (const [category, keywords] of Object.entries(categories)) {
    for (const keyword of keywords) {
      if (desc.includes(keyword)) {
        return category;
      }
    }
  }
  
  return 'Other';
}

async function processFiles() {
  const exchangeRate = parseFloat(document.getElementById('rate-gbp-eur').value) || 1.17;
  const processBtn = document.getElementById('btn-process');
  const btnOriginal = processBtn ? processBtn.textContent : '';
  if (processBtn) {
    processBtn.disabled = true;
    processBtn.textContent = 'Processing…';
  }
  allTransactions = [];
  
  // Process each uploaded file
  for (const [bank, file] of Object.entries(uploadedFiles)) {
    if (!file) continue;
    
    try {
      const text = await file.text();
      const rows = parseCSV(text);
      
      if (rows.length < 2) continue;
      
      const detection = detectProvider(rows);
      const provider = detection.provider;
      const headerRow = detection.headerRow;
      const headers = rows[headerRow];
      
      console.log(`Processing ${bank} file with provider: ${provider}, header at row ${headerRow}`);
      
      // Skip if provider doesn't match expected bank
      if (bank === 'boursorama' && provider !== 'boursorama') {
        console.warn(`File uploaded as Boursorama but detected as ${provider}`);
      }
      if (bank === 'bnp' && provider !== 'bnp') {
        console.warn(`File uploaded as BNP but detected as ${provider}`);
      }
      if (bank === 'revolut' && provider !== 'revolut') {
        console.warn(`File uploaded as Revolut but detected as ${provider}`);
      }
      
      // Start processing from the row after headers
      for (let i = headerRow + 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length < 3) continue;
        
        // Skip empty rows
        if (row.every(cell => !cell || cell.trim() === '')) continue;
        
        let transaction = null;
        
        // Use the detected provider, not the bank slot
        if (provider === 'boursorama') {
          transaction = parseBoursoramaRow(row, headers, 'Boursorama');
        } else if (provider === 'bnp') {
          transaction = parseBNPRow(row, headers, 'BNP');
        } else if (provider === 'revolut') {
          transaction = parseRevolutRow(row, headers, 'Revolut', exchangeRate);
        } else {
          console.warn(`Unknown provider for ${bank}: ${provider}`);
        }
        
        if (transaction && transaction.date && transaction.amount !== 0) {
          allTransactions.push(transaction);
        }
      }
    } catch (error) {
      console.error(`Error processing ${bank} file:`, error);
    }
  }
  
  // Sort by date
  allTransactions.sort((a, b) => b.date.localeCompare(a.date));
  
  // Update UI
  filteredTransactions = [...allTransactions];
  updatePLView();
  updateFiltersView();
  showExportButton();
  
  // Switch to P&L View tab
  document.querySelector('[data-tab="pl-view"]')?.click();

  if (processBtn) {
    processBtn.disabled = false;
    processBtn.textContent = btnOriginal || 'Process Files';
  }
}

function parseBoursoramaRow(row, headers, account) {
  // Boursorama headers: dateOp;dateVal;label;category;categoryParent;supplierFound;amount;comment;accountNum;accountLabel;accountbalance
  const dateIdx = headers.findIndex(h => h.toLowerCase().includes('dateop'));
  const descIdx = headers.findIndex(h => h.toLowerCase() === 'label' || h.toLowerCase().includes('label'));
  const amountIdx = headers.findIndex(h => h.toLowerCase() === 'amount');
  const categoryIdx = headers.findIndex(h => h.toLowerCase() === 'categoryparent' || h.toLowerCase().includes('categoryparent'));
  const accountLabelIdx = headers.findIndex(h => h.toLowerCase() === 'accountlabel' || h.toLowerCase().includes('accountlabel'));
  
  if (dateIdx === -1 || descIdx === -1 || amountIdx === -1) {
    console.warn('Boursorama: Missing required fields', { dateIdx, descIdx, amountIdx, headers });
    return null;
  }
  
  const date = parseDate(row[dateIdx], 'boursorama');
  const description = row[descIdx] || '';
  const amount = parseAmount(row[amountIdx]);
  const category = row[categoryIdx] || categorizeTransaction(description);
  const accountLabel = accountLabelIdx !== -1 ? row[accountLabelIdx] : account;
  
  return {
    date,
    description,
    amount,
    currency: 'EUR',
    category,
    account: accountLabel || `${account}`,
    provider: 'boursorama'
  };
}

function parseBNPRow(row, headers, account) {
  // BNP headers: Date operation;Categorie operation;Sous Categorie operation;Libelle operation;Montant operation;Pointage operation;Commentaire operation
  const dateIdx = headers.findIndex(h => h.toLowerCase().includes('date'));
  const descIdx = headers.findIndex(h => h.toLowerCase().includes('libelle'));
  const amountIdx = headers.findIndex(h => h.toLowerCase().includes('montant'));
  const categoryIdx = headers.findIndex(h => h.toLowerCase().includes('categorie') && !h.toLowerCase().includes('sous'));
  
  if (dateIdx === -1 || descIdx === -1 || amountIdx === -1) return null;
  
  const date = parseDate(row[dateIdx], 'bnp');
  const description = row[descIdx] || '';
  const amount = parseAmount(row[amountIdx]);
  const bnpCategory = row[categoryIdx] || '';
  
  // Use BNP category if available, otherwise auto-categorize
  const category = bnpCategory || categorizeTransaction(description);
  
  return {
    date,
    description,
    amount,
    currency: 'EUR',
    category,
    account: `${account}`,
    provider: 'bnp'
  };
}

function parseRevolutRow(row, headers, account, exchangeRate) {
  const dateIdx = headers.findIndex(h => h.toLowerCase().includes('started date') || h.toLowerCase().includes('completed date'));
  const descIdx = headers.findIndex(h => h.toLowerCase() === 'description');
  const amountIdx = headers.findIndex(h => h.toLowerCase() === 'amount');
  const currencyIdx = headers.findIndex(h => h.toLowerCase() === 'currency');
  const typeIdx = headers.findIndex(h => h.toLowerCase() === 'type');
  
  if (dateIdx === -1 || amountIdx === -1) return null;
  
  const date = parseDate(row[dateIdx], 'revolut');
  const description = row[descIdx] || row[typeIdx] || '';
  const originalAmount = parseAmount(row[amountIdx]);
  const currency = row[currencyIdx] || 'GBP';
  
  // Convert GBP to EUR
  const amount = currency === 'GBP' ? originalAmount * exchangeRate : originalAmount;
  const category = categorizeTransaction(description);
  
  const transaction = {
    date,
    description,
    amount,
    currency: 'EUR',
    category,
    account: `${account}`,
    provider: 'revolut'
  };
  
  if (currency === 'GBP') {
    transaction.originalCurrency = 'GBP';
    transaction.originalAmount = originalAmount;
  }
  
  return transaction;
}

// ============================
// UI Updates
// ============================
function updatePLView() {
  const container = document.getElementById('pl-summary-container');
  const tableContainer = document.getElementById('tx-table-container');
  const emptyState = document.getElementById('pl-empty-state');

  if (allTransactions.length === 0) {
    container.classList.add('hidden');
    tableContainer.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }
  
  container.classList.remove('hidden');
  tableContainer.classList.remove('hidden');
  emptyState.classList.add('hidden');
  
  // Apply sorting before computing views
  applyCurrentSort();

  // Calculate P&L
  const income = filteredTransactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
  const expenses = filteredTransactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const net = income - expenses;

  // Get date range
  const dates = filteredTransactions.map(t => t.date).filter(d => d).sort();
  const startDate = dates.length ? dates[0] : '';
  const endDate = dates.length ? dates[dates.length - 1] : '';
  
  // Build P&L summary HTML
  container.innerHTML = `
    <div class="pl-grid">
      <div class="pl-card">
        <h3>Income</h3>
        <div class="amount positive">${formatEUR(income)}</div>
        <div class="period">${startDate} to ${endDate}</div>
      </div>
      <div class="pl-card">
        <h3>Expenses</h3>
        <div class="amount negative">${formatEUR(-expenses)}</div>
        <div class="period">${startDate} to ${endDate}</div>
      </div>
      <div class="pl-card">
        <h3>Net Profit/Loss</h3>
        <div class="amount ${net >= 0 ? 'positive' : 'negative'}">${formatEUR(net)}</div>
        <div class="period">${startDate} to ${endDate}</div>
      </div>
    </div>
    
    <h3 style="margin-top: var(--spacing-xl);">Income by Category</h3>
    ${generateCategoryBreakdown(filteredTransactions.filter(t => t.amount > 0))}
    
    <h3 style="margin-top: var(--spacing-xl);">Expenses by Category</h3>
    ${generateCategoryBreakdown(filteredTransactions.filter(t => t.amount < 0))}
  `;
  
  // Build transaction table
  const sortArrow = (key) => {
    if (key !== sortKey) return '';
    return sortDir === 'asc' ? ' \u25B2' : ' \u25BC';
  };

  tableContainer.innerHTML = `
    <div class="table-meta">Showing ${filteredTransactions.length} transaction${filteredTransactions.length!==1?'s':''}</div>
    <div class="tx-table">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th class="sortable${sortKey==='date' ? ' sorted-'+sortDir : ''}" data-sort-key="date">Date${sortArrow('date')}</th>
              <th class="sortable${sortKey==='account' ? ' sorted-'+sortDir : ''}" data-sort-key="account">Account${sortArrow('account')}</th>
              <th class="sortable${sortKey==='description' ? ' sorted-'+sortDir : ''}" data-sort-key="description">Description${sortArrow('description')}</th>
              <th class="sortable${sortKey==='category' ? ' sorted-'+sortDir : ''}" data-sort-key="category">Category${sortArrow('category')}</th>
              <th class="sortable${sortKey==='amount' ? ' sorted-'+sortDir : ''}" data-sort-key="amount">Amount (EUR)${sortArrow('amount')}</th>
            </tr>
          </thead>
          <tbody>
            ${filteredTransactions.map(t => `
              <tr>
                <td>${t.date}</td>
                <td>${t.account}</td>
                <td>${t.description}</td>
                <td>${t.category}</td>
                <td class="${t.amount >= 0 ? 'amount-positive' : 'amount-negative'}">
                  ${formatEUR(t.amount)}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Attach sorting handlers
  tableContainer.querySelectorAll('th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.getAttribute('data-sort-key');
      setSort(key);
    });
  });
}

// Sorting helpers
function setSort(key) {
  if (!key) return;
  if (key === sortKey) {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey = key;
    // Default directions: date/amount desc, others asc
    sortDir = (key === 'date' || key === 'amount') ? 'desc' : 'asc';
  }
  updatePLView();
}

function applyCurrentSort() {
  const dir = sortDir === 'asc' ? 1 : -1;
  const getVal = (t) => {
    switch (sortKey) {
      case 'amount': return t.amount;
      case 'date': return t.date || '';
      case 'account': return (t.account || '').toLowerCase();
      case 'description': return (t.description || '').toLowerCase();
      case 'category': return (t.category || '').toLowerCase();
      default: return '';
    }
  };
  filteredTransactions.sort((a, b) => {
    const va = getVal(a);
    const vb = getVal(b);
    if (va == null && vb != null) return -1 * dir;
    if (va != null && vb == null) return 1 * dir;
    if (typeof va === 'number' && typeof vb === 'number') {
      return (va - vb) * dir;
    }
    return (va < vb ? -1 : va > vb ? 1 : 0) * dir;
  });
}

function generateCategoryBreakdown(transactions) {
  const categories = {};
  
  transactions.forEach(t => {
    if (!categories[t.category]) {
      categories[t.category] = 0;
    }
    categories[t.category] += Math.abs(t.amount);
  });
  
  const sortedCategories = Object.entries(categories)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  if (sortedCategories.length === 0) {
    return '<p style="color: var(--text-secondary);">No transactions</p>';
  }
  
  return `
    <div class="category-breakdown">
      ${sortedCategories.map(([cat, amount]) => `
        <div style="display: flex; justify-content: space-between; padding: var(--spacing-sm) 0; border-bottom: 1px solid var(--border-light);">
          <span>${cat}</span>
          <span style="font-weight: 600;">${formatEUR(amount)}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function updateFiltersView() {
  const container = document.getElementById('filters-container');
  const emptyState = document.getElementById('filters-empty-state');
  
  if (allTransactions.length === 0) {
    container.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }
  
  container.classList.remove('hidden');
  emptyState.classList.add('hidden');
  
  // Get unique accounts and categories
  const accounts = [...new Set(allTransactions.map(t => t.account))];
  const categories = [...new Set(allTransactions.map(t => t.category))];
  
  // Build account filters
  const accountsDiv = document.getElementById('filter-accounts');
  accountsDiv.innerHTML = `
    <div class="muted-info">${accounts.length} account${accounts.length!==1?'s':''}</div>
    ${accounts.map(acc => `
    <label style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-sm);">
      <input type="checkbox" class="account-filter" value="${acc}" checked>
      <span>${acc}</span>
    </label>
    `).join('')}
  `;
  
  // Build category filters
  const categoriesDiv = document.getElementById('filter-categories');
  categoriesDiv.innerHTML = `
    <div class="muted-info">${categories.length} categor${categories.length===1?'y':'ies'}</div>
    ${categories.map(cat => `
    <label style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-sm);">
      <input type="checkbox" class="category-filter" value="${cat}" checked>
      <span>${cat}</span>
    </label>
    `).join('')}
  `;
  
  // Set date range
  const dates = allTransactions.map(t => t.date).filter(d => d);
  if (dates.length) {
    document.getElementById('filter-start').value = dates[dates.length - 1];
    document.getElementById('filter-end').value = dates[0];
  }
  
  // Add filter event listeners
  document.getElementById('cat-select-all')?.addEventListener('click', () => {
    document.querySelectorAll('.category-filter').forEach(cb => cb.checked = true);
  });
  
  document.getElementById('cat-clear-all')?.addEventListener('click', () => {
    document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
  });
  
  document.getElementById('apply-filters')?.addEventListener('click', applyFilters);
  document.getElementById('reset-filters')?.addEventListener('click', resetFilters);
}

function applyFilters() {
  const selectedAccounts = Array.from(document.querySelectorAll('.account-filter:checked'))
    .map(cb => cb.value);
  const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
    .map(cb => cb.value);
  const startDate = document.getElementById('filter-start').value;
  const endDate = document.getElementById('filter-end').value;
  
  filteredTransactions = allTransactions.filter(t => {
    if (selectedAccounts.length && !selectedAccounts.includes(t.account)) return false;
    if (selectedCategories.length && !selectedCategories.includes(t.category)) return false;
    if (startDate && t.date < startDate) return false;
    if (endDate && t.date > endDate) return false;
    return true;
  });
  
  updatePLView();
  
  // Switch to P&L View tab
  document.querySelector('[data-tab="pl-view"]')?.click();
}

function resetFilters() {
  document.querySelectorAll('.account-filter').forEach(cb => cb.checked = true);
  document.querySelectorAll('.category-filter').forEach(cb => cb.checked = true);
  
  const dates = allTransactions.map(t => t.date).filter(d => d);
  if (dates.length) {
    document.getElementById('filter-start').value = dates[dates.length - 1];
    document.getElementById('filter-end').value = dates[0];
  }
  
  filteredTransactions = [...allTransactions];
  updatePLView();
}

// ============================
// Review Log
// ============================
function initReviewLog() {
  const newReviewBtn = document.getElementById('new-review');
  if (newReviewBtn) {
    newReviewBtn.addEventListener('click', createNewReview);
  }
  
  displayReviewEntries();
}

function createNewReview() {
  const today = new Date().toISOString().split('T')[0];
  const month = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const entry = {
    id: Date.now(),
    date: today,
    month: month,
    notes: '',
    income: filteredTransactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0),
    expenses: filteredTransactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0),
    categories: {}
  };
  
  // Calculate category breakdown
  filteredTransactions.forEach(t => {
    if (!entry.categories[t.category]) {
      entry.categories[t.category] = { income: 0, expenses: 0 };
    }
    if (t.amount > 0) {
      entry.categories[t.category].income += t.amount;
    } else {
      entry.categories[t.category].expenses += Math.abs(t.amount);
    }
  });
  
  // Prompt for notes
  const notes = prompt('Add notes for this review (optional):');
  if (notes !== null) {
    entry.notes = notes;
    reviewEntries.unshift(entry);
    localStorage.setItem('reviewEntries', JSON.stringify(reviewEntries));
    displayReviewEntries();
  }
}

function displayReviewEntries() {
  const container = document.getElementById('review-entries');
  if (!container) return;
  
  if (reviewEntries.length === 0) {
    container.innerHTML = '';
    return;
  }
  
  container.innerHTML = reviewEntries.map(entry => `
    <div class="review-entry">
      <div class="review-entry-header">
        <div class="review-date">${entry.month}</div>
        <div class="review-status">Reviewed ${entry.date}</div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-md); margin: var(--spacing-md) 0;">
        <div>
          <small style="color: var(--text-secondary);">Income</small>
          <div style="font-size: var(--font-size-lg); color: var(--success);">€${entry.income.toFixed(2)}</div>
        </div>
        <div>
          <small style="color: var(--text-secondary);">Expenses</small>
          <div style="font-size: var(--font-size-lg); color: var(--danger);">-€${entry.expenses.toFixed(2)}</div>
        </div>
        <div>
          <small style="color: var(--text-secondary);">Net</small>
          <div style="font-size: var(--font-size-lg); color: ${entry.income - entry.expenses >= 0 ? 'var(--success)' : 'var(--danger)'};">
            ${entry.income - entry.expenses >= 0 ? '€' : '-€'}${Math.abs(entry.income - entry.expenses).toFixed(2)}
          </div>
        </div>
      </div>
      ${entry.notes ? `<p style="margin-top: var(--spacing-md); color: var(--text-secondary);">${entry.notes}</p>` : ''}
      <button onclick="deleteReview(${entry.id})" style="margin-top: var(--spacing-md); padding: var(--spacing-xs) var(--spacing-md); background: transparent; color: var(--danger); border: 1px solid var(--danger); border-radius: var(--radius-sm); font-size: var(--font-size-sm);">Delete Review</button>
    </div>
  `).join('');
}

function deleteReview(id) {
  if (confirm('Are you sure you want to delete this review?')) {
    reviewEntries = reviewEntries.filter(e => e.id !== id);
    localStorage.setItem('reviewEntries', JSON.stringify(reviewEntries));
    displayReviewEntries();
  }
}

// ============================
// Export Functionality
// ============================
function showExportButton() {
  const exportBtn = document.getElementById('export-btn');
  if (exportBtn && allTransactions.length > 0) {
    exportBtn.classList.remove('hidden');
    exportBtn.addEventListener('click', exportToJSON);
  }
}

function exportToJSON() {
  const data = {
    exportDate: new Date().toISOString(),
    transactions: filteredTransactions,
    summary: {
      totalTransactions: filteredTransactions.length,
      income: filteredTransactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0),
      expenses: filteredTransactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0),
      accounts: [...new Set(filteredTransactions.map(t => t.account))],
      categories: [...new Set(filteredTransactions.map(t => t.category))],
      dateRange: {
        start: filteredTransactions[filteredTransactions.length - 1]?.date,
        end: filteredTransactions[0]?.date
      }
    }
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `financial_export_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ============================
// Initialize App
// ============================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFileUploads();
  initReviewLog();
});

// Make deleteReview available globally for onclick
window.deleteReview = deleteReview;

// Formatting helpers
function formatEUR(value) {
  try {
    return new Intl.NumberFormat(navigator.language || 'en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  } catch (e) {
    const sign = value < 0 ? '-' : '';
    return `${sign}€${Math.abs(value).toFixed(2)}`;
  }
}
