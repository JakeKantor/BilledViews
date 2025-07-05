"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
// Removed Input component import; using raw inputs for consistent styling
import { ArrowRight, X, CheckCircle, Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

interface WaitlistData {
  name: string;
  email: string;
  phoneNumber: string;
}

export default function WaitlistPage() {
  const [formData, setFormData] = useState<WaitlistData>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<WaitlistData>>({});
  const router = useRouter();

  // Helper to auto-format US phone numbers (e.g., (123) 456-7890)
  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(0, 10);
    const len = digits.length;

    if (len === 0) return "";
    if (len < 4) return digits;
    if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleInputChange = (field: keyof WaitlistData, value: string) => {
    // Auto-format phone number as user types
    if (field === "phoneNumber") {
      value = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<WaitlistData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone number is optional; validate format only if provided
    if (formData.phoneNumber && !/^[\d\s().-]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerConfetti = () => {
    // Multiple confetti bursts for better effect
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        triggerConfetti();
        setShowSuccess(true);
      } else {
        // Handle specific error cases from the backend
        if (data.error) {
          // Check if the error message contains information about which field has the error
          if (data.error.toLowerCase().indexOf("email") !== -1) {
            setErrors((prev) => ({ ...prev, email: data.error }));
          } else if (data.error.toLowerCase().indexOf("phone") !== -1) {
            setErrors((prev) => ({ ...prev, phoneNumber: data.error }));
          } else {
            // Generic error for both fields
            setErrors({
              email: data.error,
              phoneNumber: data.error,
            });
          }
        } else {
          setErrors({
            email: "Failed to join waitlist. Please try again.",
            phoneNumber: "Failed to join waitlist. Please try again.",
          });
        }
      }
    } catch (error) {
      console.error("Error submitting waitlist:", error);
      setErrors({
        email: "Network error. Please try again later.",
        phoneNumber: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f8ff] via-[#e9edfa] to-[#dde4f7] flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#6C78FF] to-[#5a66e0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#111111] mb-2">
              Join the Waitlist
            </h1>
            <p className="text-[#6B7280] text-lg">
              Be the first to experience the future of influencer marketing
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Input */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#111111]"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6C78FF] focus:border-transparent ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#111111] flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6C78FF] focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-[#111111] flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phoneNumber"
                placeholder="(123) 456-7890"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#6C78FF] focus:border-transparent ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phoneNumber && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm"
                >
                  {errors.phoneNumber}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-[#6C78FF] to-[#5a66e0] hover:from-[#5a66e0] hover:to-[#4c59d9] text-white shadow-lg hover:shadow-xl hover:shadow-[#6C78FF]/25 transition-all duration-300 group"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </Button>
          </motion.form>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-[#6B7280] mt-6"
          >
            We&apos;ll notify you when BilledViews is ready. No spam, ever.
          </motion.p>
        </div>
      </motion.div>

      {/* Success Modal (same as /results) */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative overflow-hidden animate-in fade-in duration-300 slide-in-from-bottom-4">
            {/* Close Button */}
            <button
              onClick={handleCloseSuccess}
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
                onClick={handleCloseSuccess}
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
}
