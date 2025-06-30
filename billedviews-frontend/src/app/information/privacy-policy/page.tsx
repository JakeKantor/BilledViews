import React from "react";

const privacySections = [
  {
    title: "1. Information We Collect",
    points: [
      "Name, email, profile info",
      "Payment & transaction data",
      "Campaign submissions",
      "Device/browser data via cookies",
    ],
  },
  {
    title: "2. How We Use Your Info",
    points: [
      "To operate and improve our platform",
      "To process transactions",
      "To communicate with you",
      "To provide support and notify about updates",
    ],
  },
  {
    title: "3. Sharing Data",
    points: [
      "We use Stripe for payment processing",
      "Google Analytics for usage tracking",
      "We do not sell your data to third parties",
    ],
  },
  {
    title: "4. Cookies",
    content:
      "See our Cookie Policy for details on how we track sessions and behavior.",
  },
  {
    title: "5. Your Rights",
    content: (
      <>
        You can request to access, update, or delete your personal information
        anytime by emailing{" "}
        <a
          href="mailto:privacy@billedviews.com"
          className="text-indigo-600 hover:underline"
        >
          privacy@billedviews.com
        </a>
        .
      </>
    ),
  },
  {
    title: "6. Data Retention",
    content:
      "We keep data only as long as necessary to provide services, unless legally required otherwise.",
  },
];

const PrivacyPolicyPage = () => {
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
            Privacy Policy
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
          {privacySections.map((section, index) => (
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

export default PrivacyPolicyPage;
