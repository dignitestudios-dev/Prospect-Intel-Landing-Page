"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "MEET THE TEAM", href: "#team" },
    { label: "SCHEDULE DEMO", href: "#demo" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { root: null, threshold: [0.45] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-[#000a10b8] backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="flex flex-row items-center justify-between px-6 sm:px-8 md:px-16 lg:px-25 py-4">
        <div className="flex gap-1 items-center">
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={60}
            height={60}
            className="w-full h-full object-cover"
          />
          <div className="hidden sm:flex flex-col">
            <div className="text-2xl font-bold text-white -mb-2.5">
              PROSPECT
            </div>
            <div className="text-2xl text-primary">INTEL</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[20px] text-white font-bebas transition ${
                activeLink === link.href &&
                "underline underline-offset-[6px] decoration-primary decoration-2"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-black">
              Contact us
            </button>
            <button className="px-3 py-2 bg-white/5 border border-white rounded-lg text-sm text-white">
              Login
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-md bg-white/5 border border-white"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile slide-in menu */}
        <div
          className={`fixed inset-0 z-50 transition-opacity h-screen duration-300 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setMenuOpen(false)}
          />

          <aside
            className={`fixed top-0 right-0 h-full w-[280px] sm:w-[340px] bg-[#001522] transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.webp"
                  alt="Logo"
                  className="w-11 h-11 object-cover rounded"
                />
                <div className="flex flex-col leading-[1]">
                  <div className="text-base font-bold text-white">PROSPECT</div>
                  <div className="text-xs text-primary">INTEL</div>
                </div>
              </div>
              <button
                className="p-2 rounded-md bg-white/5 border border-white"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg py-2 px-2 rounded transition ${
                    activeLink === link.href
                      ? "text-primary underline decoration-primary decoration-2"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4">
                <button className="w-full py-3 bg-primary rounded-lg text-white">
                  Schedule a Demo
                </button>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
