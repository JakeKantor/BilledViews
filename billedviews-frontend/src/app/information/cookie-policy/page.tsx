import React from "react";

const cookieSections = [
  {
    title: "What Are Cookies?",
    content:
      "Cookies are small files stored on your device that help us provide and improve our services.",
  },
  {
    title: "We Use Cookies To:",
    points: [
      "Remember your login session",
      "Track analytics and behavior",
      "Improve user experience",
      "Personalize campaigns and recommendations",
    ],
  },
  {
    title: "Types of Cookies",
    points: [
      "Essential: Required for login/session",
      "Analytics: Used to monitor usage (e.g., Google Analytics)",
      "Functional: To remember preferences",
    ],
  },
  {
    title: "Managing Cookies",
    content: (
      <>
        You can disable cookies in your browser settings. Doing so may impact
        your ability to use some features.
        <br />
        <br />
        By using BilledViews, you consent to our cookie practices. For
        questions, email:{" "}
        <a
          href="mailto:privacy@billedviews.com"
          className="text-indigo-600 hover:underline"
        >
          privacy@billedviews.com
        </a>
      </>
    ),
  },
];

const CookiePolicyPage = () => {
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
            Cookie Policy
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
          {cookieSections.map((section, index) => (
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

export default CookiePolicyPage;
