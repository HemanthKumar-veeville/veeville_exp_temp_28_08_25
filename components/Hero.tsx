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
      <div className="mb-8 lg:mb-16 xl:mb-20 2xl:mb-24">
        <Image
          src="/images/experiences-logo.svg"
          alt="experiences/"
          width={1242}
          height={223}
          className="w-[80vw] lg:w-[70vw] h-auto"
          priority
        />
        <Image
          src="/images/veeville-text.svg"
          alt="Veeville."
          width={489}
          height={104}
          className="w-[30vw] lg:w-[25vw] h-auto mt-1 lg:mt-2"
          priority
        />
      </div>
    </div>
  );
}

// Pablo Hand Quote Component
function PabloQuote({ isVisible }: { isVisible: boolean }) {
  return (
    <>
      {/* Mobile positioning */}
      <div
        className={`absolute top-3/4 left-4 z-10 transition-opacity duration-1200 ease-in-out lg:hidden ${
          isVisible ? "opacity-100" : "opacity-0"
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
      {/* Tablet positioning */}
      <div
        className={`absolute bottom-6 left-6 z-10 transition-opacity duration-1200 ease-in-out hidden md:block lg:hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/images/pablo_hand_quote.png"
          alt="Pablo Picasso Hand Quote"
          width={589}
          height={358}
          className="w-[30vw] h-auto"
          priority
        />
      </div>
      {/* Desktop positioning */}
      <div
        className={`absolute bottom-4 left-4 lg:bottom-8 lg:left-8 xl:bottom-12 xl:left-12 2xl:bottom-16 2xl:left-16 z-10 transition-opacity duration-1200 ease-in-out hidden lg:block ${
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
    </>
  );
}

// Hero Image Component
function HeroImage({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`absolute bottom-0 right-0 z-0 transition-transform duration-1800 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Mobile image */}
      <div className="lg:hidden bottom-4 right-0">
        <Image
          src="/images/hero-illustration.svg"
          alt="Hero Desk"
          width={1000}
          height={1000}
          className="w-auto h-[80vh] object-contain"
          priority
        />
      </div>
      {/* Tablet image */}
      <div className="hidden md:block lg:hidden bottom-0 right-0">
        <Image
          src="/images/hero_desk.png"
          alt="Hero Desk"
          width={1000}
          height={1000}
          className="w-64 h-auto object-contain"
          priority
        />
      </div>
      {/* Desktop image */}
      <div className="hidden lg:block">
        <Image
          src="/images/hero_desk.png"
          alt="Hero Desk"
          width={1000}
          height={1000}
          className="w-64 lg:w-80 xl:w-96 2xl:w-[28rem] h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}

// Main Hero Component
export default function Hero() {
  const [logoVisible, setLogoVisible] = useState(true);
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
            // Reset animation states
            setLogoPositioned(false);
            setDeskVisible(false);
            setQuoteVisible(false);

            // Start animations with different timing for different screen sizes
            const isMobile = window.innerWidth < 768;
            const isTablet =
              window.innerWidth >= 768 && window.innerWidth < 1024;
            const isDesktop = window.innerWidth >= 1024;

            if (isMobile) {
              setTimeout(() => {
                setLogoPositioned(true);
              }, 200);
              setTimeout(() => {
                setDeskVisible(true);
              }, 600);
              setTimeout(() => {
                setQuoteVisible(true);
              }, 1200);
            } else if (isTablet) {
              setTimeout(() => {
                setLogoPositioned(true);
              }, 300);
              setTimeout(() => {
                setDeskVisible(true);
              }, 800);
              setTimeout(() => {
                setQuoteVisible(true);
              }, 1500);
            } else {
              // Desktop
              setTimeout(() => {
                setLogoPositioned(true);
                setDeskVisible(true);
              }, 300);
              setTimeout(() => {
                setQuoteVisible(true);
              }, 1800);
            }

            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset hasAnimated when component goes out of view
            setHasAnimated(false);
            setLogoPositioned(false);
            setDeskVisible(false);
            setQuoteVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
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
      className="w-full h-screen relative bg-white overflow-hidden"
    >
      <LogoSection isVisible={logoVisible} isPositioned={logoPositioned} />
      <PabloQuote isVisible={quoteVisible} />
      <HeroImage isVisible={deskVisible} />
    </section>
  );
}
