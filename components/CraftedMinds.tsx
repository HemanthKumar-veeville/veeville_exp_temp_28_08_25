import React from "react";
import Image from "next/image";
import { H2 } from "./Headings";
import { HelveticaDescription, CasualHumanDescription } from "./Descriptions";

const CraftedMinds: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#d9d9d9] p-8"
      data-name="crafted_minds"
    >
      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="flex gap-16 items-start">
          {/* Left half - Text content including heading */}
          <div className="flex-1">
            {/* Main heading - "Crafted for the minds that matter" */}
            <H2 className="mb-[35px] leading-[0.99] text-black w-[48rem]">
              Crafted for the minds that matter
            </H2>

            <div className="flex flex-col gap-4">
              {/* Subheading - "Bespoke experience for" */}
              <HelveticaDescription className="font-helvetica-light text-2xl md:text-3xl lg:text-[37px] leading-normal text-[#000000]">
                Bespoke experience for
              </HelveticaDescription>

              {/* Three category words */}
              <div className="flex flex-wrap gap-8 lg:gap-16 lg:justify-between lg:w-[48rem]">
                {["Management", "Teams", "Leadership"].map((category, idx) => (
                  <CasualHumanDescription
                    key={category}
                    className="font-casual-human text-2xl md:text-3xl lg:text-[34px] leading-normal text-[#2d2d2d]"
                  >
                    <div className="flex gap-2 items-baseline justify-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="21"
                          viewBox="0 0 19 21"
                          fill="none"
                        >
                          <path
                            d="M18.9937 10.8614C18.6603 21.2164 4.39238 25.3449 0.32536 15.0237C0.32536 10.8952 -1.70815 2.60445 4.39239 0.540212C10.4929 -1.52403 16.6269 2.60445 18.727 8.22189C18.9271 9.06789 19.027 9.94773 18.9937 10.8614Z"
                            fill="#2D2D2D"
                          />
                        </svg>
                      </span>
                      <span>{category}</span>
                    </div>
                  </CasualHumanDescription>
                ))}
              </div>

              {/* Quote section */}
              <div className="flex flex-col gap-4 mt-8 w-[23rem]">
                <CasualHumanDescription>
                  GIVE ME SIX Hours To CHOP A TREE
                  <br />
                  AND I WILL SPEND THE FIRST FOUR
                  <br />
                  HOURS SHARPENING THE AXE
                </CasualHumanDescription>
                <CasualHumanDescription className="text-right">
                  -ABRAHAM LINCOLN
                </CasualHumanDescription>
              </div>
            </div>
          </div>

          {/* Right half - Image */}
          <div className="flex-1 h-full flex items-center justify-center">
            <Image
              src="/images/pokemon_pencil.png"
              alt="Brochure Inside Layout"
              width={400}
              height={600}
              className="w-auto h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftedMinds;
