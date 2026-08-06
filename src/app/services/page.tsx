import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kitchen respraying, uPVC & aluminium door and window spraying, furniture and interior spraying, and shop front and commercial spraying, all across Dublin & Nationwide.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Services />
    </main>
  );
}
