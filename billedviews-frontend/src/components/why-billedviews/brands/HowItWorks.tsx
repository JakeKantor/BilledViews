"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Data structure defining the three main steps of the BilledViews process
// Each step contains: number, icon, title, description array, and illustration image
const steps = [
  {
    number: "01",
    icon: "/why-billedviews/brands/Icon.svg",
    title: "Create & Deposit",
    description: [
      "Sign Up Instantly: Fill in email, password, phone number.",
      "Deposit Funds: Choose your budget. Pay a 10% deposit fee.",
      "Get Free Credits: Every new brand gets 3 free credits.",
    ],
    img: "/why-billedviews/brands/Group 1261159373.svg",
  },
  {
    number: "02",
    icon: "/why-billedviews/brands/Item.svg",
    title: "Launch Your Campaign",
    description: [
      "Enter Product Details: Name, category, short product description, target demographics.",
      "Auto-Generated Scripts + Captions: Our AI crafts influencer-ready scripts and captions. Just review and approve.",
      "Define CPV (Cost Per View): Set how much you'll pay per 1,000 views (e.g., $10 per 1k). Your budget burn rate is auto-calculated.",
    ],
    img: "/why-billedviews/brands/Chart 3.svg",
  },
  {
    number: "03",
    icon: "/why-billedviews/brands/Icon (1).svg",
    title: "Approve Influencers & Track Views",
    description: [
      "Influencer Applications: Vetted influencers (YouTube, TikTok, Instagram, Facebook) apply to your campaign. Review profile, past performance, and niche alignment.",
      "Performance Dashboard: Real-time view counts refresh every 15 minutes. When an influencer hits 1,000 verified views, they automatically earn their payout (85% of CPV × 1k). You see your balance drop instantly.",
    ],
    img: "/why-billedviews/brands/Chart 4 (1).svg",
  },
];

// Framer Motion animation variants for the container
// Controls the staggered animation of child elements
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
      delayChildren: 0.4, // Initial delay before animations start
    },
  },
};

// Framer Motion animation variants for individual step cards
// Creates a slide-in effect from left with spring animation
const cardVariants = {
  hidden: {
    opacity: 0,
    x: -50, // Start 50px to the left
  },
  show: {
    opacity: 1,
    x: 0, // Animate to original position
    transition: {
      type: "spring" as const,
      stiffness: 100, // Spring stiffness
      damping: 15, // Spring damping for natural feel
    },
  },
};

/**
 * HowItWorks Component
 *
 * Displays a three-step process explaining how BilledViews works for brands.
 * Features:
 * - Animated step cards with staggered entrance
 * - Gradient background with glassmorphism cards
 * - Interactive CTA button with hover effects
 * - Responsive design for mobile, tablet, and desktop
 * - Accessibility features with proper semantic structure
 */
export const HowItWorks = () => {
  // Ref for intersection observer to trigger animations when section comes into view
  const sectionRef = useRef(null);
  // Hook to detect when the section is visible in the viewport
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    // Main section container with responsive padding
    <section ref={sectionRef} className="w-full py-16 lg:py-24">
      {/* Container with responsive horizontal padding */}
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main content area with gradient background and rounded corners */}
        <div
          className="rounded-[32px] p-8 lg:p-16 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(124.91deg, #7A86FF 15.95%, #3C9DFF 85.44%)",
          }}
        >
          {/* Animated header badge with settings icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-8"
          >
            {/* White badge container with shadow and rounded corners */}
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
              {/* Icon container */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              >
                <Image
                  src="/why-billedviews/brands/material-symbols_settings-rounded.svg"
                  alt="Launch icon"
                  width={24}
                  height={24}
                />
              </div>
              {/* Badge text with custom styling */}
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
          </motion.div>

          {/* Main heading with animation */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-white mb-16"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "110%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Three Steps to Instant Pay-Per-View Campaigns
          </motion.h2>

          {/* Grid container for step cards with staggered animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {/* Map through steps array to render individual step cards */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="rounded-[24px] p-6 relative text-slate-800 flex flex-col"
                style={{
                  background: "hsla(0, 0%, 100%, 0.6)", // Semi-transparent white
                  backdropFilter: "blur(8px)", // Glassmorphism effect
                }}
              >
                {/* Card header with icon and step number */}
                <div className="flex justify-between items-start mb-4">
                  {/* Step icon container */}
                  <div
                    className="flex items-center justify-center rounded-2xl"
                    style={{
                      width: "56px",
                      height: "56px",
                    }}
                  >
                    <Image
                      src={step.icon}
                      alt={`${step.title} icon`}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  {/* Step number with custom styling */}
                  <span
                    className="text-3xl font-medium"
                    style={{
                      fontFamily: "Helvetica Neue, sans-serif",
                      color: "#1E293B",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Step illustration image */}
                <div className="mt-auto flex justify-center mb-6">
                  <Image
                    src={step.img}
                    alt={`${step.title} mockup`}
                    width={250}
                    height={150}
                    className="object-contain drop-shadow-lg"
                  />
                </div>

                {/* Step content area */}
                <div className="flex flex-col flex-grow">
                  {/* Step title */}
                  <h3
                    className="mb-3 text-[22px]"
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 700,
                      color: "#1E293B",
                    }}
                  >
                    {step.title}
                  </h3>
                  {/* Step description list */}
                  <ul className="space-y-2 mb-6">
                    {step.description.map((item, i) => {
                      // Parse description items to highlight bold text before colons
                      const colonIndex = item.indexOf(":");
                      const hasColon = colonIndex !== -1;
                      return (
                        <li
                          key={i}
                          className="flex items-start"
                          style={{
                            fontFamily: "Helvetica Neue, sans-serif",
                            fontSize: "14px",
                            color: "#1E293B",
                          }}
                        >
                          {/* Bullet point */}
                          <span className="font-bold mr-1.5">&#8226;</span>
                          {/* Description text with conditional bold formatting */}
                          <span className="flex-1">
                            {hasColon ? (
                              <>
                                <span className="font-bold">
                                  {item.substring(0, colonIndex)}:
                                </span>
                                {item.substring(colonIndex + 1)}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-action button with hover animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex justify-center"
          >
            {/* Interactive CTA button with group hover effects */}
            <Link href="/waitlist">
              <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6366F1] text-base font-semibold shadow-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform transition-all duration-300 ease-out">
                Get Started Free
                {/* Arrow icon with rotation and scale animations on hover */}
                <span className="flex items-center justify-center rounded-full bg-[#6366F1] w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
