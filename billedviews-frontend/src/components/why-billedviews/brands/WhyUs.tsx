"use client";

import Image from "next/image";
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
              src="/why-billedviews/brands/material-symbols_star-rounded.svg"
              alt="Star icon"
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
          Stop Wasting Ad Spend on Guesswork
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-[#6B7280] text-center max-w-3xl mx-auto mb-12"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
          variants={itemVariants}
        >
          Every dollar you pour into influencer marketing should map directly to
          actual views—and actual sales. BilledViews eliminates the guesswork by
          paying influencers strictly for 1,000 verified views. No hidden costs.
          No ambiguous &ldquo;engagement&rdquo; fees. Transparent pay-per-view
          models guarantee you only spend on real eyeballs.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {/* Card 1: Agency Integration */}
          <motion.div
            className="rounded-3xl p-8 flex flex-col justify-between overflow-hidden w-full max-w-sm"
            style={{ backgroundColor: "hsla(229, 90%, 88%, 1)" }}
            variants={cardVariants("left")}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div>
              <h3
                className="text-[#111111] mb-4"
                style={{
                  fontFamily: "Helvetica Neue, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "110%",
                  letterSpacing: "0%",
                }}
              >
                Agency Integration
              </h3>
              <p
                className="text-[#6B7280]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                If you work with an agency, they earn 5% of your deposit; they
                manage campaigns, you collect results.
              </p>
            </div>
            <div className="mt-8">
              <Image
                src="/why-billedviews/brands/Group 1261159374.svg"
                alt="Agency Integration"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Card 2: Scale at Your Pace */}
          <motion.div
            className="rounded-3xl p-8 flex flex-col justify-between overflow-hidden w-full max-w-sm"
            style={{ backgroundColor: "hsla(257, 100%, 95%, 1)" }}
            variants={cardVariants("up")}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div>
              <h3
                className="text-[#111111] mb-4"
                style={{
                  fontFamily: "Helvetica Neue, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "110%",
                  letterSpacing: "0%",
                }}
              >
                Scale at Your Pace
              </h3>
              <p
                className="text-[#6B7280]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                Add funds, create campaigns, and watch your credit balance tick
                down as real views roll in.
              </p>
            </div>
            <div className="mt-8">
              <Image
                src="/why-billedviews/brands/Chart 8.svg"
                alt="Scale at Your Pace"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Card 3: Zero Vanity Metrics */}
          <motion.div
            className="rounded-3xl p-8 flex flex-col justify-between overflow-hidden w-full max-w-sm md:col-span-2 lg:col-span-1"
            style={{ backgroundColor: "hsla(232, 74%, 92%, 1)" }}
            variants={cardVariants("right")}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div>
              <h3
                className="text-[#111111] mb-4"
                style={{
                  fontFamily: "Helvetica Neue, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "110%",
                  letterSpacing: "0%",
                }}
              >
                Zero Vanity Metrics
              </h3>
              <p
                className="text-[#6B7280]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                We track only what matters: Verified Views. Leave behind hollow
                likes and follows.
              </p>
            </div>
            <div className="mt-8">
              <Image
                src="/why-billedviews/brands/Group 1261159405.svg"
                alt="Zero Vanity Metrics"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Get Started Button */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
