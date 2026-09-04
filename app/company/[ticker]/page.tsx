import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Building2,
  Eye,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { companies } from "@/lib/data";
import { paymentCompanies } from "@/lib/payments-data";
import { themeCompanies } from "@/lib/theme-data";
export function generateStaticParams() {
  return Object.keys({ ...companies, ...paymentCompanies, ...themeCompanies }).map((ticker) => ({
    ticker: ticker.toLowerCase(),
  }));
}
export default async function CompanyPage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params,
    c = { ...companies, ...paymentCompanies, ...themeCompanies }[ticker.toUpperCase()];
  if (!c) notFound();
  return (
    <main>
      <SiteHeader />
      <div className="demo-banner">
        COMPANY BRIEF · INFORMATIONAL RESEARCH
      </div>
      <section className="company-hero info-hero shell">
        <Link href={c.themeHref || "/ai-stack"} className="back">
          <ArrowLeft size={15} /> Back to {c.themeLabel || "AI Stack"}
        </Link>
        <div className="company-title">
          <div className="ticker-tile">{c.ticker.slice(0, 2)}</div>
          <div>
            <span>{c.layer}</span>
            <h1>{c.name}</h1>
            <p>{c.ticker} · COMPANY INTELLIGENCE</p>
          </div>
          <div className="moat-badge">
            <small>STRUCTURAL ADVANTAGE</small>
            <b>{c.moat}</b>
          </div>
        </div>
        <div className="company-thesis">
          <p>{c.summary}</p>
          <div>
            <span>MOAT STRENGTH</span>
            <b>
              {c.score}
              <small>/100</small>
            </b>
            <label>THESIS SCORE</label>
          </div>
        </div>
      </section>
      <section className="company-body shell">
        <div className="info-grid">
          <article className="panel overview-card">
            <div className="panel-title">
              <div>
                <span>COMPANY OVERVIEW</span>
                <h2>What the company does</h2>
              </div>
              <Building2 size={20} />
            </div>
            <p>{c.business}</p>
          </article>
          <article className="panel role-card">
            <div className="panel-title">
              <div>
                <span>PLACE IN THE STACK</span>
                <h2>Why it matters to AI</h2>
              </div>
              <Network size={20} />
            </div>
            <p>{c.role}</p>
          </article>
        </div>
        <a
          className="big-news"
          href={c.developmentUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read the source for ${c.name}'s recent development`}
        >
          <div>
            <span>RECENT BIG DEVELOPMENT</span>
            <small>Reviewed September 2026 · Read source</small>
          </div>
          <p>{c.development}</p>
          <ArrowUpRight />
        </a>
        <div className="moat-analysis-grid">
          <article className="panel">
            <div className="panel-title">
              <div>
                <span>COMPETITIVE POSITION</span>
                <h2>How the moat works</h2>
              </div>
              <Award size={20} />
            </div>
            <ol className="analysis-list">
              {c.thesis.map((x: string, i: number) => (
                <li key={x}>
                  <span>0{i + 1}</span>
                  <p><b>{x}</b><small>{c.moatWhy[i]}</small></p>
                </li>
              ))}
            </ol>
          </article>
          <article className="panel">
            <div className="panel-title">
              <div>
                <span>MOAT ECOSYSTEM</span>
                <h2>Where it has leverage</h2>
              </div>
              <Layers3 size={20} />
            </div>
            <ol className="analysis-list">
              <li><span>01</span><div><small>WHO BUYS FROM IT</small><p><b>{c.customers}</b><small>{c.moatContext[0]}</small></p></div></li>
              <li><span>02</span><div><small>MAIN ALTERNATIVES</small><p><b>{c.competitors}</b><small>{c.moatContext[1]}</small></p></div></li>
            </ol>
          </article>
          <article className="panel">
            <div className="panel-title">
              <div>
                <span>MOAT DURABILITY</span>
                <h2>What reinforces the advantage</h2>
              </div>
              <ShieldCheck size={20} />
            </div>
            <ol className="analysis-list">
              {c.moatDurability.map((x: string, i: number) => (
                <li key={x}>
                  <span>0{i + 1}</span>
                  <p><b>{x}</b><small>{c.moatWhy[i + 3]}</small></p>
                </li>
              ))}
            </ol>
          </article>
          <article className="panel watch-card">
            <div className="panel-title">
              <div>
                <span>THINGS TO WATCH</span>
                <h2>Signals that matter</h2>
              </div>
              <Eye size={20} />
            </div>
            <ol className="analysis-list">
              {c.moatSignals.map((x: string, i: number) => (
                <li key={x}><span>0{i + 1}</span><p><b>{x}</b><small>{c.moatContext[i + 2]}</small></p></li>
              ))}
            </ol>
          </article>
        </div>
      </section>
    </main>
  );
}
