"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const BoostRevenueImage = () => (
  <div className="relative w-full h-56 sm:h-72 md:h-full">
    <Image
      src="/why-billedviews/influencers/image 25.svg"
      alt="Taking a picture of food"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
);

export const BoostRevenue = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
      },
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
        delay: 0.1,
      },
    },
  } as const;

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-16 lg:py-24 overflow-x-hidden"
    >
      <div className="max-w-[1200px] w-full mx-4 md:mx-0">
        <div className="flex flex-col md:flex-row rounded-[40px] shadow-lg overflow-hidden bg-white md:h-[480px]">
          {/* Text Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="order-1 md:order-1 w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full mb-6 self-start">
              <Image
                src="/why-billedviews/influencers/noun-boost-5921765 1.svg"
                alt="Boost Revenue"
                width={20}
                height={20}
              />
              <span className="font-medium text-[#6C78FF]">Boost Revenue</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Ready to Turn Views
              <br />
              into Cash?
            </h2>

            {/* Sub Text */}
            <p className="text-base sm:text-lg text-gray-600 mt-6">
              Have more questions?
              <br />
              Email{" "}
              <a
                href="mailto:support@billedviews.com"
                className="text-[#6C78FF] font-medium"
              >
                support@billedviews.com
              </a>{" "}
              or chat live.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
                Apply to Join Now
                <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                  <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="order-2 md:order-2 w-full md:w-1/2 overflow-hidden"
          >
            <BoostRevenueImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoostRevenue;
