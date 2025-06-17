import Image from "next/image";
import Link from "next/link";

const FeaturedBrands = () => {
  const cases = [
    {
      logo: "/why-billedviews/home/Logo.svg",
      title: "300% View Lift in 6 Weeks!",
      description:
        "EcoWear's sustainable apparel line needed eyeballs—fast. With a $20k CPV campaign at $0.04/lk views, they garnered 500k authentic views and saw a 15% month-over-month sales increase.",
    },
    {
      logo: "/why-billedviews/home/Logo (2).svg",
      title: "$3:1 ROI on TikTok & YouTube!",
      description:
        "PetPals allocated a $15k budget at $0.06/CPV to micro-influencers. Over 250k views later, they tracked a direct 12% spike in website traffic and generated $45k in attributed revenue.",
    },
    {
      logo: "/why-billedviews/home/Logo (1).svg",
      title: "Agency Earned $8k in Month 1!",
      description:
        "As a BilledViews agency partner, GoTravel onboarded five clients, each depositing $10k. They earned 5% on $50k spend—$2,500—within the first 30 days, plus scaled two campaigns for repeat revenue.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md mb-4">
            <Image
              src="/why-billedviews/home/noun-case-6444642 1.svg"
              alt="Top cases icon"
              width={20}
              height={20}
              className="text-indigo-600"
            />
            <span className="text-[#6f6fff] font-semibold">Top Cases</span>
          </div>
          <h2
            className="text-center text-[#111111] mb-4"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "110%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Featured Brand Success Stories
          </h2>
          <p
            className="text-[#6B7280]"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "0%",
            }}
          >
            See Why 100+ Brands Have Boosted ROI with BilledViews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:shadow-[#6C78FF]/10 hover:scale-105 transform transition-all duration-300 ease-out"
            >
              <div className="h-20 mb-8 flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={160}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: "110%",
                  letterSpacing: "0%",
                  color: "#111111",
                }}
              >
                {item.title}
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#6B7280",
                }}
              >
                {item.description}
              </p>
              <div className="absolute bottom-2 left-8 text-indigo-500 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
