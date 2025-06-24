import { Header } from "@/components/why-billedviews/Header";
import { Footer } from "@/components/why-billedviews/Footer";
import Hero from "@/components/why-billedviews/agencies/Hero";

export default function AgenciesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
