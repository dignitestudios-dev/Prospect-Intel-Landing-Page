import React from "react";
import DNA from "../icons/dna";
import SettingsDoc from "../icons/settings-doc";
import Check from "../icons/check";
import UsersMeeting from "../icons/users-meeting";

const Features = () => {
  const features = [
    {
      icon: DNA,
      title: "In-depth prospect insights that go beyond measurable traits",
    },
    {
      icon: SettingsDoc,
      title:
        "Comprehensive recruiting intelligence built for real staff workflows",
    },
    {
      icon: Check,
      title: "NFL-style information gathering and verification models",
    },
    {
      icon: UsersMeeting,
      title:
        "Proven inside personnel expertise aligned to what modern programs value",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-[#000A10] flex items-center justify-center overflow-hidden"
      id="about"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/images/bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Floating Blur Circles */}
      <div
        className="absolute w-[798px] h-[798px] rounded-full blur-3xl opacity-20 -left-[210px]"
        style={{
          background: "#0085CA",
          top: "202px",
        }}
      ></div>
      <div
        className="absolute w-[798px] h-[798px] rounded-full blur-3xl opacity-20"
        style={{
          background: "#0085CA",
          right: "-210px",
          top: "199px",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1240px] mx-auto px-8 py-20 gap-12">
        {/* Main Heading */}
        <h1 className="font-bebas text-[64px] leading-[77px] text-white text-center w-full tracking-tight">
          FIRST-OF-ITS-KIND{" "}
          <span className="text-primary">RECRUITING INTELLIGENCE</span> PLATFORM
        </h1>

        {/* Subheading and Description Container */}
        <div className="flex flex-col items-center gap-4 max-w-[976px] w-full">
          <h2 className="font-jost text-[20px] font-bold leading-[29px] text-white text-center uppercase w-full">
            BUILT TO GIVE COLLEGE FOOTBALL PROGRAMS THE EDGE BEYOND THE FILM
            ROOM.
          </h2>
          <p className="font-jost text-[16px] leading-[25px] text-white text-center w-full">
            Designed by former college personnel directors with more than 20
            years of recruiting and roster-building experience, Prospect Intel
            gives staffs access to the kind of information that doesn't show up
            on highlight tapes but determines long-term success. We equip
            programs with deeper visibility into the complete prospect profile,
            helping decision-makers find prospects with elite intangibles and
            reduce risk, find culture fits, and build stronger rosters in
            today's evolving college football landscape.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col items-center gap-7 w-full mt-8">
          {/* Section Heading */}
          <h3 className="font-bebas text-[42px] leading-[50px] text-white text-center tracking-tight">
            WHAT PROSPECT INTEL DELIVERS
          </h3>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-[14px] p-[20px] pt-12 bg-[#001522] rounded-lg shadow-lg border border-primary/30"
                  style={{
                    boxShadow: "0px 0px 27.4px rgba(0, 133, 202, 0.5)",
                  }}
                >
                  {/* Icon */}
                  <div className="w-[120px] h-[120px] flex items-center justify-center">
                    <Icon />
                  </div>

                  {/* Feature Title */}
                  <p className="font-jost text-[22px] leading-[32px] text-white text-center">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Text */}
        <p className="font-jost text-[24px] font-bold leading-[35px] text-white text-center uppercase max-w-[975px]">
          OUR PLATFORM IS BUILT FOR PROGRAMS THAT WANT TO RECRUIT SMARTER, MOVE
          FASTER, AND MAKE MORE CONFIDENT DECISIONS.
        </p>
      </div>
    </div>
  );
};

export default Features;
