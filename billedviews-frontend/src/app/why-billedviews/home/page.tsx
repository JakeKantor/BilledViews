import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/home/Hero";
import KeyBenefits from "@/components/why-billedviews/home/KeyBenefits";
import Pricing from "@/components/why-billedviews/home/Pricing";
import WhyUs from "@/components/why-billedviews/home/WhyUs";
import HowItWorks from "@/components/why-billedviews/home/HowItWorks";
import FeaturedBrands from "@/components/why-billedviews/home/FeaturedBrands";
import CoreFeatures from "@/components/why-billedviews/home/CoreFeatures";
import FAQ from "@/components/why-billedviews/home/FAQ";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <KeyBenefits />
      <WhyUs />
      <HowItWorks />
      <FeaturedBrands />
      <CoreFeatures />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
