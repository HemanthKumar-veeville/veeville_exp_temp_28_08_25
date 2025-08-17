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
    <div className={`mb-6 ${className}`}>
      <label className="block font-sofia-pro font-light text-white mb-2 lg:text-[20px] text-[9px] lg:leading-[20px] leading-[13px]">
        {label}
      </label>
      <div className="relative">
        {isTextarea ? (
          <textarea
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-white text-white placeholder-white font-sofia-pro font-light lg:text-[18px] text-[8px] lg:leading-[20px] leading-[15px] py-2 focus:outline-none resize-none h-[60px]"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-white text-white placeholder-white font-sofia-pro font-light lg:text-[18px] text-[8px] lg:leading-[20px] leading-[15px] py-2 focus:outline-none"
          />
        )}
      </div>
    </div>
  );
}

export default function ContactForm() {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block w-full bg-white py-[89px]">
        <div className="max-w-[1440px] mx-auto px-[62px]">
          {/* Call to Action */}
          <div className="mb-[118px]">
            <h2 className="font-georgia text-[80px] leading-[0.99] text-black mb-[18px]">
              Ready to rediscover wonder?
            </h2>
            <p className="font-sofia-pro font-light text-[34px] text-black mb-[21px] max-w-[981px]">
              Let's explore how your team can achieve extraordinary results through extraordinary experiences
            </p>
            
            {/* Contact Information */}
            <div className="space-y-[25px]">
              <div className="flex items-center">
                <EmailIcon width={26} height={21} color="#000000" />
                <span className="font-sofia-pro font-light text-[24px] text-black ml-[19px]">
                  experiences@veeville.com
                </span>
              </div>
              <div className="flex items-center">
                <WebsiteIcon width={25} height={25} color="#000000" />
                <span className="font-sofia-pro font-light text-[24px] text-black ml-[20px]">
                  veevillexp.com
                </span>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-4 gap-[100px] items-center justify-items-center mb-[112px]">
            <Image src="/images/clients/ge-healthcare.svg" alt="Partner logo" width={339} height={126} className="grayscale opacity-60" />
            <Image src="/images/clients/pepsico.svg" alt="Partner logo" width={187} height={166} className="grayscale opacity-60" />
            <Image src="/images/clients/hp-enterprise.svg" alt="Partner logo" width={388} height={151} className="grayscale opacity-60" />
            <Image src="/images/clients/gsk.svg" alt="Partner logo" width={163} height={207} className="grayscale opacity-60" />
          </div>
          
          <div className="grid grid-cols-4 gap-[100px] items-center justify-items-center mb-[112px]">
            <Image src="/images/clients/springer-nature.svg" alt="Partner logo" width={242} height={200} className="grayscale opacity-60" />
            <Image src="/images/clients/wrangler.svg" alt="Partner logo" width={210} height={204} className="grayscale opacity-60" />
            <Image src="/images/clients/dell.svg" alt="Partner logo" width={109} height={192} className="grayscale opacity-60" />
            <Image src="/images/clients/shell.svg" alt="Partner logo" width={197} height={60} className="grayscale opacity-60" />
          </div>

          {/* Colorful Stars */}
          <div className="flex justify-center mb-[112px]">
            <Image
              src="/images/colorful-stars.svg"
              alt="Colorful decorative stars"
              width={1440}
              height={802}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-[#565656] lg:py-[153px] py-[60px]">
        <div className="max-w-[1440px] mx-auto lg:px-[155px] px-[29px]">
          <form className="space-y-8">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[175px] gap-4">
              <FormField
                label="First Name"
                type="text"
              />
              <FormField
                label="Last Name"
                type="text"
              />
            </div>

            {/* Email and Organization Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[175px] gap-4">
              <FormField
                label="Email"
                type="email"
              />
              <FormField
                label="Organization"
                type="text"
              />
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
            <div className="lg:pt-[45px] pt-[20px]">
              <button
                type="submit"
                className="bg-white text-[#2d2d2d] font-sofia-pro font-bold lg:text-[27px] text-[9px] lg:px-[97px] px-[40px] lg:py-[16px] py-[8px] rounded-full hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom Illustration */}
      <section className="w-full bg-[#565656]">
        <div className="max-w-[1440px] mx-auto">
          <Image
            src="/images/bottom-illustration.svg"
            alt="Bottom decorative illustration"
            width={1440}
            height={802}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Mobile Version - Colorful Stars */}
      <section className="lg:hidden w-full bg-white py-[40px]">
        <div className="px-[30px]">
          {/* Call to Action */}
          <div className="mb-[40px]">
            <h2 className="font-georgia text-[25px] leading-[0.99] text-black mb-[10px]">
              Ready to rediscover wonder?
            </h2>
            <p className="font-sofia-pro font-light text-[12px] text-black mb-[15px]">
              Let's explore how your team can achieve extraordinary results through extraordinary experiences
            </p>
            
            {/* Contact Information */}
            <div className="space-y-[10px]">
              <div className="flex items-center">
                <EmailIcon width={16} height={13} color="#000000" />
                <span className="font-sofia-pro font-light text-[9px] text-black ml-[10px]">
                  experiences@veeville.com
                </span>
              </div>
              <div className="flex items-center">
                <WebsiteIcon width={14} height={14} color="#000000" />
                <span className="font-sofia-pro font-light text-[9px] text-black ml-[10px]">
                  veevillexp.com
                </span>
              </div>
            </div>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 gap-[20px] items-center justify-items-center mb-[40px]">
            <Image src="/images/clients/ge-healthcare.svg" alt="Partner logo" width={90} height={33} className="grayscale opacity-60" />
            <Image src="/images/clients/pepsico.svg" alt="Partner logo" width={50} height={44} className="grayscale opacity-60" />
            <Image src="/images/clients/hp-enterprise.svg" alt="Partner logo" width={103} height={40} className="grayscale opacity-60" />
            <Image src="/images/clients/gsk.svg" alt="Partner logo" width={43} height={55} className="grayscale opacity-60" />
            <Image src="/images/clients/springer-nature.svg" alt="Partner logo" width={64} height={53} className="grayscale opacity-60" />
            <Image src="/images/clients/wrangler.svg" alt="Partner logo" width={56} height={54} className="grayscale opacity-60" />
            <Image src="/images/clients/dell.svg" alt="Partner logo" width={29} height={51} className="grayscale opacity-60" />
            <Image src="/images/clients/shell.svg" alt="Partner logo" width={52} height={16} className="grayscale opacity-60" />
          </div>

          {/* Colorful Stars */}
          <div className="flex justify-center">
            <Image
              src="/images/colorful-stars.svg"
              alt="Colorful decorative stars"
              width={393}
              height={241}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}