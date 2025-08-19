import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  illustration: string;
  description: string[] | string;
  className?: string;
  isVisible?: boolean;
  index?: number;
}

function FeatureItem({
  title,
  illustration,
  description,
  className = "",
  isVisible = false,
  index,
}: FeatureProps) {
  return (
    <div
      className={`flex flex-col ${className} w-full text-center items-center justify-start`}
    >
      <h3
        className={`font-sofia-pro font-semibold text-[14px] sm:text-[16px] text-black mb-[12px] sm:mb-[15px] break-words transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {title}
      </h3>
      <div
        className={`mb-[10px] sm:mb-[15px] flex justify-center transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <Image
          src={illustration}
          alt={title}
          width={127}
          height={122}
          className="object-contain w-full max-w-[100px] sm:max-w-[127px]"
        />
      </div>
      <div
        className={`transition-all duration-1000 ease-out delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } w-full`}
      >
        {Array.isArray(description) ? (
          description.map((line, index) => (
            <React.Fragment key={index}>
              <p className="font-sofia-pro font-light text-[12px] sm:text-[16px] text-black leading-[1.4] break-words">
                {line}
              </p>
              {/* {index < description.length - 1 && <br />} */}
            </React.Fragment>
          ))
        ) : (
          <p className="font-sofia-pro font-light text-[14px] sm:text-[16px] text-black leading-[1.4] break-words">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Mobile Features Section Component
function FeaturesMobileSection() {
  const [feature1Visible, setFeature1Visible] = useState(false);
  const [feature2Visible, setFeature2Visible] = useState(false);
  const [feature3Visible, setFeature3Visible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animate features one by one with staggered timing
            setTimeout(() => setFeature1Visible(true), 500);
            setTimeout(() => setFeature2Visible(true), 1200);
            setTimeout(() => setFeature3Visible(true), 1900);
            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset animation states when component goes out of view
            setFeature1Visible(false);
            setFeature2Visible(false);
            setFeature3Visible(false);
            setHasAnimated(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={featuresRef}
      className="w-full bg-white py-[30px] sm:py-[40px] overflow-hidden"
    >
      <div className="px-[16px] sm:px-[20px] lg:px-[30px]">
        <h2 className="font-georgia text-[22px] sm:text-[25px] leading-[1.1] text-black mb-[25px] sm:mb-[30px] break-words">
          The premise of play
        </h2>

        <div className="space-y-[30px] sm:space-y-[40px]">
          <FeatureItem
            title="Zero powerpoints"
            illustration="/images/zero-powerpoints.svg"
            description={[
              "Seriously, haven't you seen them all already?",
              "We believe in experiences that stick, not slides that slip away.",
            ]}
            isVisible={feature1Visible}
            index={1}
          />

          <FeatureItem
            title="Zero jargon"
            illustration="/images/zero-jargon.svg"
            description={[
              "Nobody knows you better than you do.",
              "We simply create the space for your insights to emerge naturally.",
            ]}
            isVisible={feature2Visible}
            index={2}
          />

          <FeatureItem
            title="100% surprises"
            illustration="/images/surprises_v1.png"
            description="When did you last leave a workshop talking about it for weeks? We design moments that delight and memories that matter."
            isVisible={feature3Visible}
            index={3}
          />
        </div>
      </div>
    </section>
  );
}

// Main Mobile Component
export default function FeaturesMobile() {
  return (
    <div className="block lg:hidden w-full bg-white">
      <FeaturesMobileSection />
    </div>
  );
}
