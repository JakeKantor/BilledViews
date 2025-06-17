"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "For Brands", href: "/why-billedviews/brands" },
  { label: "For Influencers", href: "/why-billedviews/influencers" },
  { label: "For Agencies", href: "/why-billedviews/agencies" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Check if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`w-full bg-white border-b border-gray-200 h-16 ${
          isMobileMenuOpen ? "sticky top-0" : "relative"
        } z-[9999]`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
          {/* Mobile Layout */}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-900 relative z-[9999]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Centered Logo */}
            <Link
              href="/"
              className="text-[21px] font-bold text-[#111111] leading-none flex items-center absolute left-1/2 transform -translate-x-1/2 z-[9999]"
              style={{
                fontFamily: "Satoshi, system-ui, sans-serif",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              BilledViews
            </Link>

            {/* Join Now Button */}
            <Button
              className="text-xs font-normal text-[#FFFFFF] bg-[#6C78FF] hover:bg-[#5a66e0] border-[1.5px] border-[#6C78FF] transition-colors px-4 py-2 h-8 relative z-[9999]"
              style={{
                fontFamily: "Helvetica Neue, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0%",
                borderRadius: "48px",
              }}
            >
              Join Now
            </Button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
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
                  className={`text-xs font-normal transition-colors relative ${
                    isActive(link.href)
                      ? "text-[#6C78FF] after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-full after:bg-[#6C78FF]"
                      : "text-[#111111] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-5px] hover:after:h-[2px] hover:after:w-full hover:after:bg-gray-300"
                  }`}
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
        </div>
      </header>

      {/* Only render mobile menu elements when menu is open */}
      {isMobileMenuOpen && (
        <>
          {/* Mobile Menu Overlay */}
          <div
            className="lg:hidden fixed inset-0 z-[9990] bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="lg:hidden fixed top-16 left-0 bg-white border-b border-gray-200 z-[9995] w-screen overflow-hidden">
            <div className="py-6 space-y-4 px-4">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base font-normal transition-colors relative py-2 ${
                    isActive(link.href)
                      ? "text-[#6C78FF] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#6C78FF]"
                      : "text-[#111111] hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-gray-300"
                  }`}
                  style={{
                    fontFamily: "Satoshi, system-ui, sans-serif",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Auth Buttons */}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full text-sm font-normal text-[#6C78FF] bg-white border-[1.5px] border-[#6C78FF] transition-colors h-10"
                  style={{
                    fontFamily: "Helvetica Neue, system-ui, sans-serif",
                    fontWeight: 400,
                    borderRadius: "48px",
                  }}
                >
                  Log In
                </Button>
                <Button
                  className="w-full text-sm font-normal text-[#FFFFFF] bg-[#6C78FF] hover:bg-[#5a66e0] border-[1.5px] border-[#6C78FF] transition-colors h-10"
                  style={{
                    fontFamily: "Helvetica Neue, system-ui, sans-serif",
                    fontWeight: 400,
                    borderRadius: "48px",
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
