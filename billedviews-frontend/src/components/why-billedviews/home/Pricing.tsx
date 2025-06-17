import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Pricing = () => {
  return (
    <section className="w-full py-16 lg:py-24 flex justify-center items-center px-4 lg:px-0">
      <div
        className="relative mx-auto lg:px-8 rounded-[40px] flex flex-col items-center w-full h-auto lg:w-[1200px] lg:h-[720px] overflow-hidden pb-12"
        style={{
          background:
            "linear-gradient(124.91deg, #7A86FF 15.95%, #3C9DFF 85.44%)",
        }}
      >
        {/* Light purple circular gradient at bottom */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] opacity-25 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(156, 139, 255, 0.9) 0%, rgba(156, 139, 255, 0) 70%)",
          }}
        />

        {/* Additional light purple circular gradient at right */}
        <div
          className="absolute bottom-20 right-0 w-[500px] h-[500px] opacity-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(176, 159, 255, 0.8) 0%, rgba(176, 159, 255, 0) 70%)",
          }}
        />

        {/* Additional light purple circular gradient at left */}
        <div
          className="absolute top-40 left-0 w-[450px] h-[450px] opacity-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(136, 119, 255, 0.8) 0%, rgba(136, 119, 255, 0) 70%)",
          }}
        />

        {/* Header with Icon */}
        <div className="flex items-center justify-center mb-6 mt-8 lg:mt-16 relative z-10">
          <div className="flex items-center gap-3 bg-white rounded-[32px] shadow-[0_2px_4px_rgba(184,200,216,0.6)] px-6 py-2">
            <div className="flex items-center justify-center w-6 h-6">
              <Image
                src="/why-billedviews/home/noun-price-2011179 1.svg"
                alt="Plan Options"
                width={24}
                height={24}
              />
            </div>
            <span
              className="text-[#6C78FF] whitespace-nowrap"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              Plan Options
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h2
          className="text-center text-white mb-6 font-bold relative z-10"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "110%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Pricing
        </h2>

        {/* Subtitle */}
        <p
          className="text-center text-white max-w-4xl mx-auto mb-12 px-4 relative z-10"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0%",
          }}
        >
          Simple, Transparent Pricing That Scales with Your Brand
        </p>

        {/* DESKTOP Pricing Table */}
        <div className="max-w-[1086px] mx-auto hidden lg:block relative z-10">
          {/* Titles */}
          <div className="grid grid-cols-3 mb-4 text-center px-6">
            <h3
              className="text-white font-bold"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "120%",
              }}
            >
              Brand Fee Structure
            </h3>
            <h3
              className="text-white font-bold"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "120%",
              }}
            >
              Influencer Fee
            </h3>
            <h3
              className="text-white font-bold"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "120%",
              }}
            >
              Agency Commission
            </h3>
          </div>

          <div className="bg-white rounded-[40px] overflow-hidden mb-8 shadow-lg">
            <div className="grid grid-cols-3">
              {/* Brand Fee Structure */}
              <div className="py-4 px-6 border-r border-gray-100 flex items-center justify-center">
                <p
                  className="text-center text-[#111111] font-bold"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    lineHeight: "120%",
                  }}
                >
                  10% on every deposit
                </p>
              </div>

              {/* Influencer Fee */}
              <div className="py-4 px-6 border-r border-gray-100 flex items-center justify-center">
                <p
                  className="text-center text-[#111111] font-bold"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    lineHeight: "120%",
                  }}
                >
                  15% of payouts
                </p>
              </div>

              {/* Agency Commission */}
              <div className="py-4 px-6 flex items-center justify-center">
                <p
                  className="text-center text-[#111111] font-bold"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    lineHeight: "120%",
                  }}
                >
                  5% of referred brand spend
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE Pricing Table */}
        <div className="w-full px-6 sm:px-8 lg:hidden relative z-10">
          <div
            className="bg-white rounded-[40px] p-6 flex flex-col items-center text-center space-y-8 relative overflow-hidden"
            style={{
              background: "hsla(0, 0%, 100%, 1)",
              boxShadow: "0px 2px 8px 0px hsla(237, 30%, 84%, 1)",
            }}
          >
            {/* Light purple circular gradient at bottom of mobile table */}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] opacity-20 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(156, 139, 255, 0.9) 0%, rgba(156, 139, 255, 0) 70%)",
              }}
            />
            <div className="w-full relative z-10">
              <h3
                className="text-[#111111] mb-1"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                Brand Fee Structure:
              </h3>
              <p
                className="text-[#111111] font-bold"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                10% on every deposit
              </p>
            </div>
            <div className="w-full relative z-10">
              <h3
                className="text-[#111111] mb-1"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                Influencer Fee:
              </h3>
              <p
                className="text-[#111111] font-bold"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                15% of payouts
              </p>
            </div>
            <div className="w-full relative z-10">
              <h3
                className="text-[#111111] mb-1"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                Agency Commission:
              </h3>
              <p
                className="text-[#111111] font-bold"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                5% of referred brand spend
              </p>
            </div>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="flex justify-center mt-8 lg:hidden relative z-10">
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6C78FF] text-base font-semibold shadow-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform transition-all duration-300 ease-out">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-[#6C78FF] w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>

        {/* Pricing Explanation */}
        <div className="text-center text-white max-w-4xl mx-auto mt-8 mb-8 lg:mb-8 px-4 relative z-10">
          <p
            className="mb-2"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
            }}
          >
            Brands pay a 10% platform fee on any deposit (e.g., deposit $10,000,
            $1,000 is platform fee, leaving $9,000 in spend credits).
          </p>
          <p
            className="mb-2"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
            }}
          >
            Influencers receive 85% of each 1,000-view milestone. We retain 15%
            of influencer earnings to cover operations.
          </p>
          <p
            className="mb-8"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
            }}
          >
            Agencies receive a 5% commission on total brand deposits (paid
            monthly).
          </p>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden justify-center mt-4 lg:flex relative z-10">
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6C78FF] text-base font-semibold shadow-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform transition-all duration-300 ease-out">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-[#6C78FF] w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
