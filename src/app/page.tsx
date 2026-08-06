import Hero from "@/components/Hero";
import ServiceMarquee from "@/components/ServiceMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import Statement from "@/components/Statement";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ServiceMarquee />
      <WhyChooseUs />
      <Statement />
    </main>
  );
}
