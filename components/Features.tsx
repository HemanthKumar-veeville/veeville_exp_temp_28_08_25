import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { H2, H3 } from "./Headings";
import { HelveticaDescription } from "./Descriptions";

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
      <H3
        className={`transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 invisible"
        }`}
      >
        {title}
      </H3>
      <div
        className={`mb-[10px] sm:mb-[12px] md:mb-[15px] lg:mb-[15px] xl:mb-[17px] flex justify-center transition-all duration-1000 ease-out delay-200 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 invisible"
        }`}
      >
        <Image
          src={illustration}
          alt={title}
          width={200}
          height={200}
          className="object-contain w-full max-w-[100px] sm:max-w-[127px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px]"
        />
      </div>
      <div
        className={`transition-all duration-1000 ease-out delay-400 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 invisible"
        }`}
      >
        {Array.isArray(description) ? (
          description.map((line, index) => (
            <React.Fragment key={index}>
              <HelveticaDescription className="text-sm sm:text-base md:text-base lg:text-base leading-[1.4] md:leading-[1.3] lg:leading-normal">
                {line}
              </HelveticaDescription>
            </React.Fragment>
          ))
        ) : (
          <HelveticaDescription className="text-sm sm:text-base md:text-base lg:text-base leading-[1.4] md:leading-[1.3] lg:leading-normal">
            {description}
          </HelveticaDescription>
        )}
      </div>
    </div>
  );
}

// Main Features Component
export default function Features() {
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
      className="w-full bg-white py-[30px] sm:py-[40px] md:py-[40px] lg:py-[25px] xl:py-[30px] overflow-hidden h-full max-h-screen"
    >
      <div className="px-[16px] sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[60px] max-w-[1440px] mx-auto">
        <H2 className="leading-[0.99] text-black mb-[50px]">
          The premise of play
        </H2>
        <div className="space-y-[30px] sm:space-y-[40px] md:grid md:grid-cols-3 md:gap-[20px] lg:gap-[40px] lg:grid-cols-3 lg:gap-[40px] xl:gap-[60px] 2xl:gap-[160px]">
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
            illustration="/images/surprises_v1.png"
            description="When did you last leave a workshop talking about it for weeks? We design moments that delight and memories that matter."
            isVisible={feature3Visible}
          />
        </div>
      </div>
    </section>
  );
}
