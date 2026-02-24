export default function ProductPage() {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
          Product
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          FlowForge is an AI workflow platform that lets you design, deploy,
          and monitor production-grade AI workflows without stitching together
          custom infrastructure.
        </p>
        {/* Add detailed sections: builder, observability, integrations, etc. */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-50">
              Visual workflow builder
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              Compose triggers, LLM steps, tools, and actions into reusable
              workflows with clear inputs and outputs.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-50">
              Observability & guardrails
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              Track run history, latency, errors, and model usage to keep
              workflows healthy and debuggable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
