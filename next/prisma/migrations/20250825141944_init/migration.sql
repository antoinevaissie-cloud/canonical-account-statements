-- CreateTable
CREATE TABLE "accounts_receivable" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "owedBy" TEXT,
    "description" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "paymentDate" DATETIME NOT NULL,
    "notes" TEXT,
    "url" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "accounts_payable" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "payee" TEXT,
    "description" TEXT,
    "amountCents" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "paymentDate" DATETIME NOT NULL,
    "notes" TEXT,
    "url" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "balances" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "month" DATETIME NOT NULL,
    "boursoramaCents" INTEGER NOT NULL DEFAULT 0,
    "boursoramaJointCents" INTEGER NOT NULL DEFAULT 0,
    "bnpCents" INTEGER NOT NULL DEFAULT 0,
    "revolutGbpCents" INTEGER NOT NULL DEFAULT 0,
    "otherAccountsCents" INTEGER NOT NULL DEFAULT 0,
    "sumOfCashCents" INTEGER NOT NULL DEFAULT 0,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "monthly_budgets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "month" DATETIME NOT NULL,
    "category" TEXT NOT NULL,
    "plannedInflowCents" INTEGER NOT NULL DEFAULT 0,
    "plannedOutflowCents" INTEGER NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "accounts_receivable_paymentDate_idx" ON "accounts_receivable"("paymentDate");

-- CreateIndex
CREATE INDEX "accounts_payable_paymentDate_idx" ON "accounts_payable"("paymentDate");

-- CreateIndex
CREATE UNIQUE INDEX "balances_month_key" ON "balances"("month");

-- CreateIndex
CREATE INDEX "monthly_budgets_month_idx" ON "monthly_budgets"("month");

-- CreateIndex
CREATE UNIQUE INDEX "monthly_budgets_month_category_key" ON "monthly_budgets"("month", "category");
