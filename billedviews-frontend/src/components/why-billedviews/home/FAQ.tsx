"use client";

import { useState } from "react";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'How is a "view" counted?',
      answer:
        'We sync directly with TikTok, Instagram, Facebook, and YouTube APIs. A "view" is only counted if the same user watches ≥5 seconds. Bot traffic, <5-sec plays, and geo-mismatches are filtered out—ensuring you pay exclusively for human engagement.',
    },
    {
      question: "What's the minimum campaign budget?",
      answer:
        "Our minimum campaign budget starts at $5,000. This ensures enough reach to generate meaningful results while allowing us to provide comprehensive analytics and campaign management. For larger campaigns, we offer volume discounts.",
    },
    {
      question: "How quickly do influencers get paid?",
      answer:
        "Influencers are paid within 14 days of campaign completion and verification. Our platform automatically tracks performance metrics, and once all requirements are met and verified, payment processing begins immediately.",
    },
    {
      question: "Can I change the CPV mid-campaign?",
      answer:
        "Yes, you can adjust the Cost Per View (CPV) mid-campaign based on performance. Our dashboard allows you to modify your CPV in real-time, with changes taking effect within 24 hours. This flexibility helps optimize your campaign ROI.",
    },
    {
      question: "What if an influencer's video doesn't meet my guidelines?",
      answer:
        "If an influencer's content doesn't meet your guidelines, we offer a revision process. You can request changes or reject the content entirely. In case of rejection, you won't be charged for that content, and we can help match you with another creator.",
    },
    {
      question: "How do agency commissions work?",
      answer:
        "Agency commissions are set at 15% of the campaign budget. This covers campaign management, creator selection, content approval, and performance tracking. For agencies managing multiple clients, we offer tiered commission structures with volume discounts.",
    },
    {
      question: "Do I own the content after approval?",
      answer:
        "Yes, once content is approved and paid for, you receive full usage rights for the content across all your marketing channels. This includes social media, website, email marketing, and paid advertising. The creator retains copyright but grants you comprehensive usage rights.",
    },
    {
      question: "Is there a contract or long-term commitment?",
      answer:
        "We offer flexible commitment options. You can choose campaign-by-campaign engagement with no long-term contract, or sign longer-term agreements with preferred rates. Our enterprise plans include 6-month and 12-month options with significant savings.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple! Create an account, define your campaign objectives, set your budget parameters, and our team will guide you through creator selection. Our platform provides full transparency throughout the process, and you can launch your first campaign in as little as 48 hours.",
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
              className="border border-gray-200 rounded-[24px] overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full p-6 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3
                  className="text-lg pr-4 max-w-[calc(100%-48px)]"
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
                  className="flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 min-w-[40px]"
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

              {openIndex === index && (
                <div id={`faq-content-${index}`} className="px-6 pb-6">
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
