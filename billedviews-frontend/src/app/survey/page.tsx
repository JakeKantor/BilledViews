"use client";

import { Header } from "@/components/why-billedviews/Header";
import { Footer } from "@/components/why-billedviews/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SurveyStart = () => {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push("/survey/quiz");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
        <Image
          src="/survey/Group.svg"
          alt="Marketing Survey Illustration"
          width={360}
          height={228}
          priority
          className="mb-12"
        />
        <h1
          className="text-[#111111] text-center mb-4 max-w-3xl"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "110%",
            letterSpacing: "0%",
          }}
        >
          How Much Should I Spend on Marketing?
        </h1>
        <p
          className="text-[#6B7280] text-center mb-12 max-w-3xl"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0%",
          }}
        >
          A free 60-second quiz to calculate your ideal ad budget,
          cost-per-view, and cost-per-conversion—across major platforms.
        </p>
        <Button
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
          aria-label="Start Quiz"
          onClick={handleStartQuiz}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleStartQuiz();
          }}
        >
          Start Quiz
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default SurveyStart;
