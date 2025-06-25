"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const agencyData = [
  {
    logo: "/why-billedviews/agencies/image 26.svg",
    name: "elevate",
    monthlySpend: "$150,000",
    totalViews: "20,000,000 views",
    commission: "$7,500",
    highlight:
      "Duplicated a viral skincare campaign—clients saw 35% lift in sales",
  },
  {
    logo: "/why-billedviews/agencies/image 27.svg",
    name: "GrowthHive",
    monthlySpend: "$200,000",
    totalViews: "25,000,000 views",
    commission: "$10,000",
    highlight: "Secured a top 5 influencer in AI for a SaaS launch—ROI 8x",
  },
  {
    logo: "/why-billedviews/agencies/image 28.svg",
    name: "Agency Name",
    monthlySpend: "$100,000",
    totalViews: "12,500,000 views",
    commission: "$5,000",
    highlight:
      "First-month client churn rate dropped by 50% after influencer push",
  },
];

export const ResultsPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  } as const;

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Header with Icon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full mb-6">
            <Image
              src="/why-billedviews/agencies/Vector.svg"
              alt="Results Preview"
              width={20}
              height={20}
              className="text-[#6C78FF]"
            />
            <span className="font-medium text-[#6C78FF]">Results Preview</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Agency Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            How Top Agencies Scale with BilledViews
          </p>
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden lg:block">
          {/* Column Headers - Outside the table */}
          <div className="grid grid-cols-5 gap-4 mb-4 px-4">
            <div className="text-sm font-semibold text-gray-700">
              Agency Name
            </div>
            <div className="text-sm font-semibold text-gray-700">
              Monthly Client Spend
            </div>
            <div className="text-sm font-semibold text-gray-700">
              Total Views Generated
            </div>
            <div className="text-sm font-semibold text-gray-700">
              Agency Commission (5%)
            </div>
            <div className="text-sm font-semibold text-gray-700">
              ROI Highlights
            </div>
          </div>

          {/* Table with borders */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="border border-gray-200 rounded-3xl overflow-hidden"
          >
            {agencyData.map((agency, index) => (
              <motion.div
                variants={rowVariants}
                key={index}
                className={`grid grid-cols-5 gap-4 ${
                  index !== agencyData.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Agency Name with Logo */}
                <div className="p-6 border-r border-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={agency.logo}
                      alt={agency.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Monthly Client Spend */}
                <div className="p-6 border-r border-gray-200 flex items-center justify-center">
                  <div className="text-lg font-bold text-[#6C78FF]">
                    {agency.monthlySpend}
                  </div>
                </div>

                {/* Total Views Generated */}
                <div className="p-6 border-r border-gray-200 flex items-center justify-center">
                  <div className="text-lg font-bold text-gray-900">
                    {agency.totalViews}
                  </div>
                </div>

                {/* Agency Commission */}
                <div className="p-6 border-r border-gray-200 flex items-center justify-center">
                  <div className="text-lg font-bold text-[#6C78FF]">
                    {agency.commission}
                  </div>
                </div>

                {/* ROI Highlights */}
                <div className="p-6 flex items-center">
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {agency.highlight}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Card Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="lg:hidden space-y-6"
        >
          {agencyData.map((agency, index) => (
            <motion.div
              variants={rowVariants}
              key={index}
              className="border border-gray-200 rounded-3xl p-6 bg-white"
            >
              {/* Agency Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={agency.logo}
                    alt={agency.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {/* Monthly Client Spend */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Monthly Client Spend
                  </span>
                  <span className="text-lg font-bold text-[#6C78FF]">
                    {agency.monthlySpend}
                  </span>
                </div>

                {/* Total Views Generated */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Total Views Generated
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {agency.totalViews}
                  </span>
                </div>

                {/* Agency Commission */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Agency Commission (5%)
                  </span>
                  <span className="text-lg font-bold text-[#6C78FF]">
                    {agency.commission}
                  </span>
                </div>

                {/* ROI Highlights */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600 mb-2">
                    ROI Highlights:
                  </div>
                  <div className="text-base font-semibold text-gray-900 leading-relaxed">
                    {agency.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Case Study Button */}
        <div className="flex justify-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out"
          >
            View Full Case Study
            <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ResultsPreview;
