"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "For Brands", href: "/why-billedviews/brands" },
  { label: "For Influencers", href: "/why-billedviews/influencers" },
  { label: "For Agencies", href: "/why-billedviews/agencies" },
];

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 h-16">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[21px] font-bold text-[#111111] leading-none w-[112px] h-[28px] flex items-center"
          style={{
            fontFamily: "Satoshi, system-ui, sans-serif",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          BilledViews
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-normal text-[#111111] hover:text-gray-600 transition-colors"
              style={{
                fontFamily: "Satoshi, system-ui, sans-serif",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="text-xs font-normal text-[#6C78FF] bg-white border-[1.5px] border-[#6C78FF] transition-colors"
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
            Log In
          </Button>
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
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
