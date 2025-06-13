import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/home/Hero";
import KeyBenefits from "@/components/why-billedviews/home/KeyBenefits";
import WhyUs from "@/components/why-billedviews/home/WhyUs";
import HowItWorks from "@/components/why-billedviews/home/HowItWorks";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <KeyBenefits />
      <WhyUs />
      <HowItWorks />
      <Footer />
    </div>
  );
}
