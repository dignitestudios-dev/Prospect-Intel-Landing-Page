"use client";
import React, { useState } from "react";
import Message from "../icons/message";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="relative w-full bg-[#000A10] overflow-hidden" id="demo">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-4.5 px-8 py-16.5">
        {/* Main Heading */}
        <h1 className="font-bebas text-[64px] leading-19.25 text-white text-center tracking-tight w-full">
          CONTACT US
        </h1>

        {/* Contact Section Container */}
        <div className="w-full max-w-310 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg">
            {/* Left Section - Message & Image */}
            <div
              className="flex flex-col justify-start gap-7 p-12.5 rounded-tl-lg rounded-bl-lg lg:rounded-tr-none"
              style={{
                background:
                  "linear-gradient(0deg,rgba(0, 10, 16, 0.4), rgba(0, 10, 16, 0.8)), url(/images/contact.webp)",
                backgroundSize: "cover",
              }}
            >
              {/* Content Text */}
              <div className="flex flex-col gap-5">
                <h2 className="font-jost text-[32px] font-bold leading-8.75 text-white -tracking-wide">
                  Let's Connect and Create Together!
                </h2>
                <p className="font-jost text-[14px] leading-5 text-white">
                  Have questions or feedback? Get in touch with our friendly
                  support team for assistance. We're here to help!
                </p>
              </div>

              {/* Email Display */}
              <div>
                <p className="font-jost text-[12px] leading-5 text-white">
                  Email
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <Message />
                  <div>
                    <p className="font-jost text-[14px] font-medium leading-5.75 text-white">
                      info@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div
              className="flex flex-col justify-start gap-9 p-10.75 lg:p-16 rounded-tr-lg rounded-br-lg lg:rounded-tl-none"
              style={{
                background: "rgba(16, 34, 68, 0.2)",
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5.25 w-full"
              >
                {/* Name Field */}
                <div className="flex flex-col gap-3.25">
                  <label className="font-jost text-[14px] leading-5 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g john"
                    className="font-jost text-[14px] leading-5 bg-transparent border-b border-[#4F4F4F] pb-1.5 text-white placeholder-[#5B5B5B] focus:outline-none focus:border-primary transition"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-3.25">
                  <label className="font-jost text-[14px] leading-5 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g john@gmail.com"
                    className="font-jost text-[14px] leading-5 bg-transparent border-b border-[#4F4F4F] pb-1.5 text-white placeholder-[#5B5B5B] focus:outline-none focus:border-primary transition"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col gap-3">
                  <label className="font-jost text-[14px] leading-5 text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g 0491 570 156"
                    className="font-jost text-[14px] leading-5 bg-transparent border-b border-[#4F4F4F] pb-1.75 text-white placeholder-[#5B5B5B] focus:outline-none focus:border-primary transition"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-4">
                  <label className="font-jost text-[14px] leading-5 text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here"
                    rows="4"
                    className="font-jost text-[14px] leading-5 bg-transparent border-b border-[#4F4F4F] pb-1.75 text-white placeholder-[#5B5B5B] focus:outline-none focus:border-primary transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start pt-6">
                  <button
                    type="submit"
                    className="px-10 py-3 bg-primary rounded-lg font-jost text-[16px] font-medium leading-5.75 text-white hover:opacity-90 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
