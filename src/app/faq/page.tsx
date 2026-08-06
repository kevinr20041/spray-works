import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about spray finishing, durability, colours and disruption, answered by Spray Works.",
};

export default function FAQPage() {
  return (
    <main id="main-content">
      <FAQ />
      <CTABanner
        heading="Still have questions?"
        subheading="Get in touch and we'll answer anything specific to your project."
      />
    </main>
  );
}
