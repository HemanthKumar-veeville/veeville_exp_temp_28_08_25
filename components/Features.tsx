import React from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  illustration: string;
  description: string;
  className?: string;
}

function FeatureItem({ title, illustration, description, className = "" }: FeatureProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <h3 className="font-sofia-pro font-semibold text-[34px] text-black mb-[39px]">
          {title}
        </h3>
        <div className="mb-[17px]">
          <Image
            src={illustration}
            alt={title}
            width={250}
            height={200}
            className="object-contain"
          />
        </div>
        <p className="font-sofia-pro font-light text-[34px] text-black leading-normal max-w-[298px]">
          {description}
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <h3 className="font-sofia-pro font-semibold text-[12px] text-black mb-[15px]">
          {title}
        </h3>
        <div className="mb-[15px] flex justify-center">
          <Image
            src={illustration}
            alt={title}
            width={127}
            height={122}
            className="object-contain"
          />
        </div>
        <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block w-full bg-white py-[81px]">
        <div className="max-w-[1440px] mx-auto px-[60px]">
          <h2 className="font-georgia text-[80px] leading-[0.99] text-black mb-[63px]">
            The premise of play
          </h2>
          
          <div className="grid grid-cols-3 gap-[160px]">
            <FeatureItem
              title="Zero powerpoints"
              illustration="/images/zero-powerpoints.svg"
              description="Seriously, haven't you seen them all already?

We believe in experiences that stick, not slides that slip away."
            />
            
            <FeatureItem
              title="Zero jargon"
              illustration="/images/zero-jargon.svg"
              description="Nobody knows you better than you do.

We simply create the space for your insights to emerge naturally."
            />
            
            <FeatureItem
              title="100% surprises"
              illustration="/images/surprises.svg"
              description="When did you last leave a workshop talking about it for weeks? We design moments that delight and memories that matter."
            />
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden w-full bg-white py-[40px]">
        <div className="px-[30px]">
          <h2 className="font-georgia text-[25px] leading-[0.99] text-black mb-[30px]">
            The premise of play
          </h2>
          
          <div className="space-y-[40px]">
            <FeatureItem
              title="Zero powerpoints"
              illustration="/images/zero-powerpoints.svg"
              description="Seriously, haven't you seen them all already?

We believe in experiences that stick, not slides that slip away."
            />
            
            <FeatureItem
              title="Zero jargon"
              illustration="/images/zero-jargon.svg"
              description="Nobody knows you better than you do.

We simply create the space for your insights to emerge naturally."
            />
            
            <FeatureItem
              title="100% surprises"
              illustration="/images/surprises.svg"
              description="When did you last leave a workshop talking about it for weeks? We design moments that delight and memories that matter."
            />
          </div>
        </div>
      </section>
    </>
  );
}