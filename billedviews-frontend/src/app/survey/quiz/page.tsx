"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/why-billedviews/Header";
import { Footer } from "@/components/why-billedviews/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertTriangle } from "lucide-react";

const quizQuestions = {
  spending: [
    "Under $500",
    "$500 – $1,999",
    "$2,000 – $4,999",
    "$5,000 – $9,999",
    "$10,000 – $24,999",
    "$25,000+",
  ],
  goals: [
    "Drive purchases or signups",
    "Get more video views (awareness)",
    "Increase website traffic",
    "Boost social proof with creators",
    "Collect leads (emails, phone numbers)",
    "Promote a launch or campaign",
  ],
  industry: [
    "E-commerce",
    "Beauty & Skincare",
    "Food & Beverage",
    "Fitness & Health",
    "Tech & Electronics",
    "Local Services",
    "Apparel & Fashion",
    "Home Goods",
    "Other",
  ],
  audienceAge: ["18–24", "25–34", "35–44", "45–54", "55+"],
  platform: [
    "TikTok",
    "Meta (Instagram/Facebook)",
    "YouTube",
    "Google Ads",
    "Influencer/Creator Content",
    "Not Sure",
  ],
};

const QuizPage = () => {
  const router = useRouter();
  const averagePriceRef = useRef<HTMLInputElement>(null);
  const conversionsRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    spending: "",
    marketingGoal: "",
    industry: "",
    targetAudienceAge: "",
    primaryPlatform: "",
  });

  // Track validation errors (all required except average price)
  const [errors, setErrors] = useState({
    spending: "",
    marketingGoal: "",
    industry: "",
    targetAudienceAge: "",
    primaryPlatform: "",
    conversions: "",
  });

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user selects a value
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const averagePrice = averagePriceRef.current?.value || "";
    const conversions = conversionsRef.current?.value || "";

    // Validate required fields (averagePrice optional)
    const newErrors = {
      spending: formData.spending ? "" : "Required field",
      marketingGoal: formData.marketingGoal ? "" : "Required field",
      industry: formData.industry ? "" : "Required field",
      targetAudienceAge: formData.targetAudienceAge ? "" : "Required field",
      primaryPlatform: formData.primaryPlatform ? "" : "Required field",
      conversions: conversions.trim() !== "" ? "" : "Required field",
    };

    setErrors(newErrors);

    // Halt submission if any errors exist
    if (Object.values(newErrors).some((msg) => msg)) {
      return;
    }

    console.log({
      ...formData,
      averagePrice,
      conversions,
    });

    // Navigate to results page
    router.push("/survey/results");
  };

  const Question = ({
    number,
    title,
    children,
  }: {
    number: number;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-lg font-bold text-[#111111] mb-6">
        {number}. {title}
      </h2>
      {children}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#111111] mb-2">
              How Much Should I Spend on Marketing?
            </h1>
            <p className="text-gray-600">
              A free 60-second quiz to calculate your ideal ad budget,
              cost-per-view, and cost-per-conversion—across major platforms.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <form onSubmit={handleSubmit}>
              <Question
                number={1}
                title="Roughly how much are you currently spending (or planning to spend) on marketing per month?"
              >
                <RadioGroup
                  value={formData.spending}
                  className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4"
                  onValueChange={(value) =>
                    handleRadioChange("spending", value)
                  }
                >
                  {quizQuestions.spending.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <RadioGroupItem value={item} id={`spending-${item}`} />
                      <Label
                        htmlFor={`spending-${item}`}
                        className="font-normal text-gray-700"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.spending && (
                  <p className="text-red-500 text-sm mt-2 font-medium">
                    {errors.spending}
                  </p>
                )}
              </Question>

              <Question
                number={2}
                title="What's your top marketing goal right now?"
              >
                <RadioGroup
                  value={formData.marketingGoal}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
                  onValueChange={(value) =>
                    handleRadioChange("marketingGoal", value)
                  }
                >
                  {quizQuestions.goals.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <RadioGroupItem value={item} id={`goal-${item}`} />
                      <Label
                        htmlFor={`goal-${item}`}
                        className="font-normal text-gray-700"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.marketingGoal && (
                  <p className="text-red-500 text-sm mt-2 font-medium">
                    {errors.marketingGoal}
                  </p>
                )}
              </Question>

              <Question
                number={3}
                title="What's the average price of your product or service?"
              >
                <div className="max-w-xs">
                  <Label
                    htmlFor="averagePrice"
                    className="text-sm text-gray-500 mb-1 block"
                  >
                    Amount
                  </Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      $
                    </span>
                    <input
                      ref={averagePriceRef}
                      type="text"
                      id="averagePrice"
                      name="averagePrice"
                      defaultValue=""
                      placeholder="0"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C78FF] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 pl-7"
                      autoComplete="off"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-1.5 text-blue-500" />
                    If you have a range, enter the average. Skip if unsure.
                  </p>
                </div>
              </Question>

              <Question
                number={4}
                title="How many conversions would you like to get per month?"
              >
                <div className="max-w-xs">
                  <Label
                    htmlFor="conversions"
                    className="text-sm text-gray-500 mb-1 block"
                  >
                    Conversions
                  </Label>
                  <input
                    ref={conversionsRef}
                    type="text"
                    id="conversions"
                    name="conversions"
                    defaultValue=""
                    placeholder="0"
                    className={`flex h-10 w-full rounded-md border ${
                      errors.conversions ? "border-red-500" : "border-gray-300"
                    } bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C78FF] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50`}
                    autoComplete="off"
                    onChange={(e) => {
                      if (errors.conversions && e.target.value.trim() !== "") {
                        setErrors((prev) => ({ ...prev, conversions: "" }));
                      }
                    }}
                  />
                  <p className="mt-2 text-xs text-gray-500 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-1.5 text-blue-500" />A
                    conversion could be a purchase, signup, or lead.
                  </p>
                  {errors.conversions && (
                    <p className="text-red-500 text-sm mt-1 font-medium">
                      {errors.conversions}
                    </p>
                  )}
                </div>
              </Question>

              <Question number={5} title="Select you industry">
                <RadioGroup
                  value={formData.industry}
                  className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4"
                  onValueChange={(value) =>
                    handleRadioChange("industry", value)
                  }
                >
                  {quizQuestions.industry.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <RadioGroupItem value={item} id={`industry-${item}`} />
                      <Label
                        htmlFor={`industry-${item}`}
                        className="font-normal text-gray-700"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.industry && (
                  <p className="text-red-500 text-sm mt-2 font-medium">
                    {errors.industry}
                  </p>
                )}
              </Question>

              <Question number={6} title="Select your target audience age">
                <RadioGroup
                  value={formData.targetAudienceAge}
                  className="flex flex-wrap gap-x-8 gap-y-4"
                  onValueChange={(value) =>
                    handleRadioChange("targetAudienceAge", value)
                  }
                >
                  {quizQuestions.audienceAge.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <RadioGroupItem value={item} id={`age-${item}`} />
                      <Label
                        htmlFor={`age-${item}`}
                        className="font-normal text-gray-700"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.targetAudienceAge && (
                  <p className="text-red-500 text-sm mt-2 font-medium">
                    {errors.targetAudienceAge}
                  </p>
                )}
              </Question>

              <Question number={7} title="Select your primary platform">
                <RadioGroup
                  value={formData.primaryPlatform}
                  className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4"
                  onValueChange={(value) =>
                    handleRadioChange("primaryPlatform", value)
                  }
                >
                  {quizQuestions.platform.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <RadioGroupItem value={item} id={`platform-${item}`} />
                      <Label
                        htmlFor={`platform-${item}`}
                        className="font-normal text-gray-700"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.primaryPlatform && (
                  <p className="text-red-500 text-sm mt-2 font-medium">
                    {errors.primaryPlatform}
                  </p>
                )}
              </Question>

              <div className="flex justify-end pt-8">
                <Button
                  type="submit"
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
                  Next
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;
