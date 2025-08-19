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
      {/* Desktop Layout */}
      <div className="hidden lg:block h-full max-h-full">
        <h3
          className={`text-black font-[622] font-sofia-pro text-[34px] not-italic leading-normal break-words transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {title}
        </h3>
        <div
          className={`mb-[15px] xl:mb-[17px] transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Image
            src={illustration}
            alt={title}
            width={100}
            height={100}
            className="object-contain w-[200px] h-auto max-h-[200px]"
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
                <p className="text-black font-sofia-light text-[28px]">
                  {line}
                </p>
                {index < description.length - 1 && <br />}
              </React.Fragment>
            ))
          ) : (
            <p className="text-black font-sofia-light text-[28px]">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden">
        <h3
          className={`font-sofia-pro font-semibold text-[20px] lg:text-[24px] text-black mb-[20px] lg:mb-[25px] break-words transition-all duration-1000 ease-out ${
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
        <p
          className={`font-sofia-pro font-light text-[16px] lg:text-[20px] text-black leading-[1.3] lg:leading-normal break-words transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
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
        <p
          className={`font-sofia-pro font-light text-[14px] sm:text-[16px] text-black leading-[1.4] break-words transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// Desktop Features Component
function DesktopFeatures() {
  const [feature1Visible, setFeature1Visible] = useState(false);
  const [feature2Visible, setFeature2Visible] = useState(false);
  const [feature3Visible, setFeature3Visible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const desktopRef = useRef<HTMLElement>(null);

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

    if (desktopRef.current) {
      observer.observe(desktopRef.current);
    }

    return () => {
      if (desktopRef.current) {
        observer.unobserve(desktopRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={desktopRef}
      className="hidden lg:block w-full bg-white py-[25px] xl:py-[30px] overflow-hidden h-full max-h-screen"
    >
      <div className="max-w-[1440px] mx-auto px-[40px] xl:px-[60px]">
        <h2 className="font-georgia text-[60px] xl:text-[80px] leading-[1.1] xl:leading-[0.99] text-black mb-[40px] xl:mb-[63px] break-words">
          The premise of play
        </h2>

        <div className="grid grid-cols-3 gap-[40px] lg:gap-[60px] xl:gap-[80px] 2xl:gap-[160px]">
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

// Tablet Features Component
function TabletFeatures() {
  const [feature1Visible, setFeature1Visible] = useState(false);
  const [feature2Visible, setFeature2Visible] = useState(false);
  const [feature3Visible, setFeature3Visible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const tabletRef = useRef<HTMLElement>(null);

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

    if (tabletRef.current) {
      observer.observe(tabletRef.current);
    }

    return () => {
      if (tabletRef.current) {
        observer.unobserve(tabletRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={tabletRef}
      className="hidden md:block lg:hidden w-full bg-white py-[40px] lg:py-[60px] overflow-hidden"
    >
      <div className="max-w-[1024px] mx-auto px-[30px] lg:px-[40px]">
        <h2 className="font-georgia text-[40px] lg:text-[50px] leading-[1.1] lg:leading-[0.99] text-black mb-[30px] lg:mb-[40px] break-words">
          The premise of play
        </h2>

        <div className="grid grid-cols-3 gap-[20px] lg:gap-[40px]">
          <FeatureItem
            title="Zero powerpoints"
            illustration="/images/zero-powerpoints.svg"
            description="Seriously, haven't you seen them all already?

We believe in experiences that stick, not slides that slip away."
            isVisible={feature1Visible}
          />

          <FeatureItem
            title="Zero jargon"
            illustration="/images/zero-jargon.svg"
            description="Nobody knows you better than you do.

We simply create the space for your insights to emerge naturally."
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

// Mobile Features Component
function MobileFeatures() {
  const [feature1Visible, setFeature1Visible] = useState(false);
  const [feature2Visible, setFeature2Visible] = useState(false);
  const [feature3Visible, setFeature3Visible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const mobileRef = useRef<HTMLElement>(null);

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

    if (mobileRef.current) {
      observer.observe(mobileRef.current);
    }

    return () => {
      if (mobileRef.current) {
        observer.unobserve(mobileRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={mobileRef}
      className="md:hidden w-full bg-white py-[30px] sm:py-[40px] overflow-hidden"
    >
      <div className="px-[16px] sm:px-[20px] lg:px-[30px]">
        <h2 className="font-georgia text-[22px] sm:text-[25px] leading-[1.1] text-black mb-[25px] sm:mb-[30px] break-words">
          The premise of play
        </h2>

        <div className="space-y-[30px] sm:space-y-[40px]">
          <FeatureItem
            title="Zero powerpoints"
            illustration="/images/zero-powerpoints.svg"
            description="Seriously, haven't you seen them all already?

We believe in experiences that stick, not slides that slip away."
            isVisible={feature1Visible}
          />

          <FeatureItem
            title="Zero jargon"
            illustration="/images/zero-jargon.svg"
            description="Nobody knows you better than you do.

We simply create the space for your insights to emerge naturally."
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

export default function Features() {
  return (
    <>
      <DesktopFeatures />
      <TabletFeatures />
      <MobileFeatures />
    </>
  );
}
