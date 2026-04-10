"use client";
import React, { useState } from "react";
import Message from "../icons/message";
import Link from "next/link";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const INITIAL_ERRORS = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getPhoneDigits = (value) => value.replace(/\D/g, "");

const getUsNationalDigits = (value) => {
  const digits = getPhoneDigits(value);
  if (digits.length > 10 && digits.startsWith("1")) {
    return digits.slice(1, 11);
  }
  return digits.slice(0, 10);
};

const formatUsPhone = (value) => {
  const digits = getUsNationalDigits(value);

  if (!digits) {
    return "";
  }

  if (digits.length < 4) {
    return `(${digits}`;
  }

  if (digits.length < 7) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};



const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState({
    type: "",
    message: "",
  });

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "name":
        if (!trimmedValue) {
          return "Name is required.";
        }
        if (trimmedValue.length < 2) {
          return "Name must be at least 2 characters.";
        }
        return "";

      case "email":
        if (!trimmedValue) {
          return "Email is required.";
        }
        if (!EMAIL_REGEX.test(trimmedValue)) {
          return "Please enter a valid email address.";
        }
        return "";

      case "phone": {
        if (!trimmedValue) {
          return "Phone number is required.";
        }
        const digitsOnly = getPhoneDigits(trimmedValue);
        if (digitsOnly.length !== 10) {
          return "Phone number must be 10 digits.";
        }
        return "";
      }

      case "message":
        if (!trimmedValue) {
          return "Message is required.";
        }
        if (trimmedValue.length < 10) {
          return "Message must be at least 10 characters.";
        }
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const nextErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };

    setErrors(nextErrors);

    return !Object.values(nextErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const nextValue = name === "phone" ? formatUsPhone(value) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitFeedback({ type: "", message: "" });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitFeedback({ type: "", message: "" });

    try {
      const response = await fetch(
        "https://staging.api.prospectintelhq.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: `+1 ${formatUsPhone(formData.phone)}`,
            message: formData.message.trim(),
          }),
        }
      );

      const payload = await response
        .json()
        .catch(() => ({ message: "Unable to parse server response." }));

      if (!response.ok) {
        throw new Error(payload?.message || "Failed to submit the form.");
      }

      setSubmitFeedback({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });
      setFormData(INITIAL_FORM_DATA);
      setErrors(INITIAL_ERRORS);
    } catch (error) {
      setSubmitFeedback({
        type: "error",
        message:
          error?.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <Link href={"mailto:info@prospectintelhq.com"} className="font-jost text-[14px] font-medium leading-5.75 text-white">
                      info@prospectintelhq.com
                    </Link>
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
                noValidate
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
                    onBlur={handleBlur}
                    placeholder="e.g john"
                    className="font-jost text-[14px] leading-5 bg-transparent border-b border-[#4F4F4F] pb-1.5 text-white placeholder-[#5B5B5B] focus:outline-none focus:border-primary transition"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby="name-error"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-[12px] text-[#FF6B6B]">
                      {errors.name}
                    </p>
                  )}
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
                    onBlur={handleBlur}
                    placeholder="e.g john@gmail.com"
                    className="font-jost text-[14px] leading-5 bg-transparent border-b border-[#4F4F4F] pb-1.5 text-white placeholder-[#5B5B5B] focus:outline-none focus:border-primary transition"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby="email-error"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-[12px] text-[#FF6B6B]">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col gap-3">
                  <label className="font-jost text-[14px] leading-5 text-white">
                    Phone Number
                  </label>
                  <div className="flex items-center border-b border-[#4F4F4F] pb-1.75 focus-within:border-primary transition">
                    <span className="font-jost text-[14px] leading-5 text-white select-none mr-2">
                      +1
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g (138) 433-8355"
                      className="font-jost text-[14px] leading-5 bg-transparent text-white placeholder-[#5B5B5B] focus:outline-none transition w-full"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby="phone-error"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={14}
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="text-[12px] text-[#FF6B6B]">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-4">
                  <label className="font-jost text-[14px] leading-5 text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    maxLength={300}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your message here"
                    rows="4"
                    className="font-jost text-[14px] leading-5 bg-transparent border-b border-[#4F4F4F] pb-1.75 text-white placeholder-[#5B5B5B] focus:outline-none focus:border-primary transition resize-none"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby="message-error"
                  />
                  {errors.message && (
                    <p id="message-error" className="text-[12px] text-[#FF6B6B]">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitFeedback.message && (
                  <p
                    className={`text-[13px] ${
                      submitFeedback.type === "success"
                        ? "text-[#8EE6A3]"
                        : "text-[#FF6B6B]"
                    }`}
                  >
                    {submitFeedback.message}
                  </p>
                )}

                {/* Submit Button */}
                <div className="flex justify-start pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-3 bg-primary rounded-lg font-jost text-[16px] font-medium leading-5.75 text-white hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
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
