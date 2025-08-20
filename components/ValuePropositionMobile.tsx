import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Mobile Value Proposition Section Component
function ValuePropositionMobileSection() {
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
            }, 200);

            setTimeout(() => {
              setImageVisible(true);
            }, 600);

            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px" }
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
      className="relative h-screen bg-[#d9d9d9] overflow-hidden flex items-start pt-[25px]"
    >
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Content Section */}
          <div
            className={`transition-all duration-1000 ease-in-out ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="font-georgia text-2xl sm:text-3xl leading-[0.99] text-[#1c1c1c] mb-4">
              Where grown-ups
              <br />
              remember how to play
            </h1>

            <div className="space-y-3 mb-6 w-[80vw] ">
              <p className="font-helvetica font-normal text-sm sm:text-base text-[#1c1c1c] leading-relaxed">
                A set of hand-crafted immersive experiences for your team and
                leadership.
              </p>

              <p className="font-helvetica font-normal text-sm sm:text-base text-[#1c1c1c] leading-relaxed">
                You never learn better than when you don't know that you are
                learning. Through play, touch, wonder, and experimentation, we
                help teams unlearn biases, collaborate organically, and see
                challenges with fresh eyes.
              </p>
            </div>
          </div>
          {/* Image Section */}

          <div className="absolute bottom-0 right-0 w-full max-w-[60vw]">
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
    </section>
  );
}

// Main Mobile Component
export default function ValuePropositionMobile() {
  return (
    <div className="block lg:hidden w-full bg-[#d9d9d9]">
      <ValuePropositionMobileSection />
    </div>
  );
}
