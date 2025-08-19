import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Logo Section Component
function LogoSection({
  isVisible,
  isPositioned,
}: {
  isVisible: boolean;
  isPositioned: boolean;
}) {
  return (
    <div
      className={`absolute z-10 transition-all duration-1500 ease-in-out ${
        isVisible
          ? isPositioned
            ? "top-4 left-4 lg:top-8 lg:left-8 xl:top-12 xl:left-12 2xl:top-16 2xl:left-16 opacity-100"
            : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100"
          : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
      }`}
    >
      <div className="mb-16 lg:mb-20 xl:mb-24 2xl:mb-32">
        <Image
          src="/images/experiences-logo.svg"
          alt="experiences/"
          width={1242}
          height={223}
          className="w-[70vw] h-auto"
          priority
        />
        <Image
          src="/images/veeville-text.svg"
          alt="Veeville."
          width={489}
          height={104}
          className="w-[25vw] h-auto mt-2"
          priority
        />
      </div>
    </div>
  );
}

// Pablo Hand Quote Component
function PabloQuote({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`absolute bottom-4 left-4 lg:bottom-8 lg:left-8 xl:bottom-12 xl:left-12 2xl:bottom-16 2xl:left-16 z-10 transition-opacity duration-1200 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src="/images/pablo_hand_quote.png"
        alt="Pablo Picasso Hand Quote"
        width={589}
        height={358}
        className="w-[25vw] h-auto"
        priority
      />
    </div>
  );
}

// Hero Desk Image Component
function HeroDeskImage({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`absolute bottom-0 right-0 z-0 transition-transform duration-1800 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Image
        src="/images/hero_desk.png"
        alt="Hero Desk"
        width={1000}
        height={1000}
        className="w-64 lg:w-80 xl:w-96 2xl:w-[28rem] h-auto object-contain"
        priority
      />
    </div>
  );
}

// Main Hero Component
export default function Hero() {
  const [logoVisible, setLogoVisible] = useState(true); // Start with logo visible
  const [logoPositioned, setLogoPositioned] = useState(false);
  const [deskVisible, setDeskVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Reset animation states (keep logo visible, hide other elements)
            setLogoPositioned(false);
            setDeskVisible(false);
            setQuoteVisible(false);

            // Start logo and desk animations
            setTimeout(() => {
              setLogoPositioned(true);
              setDeskVisible(true);
            }, 300);

            // Start quote animation at 1800ms
            setTimeout(() => {
              setQuoteVisible(true);
            }, 1800);

            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset hasAnimated when component goes out of view
            setHasAnimated(false);
            // Keep logo visible but hide other elements when going out of view
            setLogoPositioned(false);
            setDeskVisible(false);
            setQuoteVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
        rootMargin: "0px",
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={heroRef}
      className="hidden lg:block w-full h-screen relative bg-white overflow-hidden"
    >
      <LogoSection isVisible={logoVisible} isPositioned={logoPositioned} />
      <PabloQuote isVisible={quoteVisible} />
      <HeroDeskImage isVisible={deskVisible} />
    </section>
  );
}
