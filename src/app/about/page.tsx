import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Spray Works specialises in premium spray finishing for kitchens, furniture, uPVC & aluminium doors and windows, and commercial shop fronts across Dublin & Nationwide.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <About />
    </main>
  );
}
