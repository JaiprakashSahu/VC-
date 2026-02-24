"use client";
import { useState } from "react";
export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
          Talk to our team
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Share a bit about your use case and we&apos;ll follow up with a
          tailored walkthrough of FlowForge.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-200">
              Work email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-200">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-200">
              What are you looking to build?
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-500"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Submit"}
          </button>
          {status === "success" && (
            <p className="text-xs text-emerald-400 mt-2">
              Thanks! We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-red-400 mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}