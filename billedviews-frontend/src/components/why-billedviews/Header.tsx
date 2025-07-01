"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";

const navLinks = [
  { label: "For Brands", href: "/why-billedviews/brands" },
  { label: "For Influencers", href: "/why-billedviews/influencers" },
  { label: "For Agencies", href: "/why-billedviews/agencies" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header at the top of the page
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add event listener with passive option for performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Check if a link is active
  const isActive = (href: string) => pathname === href;

  // Animation variants
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.15 },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-[9999] transition-transform duration-300 
          ${
            isHeaderVisible || isMobileMenuOpen
              ? "transform-none"
              : "-translate-y-full"
          }
          backdrop-blur-md bg-white/75 border-b border-gray-200/50 shadow-sm`}
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
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
              Join Waitlist
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
              {/* <Button
                variant="outline"
                className="text-xs font-normal text-[#6C78FF] bg-white/50 border-[1.5px] border-[#6C78FF] transition-colors"
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
              </Button> */}
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
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Add a spacer to prevent content from jumping when header becomes fixed */}
      <div className="h-16"></div>

      {/* Only render mobile menu elements when menu is open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Overlay */}
            <motion.div
              className="lg:hidden fixed inset-0 z-[9990] bg-black bg-opacity-50"
              onClick={toggleMobileMenu}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            {/* Mobile Menu */}
            <motion.div
              className="lg:hidden fixed top-16 left-0 bg-white/70 backdrop-blur-md border-b border-gray-200/50 z-[9995] w-screen overflow-hidden shadow-lg"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="py-6 space-y-4 px-4 bg-gradient-to-b from-white/5 to-white/10">
                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
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
                  </motion.div>
                ))}

                {/* Auth Buttons */}
                <div className="pt-4 space-y-3">
                  <motion.div variants={itemVariants}>
                    {/* <Button
                      variant="outline"
                      className="w-full text-sm font-normal text-[#6C78FF] bg-white/40 backdrop-blur-sm border-[1.5px] border-[#6C78FF]/80 transition-colors h-10 hover:bg-white/60"
                      style={{
                        fontFamily: "Helvetica Neue, system-ui, sans-serif",
                        fontWeight: 400,
                        borderRadius: "48px",
                      }}
                    >
                      Log In
                    </Button> */}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      className="w-full text-sm font-normal text-[#FFFFFF] bg-[#6C78FF]/90 hover:bg-[#5a66e0] border-[1.5px] border-[#6C78FF] transition-colors h-10"
                      style={{
                        fontFamily: "Helvetica Neue, system-ui, sans-serif",
                        fontWeight: 400,
                        borderRadius: "48px",
                      }}
                    >
                      Join Waitlist
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
