import { prismaClient } from "@/lib/prisma";

async function main() {
  // Seed a minimal dataset so Forecast has something to show
  const month = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  await prismaClient.balance.upsert({
    where: { month },
    update: {},
    create: {
      month,
      boursoramaCents: 100_00,
      bnpCents: 400_00,
      otherAccountsCents: 50_00,
      sumOfCashCents: 550_00,
    },
  });

  await prismaClient.accountsReceivable.createMany({
    data: [
      { description: "Invoice #1001", amountCents: 250_00, currency: "EUR", paymentDate: new Date(), isPaid: false },
    ],
    skipDuplicates: true,
  });

  await prismaClient.accountsPayable.createMany({
    data: [
      { payee: "Utility", description: "Electricity", amountCents: 90_00, currency: "EUR", paymentDate: new Date(), isPaid: false },
    ],
    skipDuplicates: true,
  });

  await prismaClient.monthlyBudget.createMany({
    data: [
      { month, category: "Salary", plannedInflowCents: 1000_00, plannedOutflowCents: 0, currency: "EUR" },
      { month, category: "Rent", plannedInflowCents: 0, plannedOutflowCents: 700_00, currency: "EUR" },
    ],
    skipDuplicates: true,
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prismaClient.$disconnect();
});

