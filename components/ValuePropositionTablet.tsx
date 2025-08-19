import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Tablet Value Proposition Section Component
function ValuePropositionTabletSection() {
  const [contentVisible, setContentVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const valuePropositionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setContentVisible(true);
            }, 300);

            setTimeout(() => {
              setImageVisible(true);
            }, 800);

            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px" }
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
      className="relative h-screen bg-[#d9d9d9] overflow-hidden flex items-center"
    >
      <div className="w-full px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content Section */}
            <div
              className={`transition-all duration-1200 ease-in-out ${
                contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="font-georgia text-3xl md:text-4xl leading-[0.99] text-[#1c1c1c] mb-6">
                Where grown-ups
                <br />
                remember how to play
              </h1>

              <div className="space-y-4">
                <p className="font-sofia-pro font-normal text-base md:text-lg text-[#1c1c1c] leading-relaxed">
                  A set of hand-crafted immersive experiences for your team and
                  leadership.
                </p>

                <p className="font-sofia-pro font-normal text-base md:text-lg text-[#1c1c1c] leading-relaxed">
                  You never learn better than when you don't know that you are learning.
                  Through play, touch, wonder, and experimentation, we help teams
                  unlearn biases, collaborate organically, and see challenges with fresh
                  eyes.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`flex justify-center transition-all duration-1500 ease-out ${
                imageVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <div className="relative w-full max-w-xs">
                <Image
                  src="/images/character-flag.svg"
                  alt="Character running with yellow flag"
                  width={545}
                  height={966}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Tablet Component
export default function ValuePropositionTablet() {
  return (
    <div className="hidden md:block lg:hidden w-full bg-[#d9d9d9]">
      <ValuePropositionTabletSection />
    </div>
  );
}
