import React from "react";
import Image from "next/image";

export default function ValueProposition() {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block w-full h-[1213px] bg-[#d9d9d9]">
        <div className="max-w-[1440px] mx-auto relative h-full">
          {/* Main Content */}
          <div className="absolute top-[80px] left-[60px] max-w-[713px]">
            <h1 className="font-georgia text-[80px] leading-[0.99] text-[#1c1c1c] mb-[92px]">
              Where grown-ups<br />
              remember how to play
            </h1>
            
            <div className="space-y-[40px]">
              <p className="font-sofia-pro font-normal text-[34px] text-[#1c1c1c] leading-normal">
                A set of hand-crafted immersive experiences for your team and leadership.
              </p>
              
              <p className="font-sofia-pro font-normal text-[34px] text-[#1c1c1c] leading-normal">
                You never learn better than when you don't know that you are learning. Through play, touch, wonder, and experimentation, we help teams unlearn biases, collaborate organically, and see challenges with fresh eyes.
              </p>
            </div>
          </div>

          {/* Character with Flag Illustration */}
          <div className="absolute top-[353px] right-[68px]">
            <Image
              src="/images/character-flag.svg"
              alt="Character running with yellow flag"
              width={545}
              height={966}
            />
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden w-full bg-[#d9d9d9] py-[40px]">
        <div className="px-[30px]">
          <h1 className="font-georgia text-[25px] leading-[0.99] text-[#1c1c1c] mb-[40px]">
            Where grown-ups<br />
            remember how to play
          </h1>
          
          <div className="space-y-[20px] mb-[40px]">
            <p className="font-sofia-pro font-normal text-[12px] text-[#1c1c1c] leading-normal">
              A set of hand-crafted immersive experiences for your team and leadership.
            </p>
            
            <p className="font-sofia-pro font-normal text-[12px] text-[#1c1c1c] leading-normal">
              You never learn better than when you don't know that you are learning. Through play, touch, wonder, and experimentation, we help teams unlearn biases, collaborate organically, and see challenges with fresh eyes.
            </p>
          </div>

          {/* Character with Flag Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/character-flag.svg"
              alt="Character running with yellow flag"
              width={224}
              height={397}
            />
          </div>
        </div>
      </section>
    </>
  );
}