import type { Metadata } from "next";
import { CasePage } from "@/components/case-page";
import { reenvio } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Reenvio automático de pedidos",
  description: reenvio.headline,
};

export default function ReenvioPage() {
  return <CasePage data={reenvio} />;
}
