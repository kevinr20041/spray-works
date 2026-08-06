import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free, no-obligation quote from Spray Works via WhatsApp, phone or the contact form, covering Dublin & Nationwide.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <Contact />
    </main>
  );
}
