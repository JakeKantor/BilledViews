import { Header } from "@/components/why-billedviews/Header";
import { Footer } from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/agencies/Hero";
import WhyUs from "@/components/why-billedviews/agencies/WhyUs";

export default function AgenciesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
