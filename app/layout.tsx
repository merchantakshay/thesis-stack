import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}<footer><span>THESIS STACK</span><p>Independent research framework.</p><b>Built for structural thinkers.</b></footer></body>
    </html>
  );
}
