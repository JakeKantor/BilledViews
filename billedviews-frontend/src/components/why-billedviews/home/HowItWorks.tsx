"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: "/why-billedviews/home/bxs_user%20(1).svg",
    title: "Create Your Brand Account & Deposit Funds",
    img: "/why-billedviews/home/Item.svg",
  },
  {
    number: "02",
    icon: "/why-billedviews/home/octicon_goal-16%20(1).png",
    title: "Define Your Campaign Goals",
    img: "/why-billedviews/home/Frame%202087325299.svg",
  },
  {
    number: "03",
    icon: "/why-billedviews/home/noun-idea-7406664%201.svg",
    title: "Select Creators & Approve Videos",
    img: "/why-billedviews/home/Group%201261159361.svg",
  },
  {
    number: "04",
    icon: "/why-billedviews/home/noun-stats-7536973%201.svg",
    title: "Monitor Performance & Auto-Payouts",
    imgStack: [
      "/why-billedviews/home/Frame%202087325303.svg",
      "/why-billedviews/home/Frame%202087325299%20(1).svg",
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Purple gradient container */}
        <div
          className="rounded-[32px] p-8 lg:p-16 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(124.91deg, #7A86FF 15.95%, #3C9DFF 85.44%)",
          }}
        >
          {/* Header with Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-8"
          >
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
              <div
                className="flex items-center justify-center"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              >
                <Image
                  src="/why-billedviews/home/noun-launch-796223 1.svg"
                  alt="Launch icon"
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
                }}
              >
                How It Works
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
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
            Launch Your First Campaign in 4 Simple Steps
          </motion.h2>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="rounded-[24px] p-6 relative text-white flex flex-col"
                style={{
                  background: "hsla(0, 0%, 100%, 0.6)",
                  boxShadow: "0px 4px 8px 0px hsla(237, 29%, 29%, 0.24)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Icon in top left */}
                <div
                  className="absolute left-6 top-6 flex items-center justify-center rounded-2xl"
                  style={{
                    background: "hsla(235, 100%, 71%, 1)",
                    width: "56px",
                    height: "56px",
                  }}
                >
                  <Image
                    src={step.icon}
                    alt={`${step.title} icon`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>

                {/* Step number (top right) */}
                <div className="flex justify-end mb-8">
                  <span
                    style={{
                      fontFamily: "Helvetica Neue, sans-serif",
                      fontWeight: 500,
                      fontSize: "32px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "hsla(232, 59%, 24%, 1)",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mb-6 text-[22px]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "hsla(232, 59%, 24%, 1)",
                  }}
                >
                  {step.title}
                </h3>

                {/* Mockup image(s) */}
                {step.img &&
                  (index === 2 ? (
                    <div className="relative mt-auto min-h-[120px] w-full">
                      <Image
                        src={step.img}
                        alt={`${step.title} mockup`}
                        width={200}
                        height={120}
                        className="object-contain -rotate-3 drop-shadow-lg absolute bottom-0 -right-6 md:bottom-6 md:-right-6"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex justify-center ${
                        index === 0 || index === 1 ? "mb-0" : "mt-auto mb-2"
                      }`}
                    >
                      <Image
                        src={step.img}
                        alt={`${step.title} mockup`}
                        width={200}
                        height={120}
                        className={`object-contain drop-shadow-lg ${
                          index === 1 ? "rotate-2" : "-rotate-3"
                        }`}
                      />
                    </div>
                  ))}

                {step.imgStack && (
                  <div className="relative w-full flex justify-center items-center h-[140px] mt-auto">
                    <Image
                      src={step.imgStack[0]}
                      alt={`${step.title} mockup 1`}
                      width={240}
                      height={140}
                      className="object-contain rotate-2 drop-shadow-md absolute top-16 left-1/2 -translate-x-1/2"
                    />
                    <Image
                      src={step.imgStack[1]}
                      alt={`${step.title} mockup 2`}
                      width={220}
                      height={120}
                      className="object-contain -rotate-2 drop-shadow-md absolute top-0 left-1/2 -translate-x-1/2"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex justify-center"
          >
            <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#6366F1] text-base font-semibold shadow-lg hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transform transition-all duration-300 ease-out">
              Get Started Free
              <span className="flex items-center justify-center rounded-full bg-[#6366F1] w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
