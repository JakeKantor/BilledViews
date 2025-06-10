import Link from "next/link";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";

const footerLinks = [
  {
    title: "About BilledViews",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Press & Media", href: "/press" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

export const Footer = () => (
  <footer className="w-full border-t-[1.5px] border-[#6C78FF] bg-white pt-10 pb-4">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <span
            className="block text-[28px] font-bold text-[#111111] font-[Satoshi,system-ui,sans-serif]"
            style={{
              fontFamily: "Satoshi, system-ui, sans-serif",
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            BilledViews
          </span>
        </div>
        {/* Links */}
        <div className="flex flex-1 flex-wrap justify-between gap-8 min-w-[400px]">
          <div>
            <div className="font-normal text-base text-black mb-2">
              About BilledViews
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-base text-black hover:underline"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-base text-black hover:underline"
                >
                  Press & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-base text-black hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base text-black hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-normal text-base text-black mb-2">
              Support & Legal
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-base text-black hover:underline"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-base text-black hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-black hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-base text-black hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-base text-black mb-2">
              Connect with Us
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-base text-black">
                <Mail className="w-5 h-5 text-[#6C78FF]" />{" "}
                sales@billedviews.com
              </li>
              <li className="flex items-center gap-2 text-base text-black">
                <Mail className="w-5 h-5 text-[#6C78FF]" />{" "}
                support@billedviews.com
              </li>
              <li className="flex items-center gap-2 text-base text-black">
                <MapPin className="w-5 h-5 text-[#6C78FF]" /> 123 Market St, San
                Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>
        {/* Socials */}
        <div className="flex flex-row gap-4 items-start">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-[12px] bg-[#6C78FF] flex items-center justify-center hover:bg-[#5a66e0] transition-colors"
              tabIndex={0}
            >
              <Icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 BilledViews, Inc. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
