import Link from "next/link";
export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <span>TS</span> THESIS STACK
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/ai-stack">AI Stack</Link>
        <Link href="/digital-payments">Digital Payments</Link>
        <Link href="/thesis/energy-transition">Energy Transition</Link>
        <Link href="/thesis/cybersecurity">Cybersecurity</Link>
        <Link href="/thesis/robotics">Robotics</Link>
        <Link href="/thesis/space-economy">Space Economy</Link>
      </nav>
    </header>
  );
}
