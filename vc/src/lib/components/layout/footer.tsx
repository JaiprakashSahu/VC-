import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} FlowForge, Inc. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-slate-200">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-slate-200">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}