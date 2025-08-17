import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background-light flex items-center justify-between px-16 py-20">
      <div className="flex-1 max-w-2xl">
        <h1 className="heading-hero mb-8">experiences/</h1>
        <h2
          className="text-6xl italic text-primary-text mb-16"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Veeville.
        </h2>

        <div className="max-w-lg">
          <blockquote className="text-body-light mb-4">
            IT TOOK ME FOUR YEARS TO PAINT LIKE RAPHAEL, BUT A LIFETIME TO PAINT
            LIKE A CHILD.
          </blockquote>
          <cite className="text-body-light">—PABLO PICASSO</cite>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/images/hero-illustration.svg"
          alt="Hero Illustration"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default HeroSection;
