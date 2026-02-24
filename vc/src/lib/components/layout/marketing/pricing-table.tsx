const tiers = [
  {
    name: "Starter",
    price: "\$0",
    period: "/month",
    highlight: false,
    features: [
      "Up to 3 workflows",
      "1 workspace",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "\$79",
    period: "/month",
    highlight: true,
    features: [
      "20+ workflows",
      "Team workspaces",
      "Priority support",
      "Usage-based AI billing",
    ],
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    period: "",
    highlight: false,
    features: [
      "Unlimited workflows",
      "Custom SLAs",
      "SSO & audit logs",
      "Dedicated support",
    ],
  },
];
export function PricingTable() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
            Pricing
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Start free, then scale as you bring more workflows to production.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-xl border bg-slate-900/70 p-5 ${
                t.highlight
                  ? "border-emerald-500/70 shadow-lg shadow-emerald-500/20"
                  : "border-slate-800"
              }`}
            >
              <h2 className="text-sm font-semibold text-slate-50">
                {t.name}
              </h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-slate-50">
                  {t.price}
                </span>
                <span className="text-xs text-slate-400">{t.period}</span>
              </div>
              <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-300">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button className="mt-6 rounded-md bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400">
                {t.name === "Enterprise" ? "Contact sales" : "Get started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}