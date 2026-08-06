import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Real before & after spray finishing results from Spray Works: kitchens, furniture, uPVC & aluminium doors and windows, and shop fronts across Dublin & Nationwide.",
};

export default function OurWorkPage() {
  return (
    <main id="main-content">
      <Portfolio />
    </main>
  );
}
