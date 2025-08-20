import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  illustration: string;
  description: string[] | string;
  className?: string;
  isVisible?: boolean;
}

function FeatureItem({
  title,
  illustration,
  description,
  className = "",
  isVisible = false,
}: FeatureProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3
        className={`font-helvetica font-semibold text-[20px] lg:text-[24px] text-black mb-[20px] lg:mb-[25px] break-words transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {title}
      </h3>
      <div
        className={`mb-[12px] lg:mb-[15px] flex justify-center transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <Image
          src={illustration}
          alt={title}
          width={180}
          height={150}
          className="object-contain w-full max-w-[160px] lg:max-w-[180px]"
        />
      </div>
      <div
        className={`transition-all duration-1000 ease-out delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {Array.isArray(description) ? (
          description.map((line, index) => (
            <React.Fragment key={index}>
              <p className="font-helvetica font-light text-[16px] lg:text-[20px] text-black leading-[1.3] lg:leading-normal break-words">
                {line}
              </p>
              {index < description.length - 1 && <br />}
            </React.Fragment>
          ))
        ) : (
          <p className="font-helvetica font-light text-[16px] lg:text-[20px] text-black leading-[1.3] lg:leading-normal break-words">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Tablet Features Section Component
function FeaturesTabletSection() {
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
      className="w-full bg-white py-[40px] lg:py-[60px] overflow-hidden"
    >
      <div className="max-w-[1024px] mx-auto px-[30px] lg:px-[40px]">
        <h2 className="font-georgia text-[40px] lg:text-[50px] leading-[1.1] lg:leading-[0.99] text-black mb-[30px] lg:mb-[40px] break-words">
          The premise of play
        </h2>

        <div className="grid grid-cols-3 gap-[20px] lg:gap-[40px]">
          <FeatureItem
            title="Zero powerpoints"
            illustration="/images/zero-powerpoints.svg"
            description={[
              "Seriously, haven't you seen them all already?",
              "We believe in experiences that stick, not slides that slip away.",
            ]}
            isVisible={feature1Visible}
          />

          <FeatureItem
            title="Zero jargon"
            illustration="/images/zero-jargon.svg"
            description={[
              "Nobody knows you better than you do.",
              "We simply create the space for your insights to emerge naturally.",
            ]}
            isVisible={feature2Visible}
          />

          <FeatureItem
            title="100% surprises"
            illustration="/images/surprises.svg"
            description="When did you last leave a workshop talking about it for weeks? We design moments that delight and memories that matter."
            isVisible={feature3Visible}
          />
        </div>
      </div>
    </section>
  );
}

// Main Tablet Component
export default function FeaturesTablet() {
  return (
    <div className="hidden md:block lg:hidden w-full bg-white">
      <FeaturesTabletSection />
    </div>
  );
}
