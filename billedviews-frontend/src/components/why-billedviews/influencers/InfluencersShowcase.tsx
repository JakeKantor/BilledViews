import Image from "next/image";

const influencerData = [
  {
    picture: "/why-billedviews/influencers/profile1.jpg",
    name: "@ChefAlexCooks",
    niche: "Food & Recipe",
    monthlyViews: "1,200,000",
    cpvRate: "$8/1k views",
    earnings: "$8160",
    highlight: "Ranked #1 in Food Campaigns Q1 2025",
  },
  {
    picture: "/why-billedviews/influencers/profile2.jpg",
    name: "@FitFionaOfficial",
    niche: "Fitness",
    monthlyViews: "950,000",
    cpvRate: "$8/1k views",
    earnings: "$8075",
    highlight: "Landed a 6-figure gig with GearUp Fitness",
  },
  {
    picture: "/why-billedviews/influencers/profile3.jpg",
    name: "@TechWithTyler",
    niche: "Tech Unboxing",
    monthlyViews: "1,500,000",
    cpvRate: "$8/1k views",
    earnings: "$15300",
    highlight: "Achieved 100k subs after viral campaign",
  },
];

export const InfluencersShowcase = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Header with Icon - copied from CoreFeaturesAndBenefits style */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full mb-6">
            <Image
              src="/why-billedviews/influencers/bxs_user.svg"
              alt="Influencers"
              width={20}
              height={20}
              className="text-[#6C78FF]"
            />
            <span className="font-medium text-[#6C78FF]">Influencers</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Real Creators, Real Checks
          </h2>
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center max-w-6xl mx-auto">
          {influencerData.map((influencer, index) => (
            <div
              key={index}
              className="flex flex-col p-5 rounded-[32px] text-white overflow-hidden"
              style={{
                width: "389.33px",
                height: "403px",
                background:
                  "linear-gradient(124.91deg, #616FFF 15.95%, #5EAFFF 85.44%)",
                border: "1px solid hsla(222, 99%, 59%, 0.42)",
              }}
            >
              {/* Profile Section */}
              <div className="flex flex-col items-center text-center mb-5">
                <div
                  className="relative mb-[10px] rounded-full border-[3px] border-white p-[5px]"
                  style={{ width: "68px", height: "68px" }}
                >
                  <Image
                    src={influencer.picture}
                    alt={influencer.name}
                    fill
                    sizes="68px"
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">{influencer.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <Image
                    src="/why-billedviews/influencers/Icon (2).svg" // Placeholder, ideally this would be dynamic
                    alt="Niche"
                    width={16}
                    height={16}
                  />
                  <span className="text-base font-medium opacity-90">
                    {influencer.niche}
                  </span>
                </div>
              </div>

              {/* Stats Section */}
              <div className="flex-grow w-full grid grid-cols-2 gap-3 mb-3">
                {/* Monthly Views */}
                <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Image
                      src="/why-billedviews/influencers/Icon (2).svg"
                      alt="Views"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monthly Views</p>
                    <p className="font-bold text-base text-gray-900">
                      {influencer.monthlyViews}
                    </p>
                  </div>
                </div>

                {/* Avg. CPV Rate */}
                <div className="bg-white rounded-xl p-3 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Image
                      src="/why-billedviews/influencers/Icon (2).svg"
                      alt="CPV"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Avg. CPV Rate</p>
                    <p className="font-bold text-base text-gray-900">
                      {influencer.cpvRate}
                    </p>
                  </div>
                </div>

                {/* Net Monthly Earnings */}
                <div className="col-span-2 bg-white rounded-xl p-3 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Image
                      src="/why-billedviews/influencers/Icon (2).svg"
                      alt="Earnings"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">
                      Net Monthly Earnings
                    </p>
                    <p className="font-bold text-base text-gray-900">
                      {influencer.earnings}
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlight Section */}
              <div className="bg-white rounded-xl p-3 w-full flex items-center justify-center gap-3">
                <Image
                  src="/why-billedviews/influencers/glyph.svg"
                  alt="Achievement"
                  width={24}
                  height={24}
                />
                <p className="font-semibold text-sm text-[#4A72FF]">
                  {influencer.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfluencersShowcase;
