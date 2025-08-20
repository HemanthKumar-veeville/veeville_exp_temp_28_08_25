import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Tablet Hero Section Component
function TabletHeroSection() {
  const [logoVisible, setLogoVisible] = useState(true);
  const [logoPositioned, setLogoPositioned] = useState(false);
  const [deskVisible, setDeskVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [floatingVisible, setFloatingVisible] = useState(false);
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
            }, 300);

            setTimeout(() => {
              setDeskVisible(true);
              setFloatingVisible(true);
            }, 800);

            setTimeout(() => {
              setQuoteVisible(true);
            }, 1500);

            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px" }
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
        className={`absolute z-10 transition-all duration-1200 ease-in-out ${
          logoVisible
            ? logoPositioned
              ? "top-6 left-6 opacity-100"
              : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100"
            : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        }`}
      >
        <div className="mb-12">
          <Image
            src="/images/experiences-logo.svg"
            alt="experiences/"
            width={1242}
            height={223}
            className="w-[75vw] h-auto"
            priority
          />
          <Image
            src="/images/veeville-text.svg"
            alt="Veeville."
            width={489}
            height={104}
            className="w-[28vw] h-auto mt-2"
            priority
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div
        className={`absolute inset-0 z-5 flex items-center justify-center transition-opacity duration-1200 ease-in-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center px-8 max-w-md">
          <h1 className="font-georgia text-3xl font-normal text-[#1c1c1c] mb-4 leading-[0.99]">
            Where grown-ups remember how to play
          </h1>
          <p className="font-helvetica text-base font-normal text-[#1c1c1c] mb-6 leading-relaxed">
            A set of hand-crafted immersive experiences for your team and
            leadership.
          </p>
          <p className="font-helvetica text-sm font-light text-[#1c1c1c] leading-relaxed">
            You never learn better than when you don't know that you are
            learning. Through play, touch, wonder, and experimentation, we help
            teams unlearn biases, collaborate organically, and see challenges
            with fresh eyes.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className={`absolute inset-0 z-1 transition-opacity duration-1500 ease-in-out ${
          floatingVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-1/4 right-1/4 animate-bounce">
          <Image
            src="/images/creative_box.png"
            alt="Creative Box"
            width={60}
            height={60}
            className="w-12 h-12 opacity-60"
          />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-pulse">
          <Image
            src="/images/pokemon_pencil.png"
            alt="Pokemon Pencil"
            width={40}
            height={40}
            className="w-8 h-8 opacity-50"
          />
        </div>
      </div>

      {/* Pablo Quote */}
      <div
        className={`absolute bottom-6 left-6 z-10 transition-opacity duration-1200 ease-in-out ${
          quoteVisible ? "opacity-100" : "opacity-0"
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

      {/* Hero Image */}
      <div
        className={`absolute bottom-0 right-0 z-0 transition-transform duration-1500 ease-out ${
          deskVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Image
          src="/images/hero_desk.png"
          alt="Hero Desk"
          width={1000}
          height={1000}
          className="w-64 h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}

// Main Tablet Component
export default function HeroTablet() {
  return (
    <div className="hidden md:block lg:hidden w-full bg-white">
      <TabletHeroSection />
    </div>
  );
}
