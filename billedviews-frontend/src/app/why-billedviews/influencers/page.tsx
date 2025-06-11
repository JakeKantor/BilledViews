import { Header } from "@/components/why-billedviews/Header";
import Footer from "@/components/why-billedviews/Footer";

export default function InfluencersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          For Influencers
        </h1>
        <p className="text-lg text-gray-600">
          See how BilledViews supports influencers
        </p>
      </main>
      <Footer />
    </div>
  );
}
