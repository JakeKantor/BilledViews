"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FeaturesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
            Core Features & Benefits
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Everything an Agency Needs—Under One Roof
          </p>
        </div>

        {/* Features Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center w-full mt-8 lg:mt-12"
        >
          <div
            className="relative w-full max-w-6xl"
            style={{ aspectRatio: "1400 / 980" }}
          >
            <Image
              src="/why-billedviews/agencies/Group 1261159366.svg"
              alt="Core Features & Benefits for Agencies"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
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
