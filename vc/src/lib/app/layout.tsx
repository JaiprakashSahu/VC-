import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
export const metadata: Metadata = {
  title: "FlowForge – AI Workflow Automation Platform",
  description:
    "Design, deploy, and monitor AI-powered workflows that automate your business processes end-to-end.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
