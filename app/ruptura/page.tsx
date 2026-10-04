import type { Metadata } from "next";
import { CasePage } from "@/components/case-page";
import { ruptura } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Ruptura Parcial",
  description: ruptura.headline,
};

export default function RupturaPage() {
  return <CasePage data={ruptura} />;
}
