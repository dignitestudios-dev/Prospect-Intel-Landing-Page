import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 002.856-3.51 10.019 10.019 0 01-2.836.856 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram-icon lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full bg-[#00060F] overflow-hidden">
      {/* Decorative Background Elements */}
      <div
        className="absolute -left-47 -bottom-10 w-97.75 h-97.75 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url(/images/logo.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute -right-47 -bottom-10 w-97.75 h-97.75 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url(/images/logo.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-12 px-8 py-12 max-w-full">
        {/* Social Media Section */}
        <div className="flex flex-col items-center gap-6 max-w-95.25 mx-auto">
          {/* Text */}
          <p className="font-manrope text-center text-[16px] font-semibold leading-4.5 text-white">
            Stay up-to-date with the latest news and updates by following us on
            social media
          </p>

          {/* Social Icons */}
          <div className="flex flex-row items-center gap-6 justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                aria-label={link.name}
                className="flex items-center justify-center w-10.75 h-10.75 rounded-full border border-white hover:border-primary text-white transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-white opacity-50"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          {/* Copyright */}
          <p className="font-inter text-[14px] font-light leading-4 text-white">
            Copyright © 2025 ProspectIntel. All rights reserved.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col items-end gap-2">
            <h3 className="font-inter text-[20px] font-semibold leading-5.75 text-white">
              We're always happy to help.
            </h3>
            <p className="font-axiforma text-[13px] leading-5.25 text-white">
              info@example.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
