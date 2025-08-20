import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { H2 } from "./Headings";
import { HelveticaDescription } from "./Descriptions";

const HighFiveMethodology: React.FC = () => {
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
    <div ref={sectionRef} className="w-full min-h-screen bg-[#d9d9d9] p-8">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Heading */}
        <div>
          <H2
            className={`font-helvetica text-black leading-[0.99] font-normal mb-[35px] ${
              headingVisible ? "transition-all duration-1800 ease-out" : ""
            } ${
              headingVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 invisible"
            }`}
          >
            The high-five methodology
          </H2>
        </div>

        {/* Row 2: Two columns - Text content and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
          {/* Left half: Text content */}
          <div
            className={`flex flex-col justify-center ${
              contentVisible ? "transition-all duration-1800 ease-out" : ""
            } ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 invisible"
            }`}
            id="content-container"
          >
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
          <div
            className={`flex justify-center lg:justify-start items-center ${
              imageVisible ? "transition-all duration-1800 ease-out" : ""
            } ${
              imageVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 invisible"
            }`}
          >
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
