import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: "/why-billedviews/home/CommunityCollaboration.svg",
    title: "Community Collaboration",
    description:
      "Crowdsource Verified Video Engagement from 2,500+ Influencers",
  },
  {
    icon: "/why-billedviews/home/Pay-Per-ViewControl.svg",
    title: "Pay-Per-View Control",
    description: "You Set the Cost Per 1,000 Views—Only Pay for Real Watches",
  },
  {
    icon: "/why-billedviews/home/AIScriptGeneration.svg",
    title: "AI Script Generation",
    description:
      "Auto-Generate Platform-Specific Scripts & Captions—Approve in Seconds",
  },
  {
    icon: "/why-billedviews/home/AgencyIntegration.svg",
    title: "Agency Integration",
    description: "Onboard via Agencies & Earn 5% Referral Commissions",
  },
];

export const KeyBenefits = () => (
  <section className="w-full bg-white py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Header with Icon - Exact design match */}
      <div className="flex items-center justify-center mb-6">
        <div
          className="flex items-center gap-3 bg-white rounded-[32px] shadow-[0_2px_4px_rgba(184,200,216,0.6)]"
          style={{
            width: "178px",
            height: "40px",
            paddingTop: "8px",
            paddingRight: "24px",
            paddingBottom: "8px",
            paddingLeft: "24px",
          }}
        >
          <div className="flex items-center justify-center w-6 h-6">
            <Image
              src="/why-billedviews/home/KeyBenefits.svg"
              alt="Key Benefits"
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
              textAlign: "center",
            }}
          >
            Key Benefits
          </span>
        </div>
      </div>

      {/* Main Title - Updated to match typography specs */}
      <h2
        className="text-center text-[#111111] mb-16"
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontWeight: 500,
          fontSize: "40px",
          lineHeight: "110%",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Key Benefits
      </h2>

      {/* Benefits Grid - Updated to center cards in single column */}
      <div className="flex flex-wrap justify-center gap-8 mb-16 lg:grid lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group bg-white rounded-[32px] shadow-[0_4px_8px_rgba(202,203,227,0.6)] hover:shadow-[0_8px_16px_rgba(108,120,255,0.25)] hover:scale-[1.02] hover:border-[#6C78FF]/20 border-2 border-transparent cursor-pointer transform transition-all duration-300 ease-out"
            style={{
              width: "290px",
              height: "267px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#6C78FF] group-hover:scale-110 transition-transform duration-300 ease-out">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={32}
                height={32}
                className="text-white"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              {/* Title - Updated to match card title typography */}
              <h3
                className="text-[#111111]"
                style={{
                  fontFamily: "Helvetica Neue, sans-serif",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#6B7280]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Link href="/waitlist">
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default KeyBenefits;
