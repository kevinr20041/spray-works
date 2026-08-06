import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceMarquee from "@/components/ServiceMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Statement from "@/components/Statement";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ServiceMarquee />
        <About />
        <Services />
        <Statement />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
