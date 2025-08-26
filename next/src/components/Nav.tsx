"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/pl", label: "P&L" },
  { href: "/receivables", label: "Receivables" },
  { href: "/payables", label: "Payables" },
  { href: "/balances", label: "Balances" },
  { href: "/forecast", label: "Forecast" },
  { href: "/review", label: "Review" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1 text-sm">
      {links.map((l) => {
        const active = pathname?.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? "page" : undefined}
            className={`px-3 py-2 rounded transition-colors outline-offset-2 hover:bg-gray-100 focus:bg-gray-100 ${
              active ? "bg-gray-200 text-gray-900" : "text-gray-700"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
