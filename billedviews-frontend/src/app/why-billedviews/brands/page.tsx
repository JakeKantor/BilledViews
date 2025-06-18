import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/brands/Hero";
import WhyUs from "@/components/why-billedviews/brands/WhyUs";
import HowItWorks from "@/components/why-billedviews/brands/HowItWorks";

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <Footer />
    </div>
  );
}
