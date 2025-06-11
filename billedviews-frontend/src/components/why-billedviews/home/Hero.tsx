import Image from "next/image";
import { ArrowRight } from "lucide-react";

const avatars = [
  "/why-billedviews/home/User1.svg",
  "/why-billedviews/home/User2.svg",
  "/why-billedviews/home/User3.svg",
];

const socialIcons = [
  {
    src: "/why-billedviews/home/FacebookIcon.svg",
    alt: "Facebook",
    className:
      "left-4 top-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:left-40 lg:top-24 lg:w-24 lg:h-24",
  },
  {
    src: "/why-billedviews/home/YoutubeIcon.svg",
    alt: "YouTube",
    className:
      "left-8 bottom-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:left-20 lg:top-80 lg:w-28 lg:h-28",
  },
  {
    src: "/why-billedviews/home/TikTokIcon.svg",
    alt: "TikTok",
    className:
      "right-8 top-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:right-40 lg:top-20 lg:w-24 lg:h-24",
  },
  {
    src: "/why-billedviews/home/InstagramIcon.svg",
    alt: "Instagram",
    className:
      "right-8 bottom-72 w-12 h-12 sm:w-16 sm:h-16 sm:bottom-80 md:w-24 md:h-24 lg:right-20 lg:top-80 lg:w-28 lg:h-28",
  },
];

export const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[900px] bg-gradient-to-b from-[#f6f8ff] to-[#e9edfa] rounded-none lg:rounded-[32px] overflow-hidden px-0 lg:px-4 pt-0 pb-0 lg:mt-4 lg:mx-8">
    {/* Floating Social Icons */}
    {socialIcons.map((icon) => (
      <Image
        key={icon.alt}
        src={icon.src}
        alt={icon.alt}
        width={64}
        height={64}
        className={`absolute z-10 ${icon.className}`}
        priority
      />
    ))}

    {/* Main Content Block */}
    <div className="flex flex-col items-center z-20 -mt-8">
      {/* Avatars Row */}
      <div className="flex items-center -mt-64 mb-2">
        {avatars.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt="User avatar"
            width={56}
            height={56}
            className={`rounded-full border-2 border-white ${
              idx !== 0 ? "-ml-4" : ""
            }`}
          />
        ))}
        <span className="-ml-4 w-14 h-14 flex items-center justify-center rounded-full bg-[#6C78FF] text-white text-base font-semibold border-2 border-white">
          100+
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-center text-[44px] font-bold leading-tight text-[#111111] max-w-2xl mx-auto">
        Stop Guessing.
        <br />
        Start Paying Only for <span className="text-[#6C78FF]">Real Views</span>
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-center text-lg text-[#6B7280] max-w-xl mx-auto">
        BilledViews lets brands launch influencer video campaigns with zero
        wasted budget—pay per 1,000 real views, not empty impressions.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-md hover:bg-[#5a66e0] transition">
          Get Started Free
          <span className="flex items-center justify-center rounded-full bg-white w-8 h-8 ml-4">
            <ArrowRight className="w-4 h-4 text-[#6C78FF]" />
          </span>
        </button>
        <button className="px-8 py-3 rounded-full bg-white text-[#6C78FF] text-base font-semibold border border-[#6C78FF] shadow-md hover:bg-[#f6f8ff] transition">
          Request a Demo
        </button>
      </div>
    </div>

    {/* Standalone Chart Images */}
    <Image
      src="/why-billedviews/home/Chart 1.svg"
      alt="Chart 1"
      width={500}
      height={275}
      className="absolute -left-4 bottom-40 w-[280px] sm:w-[320px] md:w-[400px] rotate-[-2deg] z-10 drop-shadow-xl lg:left-12 lg:bottom-12 lg:w-[500px] lg:rotate-[-4deg]"
      priority
    />
    <Image
      src="/why-billedviews/home/Chart 4.svg"
      alt="Chart 4"
      width={340}
      height={180}
      className="absolute right-2 bottom-8 w-[220px] sm:w-[260px] md:w-[320px] rotate-[4deg] z-10 drop-shadow-xl lg:right-20 lg:bottom-12 lg:w-[340px] lg:rotate-[8deg]"
      priority
    />
  </section>
);

export default Hero;
