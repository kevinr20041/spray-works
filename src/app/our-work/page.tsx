import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Real before & after spray finishing results from Spray Works: kitchens, furniture, uPVC & aluminium doors and windows, and shop fronts across Dublin & Nationwide.",
};

export default function OurWorkPage() {
  return (
    <main id="main-content">
      <Portfolio />
      <CTABanner
        heading="Like what you see?"
        subheading="Get your free, no-obligation quote and start your own transformation."
      />
    </main>
  );
}
