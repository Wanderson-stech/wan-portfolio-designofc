import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Wan — Product Designer",
    template: "%s · Wan",
  },
  description: "Portfólio de Wanderson Silva (Wan), Product Designer.",
  openGraph: {
    title: "Wan — Product Designer",
    description: "Portfólio de Product Design de Wanderson Silva.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
