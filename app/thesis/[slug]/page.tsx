import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { themes,themeCompanies } from "@/lib/theme-data";
export function generateStaticParams(){return Object.keys(themes).map(slug=>({slug}));}
export default async function ThemePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params,t=themes[slug]; if(!t)notFound();
 return <main><SiteHeader/>
  <section className="stack-hero shell"><div><span className="overline">THESIS {t.number} · {t.overline}</span><h1>{t.title}</h1><p>{t.intro}</p></div><div className="stack-core"><small>THE CORE IDEA</small><p>{t.coreIdea}</p></div></section>
  <section className="layer-map shell"><div className="map-label">{t.top}</div>{[...t.layers].reverse().map((l:any)=><a href={`#theme-${l.n}`} className="layer-band" style={{"--layer":l.color} as React.CSSProperties} key={l.n}><span>LAYER {l.n}</span><b>{l.short}</b><p>{l.includes.slice(0,2).join(" · ")}</p><ArrowRight/></a>)}<div className="map-label">{t.bottom}</div></section>
  <section className="shell layer-detail-section"><div className="section-head"><div><span>02 / UNDERSTAND</span><h2>How each layer works</h2></div><p>Follow the system from its physical foundation<br/>to the services customers ultimately use.</p></div><div className="layer-details">{t.layers.map((l:any)=><article id={`theme-${l.n}`} className="layer-detail expanded" key={l.n} style={{"--layer":l.color} as React.CSSProperties}><div className="layer-index"><span>{l.n}</span><i/></div><div className="layer-main"><div className="layer-copy"><small>LAYER {l.n}</small><h3>{l.title}</h3><p className="thesis-line">{l.thesis}</p><p className="explainer">{l.explainer}</p></div><div className="economics"><div><small>WHERE VALUE ACCUMULATES</small><p>{l.value}</p></div><div><small>WHAT COULD GO WRONG</small><p>{l.risk}</p></div></div><div className="moat-leaders"><div className="leaders-heading"><small>MOAT LEADERS</small><p>Public companies with the strongest structural position in this layer</p></div><div className="leader-grid">{l.companies.map((ticker:string)=><Link href={`/company/${ticker.toLowerCase()}`} key={ticker}><span>{ticker}</span><div><b>{themeCompanies[ticker]?.name||ticker}</b><small>{themeCompanies[ticker]?.moat}</small></div><ArrowRight size={16}/></Link>)}</div></div></div><aside className="layer-aside"><div className="signals"><small>MARKET SIGNALS</small>{l.signals.map((x:string)=><p key={x}>{x}</p>)}</div></aside></article>)}</div></section>
 </main>;
}
