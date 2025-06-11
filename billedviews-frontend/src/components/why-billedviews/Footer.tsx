import Link from "next/link";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

export const Footer = () => (
  <footer className="w-full border-t-[1.5px] border-[#6C78FF] bg-white pt-6 lg:pt-10 pb-4">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span
            className="block text-[24px] lg:text-[28px] font-bold text-[#111111] font-[Satoshi,system-ui,sans-serif]"
            style={{
              fontFamily: "Satoshi, system-ui, sans-serif",
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            BilledViews
          </span>
        </div>

        {/* Links and Contact - Stack on mobile, flex on larger screens */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8">
          {/* Links Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between lg:flex-row gap-6 lg:gap-8 flex-1">
            <div className="flex-1 min-w-0">
              <div className="font-normal text-base text-black mb-2">
                About BilledViews
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm lg:text-base text-black hover:underline"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-sm lg:text-base text-black hover:underline"
                  >
                    Press & Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm lg:text-base text-black hover:underline"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm lg:text-base text-black hover:underline"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-normal text-base text-black mb-2">
                Support & Legal
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/help"
                    className="text-sm lg:text-base text-black hover:underline"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm lg:text-base text-black hover:underline"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm lg:text-base text-black hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-sm lg:text-base text-black hover:underline"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col gap-4">
            <div className="min-w-0">
              <div className="font-bold text-base text-black mb-2">
                Connect with Us
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm lg:text-base text-black">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#6C78FF] flex-shrink-0" />
                  <span className="break-all">sales@billedviews.com</span>
                </li>
                <li className="flex items-center gap-2 text-sm lg:text-base text-black">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#6C78FF] flex-shrink-0" />
                  <span className="break-all">support@billedviews.com</span>
                </li>
                <li className="flex items-start gap-2 text-sm lg:text-base text-black">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-[#6C78FF] flex-shrink-0 mt-0.5" />
                  <span>123 Market St, San Francisco, CA 94103</span>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row gap-3 lg:gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-[12px] bg-[#6C78FF] flex items-center justify-center hover:bg-[#5a66e0] transition-colors flex-shrink-0"
                  tabIndex={0}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mt-6 lg:mt-8 pt-4 text-center text-gray-500 text-xs lg:text-sm">
        © 2025 BilledViews, Inc. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
