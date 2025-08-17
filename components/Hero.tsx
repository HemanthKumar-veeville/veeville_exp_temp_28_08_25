import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hidden lg:block w-full h-screen relative bg-white overflow-hidden">
      {/* Logo Section - Top Left */}
      <div className="absolute top-4 left-4 lg:top-8 lg:left-8 xl:top-12 xl:left-12 2xl:top-16 2xl:left-16 z-10">
        <div className="mb-16 lg:mb-20 xl:mb-24 2xl:mb-32">
          <Image
            src="/images/experiences-logo.svg"
            alt="experiences/"
            width={1242}
            height={223}
            className="w-48 lg:w-[35rem] xl:w-[40rem] 2xl:w-[45rem] h-auto"
            priority
          />
          <Image
            src="/images/veeville-text.svg"
            alt="Veeville."
            width={489}
            height={104}
            className="w-20 lg:w-[14rem] xl:w-[16rem] 2xl:w-[18rem] h-auto mt-2"
            priority
          />
        </div>
      </div>

      {/* Pablo Hand Quote - Bottom Left */}
      <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 xl:bottom-12 xl:left-12 2xl:bottom-16 2xl:left-16 z-10">
        <Image
          src="/images/pablo_hand_quote.png"
          alt="Pablo Picasso Hand Quote"
          width={589}
          height={358}
          className="w-32 lg:w-[20rem] xl:w-[24rem] 2xl:w-[28rem] h-auto"
          priority
        />
      </div>

      {/* Hero Desk Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 z-0">
        <Image
          src="/images/hero_desk.png"
          alt="Hero Desk"
          width={1000}
          height={1000}
          className="w-64 lg:w-80 xl:w-96 2xl:w-[28rem] h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
