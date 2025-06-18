"use client";

import { useState } from "react";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

const BrandsFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "What exactly do I pay for?",
      answer:
        'You pay on a Cost Per View (CPV) basis, ensuring your budget is spent only on verified views. A "view" is counted when a unique user watches your content for at least 5 seconds. This model guarantees that you are paying for genuine engagement, not just impressions or fleeting glances.',
    },
    {
      question: "How do I know the views are real?",
      answer:
        "We integrate directly with major social media platform APIs (TikTok, Instagram, Facebook, YouTube) to validate every view. Our system filters out fraudulent activity, bot traffic, and views shorter than 5 seconds. You get transparent, real-time analytics to verify the authenticity of your campaign's reach.",
    },
    {
      question: "What if my influencer inflates views with bots?",
      answer:
        "Our platform is designed to detect and flag artificial view inflation. We continuously monitor for suspicious activity, and any views identified as fraudulent are automatically discarded and not billed to your account. We guarantee that you only pay for authentic human viewership.",
    },
    {
      question: "Can I pause a campaign if I run out of funds?",
      answer:
        "Yes, you have full control over your campaign. You can pause or stop your campaign at any time directly from your dashboard. This flexibility allows you to manage your budget effectively and ensures you never spend more than you intend.",
    },
    {
      question: "How do agencies fit in?",
      answer:
        "We offer a dedicated partnership program for agencies, complete with a centralized dashboard to manage multiple client campaigns. Agencies receive a commission on the campaigns they manage and get access to enhanced reporting and dedicated support to ensure their clients' success.",
    },
    {
      question: "Do I need to sign any long-term contract?",
      answer:
        "No, we do not require long-term contracts. Our platform operates on a flexible, campaign-by-campaign basis. You can run a single campaign or multiple campaigns as needed, without any long-term commitment. We also offer benefits for long-term partners.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with Icon */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3 bg-white rounded-[32px] shadow-[0_2px_4px_rgba(184,200,216,0.6)] px-6 py-2">
            <div className="flex items-center justify-center w-6 h-6">
              <Image
                src="/why-billedviews/home/noun-about-4190781 1.svg"
                alt="FAQ"
                width={24}
                height={24}
              />
            </div>
            <span
              className="text-[#6C78FF] whitespace-nowrap"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              FAQ
            </span>
          </div>
        </div>

        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "110%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#111111",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-[24px] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-gray-300"
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full p-6 text-left transition-all duration-300 ease-in-out"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3
                  className="text-lg pr-4 max-w-[calc(100%-48px)] transition-all duration-300 ease-in-out"
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "120%",
                    color: "#111111",
                  }}
                >
                  {item.question}
                </h3>

                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 min-w-[40px] transition-all duration-300 ease-in-out transform hover:scale-110"
                  style={{
                    backgroundColor: "#6C78FF",
                  }}
                >
                  {openIndex === index ? (
                    <svg
                      width="14"
                      height="2"
                      viewBox="0 0 14 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-300 ease-in-out"
                    >
                      <path
                        d="M1 1H13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-300 ease-in-out"
                    >
                      <path
                        d="M7 1V13M1 7H13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  id={`faq-content-${index}`}
                  className={`px-6 pb-6 transform transition-all duration-500 ease-in-out ${
                    openIndex === index ? "translate-y-0" : "-translate-y-4"
                  }`}
                >
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsFAQ;
