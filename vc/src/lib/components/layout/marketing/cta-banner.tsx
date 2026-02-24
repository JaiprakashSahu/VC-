import Link from "next/link";
export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-sky-500/10 border-y border-emerald-500/30">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl font-semibold text-slate-50">
            See FlowForge in action.
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            Share your use case and we’ll design a workflow in your stack,
            live on the call.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-400"
        >
          Book a demo
        </Link>
      </div>
    </section>
  );
}
