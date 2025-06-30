"use client";

import { useState, useEffect } from "react";
import { Mail, MapPin, X, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const supportTopics = [
  "Campaign issues",
  "Payment troubleshooting",
  "Account login or email update help",
  "Requesting a refund or credit adjustment",
];

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

export default function SupportPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "Campaign issues",
    "Account login or email update help",
  ]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle modal animation
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isSuccessModalOpen) {
      setIsModalVisible(true);
    } else {
      timeout = setTimeout(() => {
        setIsModalVisible(false);
      }, 300); // Match this with the CSS transition duration
    }
    return () => clearTimeout(timeout);
  }, [isSuccessModalOpen]);

  const handleTopicClick = (topic: string) => {
    setSelectedTopics((prevSelectedTopics) =>
      prevSelectedTopics.includes(topic)
        ? prevSelectedTopics.filter((t) => t !== topic)
        : [...prevSelectedTopics, topic]
    );

    // Auto-fill the topic field with selected topics
    const updatedTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t: string) => t !== topic)
      : [...selectedTopics, topic];

    setTopic(updatedTopics.join(", "));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!topic.trim() && selectedTopics.length === 0) {
      newErrors.topic = "Topic is required.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Here you would typically send the form data to your backend
      console.log("Form submitted successfully", {
        name,
        email,
        topic,
        selectedTopics,
        message,
      });
      setIsSuccessModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    // The useEffect will handle hiding the modal after the animation
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Success Modal Overlay with Animation */}
      {isModalVisible && (
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center z-50
            ${
              isSuccessModalOpen
                ? "bg-opacity-50 opacity-100"
                : "bg-opacity-0 opacity-0"
            }`}
        >
          <div
            className={`bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center relative
              transition-all duration-300 transform
              ${
                isSuccessModalOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
          >
            <button
              onClick={() => {
                closeModal();
                setTimeout(() => router.back(), 300);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center">
              <div className="checkmark-circle">
                <CheckCircle
                  size={64}
                  className="text-[#7B7EFC] mb-4 checkmark-icon"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Message Successfully Sent
              </h2>
              <p className="text-gray-600">
                A team member will get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add the CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes checkmarkDraw {
          0% {
            stroke-dashoffset: 100;
            transform: scale(0.8);
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
            transform: scale(1);
          }
        }

        .checkmark-circle {
          animation: fadeIn 0.5s ease-out;
        }

        .checkmark-icon {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: checkmarkDraw 1s ease-in-out forwards;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Support & Assistance
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Need help with your campaigns, payments, or creator partnerships?
            We&apos;re here to support you.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#6C78FF]" />
              <span className="text-gray-700">
                123 Market St, San Francisco, CA 94103
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#6C78FF]" />
              <a
                href="mailto:support@billedviews.com"
                className="text-gray-700 hover:text-[#6C78FF]"
              >
                support@billedviews.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#6C78FF]" />
              <a
                href="mailto:sales@billedviews.com"
                className="text-gray-700 hover:text-[#6C78FF]"
              >
                sales@billedviews.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How can we help you?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                placeholder="Enter name"
                className="border-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                className="border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Topic <span className="text-red-500">*</span>
              </label>
              <Input
                id="topic"
                placeholder="Enter your topic"
                className="border-gray-300"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              {errors.topic && (
                <p className="text-red-500 text-sm mt-1">{errors.topic}</p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-4">
                or choose common support topics
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {supportTopics.map((topicItem) => (
                  <button
                    key={topicItem}
                    type="button"
                    onClick={() => handleTopicClick(topicItem)}
                    className={`px-4 py-3 rounded-lg text-center text-sm font-medium border
                      ${
                        selectedTopics.includes(topicItem)
                          ? "bg-[#EEF2FF] border-[#6C78FF] text-black"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {topicItem}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
                className="border-gray-300"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-[#6C78FF] hover:bg-[#5a66e0]"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
