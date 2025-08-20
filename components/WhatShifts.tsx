import React, { useState, useEffect, useRef } from "react";
import { H2 } from "./Headings";
import { HelveticaDescription, CasualHumanDescription } from "./Descriptions";

const WhatShifts: React.FC = () => {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animate elements one by one with staggered timing
            setTimeout(() => setHeadingVisible(true), 300);
            setTimeout(() => setImageVisible(true), 600);
            setTimeout(() => setContentVisible(true), 2400); // 600ms + 1800ms (image animation duration)
            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset animation states instantly when component goes out of view
            setHeadingVisible(false);
            setContentVisible(false);
            setImageVisible(false);
            setHasAnimated(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-white p-8"
      data-name="what_shifts"
    >
      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-8">
          {/* Main heading - "What shifts" */}
          <H2
            className={`mb-[35px] leading-[0.99] text-black w-[48rem] ${
              headingVisible ? "transition-all duration-1800 ease-out" : ""
            } ${
              headingVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 invisible"
            }`}
          >
            What shifts
          </H2>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-16 items-start">
          {/* Left half - Text content */}
          <div className="flex-1">
            <div
              className={`flex flex-col gap-4 ${
                contentVisible ? "transition-all duration-1800 ease-out" : ""
              } ${
                contentVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0 invisible"
              }`}
            >
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
          <div
            className={`flex-1 ${
              imageVisible ? "transition-all duration-1800 ease-out" : ""
            } ${
              imageVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 invisible"
            }`}
          >
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
