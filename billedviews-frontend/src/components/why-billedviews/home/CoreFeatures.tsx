"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Updated data structure with responsive design fixes
const coreFeaturesData = [
  {
    title: "Auto-Generate Audience-Ready Video Scripts & Captions",
    titleStyle: {
      className:
        "text-black font-satoshi text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 pr-4 sm:pr-6 md:pr-8",
      style: {
        fontWeight: 700,
        paddingTop: "0rem",
        maxWidth: "380px",
        fontFamily: "Satoshi, sans-serif",
      },
    },
    images: [
      {
        src: "/why-billedviews/home/Auto-Generate%20Audience-Ready%20Video%20Scripts%20&%20Captions.svg",
        width: 575,
        height: 280,
        position: {
          className:
            "object-contain -mt-6 sm:-mt-8 md:-mt-10 ml-2 sm:ml-3 md:ml-4 w-full h-auto",
          style: {
            maxWidth: "100%",
            height: "auto",
          },
        },
      },
    ],
    layout: "single",
    containerStyle: {
      className:
        "rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col w-full overflow-hidden h-[320px] sm:h-[380px] md:h-[460px] lg:h-[380px] lg:max-w-[750px]",
      style: {
        background: "hsla(235, 100%, 80%, 1)",
      },
    },
    imagesContainerStyle: {
      className: "flex justify-center items-center w-full h-full flex-1",
      style: {},
    },
  },
  {
    title: "Browse & Filter 2,500+ Verified Creators",
    titleStyle: {
      className:
        "text-black font-satoshi text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 pr-4 sm:pr-6 md:pr-8",
      style: {
        fontWeight: 700,
        paddingTop: "0rem",
        maxWidth: "320px",
        fontFamily: "Satoshi, sans-serif",
      },
    },
    images: [
      {
        src: "/why-billedviews/home/browse-filter-2500-verified-creators.svg",
        width: 400,
        height: 250,
        position: {
          className:
            "object-contain -mt-3 sm:-mt-4 md:-mt-5 ml-1 sm:ml-1.5 md:ml-2 w-full h-auto",
          style: {
            maxWidth: "100%",
            height: "auto",
          },
        },
      },
    ],
    layout: "single",
    containerStyle: {
      className:
        "rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col w-full overflow-hidden h-[320px] sm:h-[380px] md:h-[460px] lg:h-[380px] lg:max-w-[470px]",
      style: {
        background: "hsla(232, 74%, 92%, 1)",
      },
    },
    imagesContainerStyle: {
      className: "flex items-center justify-center w-full h-full flex-1",
      style: {},
    },
  },
  {
    title: "Track Every Authentic View & Spend Instantly",
    titleStyle: {
      className:
        "text-black font-satoshi text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 pr-4 sm:pr-6 md:pr-8 lg:max-w-[210px]",
      style: {
        fontWeight: 700,
        paddingTop: "0.5rem",
        fontFamily: "Satoshi, sans-serif",
      },
    },
    images: [
      {
        src: "/why-billedviews/home/Track%20Every%20Authentic%20View%20&%20Spend%20Instantly-1.svg",
        width: 250,
        height: 350,
        position: {
          className:
            "object-contain w-1/2 lg:w-full mt-4 lg:-mt-48 lg:ml-48 h-auto",
          style: {
            maxWidth: "100%",
            height: "auto",
          },
        },
      },
    ],
    layout: "single",
    containerStyle: {
      className:
        "rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col w-full overflow-hidden h-[320px] sm:h-[380px] md:h-[460px] lg:h-[380px] lg:max-w-[470px]",
      style: {
        background: "hsla(257, 100%, 95%, 1)",
      },
    },
    imagesContainerStyle: {
      className: "flex justify-center items-center w-full h-full flex-1",
      style: {},
    },
  },
  {
    title: "Hands-Free Payments & Referral Rewards",
    titleStyle: {
      className:
        "text-black font-satoshi text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 pr-4 sm:pr-6 md:pr-8",
      style: {
        fontWeight: 700,
        paddingTop: "0rem",
        maxWidth: "300px",
        fontFamily: "Satoshi, sans-serif",
      },
    },
    images: [
      {
        src: "/why-billedviews/home/Hands-Free%20Payments%20&%20Referral%20Rewards.svg",
        width: 575,
        height: 280,
        position: {
          className:
            "object-contain -mt-8 sm:-mt-16 md:-mt-20 lg:-mt-28 ml-2 sm:ml-4 md:ml-6 w-full h-auto",
          style: {
            maxWidth: "100%",
            height: "auto",
          },
        },
      },
    ],
    layout: "single",
    containerStyle: {
      className:
        "rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col w-full overflow-hidden h-[320px] sm:h-[380px] md:h-[460px] lg:h-[380px] lg:max-w-[750px]",
      style: {
        background: "hsla(229, 90%, 88%, 1)",
      },
    },
    imagesContainerStyle: {
      className: "flex justify-center items-center w-full h-full flex-1",
      style: {},
    },
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const CoreFeatures = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 lg:py-24 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Focus Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-4 lg:mb-6"
        >
          <div className="flex items-center gap-2 bg-white rounded-full shadow-[0_2px_4px_rgba(184,200,216,0.6)] px-4 sm:px-6 py-2 sm:py-2.5">
            <Image
              src="/why-billedviews/home/featurefocus.svg"
              alt="Feature focus"
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
            <span
              className="text-[#5B61FF] text-sm sm:text-base lg:text-lg font-medium"
              style={{
                fontFamily: "Helvetica Neue, sans-serif",
                lineHeight: "150%",
              }}
            >
              Feature Focus
            </span>
          </div>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-[#111111] mb-8 sm:mb-12 md:mb-16"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            fontSize: "40px",
            lineHeight: "110%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Core Features Deep Dive
        </motion.h2>

        {/* Flex Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col items-center w-full"
        >
          {/* Row 1 */}
          <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-x-2 mb-4 sm:mb-6 md:mb-8">
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              className={coreFeaturesData[0].containerStyle.className}
              style={{
                ...coreFeaturesData[0].containerStyle.style,
                width: "100%",
              }}
            >
              <div className="flex-shrink-0">
                <h3
                  className={coreFeaturesData[0].titleStyle.className}
                  style={{
                    ...coreFeaturesData[0].titleStyle.style,
                  }}
                >
                  {coreFeaturesData[0].title}
                </h3>
              </div>
              <div
                className={`${coreFeaturesData[0].imagesContainerStyle?.className} mt-2 sm:mt-3 md:mt-4`}
              >
                <Image
                  src={coreFeaturesData[0].images[0].src}
                  alt={coreFeaturesData[0].title}
                  width={coreFeaturesData[0].images[0].width}
                  height={coreFeaturesData[0].images[0].height}
                  className={coreFeaturesData[0].images[0].position.className}
                  style={coreFeaturesData[0].images[0].position.style}
                  priority
                />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              className={coreFeaturesData[1].containerStyle.className}
              style={{
                ...coreFeaturesData[1].containerStyle.style,
                width: "100%",
              }}
            >
              <div className="flex-shrink-0">
                <h3
                  className={coreFeaturesData[1].titleStyle.className}
                  style={{
                    ...coreFeaturesData[1].titleStyle.style,
                  }}
                >
                  {coreFeaturesData[1].title}
                </h3>
              </div>
              <div
                className={`${coreFeaturesData[1].imagesContainerStyle?.className} mt-2 sm:mt-3 md:mt-4`}
              >
                <Image
                  src={coreFeaturesData[1].images[0].src}
                  alt={coreFeaturesData[1].title}
                  width={coreFeaturesData[1].images[0].width}
                  height={coreFeaturesData[1].images[0].height}
                  className={coreFeaturesData[1].images[0].position.className}
                  style={coreFeaturesData[1].images[0].position.style}
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-x-2">
            {/* Card 3 */}
            <motion.div
              variants={cardVariants}
              className={coreFeaturesData[2].containerStyle.className}
              style={{
                ...coreFeaturesData[2].containerStyle.style,
                width: "100%",
              }}
            >
              <div className="flex-shrink-0">
                <h3
                  className={coreFeaturesData[2].titleStyle.className}
                  style={{
                    ...coreFeaturesData[2].titleStyle.style,
                  }}
                >
                  {coreFeaturesData[2].title}
                </h3>
              </div>
              <div
                className={`${coreFeaturesData[2].imagesContainerStyle?.className} mt-2 sm:mt-3 md:mt-4`}
              >
                <Image
                  src={coreFeaturesData[2].images[0].src}
                  alt={coreFeaturesData[2].title}
                  width={coreFeaturesData[2].images[0].width}
                  height={coreFeaturesData[2].images[0].height}
                  className={coreFeaturesData[2].images[0].position.className}
                  style={coreFeaturesData[2].images[0].position.style}
                />
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={cardVariants}
              className={coreFeaturesData[3].containerStyle.className}
              style={{
                ...coreFeaturesData[3].containerStyle.style,
                width: "100%",
              }}
            >
              <div className="flex-shrink-0">
                <h3
                  className={coreFeaturesData[3].titleStyle.className}
                  style={{
                    ...coreFeaturesData[3].titleStyle.style,
                  }}
                >
                  {coreFeaturesData[3].title}
                </h3>
              </div>
              <div
                className={`${coreFeaturesData[3].imagesContainerStyle?.className} mt-2 sm:mt-3 md:mt-4`}
              >
                <Image
                  src={coreFeaturesData[3].images[0].src}
                  alt={coreFeaturesData[3].title}
                  width={coreFeaturesData[3].images[0].width}
                  height={coreFeaturesData[3].images[0].height}
                  className={coreFeaturesData[3].images[0].position.className}
                  style={coreFeaturesData[3].images[0].position.style}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-lg hover:bg-[#5a66e0] hover:shadow-2xl hover:shadow-[#6C78FF]/25 hover:scale-105 transform transition-all duration-300 ease-out">
            Get Started Free
            <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-2 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ease-out">
              <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;
