import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose BilledViews
        </h1>
        <p className="text-lg text-gray-600">
          Discover how BilledViews can transform your business
        </p>
      </main>
      <Footer />
    </div>
  );
}
