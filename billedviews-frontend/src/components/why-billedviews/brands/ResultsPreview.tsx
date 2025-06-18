import { ArrowRight } from "lucide-react";
import Image from "next/image";

const campaignData = [
  {
    brand: "GlowUp Cosmetics",
    category: "Beauty",
    duration: "4 weeks",
    budget: "$9,000",
    views: "2,100,000",
    cpm: "$4.29",
    roi: "+500k new Instagram followers",
  },
  {
    brand: "GearUp Fitness",
    category: "Sports Apparel",
    duration: "3 weeks",
    budget: "$4,500",
    views: "1,000,000",
    cpm: "$4.50",
    roi: "1,500 product bundle sales",
  },
  {
    brand: "TurboCharge SaaS",
    category: "B2B Software",
    duration: "6 weeks",
    budget: "$12,000",
    views: "2,500,000",
    cpm: "$4.80",
    roi: "+300% demo requests",
  },
];

export const ResultsPreview = () => {
  return (
    <section className="w-full py-16 lg:py-24 flex justify-center items-center px-4 lg:px-0">
      <div
        className="relative mx-auto lg:px-8 rounded-[40px] flex flex-col items-center w-full h-auto lg:w-[1200px] overflow-hidden pb-12"
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
                src="/why-billedviews/brands/Item.svg"
                alt="Results Preview"
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
              }}
            >
              Results Preview
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h2
          className="text-center text-white mb-4 font-bold relative z-10 text-4xl lg:text-5xl px-4"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 900,
          }}
        >
          Sample Campaign Results
        </h2>

        {/* Subtitle */}
        <p
          className="text-center text-white max-w-4xl mx-auto mb-12 px-4 relative z-10 text-lg"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
          }}
        >
          See What Real Brands Achieved
        </p>

        {/* DESKTOP Results Table */}
        <div className="max-w-[1086px] w-full mx-auto hidden lg:block relative z-10">
          <div className="grid grid-cols-7 text-white text-sm font-medium px-6 py-4">
            <div className="text-left">Brand</div>
            <div className="text-left">Product Category</div>
            <div className="text-left">Duration</div>
            <div className="text-left">Budget (After Fee)</div>
            <div className="text-left">Total Views</div>
            <div className="text-left">Cost per 1k Views</div>
            <div className="text-left">ROI Highlights</div>
          </div>
          <div className="bg-white rounded-[20px] shadow-lg overflow-hidden">
            {campaignData.map((item, index) => (
              <div
                key={item.brand}
                className={`grid grid-cols-7 items-stretch text-base ${
                  index < campaignData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div
                  className="p-6 font-bold text-[#1E1E1E]"
                  style={{ backgroundColor: "#F8F7FF" }}
                >
                  {item.brand}
                </div>
                <div className="p-6 border-l border-gray-100 text-[#1E1E1E]">
                  {item.category}
                </div>
                <div className="p-6 border-l border-gray-100 font-bold text-[#1E1E1E]">
                  {item.duration}
                </div>
                <div className="p-6 border-l border-gray-100 text-[#6C78FF]">
                  {item.budget}
                </div>
                <div className="p-6 border-l border-gray-100 text-[#6C78FF]">
                  {item.views}
                </div>
                <div className="p-6 border-l border-gray-100 font-bold text-[#6C78FF]">
                  {item.cpm}
                </div>
                <div className="p-6 border-l border-gray-100 font-bold text-[#1E1E1E]">
                  {item.roi}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE Results Cards */}
        <div className="w-full px-4 sm:px-6 lg:hidden relative z-10 space-y-6">
          {campaignData.map((item) => (
            <div
              key={item.brand}
              className="bg-white rounded-[20px] p-6 flex flex-col text-center shadow-lg text-[#111111] relative overflow-hidden"
            >
              <div
                className="absolute -top-1/4 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] opacity-20 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(156, 139, 255, 0.9) 0%, rgba(156, 139, 255, 0) 70%)",
                }}
              />
              <div className="relative z-10">
                <h3 className="font-bold text-2xl mb-4">{item.brand}</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-left">
                  <div>
                    <p className="text-sm text-gray-500">Product Category</p>
                    <p className="font-bold text-lg">{item.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-bold text-lg">{item.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Budget (After Fee)</p>
                    <p className="font-bold text-lg">{item.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Views</p>
                    <p className="font-bold text-lg">{item.views}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cost per 1k Views</p>
                    <p className="font-bold text-lg">{item.cpm}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ROI Highlights</p>
                    <p className="font-bold text-lg">{item.roi}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden justify-center mt-12 lg:flex relative z-10">
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6C78FF] text-base font-semibold shadow-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform transition-all duration-300 ease-out">
            View Full Case Study
            <span className="flex items-center justify-center rounded-full bg-[#6C78FF] w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
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
      </div>
    </section>
  );
};

export default ResultsPreview;
