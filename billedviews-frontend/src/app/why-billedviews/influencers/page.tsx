import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/influencers/Hero";
import WhyBilledViews from "@/components/why-billedviews/influencers/WhyBilledViews";
import HowItWorksSection from "./components/HowItWorksSection";

export default function InfluencersPage() {
  return (
    <>
      <Header />
      <Hero />
      <WhyBilledViews />
      <HowItWorksSection />
      <Footer />
    </>
  );
}
