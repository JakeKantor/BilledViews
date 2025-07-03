"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
      <div className="max-w-[1200px] w-full mx-4 lg-breakpoint:mx-0">
        <div className="flex flex-col lg-breakpoint:flex-row rounded-[40px] shadow-lg overflow-hidden bg-white lg-breakpoint:h-[520px]">
          {/* Text Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="order-1 lg-breakpoint:order-1 w-full lg-breakpoint:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white"
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
              Ready to Transform Your
              <br />
              Agency&apos;s Revenue?
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mt-4">
              Apply to Become an Agency Partner
            </p>

            {/* Sub Text */}
            <p className="text-base sm:text-lg text-gray-600 mt-6">
              Have more questions?
              <br />
              Email{" "}
              <a
                href="mailto:agencies@billedviews.com"
                className="text-[#6C78FF] font-medium"
              >
                agencies@billedviews.com
              </a>{" "}
              or schedule a demo with our Agency Success Team.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <Link href="/waitlist">
                <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
                  Become a Partner
                  <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                    <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="order-2 lg-breakpoint:order-2 w-full lg-breakpoint:w-1/2 overflow-hidden"
          >
            <div className="relative w-full h-56 sm:h-72 lg-breakpoint:h-full overflow-hidden">
              <div className="relative w-full h-full lg-breakpoint:w-full">
                <Image
                  src="/why-billedviews/agencies/Group 1261159423.svg"
                  alt="Agency Revenue Boost"
                  fill
                  className="object-cover lg-breakpoint:object-center scale-150 -translate-x-12 lg-breakpoint:scale-100 lg-breakpoint:translate-x-0"
                  sizes="(max-width: 927px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoostRevenue;
