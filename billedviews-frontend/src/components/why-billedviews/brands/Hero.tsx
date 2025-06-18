import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[650px] bg-gradient-to-b from-[#f6f8ff] to-[#e9edfa] rounded-[50px] overflow-hidden my-4 mx-4 sm:mx-8 md:mx-10 py-16 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Left side content */}
          <div className="lg:w-7/12 xl:w-1/2 z-10 p-4 lg:p-8 text-center lg:text-left">
            <div className="hidden lg:flex items-center mb-4 justify-center lg:justify-start">
              <div
                className="flex items-center gap-3 bg-white rounded-[32px] shadow-[0_2px_4px_rgba(184,200,216,0.6)]"
                style={{
                  height: "40px",
                  paddingTop: "8px",
                  paddingRight: "24px",
                  paddingBottom: "8px",
                  paddingLeft: "24px",
                }}
              >
                <div className="flex items-center justify-center w-6 h-6">
                  <Image
                    src="/why-billedviews/brands/Social_Media_Analytics.svg"
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
            <h1 className="text-[#111111] text-4xl md:text-5xl font-bold leading-tight mb-6">
              Drive Real ROI with
              <br />
              <span className="text-[#6C78FF]">Pay-Per-View</span>
              <br />
              Influencer Campaigns
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Launch. Approve. Watch Views Turn Into Sales. No Vanity Metrics,
              <br />
              Only Verified Performance.
            </p>

            {/* No Credit Card Required */}
            <p className="text-gray-600 text-sm mb-8">
              No Credit Card Required. Get 3 Free Credits on Sign-Up
            </p>

            {/* Buttons with updated hover effects to match homepage */}
            <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-md hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
                Start Free Trial
                <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                  <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
                </span>
              </button>
              <button className="group px-8 py-3 rounded-full bg-white text-[#6C78FF] text-base font-semibold border border-[#6C78FF] shadow-md hover:bg-[#f6f8ff] hover:shadow-lg hover:border-[#5a66e0] hover:text-[#5a66e0] hover:scale-105 transform transition-all duration-300 ease-out">
                Request a Demo
              </button>
            </div>
          </div>

          {/* Right side - Phone mockup for desktop */}
          <div className="absolute right-0 bottom-0 w-1/2 h-[120%] -mr-16 -mb-16 hidden lg:flex items-end justify-center">
            <Image
              src="/why-billedviews/home/Track Every Authentic View & Spend Instantly-1.svg"
              alt="Mobile analytics dashboard"
              width={466}
              height={897}
              className="drop-shadow-xl object-contain max-w-full h-auto"
              priority
            />
          </div>

          {/* Phone mockup for mobile */}
          <div className="lg:hidden w-full mt-12 flex justify-center -mb-16">
            <Image
              src="/why-billedviews/home/Track Every Authentic View & Spend Instantly-1.svg"
              alt="Mobile analytics dashboard"
              width={466}
              height={897}
              className="drop-shadow-xl object-contain h-auto max-w-[280px] sm:max-w-xs md:max-w-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
