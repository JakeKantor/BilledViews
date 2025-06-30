"use client";

import { useState } from "react";

const brandFaqs = [
  {
    question: "How do I launch a campaign?",
    answer:
      "To launch a campaign, navigate to your dashboard and click 'Create Campaign.' Follow the prompts to define your goals, target audience, budget, and content guidelines. Once submitted, our team will review it, and you'll be notified upon approval.",
  },
  {
    question: "How do I approve content or scripts?",
    answer:
      "When a creator submits content or a script for your campaign, you'll receive a notification. You can review the submission in your campaign dashboard, provide feedback, request revisions, or approve it with a single click.",
  },
  {
    question: "How do I pay influencers?",
    answer:
      "Payments are handled directly through the BilledViews platform. Once you approve a creator's content and the campaign milestones are met, funds from your account balance are automatically released to the creator. You can add funds to your account using a credit card or bank transfer.",
  },
  {
    question: "What happens if an influencer misses a deadline?",
    answer:
      "We understand that delays can happen. If a creator misses a deadline, our system will notify both you and the creator. You can communicate with them through the platform to get an update. If the issue persists, our support team is available to help mediate and find a solution, including reassigning the work if necessary.",
  },
];

const creatorFaqs = [
  {
    question: "How do I get approved?",
    answer:
      "To become an approved creator, sign up on our platform and complete your profile. You'll need to connect your social media accounts and provide some information about your content niche and audience. Our team will review your application to ensure it aligns with our community guidelines, and you'll be notified of your status within a few business days.",
  },
  {
    question: "How do I upload my videos?",
    answer:
      "Once you accept a campaign proposal, you can upload your video content directly through the campaign dashboard. Follow the submission guidelines provided by the brand to ensure your content meets their requirements.",
  },
  {
    question: "How do payouts work?",
    answer:
      "Payouts are processed automatically after a brand approves your content and the campaign concludes. Funds are transferred to your connected bank account or payment provider. You can track your earnings and payout status in the 'Earnings' section of your dashboard.",
  },
  {
    question: "What if I need to revise content?",
    answer:
      "If a brand requests revisions, you will receive a notification with their feedback. You can upload the revised content through the same campaign dashboard. Clear communication is key, so feel free to ask the brand questions to ensure you meet their expectations.",
  },
];

const billingFaqs = [
  {
    question: "What is the platform fee?",
    answer:
      "BilledViews charges a small percentage of the total campaign spend as a platform fee. This fee covers the cost of services such as creator matching, payment processing, and real-time analytics. The fee structure is transparent and will be clearly outlined before you launch a campaign.",
  },
  {
    question: "How do I add credit?",
    answer:
      "You can add credit to your account at any time from your dashboard's 'Billing' section. We accept major credit cards and bank transfers. Your balance is used to fund campaigns and pay creators.",
  },
  {
    question: "Can I get a refund on unused budget?",
    answer:
      "Yes, you can request a refund for any unused funds in your account balance. Simply contact our support team, and they will process your request. Please note that funds committed to active campaigns cannot be refunded until the campaign is complete.",
  },
];

const accountFaqs = [
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking the 'Forgot Password?' link on the login page. Enter your registered email address, and we will send you a link to create a new password.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "To delete your account, please go to your 'Account Settings' page and select the 'Delete Account' option. Please be aware that this action is permanent and will remove all your data from our platform. If you have active campaigns or pending payouts, you'll need to resolve them before deletion.",
  },
  {
    question: "How is my data stored?",
    answer:
      "We take data security very seriously. Your data is stored on secure, encrypted servers. We adhere to industry best practices and privacy regulations like GDPR to protect your personal and campaign information. For more details, please see our Privacy Policy.",
  },
];

const faqSections = [
  { title: "For Brands", faqs: brandFaqs },
  { title: "For Creators", faqs: creatorFaqs },
  { title: "Billing & Credit", faqs: billingFaqs },
  { title: "Account Management", faqs: accountFaqs },
];

export default function HelpCenterPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Help Center</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore answers to common questions, tutorials, and walkthroughs.
            Still stuck? Contact Support
          </p>
        </div>

        {faqSections.map((section) => (
          <div
            key={section.title}
            className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            <div className="w-full">
              {section.faqs.map((faq, index) => {
                const faqId = `${section.title}-${index}`;
                const isOpen = openFaq === faqId;
                const isLast = index === section.faqs.length - 1;
                return (
                  <div
                    key={faqId}
                    className={!isLast ? "border-b border-gray-200" : ""}
                  >
                    <button
                      onClick={() => handleToggle(faqId)}
                      className="flex justify-between items-center w-full p-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-lg font-medium text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 bg-[#6C78FF] transition-transform duration-300">
                        {isOpen ? (
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
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
