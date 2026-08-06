import type { Metadata } from "next";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Process",
  description:
    "From free quote to final result: how Spray Works takes your kitchen, furniture, uPVC & aluminium or shop front project from enquiry to a factory-quality finish.",
};

export default function ProcessPage() {
  return (
    <main id="main-content">
      <Process />
      <CTABanner />
    </main>
  );
}
