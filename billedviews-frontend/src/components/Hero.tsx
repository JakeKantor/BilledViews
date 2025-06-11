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
    className: "left-1/4 top-24 w-16 h-16",
  },
  {
    src: "/why-billedviews/home/YoutubeIcon.svg",
    alt: "YouTube",
    className: "left-60 top-72 w-24 h-24",
  },
  {
    src: "/why-billedviews/home/TikTokIcon.svg",
    alt: "TikTok",
    className: "right-1/4 top-20 w-16 h-16",
  },
  {
    src: "/why-billedviews/home/InstagramIcon.svg",
    alt: "Instagram",
    className: "right-60 top-72 w-24 h-24",
  },
];

export const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[750px] bg-gradient-to-b from-[#f6f8ff] to-[#e9edfa] rounded-[32px] overflow-hidden px-4 pt-0 pb-0 mt-4 ml-8 mr-8">
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

    {/* Main Content Block - no negative margin */}
    <div className="flex flex-col items-center z-20">
      {/* Avatars Row - extreme negative margin top to pull to absolute top */}
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
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center z-20">
        <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#6C78FF] text-white text-base font-semibold shadow-md hover:bg-[#5a66e0] transition">
          Get Started Free <ArrowRight className="w-5 h-5" />
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
      width={400}
      height={220}
      className="absolute left-[12%] bottom-8 w-[380px] rotate-[-8deg] z-10 drop-shadow-xl"
      priority
    />
    <Image
      src="/why-billedviews/home/Chart 4.svg"
      alt="Chart 4"
      width={260}
      height={140}
      className="absolute right-[12%] bottom-8 w-[240px] rotate-[8deg] z-10 drop-shadow-xl"
      priority
    />
  </section>
);

export default Hero;
