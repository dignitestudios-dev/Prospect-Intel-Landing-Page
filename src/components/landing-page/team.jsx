import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "David Bowen",
      image: "/images/david.webp",
      description:
        "David has spent more than a decade working with major college football programs across the country, serving in leadership roles including Director of Player Personnel and Director of College Scouting. He has built and led personnel departments for nationally recognized programs such as LSU, Georgia, Florida, Texas A&M, Mississippi State, Arkansas, and Louisville.\n\nThroughout his career, David has worked alongside 147 NFL Draft selections and was a member of LSU's 2019 National Championship staff. His experience spans roster building, player evaluation, recruiting strategy, and organizational leadership at the highest levels of college football.\n\nDavid holds a bachelor's degree in Business Management from Southeastern Louisiana University.",
    },
    {
      name: "Dave Shumate",
      image: "/images/dave.webp",
      description:
        "Dave has spent over a decade working with major college football programs across the country. He has served as Director of Player Personnel at UCF and Kansas and has led personnel staffs for programs including Texas A&M, Georgia, Auburn, Miami, and the University of Alabama where he earned his bachelor's degree in Communication Studies.\n\nThroughout his career, Dave has worked alongside 102 NFL Draft picks and brings experience from both the college and private sectors, including roles in recruiting service sales and as a Director of NIL Operations for a sports agency.",
    },
  ];

  return (
    <div className="relative w-full bg-[#000A10] overflow-hidden" id="team">
      {/* Floating Blur Circles */}
      <div
        className="absolute opacity-75 w-150 h-114.75 rounded-full blur-[200px]"
        style={{
          background: "#0085CA",
          left: "81px",
          top: "45%",
        }}
      ></div>
      <div
        className="absolute opacity-75 w-114.75 h-114.75 rounded-full blur-[200px]"
        style={{
          background: "#0085CA",
          right: "81px",
          top: "25%",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-10 px-8 py-16.5 max-w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-4">
          <h1 className="font-bebas text-[64px] leading-19.25 text-white text-center tracking-tight">
            MEET THE <span className="text-primary">TEAM</span>
          </h1>

          <p className="font-jost text-[20px] font-bold leading-7.25 text-white text-center uppercase max-w-252.75">
            COMBINED 21 YEARS EXPERIENCE WORKING IN PLAYER PERSONNEL AND FORMER
            PERSONNEL DIRECTORS FOR COLLEGE PROGRAMS.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-310 mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-xl bg-[url('/images/logo.webp')] bg-contain bg-center bg-no-repeat overflow-hidden p-6"
            >
              {/* Background Base */}
              <div className="absolute inset-0 bg-linear-to-t from-[#001522] to-[#001522f3] rounded-xl"></div>

              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-cover pointer-events-none rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center w-full h-full px-6 pt-6 pb-6">
                {/* Circular Image with Border */}
                <div className="relative mb-6 shrink-0">
                  <div className="w-50 h-50 rounded-full border-4 border-primary overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-bebas text-[42px] leading-12.5 text-white text-center tracking-tight mb-4">
                  {member.name}
                </h3>

                {/* Description */}
                <p className="font-jost text-[16px] leading-6.25 text-white text-center whitespace-pre-wrap flex-1">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
