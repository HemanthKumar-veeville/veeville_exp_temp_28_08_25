import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { H1 } from "./Headings";
import { HelveticaDescription } from "./Descriptions";

// Content Component with responsive text sizes
const Content = () => {
  return (
    <div className="order-1 xl:order-1 xl:col-span-3">
      <H1>
        Where grown-ups
        <br />
        remember how to play
      </H1>

      <div className="space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
        <HelveticaDescription className="text-[#1c1c1c]">
          A set of hand-crafted immersive experiences for your team and
          leadership.
        </HelveticaDescription>

        <HelveticaDescription className="text-[#1c1c1c]">
          You never learn better than when you don't know that you are learning.
          Through play, touch, wonder, and experimentation, we help teams
          unlearn biases, collaborate organically, and see challenges with fresh
          eyes.
        </HelveticaDescription>
      </div>
    </div>
  );
};

// Image Component with responsive sizing
const ValueImage = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className="order-2 xl:order-2 xl:col-span-2 flex justify-center xl:justify-end items-center">
      <div
        className={`relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg transition-all duration-2400 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Image
          src="/images/character-flag.svg"
          alt="Character running with yellow flag"
          width={545}
          height={966}
          className="w-full h-auto object-contain max-h-[90vh]"
          priority
        />
      </div>
    </div>
  );
};

// Layout Component with responsive grid
const Layout = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-8 items-center h-full">
        <Content />
        <ValueImage isVisible={isVisible} />
      </div>
    </div>
  );
};

// Main ValueProposition Component
export default function ValueProposition() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const valuePropositionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Trigger animation when component comes into view
            setIsVisible(true);
            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset animation state when component goes out of view
            setIsVisible(false);
            setHasAnimated(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: "0px",
      }
    );

    if (valuePropositionRef.current) {
      observer.observe(valuePropositionRef.current);
    }

    return () => {
      if (valuePropositionRef.current) {
        observer.unobserve(valuePropositionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={valuePropositionRef}
      className="w-full h-screen bg-[#d9d9d9] pt-6 md:pt-8 flex items-center"
    >
      <Layout isVisible={isVisible} />
    </section>
  );
}
