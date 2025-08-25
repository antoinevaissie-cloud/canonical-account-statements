# Personal Finance - Canonical Account Statements

A privacy-focused, client-side web application for processing and analyzing bank account statements from multiple European banking providers. Built with business accounting principles for personal use.

## Features

- **Multi-Bank Support**: Process statements from Boursorama, BNP Paribas, and Revolut
- **Privacy-First**: All processing happens locally in your browser - no data leaves your machine
- **Currency Conversion**: Automatic GBP to EUR conversion with configurable exchange rates
- **Smart Categorization**: Automatic transaction categorization with custom rule support
- **P&L Analysis**: Professional profit & loss statements with category breakdowns
- **Advanced Filtering**: Filter by account, category, and date ranges
- **Review Journal**: Monthly financial review tracking
- **Modern UI**: Clean, professional interface with dark mode support

## Supported Banks

- **Boursorama** (EUR) - French digital bank
- **BNP Paribas** (EUR) - Traditional French bank
- **Revolut** (GBP/EUR) - Digital banking with multi-currency support

## Technology Stack

- Pure HTML5, CSS3, and JavaScript (ES6+)
- No external dependencies or frameworks
- No backend required - runs entirely in the browser
- Zero tracking or analytics

## Getting Started

### Online Usage

Visit the hosted version at: [Your GitHub Pages URL]

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/canonical_account_statements.git
cd canonical_account_statements
```

2. Start a local server:
```bash
# Using Python
python3 -m http.server -d web 8000

# Or using Node.js
npx serve web -p 8000
```

3. Open your browser and navigate to `http://localhost:8000`

## Usage

1. **Upload Statements**: Click on the upload buttons for each bank and select your CSV files
2. **Set Exchange Rate**: Adjust the GBP→EUR rate if needed (default: 1.17)
3. **Process Files**: Click "Process Files" to analyze your statements
4. **View P&L**: See your income, expenses, and net profit/loss
5. **Apply Filters**: Use the Filters & Analysis tab to drill down into specific accounts or categories
6. **Export Data**: Click the export button to download your processed data as JSON

## CSV Format Requirements

### Boursorama
- Format: Tab or semicolon delimited
- Required columns: dateOp, label, amount, categoryParent
- Date format: YYYY-MM-DD

### BNP Paribas
- Format: Semicolon delimited
- Required columns: Date operation, Libelle operation, Montant operation
- Date format: DD-MM-YYYY

### Revolut
- Format: Comma delimited
- Required columns: Started Date, Description, Amount, Currency
- Date format: YYYY-MM-DD

## Custom Categories

You can define custom categorization rules in the "Custom Category Rules" section:

```
amazon = Shopping
uber = Transport
spotify = Entertainment
```

## Privacy & Security

- **No Data Collection**: This app doesn't collect, store, or transmit any user data
- **Local Processing**: All CSV parsing and calculations happen in your browser
- **No Cookies**: No tracking cookies or local storage of financial data
- **Open Source**: Full source code available for audit

## Future Features (Placeholders)

- **Cashflow Management**: Track and forecast cash movements
- **Investment Portfolio**: Monitor investment performance
- **Budget Planning**: Set and track budgets by category

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For issues or questions, please open an issue on GitHub.

---

**Note**: This application is for personal use. Always verify financial calculations with official bank statements.