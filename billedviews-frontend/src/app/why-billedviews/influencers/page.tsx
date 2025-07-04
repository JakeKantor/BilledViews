import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/influencers/Hero";
import WhyBilledViews from "@/components/why-billedviews/influencers/WhyBilledViews";
import HowItWorksSection from "../../../components/why-billedviews/influencers/HowItWorksSection";
import CoreFeaturesAndBenefits from "../../../components/why-billedviews/influencers/CoreFeaturesAndBenefits";
import { SuccessStories } from "@/components/why-billedviews/influencers/SuccessStories";
import { InfluencersShowcase } from "@/components/why-billedviews/influencers/InfluencersShowcase";
import FAQ from "@/components/why-billedviews/influencers/FAQ";
import BoostRevenue from "@/components/why-billedviews/influencers/BoostRevenue";

export default function InfluencersPage() {
  return (
    <>
      <Header />
      <Hero />
      <WhyBilledViews />
      <HowItWorksSection />
      <CoreFeaturesAndBenefits />
      <SuccessStories />
      <InfluencersShowcase />
      <FAQ />
      <BoostRevenue />
      <Footer />
    </>
  );
}
