import React from "react";

const sections = [
  {
    title: "1. Introduction",
    content:
      "These Terms govern your access to BilledViews, a platform that connects brands with creators to launch influencer campaigns. By using our platform, you agree to comply with these terms.",
  },
  {
    title: "2. Account Eligibility",
    content:
      "You must be at least 18 years old and provide accurate and complete information.",
  },
  {
    title: "3. Use of Platform",
    content: "You agree not to:",
    points: [
      "Misuse the platform",
      "Upload harmful or illegal content",
      "Spam or impersonate other users",
    ],
  },
  {
    title: "4. Campaign Responsibilities",
    points: [
      "Brands must pay creators on time",
      "Creators must deliver content by the agreed deadlines",
      "All parties agree to communicate professionally",
    ],
  },
  {
    title: "5. Fees",
    content:
      "We charge a standard 10% platform fee on all brand credit purchases. This fee is non-refundable.",
  },
  {
    title: "6. Intellectual Property",
    points: [
      "Brands own their logos, briefs, and assets.",
      "Creators own their content unless transferred via licensing.",
      "Usage rights are defined per campaign.",
    ],
  },
  {
    title: "7. Termination",
    content: "We may suspend or terminate accounts that violate these terms.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "We are not liable for indirect losses or damages due to platform downtime, creator disputes, or payment issues.",
  },
  {
    title: "9. Updates to Terms",
    content:
      "We may revise these terms. Continued use after updates constitutes agreement.",
  },
];

const TermsOfServicePage = () => {
  return (
    <div className="bg-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-200 p-8 sm:p-12">
        <div className="mb-8">
          <h1
            className="text-[32px] sm:text-4xl font-bold text-gray-900 leading-tight"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "110%",
              letterSpacing: "0%",
            }}
          >
            Terms of Service
          </h1>
          <p
            className="mt-3 text-sm text-gray-500"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "150%",
              letterSpacing: "0%",
            }}
          >
            Effective Date: June 25, 2025
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2
                className="text-xl sm:text-2xl font-bold text-gray-800 mb-3"
                style={{
                  fontFamily: "Helvetica Neue, sans-serif",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {section.title}
              </h2>
              {section.content && (
                <p
                  className="text-base text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                >
                  {section.content}
                </p>
              )}
              {section.points && (
                <ul className="list-disc list-inside space-y-2 mt-4 pl-2">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-base text-gray-700 leading-relaxed"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
