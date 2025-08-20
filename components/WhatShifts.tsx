import React from "react";
import { H2 } from "./Headings";
import { HelveticaDescription, CasualHumanDescription } from "./Descriptions";

const WhatShifts: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white p-8" data-name="what_shifts">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-8">
          {/* Main heading - "What shifts" */}
          <H2 className="mb-[35px] leading-[0.99] text-black w-[48rem]">
            What shifts
          </H2>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-16 items-start">
          {/* Left half - Text content */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              {/* Main description paragraph */}
              <HelveticaDescription className="font-helvetica-light text-2xl md:text-3xl lg:text-[37px] leading-normal text-[#000000]">
                You already have the tools. We help you sharpen them and make
                the process fun and enjoyable. Reframe complex challenges with
                simplicity and humour, build without instructions and listen
                without bias. Go back more aware, present and curious.
              </HelveticaDescription>

              {/* Bottom description */}
              <HelveticaDescription className="font-helvetica-light text-2xl md:text-3xl lg:text-[37px] leading-normal text-[#000000]">
                Solve business problems faster, strengthen trust and
                psychological safety, enhance creative confidence and
                storytelling, make better decisions under ambiguity... and much,
                much more!
              </HelveticaDescription>
              <HelveticaDescription className="font-helvetica-light text-2xl md:text-3xl lg:text-[37px] leading-normal text-[#000000]">
                Think like a 5 year-old and lead like a grown up!
              </HelveticaDescription>
            </div>
          </div>

          {/* Right half - Image */}
          <div className="flex-1">
            <img
              src="/images/creative_box.png"
              alt="Creative box illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatShifts;
