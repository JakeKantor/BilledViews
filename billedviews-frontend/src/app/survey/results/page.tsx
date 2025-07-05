"use client";

import { useState } from "react";
import { Header } from "@/components/why-billedviews/Header";
import { Footer } from "@/components/why-billedviews/Footer";
import { Button } from "@/components/ui/button";
import { X, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const ResultsPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Helper: format phone number as (123) 456-7890 while typing
  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(0, 10); // keep max 10 digits
    const len = digits.length;

    if (len === 0) return "";
    if (len < 4) return digits;
    if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Auto-format phone number input
    if (name === "phoneNumber") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phoneNumber: formatted }));
      return; // early return as phoneNumber is not part of errors
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email format regex (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate required fields and email format
    const newErrors = {
      name: formData.name.trim() === "" ? "Required field" : "",
      email:
        formData.email.trim() === ""
          ? "Required field"
          : !emailRegex.test(formData.email.trim())
          ? "Please enter a valid email address"
          : "",
    };

    setErrors(newErrors);

    // Only submit if no errors
    if (!newErrors.name && !newErrors.email) {
      // Modal will open upon successful submission
      setShowSuccessModal(true);
    } else {
      // You may use newErrors for analytics or toast notifications
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-[#111111] mb-12">
            Want to apply this budget with guaranteed views?
          </h1>

          {/* Performance Table Section */}
          <div className="mb-16">
            <div className="rounded-xl bg-white overflow-hidden border border-gray-200">
              <div className="px-6 pt-6 pb-4">
                <h2 className="text-xl font-semibold text-[#111111]">
                  Your Estimated Ad Performance vs Platforms
                </h2>
              </div>
              <table className="w-full">
                <thead>
                  <tr
                    style={{
                      backgroundColor: "hsla(220, 100%, 98%, 1)",
                      height: "44px",
                    }}
                  >
                    <th className="text-left px-6 font-normal text-gray-600 text-sm">
                      Platform
                    </th>
                    <th className="text-left font-normal text-gray-600 text-sm">
                      Est. Cost / View
                    </th>
                    <th className="text-left font-normal text-gray-600 text-sm">
                      Est. Cost / Conversion
                    </th>
                    <th className="text-left font-normal text-gray-600 text-sm">
                      Monthly Ad Cost
                    </th>
                    <th className="text-left px-6 font-normal text-gray-600 text-sm">
                      Conversions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-5 px-6 font-normal text-[#111111] bg-white">
                      Meta Ads
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $0.07
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $34.00
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $1,700
                    </td>
                    <td className="py-5 px-6 font-normal text-[#111111] bg-white">
                      50
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 font-normal text-[#111111] bg-white">
                      TikTok Ads
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $0.09
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $42.00
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $2,100
                    </td>
                    <td className="py-5 px-6 font-normal text-[#111111] bg-white">
                      50
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 font-normal text-[#111111] bg-white">
                      YouTube Ads
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $0.11
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $47.00
                    </td>
                    <td className="py-5 font-normal text-[#111111] bg-white">
                      $2,350
                    </td>
                    <td className="py-5 px-6 font-normal text-[#111111] bg-white">
                      50
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 font-normal text-[#6C78FF] bg-white">
                      BilledViews
                    </td>
                    <td className="py-5 font-normal text-[#6C78FF] bg-white">
                      $0.05
                    </td>
                    <td className="py-5 font-normal text-[#6C78FF] bg-white">
                      $18.00
                    </td>
                    <td className="py-5 font-normal text-[#6C78FF] bg-white">
                      $900
                    </td>
                    <td className="py-5 px-6 font-normal text-[#6C78FF] bg-white">
                      50
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="flex justify-between items-start gap-8">
            {/* Left Column - What This Means */}
            <div
              className="rounded-2xl p-5 w-full md:w-[680px] min-h-[175px]"
              style={{
                border: "1px solid hsla(210, 31%, 89%, 1)",
                boxShadow: "0px 2px 4px 0px hsla(238, 31%, 84%, 0.5)",
              }}
            >
              <h3 className="text-xl font-semibold text-[#111111] mb-4">
                What This Means For You
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#6C78FF] mt-1.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    You could save $1,200—$1,500 per month compared to
                    traditional ad platforms.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#6C78FF] mt-1.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    You&apos;ll only pay after real views are delivered, not
                    based on impressions or algorithm guesses.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#6C78FF] mt-1.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    This quiz helps you shift toward performance-driven creator
                    content.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column - Join Waitlist */}
            <div
              className="rounded-2xl p-5 w-full md:w-[400px] min-h-[175px]"
              style={{
                border: "1px solid hsla(210, 31%, 89%, 1)",
                boxShadow: "0px 2px 4px 0px hsla(238, 31%, 84%, 0.5)",
              }}
            >
              <h3 className="text-xl font-semibold text-[#111111] mb-4">
                Join the waitlist to get:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    $250 in FREE verified views
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    Priority creator matching
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    Early access to the BilledViews dashboard
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="mt-12 space-y-6" noValidate>
            {/* Personal Info Row */}
            <div
              className="p-6 rounded-lg"
              style={{
                boxShadow: "0px 2px 4px 0px hsla(238, 31%, 84%, 0.5)",
                border: "1px solid hsla(210, 31%, 89%, 1)",
              }}
            >
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6C78FF] focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6C78FF] focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6C78FF] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="text-xs font-normal text-[#FFFFFF] bg-[#6C78FF] hover:bg-[#5a66e0] border-[1.5px] border-[#6C78FF] transition-colors"
                  style={{
                    fontFamily: "Helvetica Neue, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    padding: "10px 16px",
                    borderRadius: "48px",
                    width: "128px",
                    height: "34px",
                    textAlign: "center" as const,
                  }}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative overflow-hidden animate-in fade-in duration-300 slide-in-from-bottom-4">
            {/* Background Animation Elements removed */}

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6C78FF] to-purple-600 rounded-full flex items-center justify-center animate-in zoom-in duration-500 delay-200">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 animate-in slide-in-from-bottom-2 duration-300 delay-300">
                Welcome to the Future!
              </h3>
              <p className="text-gray-600 leading-relaxed animate-in slide-in-from-bottom-2 duration-300 delay-400">
                You&apos;re officially on the{" "}
                <span className="font-semibold text-[#6C78FF]">
                  VIP waitlist
                </span>
                ! Get ready to be among the first to experience revolutionary
                creator marketing that actually works.
              </p>
              <div className="bg-gradient-to-r from-[#6C78FF]/10 to-purple-100 rounded-2xl p-4 mt-6 animate-in slide-in-from-bottom-2 duration-300 delay-500">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">What&apos;s next?</span>{" "}
                  We&apos;ll send you exclusive early access and your{" "}
                  <span className="font-semibold text-[#6C78FF]">
                    $250 in FREE views
                  </span>{" "}
                  as soon as we launch!
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 animate-in slide-in-from-bottom-2 duration-300 delay-600">
              <button
                onClick={handleCloseModal}
                className="w-full bg-gradient-to-r from-[#6C78FF] to-purple-600 text-white font-semibold py-4 px-6 rounded-full hover:from-[#5a66e0] hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
