import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Pricing = () => {
  return (
    <section className="w-full py-16 lg:py-24 flex justify-center items-center">
      <div
        className="relative mx-auto px-4 lg:px-8 rounded-[40px] flex flex-col items-center w-full h-auto lg:w-[1200px] lg:h-[615px]"
        style={{
          background:
            "linear-gradient(124.91deg, #7A86FF 15.95%, #3C9DFF 85.44%)",
        }}
      >
        {/* Header with Icon */}
        <div className="flex items-center justify-center mb-6 mt-8 lg:mt-16">
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
          className="text-center text-white mb-6 font-bold"
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
          className="text-center text-white max-w-4xl mx-auto mb-12 px-4"
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
        <div className="max-w-[1086px] mx-auto hidden lg:block">
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
        <div className="w-full px-4 lg:hidden">
          <div className="bg-white rounded-[40px] p-8 flex flex-col items-center text-center space-y-6">
            <div>
              <h3
                className="text-[#111111]"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Brand Fee Structure:
              </h3>
              <p
                className="text-[#111111]"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                10% on every deposit
              </p>
            </div>
            <div>
              <h3
                className="text-[#111111]"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Influencer Fee:
              </h3>
              <p
                className="text-[#111111]"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                15% of payouts
              </p>
            </div>
            <div>
              <h3
                className="text-[#111111]"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Agency Commission:
              </h3>
              <p
                className="text-[#111111]"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                5% of referred brand spend
              </p>
            </div>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="flex justify-center mt-8 lg:hidden">
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6C78FF] text-base font-semibold shadow-lg hover:bg-gray-50 transition-colors">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-[#6C78FF] w-8 h-8 ml-2">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>

        {/* Pricing Explanation */}
        <div className="text-center text-white max-w-4xl mx-auto mt-8 mb-8 lg:mb-4 px-4">
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
        <div className="hidden justify-center mt-8 lg:flex">
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6C78FF] text-base font-semibold shadow-lg hover:bg-gray-50 transition-colors">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-[#6C78FF] w-8 h-8 ml-2">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
