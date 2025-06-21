"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    image: "/why-billedviews/influencers/image.svg",
    title: "Performance-Based Earnings",
  },
  {
    image: "/why-billedviews/influencers/Frame 2087325299.svg",
    title: "AI-Generated Scripts & Caption Suggestions",
  },
  {
    image: "/why-billedviews/influencers/Frame 2087325300.svg",
    title: "Real-Time View Tracking & Fraud Protection",
  },
  {
    image: "/why-billedviews/influencers/image-1.svg",
    title: "Campaign Matching & Smart Filters",
  },
  {
    image: "/why-billedviews/influencers/Frame 2087325299-1.svg",
    title: "Earnings Dashboard & Analytics",
  },
  {
    image: "/why-billedviews/influencers/Frame 2087325300-1.svg",
    title: "Referral & Incentive Program",
  },
];

const CoreFeaturesAndBenefits = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
      },
    },
  } as const;

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full mb-6">
            <Star className="text-[#6C78FF]" size={20} fill="#6C78FF" />
            <span className="font-medium text-[#6C78FF]">
              Core Features & Benefits
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Everything You Need to Maximize Your Influence
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 justify-items-center"
        >
          {features.map((feature, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="relative rounded-3xl overflow-hidden group shadow-lg transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2"
              style={{ width: "383px", height: "383px" }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-md hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out mx-auto">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesAndBenefits;
