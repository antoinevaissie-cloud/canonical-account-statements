# Repository Guidelines

## Project Structure & Module Organization
- `web/`: Static client (open `web/index.html`). App logic in `web/app.js`, styles in `web/styles.css`.
- `july_account_statements_csv/`: Sample CSV exports from Boursorama (EUR), BNP (EUR), Revolut (GBP). Filenames are lowercase, snake_case (e.g., `bnp_euro_account.csv`).
- No server or build step; everything runs in the browser.

## Build, Test, and Development Commands
- Serve locally: `python3 -m http.server -d web 8080` → open `http://localhost:8080`.
- Quick open (may hit file-origin limits): `open web/index.html`.
- CSV sanity checks: `head -n 5 file.csv`, `wc -l file.csv`, encoding check `iconv -f utf-8 -t utf-8 -o /dev/null file.csv`.

## Coding Style & Naming Conventions
- JavaScript: 2-space indentation; `const`/`let`; camelCase; keep functions small and side‑effect‑light. Prefer plain DOM APIs over libraries.
- CSS: 2 spaces; hyphen‑case class names (e.g., `table-wrap`, `col-menu-btn`).
- CSV samples: lowercase, underscores; reflect the exporting bank/currency, e.g., `revolut_gbp_account.csv`.
- Avoid introducing build tools/frameworks; keep the app dependency‑free unless discussed.

## Testing Guidelines
- Manual flow: upload the three CSVs, set GBP→EUR rate, verify P&L (income/expenses/net), sorting (A→Z/Z→A), column value/condition filters, category dropdown selection, date range (defaults to previous month), and period‑end balances (with optional starting balances).
- Edge cases: European/US number formats, separate Paid In/Out columns, fee columns, missing currency, BOM/encoding.
- Browser targets: current Chrome/Edge/Safari. The app uses `localStorage` for lightweight preferences.

## Commit & Pull Request Guidelines
- Commit messages: Conventional Commits.
  - Examples: `feat(web): add column value filters`, `fix(parser): handle paid in/out`, `chore(csv): add sample bnp_euro_account.csv`.
- PRs should include: concise description, affected files, screenshots/GIFs of UI changes, and reproduction steps (CSV used + settings). Link related issues.

## Security & Privacy
- Processing is local-only; do not commit real statements or secrets. Redact personal identifiers (IBAN, PAN, account numbers) in samples. Avoid external network calls.
