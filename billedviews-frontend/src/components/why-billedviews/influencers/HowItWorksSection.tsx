"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardData = [
  {
    number: "01",
    title: "Sign Up & Verify",
    subtitle: "Create your creator profile in under two minutes:",
    points: [
      "Complete Application: Enter your name, email, phone number, and link your YouTube, Instagram, TikTok, and/or Facebook accounts.",
      "We Verify Your Reach: Our system automatically pulls in your follower count and average view metrics. We approve creators with 5,000+ real followers/subscribers on any platform or at least 50,000 total monthly views across all channels.",
      "Access Your Dashboard: Once approved, you immediately see available campaigns matched to your niche, plus your unique referral link to invite fellow creators.",
    ],
  },
  {
    number: "02",
    title: "Browse & Apply to Campaigns",
    subtitle: "",
    points: [
      'Explore Matched Campaigns: On "Available Campaigns," filter by category (e.g., beauty, fitness, tech), minimum view requirements, and payout rate (CPV).',
      "Review Brand Briefs: Each listing shows: brand name, product category, CPV rate (e.g., $10/1k views), target demographics, required deliverables (video length, format), and deadlines.",
      'Submit Your Pitch: Click "Apply." Write a 1-2 sentence pitch ("I\'ll create a 60-second unboxing video"), attach your previous work samples, and select up to three time slots for content review.',
    ],
  },
  {
    number: "03",
    title: "Produce & Submit Content",
    subtitle: "",
    points: [
      'Receive AI Script & Assets: Once approved, you\'ll see an AI-generated script and optional tag suggestions in your dashboard under "My Campaigns."',
      "Shoot & Edit Video: Follow the script—but feel free to add your personality. Ensure the product is prominently featured, include the brand's required hashtags, and meet their timeline (typically 5-7 days).",
      "Submit for Brand Approval: Upload your raw/exported video file and proposed captions. The brand has 48 hours to approve or request a minor tweak.",
    ],
  },
  {
    number: "04",
    title: "Publish & Get Paid",
    subtitle: "",
    points: [
      "Schedule Your Post: After approval, schedule the video on your connected channel(s). Tag the brand's official account and use designated hashtags.",
      'Automated View Tracking: BilledViews checks real-time views every 15 minutes. Once your clip hits 1,000 verified views, your dashboard shows an "Unlocked Earnings" badge.',
      "Instant Payout: Your 85% share of the CPV × 1,000 automatically transfers to your connected PayPal, Stripe, or bank account. You can withdraw any time—no minimum threshold.",
    ],
  },
];

const CardContent = ({ card }: { card: (typeof cardData)[0] }) => (
  <>
    <div className="flex justify-between items-start mb-4">
      <div
        className="font-satoshi text-5xl font-bold text-white text-center"
        style={{ lineHeight: "1.1" }}
      >
        {card.number}
      </div>
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          background: "hsla(235, 100%, 58%, 1)",
          width: "72px",
          height: "72px",
        }}
      >
        <Image
          src="/why-billedviews/influencers/Frame.svg"
          alt="Card Icon"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
    </div>
    <h3
      className="text-white mb-3"
      style={{
        fontFamily: "Satoshi, sans-serif",
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: "110%",
        letterSpacing: "0%",
      }}
    >
      {card.title}
    </h3>
    {card.subtitle && <p className="text-white/70 mb-6">{card.subtitle}</p>}
    <ul className="space-y-4">
      {card.points.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="text-white/70 mr-3 mt-1">•</span>
          <span className="text-white/70">{point}</span>
        </li>
      ))}
    </ul>
  </>
);

const HowItWorksSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const activeCard = cardData[activeIndex];

  return (
    <section className="py-20 px-4">
      <div
        className="max-w-7xl mx-auto rounded-3xl p-8 md:p-12"
        style={{
          background:
            "linear-gradient(124.91deg, #97A0FF 15.95%, #5EAFFF 85.44%)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="text-white">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full mb-6 shadow-[0_2px_4px_rgba(184,200,216,0.6)]">
              <Image
                src="/why-billedviews/influencers/noun-launch-796223 1 (1).svg"
                alt="Start icon"
                width={24}
                height={24}
              />
              <span className="font-medium text-base text-[#6C78FF]">
                Start
              </span>
            </div>
            <h2 className="text-5xl font-bold leading-tight mb-8">
              Four Steps to <br /> Start Earning Today
            </h2>
            <Link href="/waitlist">
              <button className="group mt-16 flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6366F1] text-base font-semibold shadow-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform transition-all duration-300 ease-out">
                Get Started Free
                <span className="flex items-center justify-center rounded-full bg-[#6366F1] w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </Link>
          </div>

          {/* Right Column */}
          <div className="relative overflow-hidden md:h-[550px]">
            {/* Spacer element for mobile, to define auto height */}
            <div className="rounded-3xl p-8 flex flex-col invisible md:hidden">
              <CardContent card={activeCard} />
            </div>
            <AnimatePresence>
              <motion.div
                key={activeIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute inset-0"
              >
                <div
                  className="backdrop-blur-lg rounded-3xl p-8 h-full flex flex-col text-gray-800 shadow-lg"
                  style={{
                    background: "hsla(235, 100%, 58%, 0.24)",
                    border: "1px solid hsla(0, 0%, 100%, 1)",
                  }}
                >
                  <CardContent card={activeCard} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
