"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navItems = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-slate-950 font-bold">
            FF
          </div>
          <span className="text-sm font-semibold tracking-tight">
            FlowForge
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-md bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Get started
          </Link>
        </nav>
        {/* Mobile menu toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {/* Mobile nav */}
      {open && (
        <div className="border-t border-slate-800/80 bg-slate-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-2 py-2 ${
                  pathname === item.href
                    ? "bg-slate-900 text-emerald-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
