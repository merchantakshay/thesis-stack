import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { layers, companies } from "@/lib/data";
export default function AiStack() {
  return (
    <main>
      <SiteHeader />
      <section className="stack-hero shell">
        <div>
          <span className="overline">THESIS 01 · ARTIFICIAL INTELLIGENCE</span>
          <h1>The AI Stack</h1>
          <p>
            Six interdependent layers. Trillions in capital. A small number of
            companies control the critical bottlenecks.
          </p>
        </div>
        <div className="stack-core">
          <small>THE CORE IDEA</small>
          <p>Value concentrates at the bottlenecks that are hardest to scale: power, advanced silicon, networking and distribution.</p>
        </div>
      </section>
      <section className="layer-map shell">
        <div className="map-label">
          VALUE & SOFTWARE
        </div>
        {[...layers].reverse().map((l) => (
          <a
            href={`#layer-${l.n}`}
            className="layer-band"
            style={{ "--layer": l.color } as React.CSSProperties}
            key={l.n}
          >
            <span>LAYER {l.n}</span>
            <b>{l.short}</b>
            <p>{l.includes.slice(0, 2).join(" · ")}</p>
            <ArrowRight />
          </a>
        ))}
        <div className="map-label">PHYSICAL INFRASTRUCTURE</div>
      </section>
      <section className="shell layer-detail-section">
        <div className="section-head">
          <div>
            <span>02 / UNDERSTAND</span>
            <h2>How each layer works</h2>
          </div>
          <p>
            Follow each layer directly into
            <br />
            its strongest competitive positions.
          </p>
        </div>
        <div className="layer-details">
          {layers.map((l) => (
            <article
              id={`layer-${l.n}`}
              className="layer-detail expanded"
              key={l.n}
              style={{ "--layer": l.color } as React.CSSProperties}
            >
              <div className="layer-index">
                <span>{l.n}</span>
                <i />
              </div>
              <div className="layer-main">
                <div className="layer-copy">
                  <small>LAYER {l.n}</small>
                  <h3>{l.title}</h3>
                  <p className="thesis-line">{l.thesis}</p>
                  <p className="explainer">{l.explainer}</p>
                </div>
                <div className="economics">
                  <div>
                    <small>WHERE VALUE ACCUMULATES</small>
                    <p>{l.value}</p>
                  </div>
                  <div>
                    <small>WHAT COULD GO WRONG</small>
                    <p>{l.risk}</p>
                  </div>
                </div>
                <div className="moat-leaders">
                  <div className="leaders-heading">
                    <small>MOAT LEADERS</small>
                    <p>
                      Companies with the strongest structural position in this
                      layer
                    </p>
                  </div>
                  <div className="leader-grid">
                    {l.companies.map((t) => (
                      <Link href={`/company/${t.toLowerCase()}`} key={t}>
                        <span>{t}</span>
                        <div>
                          <b>{companies[t]?.name || t}</b>
                          <small>{companies[t]?.moat}</small>
                        </div>
                        <ArrowRight size={16} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <aside className="layer-aside">
                <div className="signals">
                  <small>MARKET SIGNALS</small>
                  {l.signals.map((x) => (
                    <p key={x}>{x}</p>
                  ))}
                </div>
              </aside>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
