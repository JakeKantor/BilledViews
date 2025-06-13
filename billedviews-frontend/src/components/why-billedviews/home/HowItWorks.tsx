import { ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: "/why-billedviews/home/bxs_user%20(1).svg",
    title: "Create Your Brand Account & Deposit Funds",
    img: "/why-billedviews/home/Item.svg",
  },
  {
    number: "02",
    icon: "/why-billedviews/home/octicon_goal-16%20(1).png",
    title: "Define Your Campaign Goals",
    img: "/why-billedviews/home/Frame%202087325299.svg",
  },
  {
    number: "03",
    icon: "/why-billedviews/home/noun-idea-7406664%201.svg",
    title: "Select Creators & Approve Videos",
    img: "/why-billedviews/home/Group%201261159361.svg",
  },
  {
    number: "04",
    icon: "/why-billedviews/home/noun-stats-7536973%201.svg",
    title: "Monitor Performance & Auto-Payouts",
    imgStack: [
      "/why-billedviews/home/Frame%202087325303.svg",
      "/why-billedviews/home/Frame%202087325299%20(1).svg",
    ],
  },
];

export const HowItWorks = () => (
  <section className="w-full py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Purple gradient container */}
      <div
        className="rounded-[32px] p-8 lg:p-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(124.91deg, #7A86FF 15.95%, #3C9DFF 85.44%)",
        }}
      >
        {/* Header with Icon */}
        <div className="flex items-center justify-center mb-8">
          <div
            className="flex items-center bg-white rounded-[32px] shadow-[0_2px_4px_rgba(184,200,216,0.6)]"
            style={{
              width: "auto",
              height: "40px",
              paddingTop: "8px",
              paddingRight: "24px",
              paddingBottom: "8px",
              paddingLeft: "24px",
              gap: "12px",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: "24px",
                height: "24px",
              }}
            >
              <Image
                src="/why-billedviews/home/noun-launch-796223 1.svg"
                alt="Launch icon"
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
              How It Works
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-center text-white mb-16 font-bold text-[32px] lg:text-[40px] leading-tight">
          Launch Your First Campaign in 4 Simple Steps
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-[24px] p-6 relative text-white flex flex-col"
              style={{
                background: "hsla(0, 0%, 100%, 0.6)",
                boxShadow: "0px 4px 8px 0px hsla(237, 29%, 29%, 0.24)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Icon in top left */}
              <div
                className="absolute left-6 top-6 flex items-center justify-center rounded-2xl"
                style={{
                  background: "hsla(235, 100%, 71%, 1)",
                  width: "56px",
                  height: "56px",
                }}
              >
                <Image
                  src={step.icon}
                  alt={`${step.title} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Step number (top right) */}
              <div className="flex justify-end mb-8">
                <span
                  style={{
                    fontFamily: "Helvetica Neue, sans-serif",
                    fontWeight: 500,
                    fontSize: "32px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "hsla(232, 59%, 24%, 1)",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mb-6 text-[22px]"
                style={{
                  fontFamily: "Helvetica Neue, sans-serif",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "hsla(232, 59%, 24%, 1)",
                }}
              >
                {step.title}
              </h3>

              {/* Mockup image(s) */}
              {step.img &&
                (index === 2 ? (
                  <Image
                    src={step.img}
                    alt={`${step.title} mockup`}
                    width={200}
                    height={120}
                    className="object-contain -rotate-3 drop-shadow-lg absolute right-0.5 bottom-6"
                  />
                ) : (
                  <div
                    className={`flex justify-center ${
                      index === 0 || index === 1 ? "mb-0" : "mt-auto mb-2"
                    }`}
                  >
                    <Image
                      src={step.img}
                      alt={`${step.title} mockup`}
                      width={200}
                      height={120}
                      className={`object-contain drop-shadow-lg ${
                        index === 1 ? "rotate-2" : "-rotate-3"
                      }`}
                    />
                  </div>
                ))}

              {step.imgStack && (
                <div className="relative w-full flex justify-center items-center h-[140px] mt-auto">
                  <Image
                    src={step.imgStack[0]}
                    alt={`${step.title} mockup 1`}
                    width={240}
                    height={140}
                    className="object-contain rotate-2 drop-shadow-md absolute top-16 left-1/2 -translate-x-1/2"
                  />
                  <Image
                    src={step.imgStack[1]}
                    alt={`${step.title} mockup 2`}
                    width={220}
                    height={120}
                    className="object-contain -rotate-2 drop-shadow-md absolute top-0 left-1/2 -translate-x-1/2"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6366F1] text-base font-semibold shadow-lg hover:bg-gray-50 transition-colors">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-[#6366F1] w-8 h-8 ml-2">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
