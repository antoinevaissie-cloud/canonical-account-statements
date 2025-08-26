export type Transaction = {
  date: string; // YYYY-MM-DD
  description: string;
  amount: number; // EUR amount (signed)
  currency: string; // 'EUR' | 'GBP' | others
  category: string;
  account: string; // Source account/label
  provider: 'boursorama' | 'bnp' | 'revolut' | 'unknown';
  balance?: number; // Optional closing/running balance from CSV (in balanceCurrency)
  balanceCurrency?: string; // e.g., 'EUR' for Boursorama, 'GBP' for Revolut
  originalAmount?: number; // Original native amount from CSV before conversion
  originalCurrency?: string; // Original native currency from CSV
};

export type DetectedProvider = {
  provider: Transaction['provider'];
  headerRow: number;
};
