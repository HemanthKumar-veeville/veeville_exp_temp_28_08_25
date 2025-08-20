import React from "react";
import Image from "next/image";
import { H2 } from "./Headings";
import { HelveticaDescription } from "./Descriptions";
import { Mail, Globe } from "lucide-react";
const Rediscover: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#d9d9d9] p-8">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Row 1: Heading */}
        <div>
          <H2 className="font-helvetica text-[40px] md:text-[60px] lg:text-[80px] text-black leading-[0.99] font-normal">
            Ready to rediscover wonder?
          </H2>
        </div>

        {/* Row 2: Description */}
        <div className="flex flex-col gap-2">
          <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
            Let’s explore how your team can achieve extraordinary results
            <br /> through extraordinary experiences
          </HelveticaDescription>
          <div className="flex items-center gap-2">
            {/* mail icon */}
            <Mail className="w-6 h-6" />
            <span className="font-helvetica-light text-black text-[18px] not-italic leading-normal">
              experiences@veeville.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* globe icon */}
            <Globe className="w-6 h-6" />
            <span className="font-helvetica-light text-black text-[18px] not-italic leading-normal">
              veevillexp.com
            </span>
          </div>
        </div>

        {/* row 3 should have the logo grid of 2 rows: first row with 3 images, second row with 4 images */}
        <div className="flex flex-col gap-8">
          {/* First row: 3 images */}
          <div className="grid grid-cols-3 gap-4 items-center justify-center">
            <Image
              src="/images/action_exp.png"
              alt="logo1"
              width={100}
              height={100}
              className="w-[200px] h-auto object-contain"
            />
            <Image
              src="/images/what_next.png"
              alt="logo2"
              width={100}
              height={100}
              className="w-[130px] h-auto object-contain"
            />
            <Image
              src="/images/bubble.png"
              alt="logo5"
              width={100}
              height={100}
              className="w-[150px] h-auto object-contain"
            />
          </div>

          {/* Second row: 4 images */}
          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            <Image
              src="/images/brownbox.png"
              alt="logo4"
              width={100}
              height={100}
              className="w-[100px] h-auto object-contain"
            />
            <Image
              src="/images/ailimpix.png"
              alt="logo3"
              width={100}
              height={100}
              className="w-[150px] h-auto object-contain"
            />
            <Image
              src="/images/writebrain.png"
              alt="logo6"
              width={100}
              height={100}
              className="w-[100px] h-auto object-contain"
            />
            <Image
              src="/images/bluff.png"
              alt="logo7"
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rediscover;
