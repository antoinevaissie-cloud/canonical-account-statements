# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A privacy-focused, client-side web application for processing and analyzing bank account statements from multiple European banking providers (Boursorama, BNP, Revolut). All data processing happens locally in the browser with no external dependencies or backend services.

## Technology Stack

- **Frontend**: Pure HTML5, Vanilla JavaScript (ES6+), CSS3
- **Data Processing**: Custom CSV parser with automatic delimiter detection
- **Export Format**: JSON with standardized transaction schema
- **No Dependencies**: Zero external libraries or frameworks

## Development Commands

```bash
# Start local development server
python3 -m http.server -d web 8080

# Validate JSON exports
jq -e . july_account_statements/*.json >/dev/null && echo "All JSON files are valid"

# Validate transaction schema (check all required fields)
jq -r '.transactions[] | if has("date") and has("description") and has("amount") and has("currency") and has("category") and has("account") and has("provider") then empty else "Invalid transaction: \(.)" end' july_account_statements/*.json

# Check for duplicate transactions
jq -r '.transactions[] | "\(.date)_\(.amount)_\(.description)"' july_account_statements/*.json | sort | uniq -d
```

## Architecture

### Core Components

**web/app.js** (934 lines)
- Main application logic with modular design
- Key modules:
  - `CSVParser`: Intelligent CSV parsing with auto-delimiter detection
  - `CurrencyConverter`: GBP to EUR conversion with configurable rates
  - `TransactionProcessor`: Categorization and normalization
  - `UIComponents`: Dynamic filtering, sorting, and display
  - `DataExporter`: JSON export with validation

### Data Flow
1. User uploads CSV files from banking providers
2. CSVParser detects format and parses transactions
3. TransactionProcessor normalizes and categorizes data
4. Currency conversion applied if needed (GBP→EUR)
5. UI displays transactions with filtering/sorting
6. Export to standardized JSON format

### Banking Provider Specifications

**Boursorama Format**:
- Delimiter: Tab (`\t`)
- Columns: dateOp, dateVal, label, category, categoryParent, amount, comment
- Date format: DD/MM/YYYY
- Amount: Comma decimal separator

**BNP Format**:
- Delimiter: Comma (`,`)
- Key columns: Date, Nature de l'opération, Débit euros, Crédit euros
- Date format: DD/MM/YYYY
- Separate debit/credit columns

**Revolut Format**:
- Delimiter: Comma (`,`)
- Columns: Type, Product, Started Date, Amount, Currency, Description
- Date format: YYYY-MM-DD HH:MM:SS
- Multi-currency support (GBP, EUR)

### Transaction Schema

```javascript
{
  date: "YYYY-MM-DD",           // ISO format
  description: "string",         // Transaction description
  amount: number,                // Negative for debits
  currency: "EUR",               // Always EUR after conversion
  category: "string",            // Automated categorization
  account: "string",             // Account identifier
  provider: "string",            // Banking provider
  originalCurrency: "string",    // Optional: pre-conversion currency
  originalAmount: number         // Optional: pre-conversion amount
}
```

### Category System

Default categories with keyword matching:
- Transport (SNCF, RATP, Uber, taxi, metro)
- E-commerce (Amazon, Cdiscount, Fnac)
- Food & Restaurants (Carrefour, Franprix, restaurant)
- Utilities (EDF, Orange, SFR, Free)
- Health (pharmacy, doctor, medical)
- Accommodation (Airbnb, hotel, booking)
- Entertainment (cinema, Netflix, Spotify)

## Key Features

### Smart CSV Parsing
- Auto-detects delimiter (comma, semicolon, tab)
- Handles quoted fields with internal delimiters
- Robust date parsing (multiple formats)
- French/English number format support

### Currency Conversion
- Real-time GBP to EUR conversion
- Configurable exchange rate (default: 1.19)
- Preserves original values in export

### Advanced Filtering
- Multi-select account filter
- Category-based filtering
- Date range selection
- Amount range filtering
- Real-time updates

### P&L Analysis
- Automatic profit/loss calculation
- Account-level breakdowns
- Category summaries
- Period comparisons

## UI Components

### Dark Theme Design
- CSS custom properties for theming
- Responsive grid layout
- Smooth transitions and hover effects
- Mobile-friendly interface

### Interactive Elements
- Drag-and-drop file upload
- Dynamic table with sorting
- Collapsible filter panel
- Real-time statistics updates

## Error Handling

- Graceful CSV parsing errors with line numbers
- Invalid date format detection
- Missing required field warnings
- Duplicate transaction detection
- Export validation before download

## Privacy & Security

- **No external requests**: All processing happens locally
- **No data storage**: Files processed in memory only
- **No tracking**: No analytics or third-party scripts
- **Client-side only**: Can run offline after initial load

## Testing Approach

Manual testing checklist:
1. Upload CSV from each provider
2. Verify transaction parsing accuracy
3. Test currency conversion calculations
4. Validate category assignments
5. Check filter combinations
6. Export and validate JSON structure

## Deployment

### GitHub Pages
```bash
# Repository must have web/ directory as root or configure Pages settings
git push origin main
# Enable Pages in repository settings, source: /web directory
```

### Local Deployment
```bash
# Any static file server works
npx serve web -p 8080
# or
python3 -m http.server -d web 8080
```

## Common Modifications

### Adding New Bank Provider
1. Add provider detection in `detectProvider()`
2. Implement parsing logic in `parseCSV()`
3. Map fields to standard transaction schema
4. Test with sample CSV files

### Adding New Category
1. Update `CATEGORIES` object with keywords
2. Optionally update `FRENCH_DEFAULTS` for common merchants
3. Categories auto-populate in UI filters

### Changing Currency Rate
1. Modify `EXCHANGE_RATE` constant in app.js
2. Rate applies to all GBP transactions
3. Original amounts preserved in export