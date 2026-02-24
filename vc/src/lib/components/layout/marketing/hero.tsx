import Link from "next/link";
export function Hero() {
  return (
    <section className="border-b border-slate-800/60 bg-linear-to-b from-slate-950 via-slate-950 to-slate-950/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-20 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:pb-24 md:pt-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            AI workflow platform
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Automate your workflows.
            <span className="block text-emerald-400">
              Ship faster with AI.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            FlowForge helps teams design, deploy, and monitor AI-powered
            workflows that connect your tools, data, and processes end-to-end.
            No infra, no orchestration headaches.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-400"
            >
              Book a demo
            </Link>
            <Link
              href="/product"
              className="text-sm font-medium text-slate-200 hover:text-white"
            >
              Explore product →
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            No credit card. Get a guided tour in under 30 minutes.
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl shadow-emerald-500/10">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.16em] text-emerald-300">
            Example workflow
          </p>
          <div className="space-y-3 text-xs sm:text-sm">
            <WorkflowStep
              label="Trigger"
              title="New lead created in CRM"
              description="When a new lead is created in HubSpot or Salesforce."
            />
            <WorkflowStep
              label="AI"
              title="Research and score lead"
              description="Enrich from web, summarize company, and assign a fit score."
            />
            <WorkflowStep
              label="Action"
              title="Draft outreach"
              description="Generate a personalized intro email and push to your inbox."
            />
            <WorkflowStep
              label="Action"
              title="Log to analytics"
              description="Sync key events back to your warehouse and dashboards."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function WorkflowStep(props: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
          {props.label}
        </span>
        <p className="text-xs font-semibold text-slate-100">
          {props.title}
        </p>
      </div>
      <p className="mt-1 text-xs text-slate-400">{props.description}</p>
    </div>
  );
}