import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/home/Hero";
import KeyBenefits from "@/components/why-billedviews/home/KeyBenefits";
import WhyUs from "@/components/why-billedviews/home/WhyUs";
import HowItWorks from "@/components/why-billedviews/home/HowItWorks";
import FeaturedBrands from "@/components/why-billedviews/home/FeaturedBrands";
import CoreFeatures from "@/components/why-billedviews/home/CoreFeatures";

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
      <Footer />
    </div>
  );
}
