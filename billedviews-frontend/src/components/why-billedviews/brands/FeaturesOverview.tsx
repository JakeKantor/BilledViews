"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    imageUrl: "/why-billedviews/brands/Card-1.svg",
    offset: 0,
  },
  {
    imageUrl: "/why-billedviews/brands/Card-2.svg",
    offset: 40, // 40px down on desktop for stagger
  },
  {
    imageUrl: "/why-billedviews/brands/Card-3.svg",
    offset: -20, // slight up
  },
  {
    imageUrl: "/why-billedviews/brands/Card-4.svg",
    offset: 60,
  },
  {
    imageUrl: "/why-billedviews/brands/Card-5.svg",
    offset: -10,
  },
  {
    imageUrl: "/why-billedviews/brands/Card-6.svg",
    offset: 30,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: (offset: number) => ({
    opacity: 0,
    y: (offset ?? 0) + 20,
  }),
  show: (offset: number) => ({
    opacity: 1,
    y: offset,
  }),
};

export const FeaturesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center bg-white rounded-full shadow-[0_2px_4px_rgba(184,200,216,0.6)] py-2 px-6 gap-3 mb-6">
            <Image
              src="/why-billedviews/brands/noun-launch-796223 1.svg"
              alt="Feature icon"
              width={24}
              height={24}
            />
            <span className="text-[#6C78FF] font-medium text-base">
              Feature Overview
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">
            Features & Benefits
          </h2>
          <p className="text-lg text-slate-500">
            All the Tools You Need to Crush Influencer Marketing
          </p>
        </div>

        {/* Responsive Staggered Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-12 md:gap-y-24 mb-24 justify-items-center"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={feature.offset}
              variants={cardVariants}
              className="relative rounded-[32px] overflow-hidden"
              style={{
                width: "190px",
                height: "300px",
              }}
            >
              <Image
                src={feature.imageUrl}
                alt={`Feature ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
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

export default FeaturesOverview;
