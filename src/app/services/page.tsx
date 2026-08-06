import type { Metadata } from "next";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kitchen respraying, uPVC & aluminium door and window spraying, furniture and interior spraying, and shop front and commercial spraying, all across Dublin & Nationwide.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Services />
      <CTABanner
        heading="Not sure which service you need?"
        subheading="Send a few photos of your project and we'll recommend the right finish."
      />
    </main>
  );
}
