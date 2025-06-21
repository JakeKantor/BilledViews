import { ArrowRight } from "lucide-react";
import Image from "next/image";

const influencerData = [
  {
    picture: "/why-billedviews/home/User1.svg",
    name: "@ChefAlexCooks",
    niche: "Food & Recipe",
    views: "1,200,000",
    cpv: "$8/1k views",
    earnings: "$8,160",
    highlight: "Ranked #1 in Food Campaigns Q1 2025",
  },
  {
    picture: "/why-billedviews/home/User2.svg",
    name: "@FitFionaOfficial",
    niche: "Fitness",
    views: "950,000",
    cpv: "$10/1k views",
    earnings: "$8,075",
    highlight: "Landed a 6-figure gig with GearUp Fitness",
  },
  {
    picture: "/why-billedviews/home/User3.svg",
    name: "@TechWithTyler",
    niche: "Tech Unboxing",
    views: "1,500,000",
    cpv: "$12/1k views",
    earnings: "$15,300",
    highlight: "Achieved 100k subs after viral campaign",
  },
];

export const SuccessStories = () => {
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
          className="text-center text-white mb-12 font-bold relative z-10 text-4xl lg:text-5xl px-4"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 900,
          }}
        >
          Sample Influencer Success Stories
        </h2>

        {/* DESKTOP Results Table */}
        <div className="max-w-[1086px] w-full mx-auto hidden lg:block relative z-10">
          <div
            className="text-white text-sm font-medium px-6 py-4"
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 1.5fr 1.5fr 1.8fr 1.8fr 2fr",
            }}
          >
            <div className="text-left">Influencer</div>
            <div className="text-left">Niche</div>
            <div className="text-left">Monthly Views</div>
            <div className="text-left">Avg. CPV Rate</div>
            <div className="text-left">Net Monthly Earnings</div>
            <div className="text-left">Highlight</div>
          </div>
          <div className="bg-white rounded-[20px] shadow-lg overflow-hidden">
            {influencerData.map((item, index) => (
              <div
                key={item.name}
                className={`items-stretch text-base text-[#1E1E1E] ${
                  index < influencerData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 1.5fr 1.5fr 1.8fr 1.8fr 2fr",
                }}
              >
                <div
                  className="p-4 flex items-center gap-4"
                  style={{ backgroundColor: "#F8F7FF" }}
                >
                  <Image
                    src={item.picture}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-bold">{item.name}</span>
                </div>
                <div className="p-4 border-l border-gray-100 flex items-center">
                  {item.niche}
                </div>
                <div className="p-4 border-l border-gray-100 font-bold flex items-center">
                  {item.views}
                </div>
                <div className="p-4 border-l border-gray-100 text-[#6C78FF] font-bold flex items-center">
                  {item.cpv}
                </div>
                <div className="p-4 border-l border-gray-100 text-[#6C78FF] font-bold flex items-center">
                  {item.earnings}
                </div>
                <div
                  className="p-4 border-l border-gray-100 h-full flex items-center"
                  style={{ backgroundColor: "#F8F7FF" }}
                >
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE Results Cards */}
        <div className="w-full px-4 sm:px-6 lg:hidden relative z-10 space-y-6">
          {influencerData.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-[20px] p-6 flex flex-col text-center shadow-lg text-[#1E1E1E] relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Image
                    src={item.picture}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h3 className="font-bold text-2xl">{item.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-left">
                  <div>
                    <p className="text-sm text-gray-500">Niche</p>
                    <p className="font-bold text-lg">{item.niche}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly Views</p>
                    <p className="font-bold text-lg">{item.views}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg. CPV Rate</p>
                    <p className="font-bold text-lg text-[#6C78FF]">
                      {item.cpv}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Net Monthly Earnings
                    </p>
                    <p className="font-bold text-lg text-[#6C78FF]">
                      {item.earnings}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Highlight</p>
                    <p className="font-bold text-lg">{item.highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 relative z-10">
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6C78FF] text-base font-semibold shadow-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform transition-all duration-300 ease-out">
            View Full Case Study
            <span className="flex items-center justify-center rounded-full bg-[#6C78FF] w-8 h-8 ml-2 group-hover:-rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
