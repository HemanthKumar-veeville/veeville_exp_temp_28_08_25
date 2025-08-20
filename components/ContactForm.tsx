import React from "react";
import Image from "next/image";
import EmailIcon from "./icons/EmailIcon";
import WebsiteIcon from "./icons/WebsiteIcon";

interface FormFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
  isTextarea?: boolean;
}

function FormField({
  label,
  type,
  placeholder,
  className = "",
  isTextarea = false,
}: FormFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block font-helvetica font-light text-white mb-2 lg:text-[18px] text-[9px] lg:leading-[20px] leading-[13px]">
        {label}
      </label>
      <div className="relative">
        {isTextarea ? (
          <textarea
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-white text-white placeholder-white font-helvetica font-light lg:text-[16px] text-[8px] lg:leading-[20px] leading-[15px] py-2 focus:outline-none resize-none h-[60px]"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-white text-white placeholder-white font-helvetica font-light lg:text-[16px] text-[8px] lg:leading-[20px] leading-[15px] py-2 focus:outline-none"
          />
        )}
      </div>
    </div>
  );
}

export default function ContactForm() {
  return (
    <>
      {/* Contact Form Section */}
      <section className="w-full bg-[#565656] lg:py-16 py-8 min-h-screen flex items-center">
        <div className="max-w-[1440px] mx-auto lg:px-[155px] px-[29px] w-full">
          <form className="space-y-6">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4">
              <FormField label="First Name" type="text" />
              <FormField label="Last Name" type="text" />
            </div>

            {/* Email and Organization Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4">
              <FormField label="Email" type="email" />
              <FormField label="Organization" type="text" />
            </div>

            {/* Team Size */}
            <FormField
              label="Approximate Team Size"
              type="text"
              className="lg:max-w-[467px]"
            />

            {/* Message */}
            <FormField
              label="What challenge or opportunity brings you here?"
              type="text"
              placeholder="Write your message.."
              isTextarea={true}
              className="lg:max-w-[1049px]"
            />

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-white text-[#2d2d2d] font-helvetica font-bold lg:text-[24px] text-[9px] lg:px-[80px] px-[40px] lg:py-[14px] py-[8px] rounded-full hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
