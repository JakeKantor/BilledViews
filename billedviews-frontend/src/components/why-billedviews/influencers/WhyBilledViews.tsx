"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WhyBilledViews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleFirstVisible, setTitleFirstVisible] = useState(false);
  const [titleSecondVisible, setTitleSecondVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const textToType = "Let Brands Chase You";

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        setTitleFirstVisible(true);
        setTimeout(() => {
          setTitleSecondVisible(true);
          // Start typing animation after the second title becomes visible
          let currentIndex = 0;
          const typingInterval = setInterval(() => {
            if (currentIndex <= textToType.length) {
              setTypedText(textToType.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(typingInterval);
              setIsTypingComplete(true);
            }
          }, 100); // Type one character every 100ms
        }, 200);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1, // Lower threshold for better mobile compatibility
      rootMargin: "0px 0px -20% 0px", // Start animation when element is 20% into viewport
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible, textToType]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-12 max-w-3xl px-4">
          <div className="inline-flex items-center mb-4 justify-center">
            <div
              className="flex items-center gap-3 bg-white rounded-[32px] shadow-[0_2px_4px_rgba(184,200,216,0.6)]"
              style={{
                border: "1px solid #E5E7EB",
                height: "40px",
                paddingTop: "8px",
                paddingRight: "24px",
                paddingBottom: "8px",
                paddingLeft: "24px",
              }}
            >
              <div className="flex items-center justify-center w-6 h-6">
                <Image
                  src="/why-billedviews/influencers/Community icon.svg"
                  alt="Community Icon"
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
                Why BilledViews for Influencers
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span
              className={`inline-block transition-all duration-700 ease-out ${
                titleFirstVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Stop Chasing Brands—
            </span>
            <span
              className={`inline-block transition-all duration-700 ease-out ${
                titleSecondVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {typedText}
              <span
                className={`inline-block w-0.5 h-8 bg-gray-900 ml-1 ${
                  titleSecondVisible && !isTypingComplete
                    ? "animate-pulse"
                    : "opacity-0"
                }`}
              />
            </span>
          </h2>
          <p
            className={`text-lg text-gray-600 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Brands today demand real results, not just vanity metrics. At
            BilledViews, we pay you strictly for 1,000 verified views—no more
            guessing whether likes convert. You focus on producing great video
            content; we track views, verify them via API, and deposit your
            earnings automatically.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            {/* Earn Per View Card */}
            <div
              className={`relative rounded-[24px] overflow-hidden bg-[hsla(218,100%,98%,1)] p-[32px] flex flex-col justify-between w-[358px] lg:w-[590px] h-[315px] lg:h-[370px] border border-gray-200 transition-all duration-800 ease-out delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 -translate-x-12 translate-y-8"
              }`}
            >
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/why-billedviews/influencers/Icon.svg"
                    alt="Earn Per View Icon"
                    width={48}
                    height={48}
                  />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Earn Per View
                  </h3>
                </div>
                <p
                  className={`text-gray-600 mt-4 transition-all duration-1000 ease-out delay-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  We pay you 85% of the cost-per-view (CPV) rate set by brands.
                  If a brand pays $10/1k views, you get $8.50 every time you hit
                  1,000 views.
                </p>
              </div>
              <Image
                src="/why-billedviews/influencers/Group 1261159362.svg"
                alt="Earn Per View chart"
                width={480}
                height={137}
                className="self-center w-full max-w-md mt-4"
              />
            </div>

            {/* Instant Payouts Card */}
            <div
              className={`relative rounded-[24px] overflow-hidden p-[32px] flex flex-col justify-between w-[358px] lg:w-[590px] h-[315px] lg:h-[370px] border border-gray-200 transition-all duration-800 ease-out delay-600 ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 translate-x-12 translate-y-8"
              }`}
            >
              <Image
                src="/why-billedviews/influencers/584c1aa3fe4203894ae6b0bfb4500bb93b4b2d01.png"
                alt="Instant Payouts Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/why-billedviews/influencers/Icon (1).svg"
                      alt="Instant Payouts Icon"
                      width={48}
                      height={48}
                    />
                    <h3 className="text-2xl font-bold text-white">
                      Instant Payouts
                    </h3>
                  </div>
                </div>
                <p
                  className={`text-white font-bold transition-all duration-1000 ease-out delay-800 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  As soon as your video crosses a 1,000-view threshold, your
                  earnings are unlocked. No waiting until month&apos;s end—get
                  paid automatically.
                </p>
              </div>
            </div>

            {/* 100% Content Freedom Card */}
            <div
              className={`relative rounded-[24px] overflow-hidden p-[32px] flex flex-col justify-between w-[358px] lg:w-[590px] h-[315px] lg:h-[370px] border border-gray-200 order-4 lg:order-none transition-all duration-800 ease-out delay-700 ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 -translate-x-12 -translate-y-8"
              }`}
            >
              <Image
                src="/why-billedviews/influencers/a43d1b1ddf39150519def696068fb92a22619200.png"
                alt="Content Freedom Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/why-billedviews/influencers/Icon (1).svg"
                      alt="Content Freedom Icon"
                      width={48}
                      height={48}
                    />
                    <h3 className="text-2xl font-bold text-white">
                      100% Content Freedom
                    </h3>
                  </div>
                </div>
                <p
                  className={`text-white font-bold transition-all duration-1000 ease-out delay-900 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Use our AI-generated scripts or adapt them to your style.
                  Every script is optimized for platform algorithms.
                </p>
              </div>
            </div>

            {/* Diverse Campaigns Card */}
            <div
              className={`relative rounded-[24px] overflow-hidden bg-[hsla(218,100%,98%,1)] p-[32px] flex flex-col justify-between w-[358px] lg:w-[590px] h-[315px] lg:h-[370px] border border-gray-200 order-3 lg:order-none transition-all duration-800 ease-out delay-800 ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 translate-x-12 -translate-y-8"
              }`}
            >
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/why-billedviews/influencers/Icon.svg"
                    alt="Diverse Campaigns Icon"
                    width={48}
                    height={48}
                  />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Diverse Campaigns
                  </h3>
                </div>
                <p
                  className={`text-gray-600 mt-4 transition-all duration-1000 ease-out delay-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  From beauty to B2B SaaS, choose campaigns that fit your niche
                  and audience. Get paid for promoting products you love.
                </p>
              </div>
              <Image
                src="/why-billedviews/influencers/Group 1261159362.svg"
                alt="Diverse Campaigns chart"
                width={480}
                height={137}
                className="self-center w-full max-w-md mt-4"
              />
            </div>
          </div>

          {/* Central Overlay Circle */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full items-center justify-center border border-gray-200">
            <Image
              src="/why-billedviews/influencers/Frame 2087325302.svg"
              alt="Central Icon"
              width={80}
              height={80}
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-md hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out mx-auto">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <svg
                className="w-4 h-4 text-[#6C78FF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBilledViews;
