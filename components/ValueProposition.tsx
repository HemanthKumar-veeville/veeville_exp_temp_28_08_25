import React from "react";
import Image from "next/image";

export default function ValueProposition() {
  return (
    <>
      {/* Desktop Version */}
      <section className=" lg:block w-full h-screen bg-[#d9d9d9] pt-8 flex items-center">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-12 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 xl:gap-8 items-center h-full">
            {/* Main Content */}
            <div className="order-1 xl:order-1 xl:col-span-3">
              <h1 className="font-georgia text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.99] text-[#1c1c1c] mb-6 lg:mb-8 xl:mb-10">
                Where grown-ups
                <br />
                remember how to play
              </h1>

              <div className="space-y-4 lg:space-y-5 xl:space-y-6">
                <p className="font-sofia-pro font-normal text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#1c1c1c] leading-relaxed">
                  A set of hand-crafted immersive experiences for your team and
                  leadership.
                </p>

                <p className="font-sofia-pro font-normal text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#1c1c1c] leading-relaxed">
                  You never learn better than when you don't know that you are
                  learning. Through play, touch, wonder, and experimentation, we
                  help teams unlearn biases, collaborate organically, and see
                  challenges with fresh eyes.
                </p>
              </div>
            </div>

            {/* Character with Flag Illustration */}
            <div className="order-2 xl:order-2 xl:col-span-2 flex justify-center xl:justify-end items-center">
              <div className="relative w-full max-w-sm xl:max-w-md 2xl:max-w-lg">
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
          </div>
        </div>
      </section>

      {/* Tablet Version */}
      <section className="hidden md:block lg:hidden w-full bg-[#d9d9d9] py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Main Content */}
            <div>
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
                  You never learn better than when you don't know that you are
                  learning. Through play, touch, wonder, and experimentation, we
                  help teams unlearn biases, collaborate organically, and see
                  challenges with fresh eyes.
                </p>
              </div>
            </div>

            {/* Character with Flag Illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs">
                <Image
                  src="/images/character-flag.svg"
                  alt="Character running with yellow flag"
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden w-full bg-[#d9d9d9] py-6">
        <div className="px-4 sm:px-6">
          <h1 className="font-georgia text-2xl sm:text-3xl leading-[0.99] text-[#1c1c1c] mb-4">
            Where grown-ups
            <br />
            remember how to play
          </h1>

          <div className="space-y-3 mb-6">
            <p className="font-sofia-pro font-normal text-sm sm:text-base text-[#1c1c1c] leading-relaxed">
              A set of hand-crafted immersive experiences for your team and
              leadership.
            </p>

            <p className="font-sofia-pro font-normal text-sm sm:text-base text-[#1c1c1c] leading-relaxed">
              You never learn better than when you don't know that you are
              learning. Through play, touch, wonder, and experimentation, we
              help teams unlearn biases, collaborate organically, and see
              challenges with fresh eyes.
            </p>
          </div>

          {/* Character with Flag Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[180px] sm:max-w-[220px]">
              <Image
                src="/images/character-flag.svg"
                alt="Character running with yellow flag"
                width={545}
                height={966}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
