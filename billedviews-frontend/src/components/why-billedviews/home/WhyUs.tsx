"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Pay Only for Real Views (CPV Model)",
    description:
      "You decide how much you'll pay per 1,000 authentic views. Every time an influencer's video racks up 1,000 qualified views (≥5 sec watch), your balance draws down. No more CPM guesswork—just transparent ROI.",
    mockup: "/why-billedviews/home/PayOnlyforRealViews.svg",
    cardType: "tall",
  },
  {
    title: "One-Click Script & Caption Creation",
    description:
      "Enter product/service details, select target demo, and our AI spits out a platform-optimised video script plus caption for TikTok, IG, FB, and YouTube. You approve; the influencer delivers—fast.",
    mockup: "/why-billedviews/home/One-ClickScript&CaptionCreation.svg",
    cardType: "short",
  },
  {
    title: "Real-Time Dashboard & Attribution",
    description:
      "Watch your campaign performance in real time: authentic view counts, platform breakdowns, audience demographics, engagement rates, and CPV vs. budget usage. Data syncs directly from each social API—no delays.",
    mockup: "/why-billedviews/home/Real-Time Dashboard & Attributio.svg",
    cardType: "short",
  },
  {
    title: "2,500+ Vetted Creators at Your Fingertips",
    description:
      "Browse creators by niche, follower count, engagement rate, or past campaign success. See sample posts, audience insights, and apply directly. When you find &quot;the one,&quot; hit Approve—done.",
    mockup: "/why-billedviews/home/2500-vetted-creators-fingertips.svg",
    cardType: "tall",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export const WhyUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header with Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-6"
        >
          <div
            className="flex items-center gap-3 bg-white rounded-[32px] shadow-[0_2px_4px_rgba(184,200,216,0.6)]"
            style={{
              width: "148px",
              height: "40px",
              paddingTop: "8px",
              paddingRight: "24px",
              paddingBottom: "8px",
              paddingLeft: "24px",
            }}
          >
            <div className="flex items-center justify-center w-6 h-6">
              <Image
                src="/why-billedviews/home/WhyUs.svg"
                alt="Why us"
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
              Why us?
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-[#111111] mb-6"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "110%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Why BilledViews?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto mb-16"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#494B51",
          }}
        >
          In today&apos;s saturated digital landscape, brands throw dollars at
          ads without knowing who actually sees them. BilledViews flips the
          script: you guarantee that every dollar goes toward real,
          authenticated video views from genuine audiences. Our influencer
          network—hand-vetted and niche-specialized—creates content that your
          customers actually watch. No more wasted impressions, wasted clicks,
          or wasted money.
        </motion.p>

        {/* Features Grid - Perfectly aligned 2x2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-16 justify-items-center items-start"
        >
          {/* Left column */}
          <div className="flex flex-col gap-4 lg:gap-8 w-full max-w-[593px]">
            <motion.div
              variants={cardVariants}
              className="rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col overflow-hidden w-full h-[380px] sm:h-[580px] lg:h-[620px]"
              style={{
                background:
                  "linear-gradient(114.92deg, rgba(108, 120, 255, 0.21) 18.66%, rgba(110, 171, 255, 0.2) 70.72%)",
              }}
            >
              {/* Mockup Image moved down for tall card */}
              <div className="mt-8 sm:mt-12 lg:mt-16 mb-4 sm:mb-6 lg:mb-8 flex justify-center items-center">
                <Image
                  src={features[0].mockup}
                  alt={features[0].title}
                  width={416}
                  height={256}
                  className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[416px] max-h-[180px] sm:max-h-[220px] lg:max-h-[256px] h-auto object-contain"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 416px"
                />
              </div>
              {/* Content at bottom */}
              <div className="relative z-10 mt-auto">
                <h3
                  className="text-[#111111] mb-2 sm:mb-3 lg:mb-4 text-[18px] sm:text-[20px] lg:text-[22px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {features[0].title}
                </h3>
                <p
                  className="text-[#6B7280] text-[14px] sm:text-[15px] lg:text-[16px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  {features[0].description}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col overflow-hidden w-full h-[380px] sm:h-[420px] lg:h-[450px]"
              style={{
                background:
                  "linear-gradient(114.92deg, rgba(108, 120, 255, 0.21) 18.66%, rgba(110, 171, 255, 0.2) 70.72%)",
              }}
            >
              {/* Mockup Image at top */}
              <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center items-center">
                <Image
                  src={features[2].mockup}
                  alt={features[2].title}
                  width={416}
                  height={256}
                  className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[416px] max-h-[180px] sm:max-h-[220px] lg:max-h-[256px] h-auto object-contain"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 416px"
                />
              </div>
              {/* Content at bottom */}
              <div className="relative z-10 mt-auto">
                <h3
                  className="text-[#111111] mb-2 sm:mb-3 lg:mb-4 text-[18px] sm:text-[20px] lg:text-[22px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {features[2].title}
                </h3>
                <p
                  className="text-[#6B7280] text-[14px] sm:text-[15px] lg:text-[16px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  {features[2].description}
                </p>
              </div>
            </motion.div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-4 lg:gap-8 w-full max-w-[593px]">
            <motion.div
              variants={cardVariants}
              className="rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col overflow-hidden w-full h-[380px] sm:h-[420px] lg:h-[450px]"
              style={{
                background:
                  "linear-gradient(114.92deg, rgba(108, 120, 255, 0.21) 18.66%, rgba(110, 171, 255, 0.2) 70.72%)",
              }}
            >
              {/* Mockup Image at top */}
              <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center items-center">
                <Image
                  src={features[1].mockup}
                  alt={features[1].title}
                  width={416}
                  height={256}
                  className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[416px] max-h-[180px] sm:max-h-[220px] lg:max-h-[256px] h-auto object-contain"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 416px"
                />
              </div>
              {/* Content at bottom */}
              <div className="relative z-10 mt-auto">
                <h3
                  className="text-[#111111] mb-2 sm:mb-3 lg:mb-4 text-[18px] sm:text-[20px] lg:text-[22px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {features[1].title}
                </h3>
                <p
                  className="text-[#6B7280] text-[14px] sm:text-[15px] lg:text-[16px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  {features[1].description}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col overflow-hidden w-full h-[380px] sm:h-[580px] lg:h-[620px]"
              style={{
                background:
                  "linear-gradient(114.92deg, rgba(108, 120, 255, 0.21) 18.66%, rgba(110, 171, 255, 0.2) 70.72%)",
              }}
            >
              {/* Mockup Image moved down for tall card */}
              <div className="mt-8 sm:mt-12 lg:mt-16 mb-4 sm:mb-6 lg:mb-8 flex justify-center items-center">
                <Image
                  src={features[3].mockup}
                  alt={features[3].title}
                  width={416}
                  height={256}
                  className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[416px] max-h-[180px] sm:max-h-[220px] lg:max-h-[256px] h-auto object-contain"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 416px"
                />
              </div>
              {/* Content at bottom */}
              <div className="relative z-10 mt-auto">
                <h3
                  className="text-[#111111] mb-2 sm:mb-3 lg:mb-4 text-[18px] sm:text-[20px] lg:text-[22px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {features[3].title}
                </h3>
                <p
                  className="text-[#6B7280] text-[14px] sm:text-[15px] lg:text-[16px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  {features[3].description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <Link href="/waitlist">
            <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
              Get Started Free
              <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
