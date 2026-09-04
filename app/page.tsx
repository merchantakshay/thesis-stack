import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  CreditCard,
  ShieldCheck,
  Satellite,
  Bot,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
const themes = [
  {
    title: "The AI Stack",
    eyebrow: "ACTIVE THESIS · 6 LAYERS",
    copy: "Follow the economics of artificial intelligence—from the power grid to autonomous agents.",
    icon: Cpu,
    href: "/ai-stack",
  },
  {
    title: "Digital Payments",
    eyebrow: "ACTIVE THESIS · 6 LAYERS",
    copy: "Networks, issuers, processors and the infrastructure moving money worldwide.",
    icon: CreditCard,
    href: "/digital-payments",
  },
  {
    title: "Energy Transition",
    eyebrow: "ACTIVE THESIS · 6 LAYERS",
    copy: "Electrification, storage and the equipment modernizing the global grid.",
    icon: Zap,
    href: "/thesis/energy-transition",
  },
  {
    title: "Cybersecurity",
    eyebrow: "ACTIVE THESIS · 6 LAYERS",
    copy: "Identity, cloud security and the platforms defending an expanding attack surface.",
    icon: ShieldCheck,
    href: "/thesis/cybersecurity",
  },
  {
    title: "Robotics",
    eyebrow: "ACTIVE THESIS · 6 LAYERS",
    copy: "Sensors, intelligence and automation moving from factories into the physical world.",
    icon: Bot,
    href: "/thesis/robotics",
  },
  {
    title: "Space Economy",
    eyebrow: "ACTIVE THESIS · 6 LAYERS",
    copy: "Launch, satellites and the new infrastructure layer above Earth.",
    icon: Satellite,
    href: "/thesis/space-economy",
  },
];
export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero shell">
        <div className="hero-kicker">
          <span>INVESTMENT RESEARCH</span>
          <i />
        </div>
        <h1>
          Invest in the <em>structure</em>,<br />
          not the story.
        </h1>
        <p>
          Understand the systems shaping the future. Find the scarce assets,
          structural bottlenecks and companies with durable economic power.
        </p>
      </section>
      <section className="shell themes-section">
        <div className="section-head">
          <div>
            <span>01 / EXPLORE</span>
            <h2>Investment themes</h2>
          </div>
          <p>
            Every thesis starts with a system.
            <br />
            Every system has a bottleneck.
          </p>
        </div>
        <div className="theme-grid">
          {themes.map(({ icon: Icon, ...t }, i) =>
            t.href ? (
              <Link
                href={t.href}
                className="theme-card active"
                key={t.title}
              >
                <div className="card-top">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <Icon />
                </div>
                <div>
                  <small>{t.eyebrow}</small>
                  <h3>{t.title}</h3>
                  <p>{t.copy}</p>
                  <b>
                    Explore the thesis <ArrowRight size={17} />
                  </b>
                </div>
              </Link>
            ) : (
              <article className="theme-card" key={t.title}>
                <div className="card-top">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <Icon />
                </div>
                <div>
                  <small>{t.eyebrow}</small>
                  <h3>{t.title}</h3>
                  <p>{t.copy}</p>
                </div>
              </article>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
