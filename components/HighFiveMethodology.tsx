import React from "react";
import Image from "next/image";
import { H2 } from "./Headings";
import { HelveticaDescription } from "./Descriptions";

const HighFiveMethodology: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#d9d9d9] p-8">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Heading */}
        <div>
          <H2 className="font-helvetica text-black leading-[0.99] font-normal mb-[35px]">
            The high-five methodology
          </H2>
        </div>

        {/* Row 2: Two columns - Text content and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
          {/* Left half: Text content */}
          <div className="flex flex-col justify-center" id="content-container">
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              When you consciously unwrap the wrapper of play,
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              the underpinning of the framework become clear as day.
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              You can enter Kolb's learning cycle,
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              where you choose,
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              play as a "state of flow"
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              is hardly breaking news.
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              Glutamate and GABA might spark
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              & shape your brain.
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              When learning becomes fun,
            </HelveticaDescription>
            <HelveticaDescription className="font-helvetica text-[18px] md:text-[24px] lg:text-[34px] text-black leading-normal font-light">
              you will not feel the strain.
            </HelveticaDescription>
          </div>

          {/* Right half: Image */}
          <div className="flex justify-center lg:justify-start items-center">
            <div className="relative w-[200px] md:w-[300px] lg:w-[400px] h-full flex items-center justify-center">
              <Image
                src="/images/five_star.png"
                alt="High Five Methodology Illustration"
                width={100}
                height={100}
                className="object-contain w-full h-full max-h-[380px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighFiveMethodology;
