import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/home/Hero";
import KeyBenefits from "@/components/why-billedviews/home/KeyBenefits";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <KeyBenefits />
      <Footer />
    </div>
  );
}
