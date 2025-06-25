import { Header } from "@/components/why-billedviews/Header";
import { Footer } from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/agencies/Hero";
import WhyUs from "@/components/why-billedviews/agencies/WhyUs";
import HowItWorksSection from "@/components/why-billedviews/agencies/HowItWorks";
import { FeaturesOverview } from "@/components/why-billedviews/agencies/FeaturesOverview";
import { ResultsPreview } from "@/components/why-billedviews/agencies/ResultsPreview";
import AgenciesFAQ from "@/components/why-billedviews/agencies/FAQ";
import BoostRevenue from "@/components/why-billedviews/agencies/BoostRevenue";

export default function AgenciesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <HowItWorksSection />
        <FeaturesOverview />
        <ResultsPreview />
        <BoostRevenue />
        <AgenciesFAQ />
      </main>
      <Footer />
    </div>
  );
}
