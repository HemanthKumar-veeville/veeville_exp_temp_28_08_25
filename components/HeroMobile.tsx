import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Mobile Hero Section Component
function MobileHeroSection() {
  const [logoVisible, setLogoVisible] = useState(true);
  const [logoPositioned, setLogoPositioned] = useState(false);
  const [deskVisible, setDeskVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setLogoPositioned(true);
              setContentVisible(true);
            }, 200);

            setTimeout(() => {
              setDeskVisible(true);
            }, 600);

            setTimeout(() => {
              setQuoteVisible(true);
            }, 1200);

            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px" }
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
      className="relative h-screen bg-white overflow-hidden"
    >
      {/* Logo Section */}
      <div
        className={`absolute z-10 transition-all duration-1000 ease-in-out ${
          logoVisible
            ? logoPositioned
              ? "top-4 left-4 opacity-100"
              : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100"
            : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="mb-8">
          <Image
            src="/images/experiences-logo.svg"
            alt="experiences/"
            width={1242}
            height={223}
            className="w-[80vw] h-auto"
            priority
          />
          <Image
            src="/images/veeville-text.svg"
            alt="Veeville."
            width={489}
            height={104}
            className="w-[30vw] h-auto mt-1"
            priority
          />
        </div>
      </div>

      {/* Pablo Quote */}
      <div
        className={`absolute top-3/4 left-4 z-10 transition-opacity duration-1000 ease-in-out ${
          quoteVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/images/pablo_hand_quote.png"
          alt="Pablo Picasso Hand Quote"
          width={589}
          height={358}
          className="w-[50vw] h-auto"
          priority
        />
      </div>

      {/* Hero Image */}
      <div
        className={`absolute bottom-4 right-0 z-0 transition-transform duration-1200 ease-out ${
          deskVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Image
          src="/images/hero-illustration.svg"
          alt="Hero Desk"
          width={1000}
          height={1000}
          className="w-auto h-[80vh] object-contain"
          priority
        />
      </div>
    </section>
  );
}

// Main Mobile Component
export default function HeroMobile() {
  return (
    <div className="block lg:hidden w-full bg-white">
      <MobileHeroSection />
    </div>
  );
}
