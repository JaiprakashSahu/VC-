const features = [
  {
    title: "Visual workflow builder",
    body: "Design multi-step workflows with triggers, AI steps, and actions that plug into your stack.",
  },
  {
    title: "Production-ready AI",
    body: "Use best-in-class models, observability, and guardrails out of the box so you can ship safely.",
  },
  {
    title: "Connect your tools",
    body: "Integrate with CRMs, data warehouses, messaging tools, and internal APIs with minimal setup.",
  },
];
export function Features() {
  return (
    <section className="border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            Built for teams shipping AI into production.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            From first prototype to global rollout, FlowForge keeps your AI
            workflows observable, reliable, and easy to iterate on.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {f.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}