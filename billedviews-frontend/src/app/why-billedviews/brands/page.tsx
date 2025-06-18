import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/brands/Hero";
import WhyUs from "@/components/why-billedviews/brands/WhyUs";
import HowItWorks from "@/components/why-billedviews/brands/HowItWorks";
import { FeaturesOverview } from "@/components/why-billedviews/brands/FeaturesOverview";
import { ResultsPreview } from "@/components/why-billedviews/brands/ResultsPreview";
import BrandsFAQ from "@/components/why-billedviews/brands/FAQ";

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <FeaturesOverview />
      <ResultsPreview />
      <BrandsFAQ />
      <Footer />
    </div>
  );
}
