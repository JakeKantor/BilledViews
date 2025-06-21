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
      question: "How do I qualify to join?",
      answer:
        "To join BilledViews, you need to have an active social media presence on TikTok, Instagram, Facebook, or YouTube with at least 1,000 followers. We also look for creators who consistently post quality content and have good engagement rates. Simply apply through our platform with your social media handles, and our team will review your profile within 48 hours.",
    },
    {
      question: "How much can I realistically earn?",
      answer:
        "Your earnings depend on your follower count, engagement rate, and the campaigns you participate in. Most creators earn between $100-$5,000 per campaign, with top performers earning significantly more. We use a transparent Cost Per View (CPV) model, so you know exactly how much you'll earn based on your video's performance. The more views you generate, the more you earn.",
    },
    {
      question: "When do I get paid?",
      answer:
        "You get paid within 14 days of campaign completion and verification. Our platform automatically tracks your video performance, and once all campaign requirements are met and verified by the brand, payment processing begins immediately. We offer multiple payment methods including PayPal, bank transfer, and digital wallets for your convenience.",
    },
    {
      question: "Can I use my own script instead of the AI's?",
      answer:
        "Absolutely! While we provide AI-generated scripts and content guidelines to help you get started, you have complete creative freedom to use your own script. Many of our top-performing creators prefer to use their authentic voice and style. Just ensure your content meets the brand's campaign objectives and guidelines for approval.",
    },
    {
      question: "What happens if a brand rejects my video?",
      answer:
        "If a brand rejects your video, don't worry – it happens! You'll receive detailed feedback on why it was rejected and have the opportunity to make revisions. If the content can't be revised to meet requirements, you can submit a new video. You're only paid for approved content, but rejected videos don't count against your creator rating.",
    },
    {
      question: "Are there any fees to join?",
      answer:
        "No, joining BilledViews is completely free! There are no membership fees, setup costs, or hidden charges. We only succeed when you succeed – we take a small percentage from your earnings only after you've been paid by brands. You keep the majority of your earnings with full transparency on all fees.",
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

export default FAQ;
