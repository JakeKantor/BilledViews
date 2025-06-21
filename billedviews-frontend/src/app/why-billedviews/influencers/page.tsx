import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/influencers/Hero";
import WhyBilledViews from "@/components/why-billedviews/influencers/WhyBilledViews";
import HowItWorksSection from "../../../components/why-billedviews/influencers/HowItWorksSection";
import CoreFeaturesAndBenefits from "./components/CoreFeaturesAndBenefits";
import { SuccessStories } from "@/components/why-billedviews/influencers/SuccessStories";

export default function InfluencersPage() {
  return (
    <>
      <Header />
      <Hero />
      <WhyBilledViews />
      <HowItWorksSection />
      <CoreFeaturesAndBenefits />
      <SuccessStories />
      <Footer />
    </>
  );
}
