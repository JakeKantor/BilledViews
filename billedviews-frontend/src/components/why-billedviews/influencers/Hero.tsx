import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[650px] bg-white my-4 mx-4 sm:mx-8 md:mx-10 py-16 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between w-full">
          <div className="w-full z-10 p-4 lg:p-8 text-center">
            <div className="flex items-center mb-4 justify-center">
              <div
                className="flex items-center gap-3 bg-white rounded-[32px] shadow-[0_2px_4px_rgba(184,200,216,0.6)]"
                style={{
                  border: "1px solid #E5E7EB",
                  height: "40px",
                  paddingTop: "8px",
                  paddingRight: "24px",
                  paddingBottom: "8px",
                  paddingLeft: "24px",
                }}
              >
                <div className="flex items-center justify-center w-6 h-6">
                  <Image
                    src="/why-billedviews/brands/Social_Media_Analytics.svg" // Assuming same logo icon
                    alt="BilledViews Logo"
                    width={24}
                    height={24}
                  />
                </div>
                <span
                  className="text-[#6C78FF]"
                  style={{
                    fontFamily: "Helvetica Neue, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  BilledViews for Influencers
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[#111111] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Monetize Your Reach
              <br />
              Get Paid for{" "}
              <span className="text-[#6C78FF]">Every 1,000 Views</span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Join the BilledViews Creator Network and earn 85% of pay-per-view
              rates. Create once, post everywhere, and watch your income grow.
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-md hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
                Start Free Trial
                <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                  <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
                </span>
              </button>
            </div>
          </div>

          {/* Images section */}
          <div className="mt-12 w-full">
            {/* Desktop Image (600px and up) */}
            <div className="hidden bp500:flex justify-center w-full">
              <Image
                src="/why-billedviews/influencers/Frame 1328967834.svg"
                alt="BilledViews creator network interface"
                width={1200}
                height={600}
                className="object-contain rounded-[20px]"
                priority
              />
            </div>

            {/* Mobile Images (below 600px) */}
            <div className="bp500:hidden flex flex-col items-center gap-4">
              <Image
                src="/why-billedviews/influencers/Group 427318992.svg"
                alt="Analytics graph"
                width={800}
                height={500}
                className="object-contain rounded-[20px]"
                priority
              />
              <Image
                src="/why-billedviews/influencers/Frame 2087325343.svg"
                alt="Influencer creating content"
                width={800}
                height={500}
                className="object-contain rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
