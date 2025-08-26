import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Personal Finance",
  description: "P&L + Cashflow (Next.js)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <div className="mx-auto max-w-6xl p-6">
          <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">Personal Finance</h1>
            <Nav />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

