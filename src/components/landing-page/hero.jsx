import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#000E16] overflow-hidden" id="home">
      {/* Hero Background Section */}
      <div
        className="relative w-full flex flex-col xl:flex-row justify-between items-center pt-24 lg:pt-25 px-4 sm:px-8 lg:pl-25 gap-6 lg:gap-2.5 lg:min-h-auto"
        style={{
          backgroundImage: "url(/images/bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        {/* Left Content Section */}
        <div className="relative z-10 flex flex-col gap-6 max-w-180 lg:w-auto xl:pb-10">
          {/* "BEYOND THE FILM" Text */}
          <div className="flex flex-col gap-3">
            <h2
              className="text-[16px] font-jost font-semibold uppercase tracking-wide"
              style={{
                background:
                  "linear-gradient(89.23deg, #009AEA -8.77%, #007BBB 112.35%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                height: "23px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Beyond the Film:
            </h2>
          </div>

          {/* Main Heading */}
          <h1 className="font-bebas text-[48px] lg:text-[74px] leading-[48px] lg:leading-[66px] text-white font-normal tracking-tight">
            COMPLETE PROSPECT INSIGHTS.{" "}
            <span className="text-primary">SMART RECRUITING</span> STARTS HERE.
          </h1>

          {/* Description */}
          <p className="text-jost text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25px] text-white font-normal max-w-2xl">
            First-of-its-kind platform delivering comprehensive recruiting
            intelligence equipping staffs with NFL-caliber decision-making tools
            to make smarter, faster, and more informed evaluations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-[14px] items-center">
            {/* Get Started Button */}
            <button className="flex flex-row justify-center items-center px-[10px] py-[10px] gap-[10px] h-[44px] bg-white/5 border border-white rounded-lg hover:bg-white/10 transition group">
              <span className="text-[16px] font-jost font-medium text-white text-center">
                Get Started
              </span>
              <svg
                className="w-4 h-4 text-white group-hover:translate-x-1 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            {/* Schedule a Demo Button */}
            <Link href="/#demo">
              <button className="flex flex-row justify-center items-center px-[10px] py-[10px] gap-[10px] h-[44px] bg-primary rounded-lg hover:opacity-90 transition">
                <span className="text-[16px] font-jost font-medium text-white text-center">
                  Schedule a Demo
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section - Hidden on mobile, shown on lg screens */}
        <div className="relative z-20 shrink-0 mr-12">
          <div className="relative w-156.5 h-130 lg:h-130.5">
            {/* Blur Circle Background */}
            <div
              className="absolute w-96.75 h-96.75 rounded-full blur-[123px]"
              style={{
                background: "#0085CA",
                left: "129px",
                top: "209px",
              }}
            ></div>

            {/* Hero Image */}
            <Image
              src="/images/hero.png"
              alt="NFL Players"
              className="absolute -bottom-12 w-full h-full object-cover"
              width={1000}
              height={1000}
              style={{
                mixBlendMode: "luminosity",
                width: "1000px",
                left: "67px",
                bottom: "0",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
