import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: {
    default: "Wan — Product Designer",
    template: "%s · Wan"
  },
  description: "Portfólio de Wanderson Silva (Wan), Product Designer com foco em produto digital, pós-compra e experiências complexas.",
  metadataBase: new URL("https://wan-portfolio.vercel.app"),
  openGraph: {
    title: "Wan — Product Designer",
    description: "Cases de Product Design em pós-compra, tracking e autoatendimento.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
