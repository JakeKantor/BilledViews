"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function WhyUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = (direction: "left" | "right" | "up"): Variants => ({
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });

  const cardStyle = {
    background:
      "linear-gradient(114.92deg, rgba(108, 120, 255, 0.21) 18.66%, rgba(110, 171, 255, 0.2) 70.72%)",
    border: "1px solid hsla(223, 100%, 99%, 1)",
    borderRadius: "32px",
  };

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* "Why us?" button */}
        <motion.div
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)] py-2 px-6">
            <Image
              src="/why-billedviews/home/WhyUs.svg"
              alt="Why us icon"
              width={24}
              height={24}
            />
            <span
              className="text-[#6C78FF]"
              style={{
                fontFamily: "Helvetica Neue, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              Why us?
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-center text-[#111111] mb-6"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "110%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
          variants={itemVariants}
        >
          Why Join as an Agency
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-[#6B7280] text-center max-w-3xl mx-auto mb-12"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
          variants={itemVariants}
        >
          More Revenue, Less Headache—Agency Mode Activated
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1: Simple Campaign Management */}
            <motion.div
              className="relative flex flex-col justify-between overflow-hidden w-full max-w-sm lg:max-w-none lg:w-[590px] h-[380px] aspect-[1.55/1] lg:aspect-auto"
              style={cardStyle}
              variants={cardVariants("left")}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="p-8 relative z-10">
                <h3
                  className="text-[#111111] mb-4"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "110%",
                    letterSpacing: "0%",
                  }}
                >
                  Simple Campaign Management
                </h3>
                <p
                  className="text-[#6B7280]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  BilledViews simplifies influencer marketing into a
                  performance-driven profit center. Earn a 5% commission on
                  every dollar your clients spend—no extra work required.
                </p>
              </div>
              <div className="absolute w-[390px] h-[280px] right-[0px] bottom-[-100px] lg:w-[520px] lg:h-[340px] lg:right-[-8px] lg:bottom-[-98px]">
                <Image
                  src="/why-billedviews/agencies/Chart 2.svg"
                  alt="Simple Campaign Management"
                  width={520}
                  height={340}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Card 2: White-Label Dashboard */}
            <motion.div
              className="relative flex flex-col justify-between overflow-hidden w-full max-w-sm lg:max-w-none lg:w-[590px] h-[380px] aspect-[1.55/1] lg:aspect-auto"
              style={cardStyle}
              variants={cardVariants("right")}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="p-8 relative z-10">
                <h3
                  className="text-[#111111] mb-4"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "110%",
                    letterSpacing: "0%",
                  }}
                >
                  White-Label Dashboard
                </h3>
                <p
                  className="text-[#6B7280]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  Access a co-branded portal to manage your clients&apos; funds,
                  review influencer performance, and track payouts—all under
                  your agency&apos;s name.
                </p>
              </div>
              <div className="absolute w-[320px] h-[210px] right-[0px] bottom-[-20px] lg:w-[520px] lg:h-[340px] lg:right-[-128px] lg:bottom-[-98px]">
                <Image
                  src="/why-billedviews/agencies/Chart 8.svg"
                  alt="White-Label Dashboard"
                  width={520}
                  height={340}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 3: Agency Commission */}
            <motion.div
              className="relative flex flex-col justify-between overflow-hidden w-full max-w-sm lg:max-w-none lg:w-[383px] h-[380px] aspect-[1.01/1] lg:aspect-auto"
              style={cardStyle}
              variants={cardVariants("left")}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="p-8 relative z-10">
                <h3
                  className="text-[#111111] mb-4"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "110%",
                    letterSpacing: "0%",
                  }}
                >
                  Agency Commission
                </h3>
                <p
                  className="text-[#6B7280]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  For every $1,000 a brand spends, you earn $50 automatically.
                  Scale by onboarding multiple clients.
                </p>
              </div>
              <div className="absolute left-0 right-0 h-[150px] bottom-[70px] lg:h-[200px] lg:bottom-[30px]">
                <Image
                  src="/why-billedviews/agencies/Group 1261159367.svg"
                  alt="Agency Commission"
                  width={383}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Card 4: Turnkey Campaign Workflows */}
            <motion.div
              className="relative flex flex-col justify-between overflow-hidden w-full max-w-sm lg:max-w-none lg:w-[383px] h-[380px] aspect-[1.01/1] lg:aspect-auto"
              style={cardStyle}
              variants={cardVariants("up")}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="p-8 relative z-10">
                <h3
                  className="text-[#111111] mb-4"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "110%",
                    letterSpacing: "0%",
                  }}
                >
                  Turnkey Campaign Workflows
                </h3>
                <p
                  className="text-[#6B7280]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  Create campaigns on behalf of clients in minutes. Approve
                  influencers, review scripts, and track real-time view metrics
                  without toggling between platforms.
                </p>
              </div>
              <div className="absolute left-0 right-0 h-[150px] bottom-[35px] lg:h-[200px] lg:bottom-[-15px]">
                <Image
                  src="/why-billedviews/agencies/Chart 3.svg"
                  alt="Turnkey Campaign Workflows"
                  width={383}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Card 5: Full Transparency */}
            <motion.div
              className="relative flex flex-col justify-between overflow-hidden w-full max-w-sm lg:max-w-none lg:w-[383px] h-[380px] aspect-[1.01/1] lg:aspect-auto"
              style={cardStyle}
              variants={cardVariants("right")}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="p-8 relative z-10">
                <h3
                  className="text-[#111111] mb-4"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "110%",
                    letterSpacing: "0%",
                  }}
                >
                  Full Transparency
                </h3>
                <p
                  className="text-[#6B7280]"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  Your clients see exactly where their budget goes: influencer
                  rates, platform fees, and residual commissions you
                  earn—building trust and reinforcing your value.
                </p>
              </div>
              <div className="absolute left-0 right-0 h-[150px] bottom-[20px] lg:h-[200px] lg:bottom-[-15px]">
                <Image
                  src="/why-billedviews/agencies/Group 1261159368.svg"
                  alt="Full Transparency"
                  width={383}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Get Started Button */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <Link href="/waitlist">
            <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
              Get Started Free
              <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
                <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
