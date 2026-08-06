import Hero from "@/components/Hero";
import ServiceMarquee from "@/components/ServiceMarquee";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkPreview from "@/components/WorkPreview";
import Statement from "@/components/Statement";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ServiceMarquee />
      <ServicesPreview />
      <WhyChooseUs />
      <WorkPreview />
      <Statement />
    </main>
  );
}
