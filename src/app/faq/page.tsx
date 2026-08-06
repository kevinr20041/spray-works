import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about spray finishing, durability, colours and disruption, answered by Spray Works.",
};

export default function FAQPage() {
  return (
    <main id="main-content">
      <FAQ />
    </main>
  );
}
