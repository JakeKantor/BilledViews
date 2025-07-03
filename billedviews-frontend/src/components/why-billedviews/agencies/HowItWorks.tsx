"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardData = [
  {
    number: "01",
    title: "Apply & Get Verified",
    subtitle: "",
    points: [
      `Submit Agency Profile: Fill out your agency's name, website, address, and contact person details.`,
      `Documentation Review: Upload business license or incorporation documents and a portfolio of 2+ past influencer campaigns.`,
      `Onboarding Call: Our agency success team schedules a 30-minute video call to walk through the dashboard, pricing, and best practices. After approval, you receive "Agency Partner" status.`,
    ],
  },
  {
    number: "02",
    title: "Onboard Your Clients",
    subtitle: "",
    points: [
      `Invite Brands via Unique Link: In your agency dashboard, generate a custom onboarding link to send to existing or prospective brand clients.`,
      `Brand Signup & Deposit: When your client signs up through that link and deposits their first $1,000 (or more), you immediately earn $50 (5% commission).`,
      `Co-Manage Campaigns: Your client's login is branded under your agency; you can manage influencer approvals, budgets, and creative assets on their behalf or hand over controls as needed.`,
    ],
  },
  {
    number: "03",
    title: "Launch & Optimize Campaigns",
    subtitle: `Create Campaign Briefs: In the "My Clients" area, click "New Campaign," select the client, and define:`,
    points: [
      `Product/Service Overview`,
      `Target Demographics (age, location, interests)`,
      `Budget (CPV rate per 1,000 views, e.g., $8-$15 per 1k)`,
      `Content Guidelines (tone, hashtags, brand assets)`,
      `Approve Influencers & Scripts: Review influencer applications in real time, approve or decline. Once approved, review AI-generated scripts and request edits or sign-off.`,
    ],
  },
  {
    number: "04",
    title: "Monitor & Report",
    subtitle: `In each campaign's "Performance" tab, view:`,
    points: [
      `Total Views Generated`,
      `Spent Budget vs. Remaining Balance`,
      `Influencer Conversion Rates (views → engagement)`,
      `Agency Commission Earned (5% of spend)`,
      `Payouts & Invoicing: Influencers get paid automatically (85% of CPV × views). You receive your 5% commission as a separate line item in your "Earnings" tab. At month's end, download a consolidated PDF invoice for each client showing all line items.`,
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
          <div className="text-white pt-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full mb-6 shadow-[0_2px_4px_rgba(184,200,216,0.6)]">
              <Image
                src="/why-billedviews/brands/material-symbols_star-rounded.svg"
                alt="Start icon"
                width={24}
                height={24}
              />
              <span className="font-medium text-base text-[#6C78FF]">
                Start
              </span>
            </div>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              How It Works
            </h2>
            <p className="text-xl text-white/80">
              Four Steps to Become an Agency Powerhouse
            </p>
            <Link href="/waitlist">
              <button className="group mt-16 flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6366F1] text-base font-semibold shadow-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform transition-all duration-300 ease-out">
                Start free trial
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
