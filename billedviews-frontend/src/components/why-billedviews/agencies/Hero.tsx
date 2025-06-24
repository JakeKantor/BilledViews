import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[650px] overflow-hidden py-16 lg:py-0">
      {/* Background shapes */}
      <div
        className="absolute top-0 -left-1/4 w-[512px] h-[512px] rounded-full"
        style={{
          background: "hsla(235, 100%, 71%, 0.3)",
          filter: "blur(300px)",
        }}
      ></div>
      <div
        className="absolute bottom-0 -right-1/4 w-[512px] h-[512px] rounded-full"
        style={{
          background: "hsla(235, 100%, 71%, 0.3)",
          filter: "blur(300px)",
        }}
      ></div>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Phone mockup for mobile - now appears first */}
          <div className="lg:hidden w-full flex justify-center mb-8">
            <Image
              src="/why-billedviews/agencies/iPhone 15.svg"
              alt="Mobile analytics dashboard"
              width={466}
              height={897}
              className="drop-shadow-xl object-contain h-auto max-w-[280px] sm:max-w-xs md:max-w-sm"
              priority
            />
          </div>

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
                  BilledViews for Agencies
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[#111111] text-4xl md:text-5xl font-bold leading-tight mb-6">
              Boost Your Clients&apos; ROI
              <br />
              <span className="text-[#6C78FF]">—Earn 5% on Every</span>
              <br />
              Campaign
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Onboard brands, manage campaigns seamlessly, and earn agency
              <br />
              commissions—all from one unified portal.
            </p>

            {/* Buttons with updated hover effects to match homepage */}
            <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-md hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
                Become a Partner
                <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                  <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
                </span>
              </button>
              <button className="group px-8 py-3 rounded-full bg-white text-[#6C78FF] text-base font-semibold border border-[#6C78FF] shadow-md hover:bg-[#f6f8ff] hover:shadow-lg hover:border-[#5a66e0] hover:text-[#5a66e0] hover:scale-105 transform transition-all duration-300 ease-out">
                Request a Demo
              </button>
            </div>
            {/* Bullet points */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#6C78FF] flex-shrink-0"></div>
                <span className="text-gray-600 text-sm">No Upfront Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#6C78FF] flex-shrink-0"></div>
                <span className="text-gray-600 text-sm">
                  Dedicated Agency Dashboard
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#6C78FF] flex-shrink-0"></div>
                <span className="text-gray-600 text-sm">
                  Real-Time Analytics
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Phone mockup for desktop */}
          <div className="absolute right-0 bottom-[-10%] w-1/2 h-[120%] -mr-16 hidden lg:flex items-center justify-center">
            <Image
              src="/why-billedviews/agencies/iPhone 15.svg"
              alt="Mobile analytics dashboard"
              width={500}
              height={960}
              className="drop-shadow-xl object-contain max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
