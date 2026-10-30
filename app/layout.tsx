import type { Metadata } from "next";
import "./globals.css";
import "./theme-foundation.css";
import "./theme-components.css";

export const metadata: Metadata = {
  title: "Thesis Stack — Invest in the Structure",
  description: "Map structural investment themes and analyze the companies controlling their critical bottlenecks.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top">
      <body>{children}<footer className="site-footer"><div className="shell footer-inner"><a className="brand" href="/thesis-stack/" aria-label="Thesis Stack home"><span>TS</span> THESIS STACK</a><a href="#top">Back to top ↑</a></div></footer></body>
    </html>
  );
}
