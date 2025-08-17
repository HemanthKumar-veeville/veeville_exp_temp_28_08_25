import React from "react";
import Image from "next/image";

export default function Methodology() {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block w-full bg-[#d9d9d9] py-[83px]">
        <div className="max-w-[1440px] mx-auto px-[64px]">
          <h2 className="font-georgia text-[80px] leading-[0.99] text-black mb-[59px]">
            The high-five methodology
          </h2>
          
          <div className="grid grid-cols-2 gap-[100px] items-start">
            {/* Text Content */}
            <div className="space-y-[26px] max-w-[535px]">
              <div>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  When you consciously unwrap the wrapper of play,
                </p>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  the underpinning of the framework become clear as day.
                </p>
              </div>
              
              <div className="space-y-[0px]">
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  You can enter Kolb's learning cycle,
                </p>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  where you choose,
                </p>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  play as a "state of flow"
                </p>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  is hardly breaking news.
                </p>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  Glutamate and GABA might spark
                </p>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  & shape your brain.
                </p>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  When learning becomes fun,
                </p>
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                  you will not feel the strain.
                </p>
              </div>
            </div>
            
            {/* Visual Content */}
            <div className="relative">
              {/* Methodology Diagram */}
              <div className="mb-[80px]">
                <Image
                  src="/images/methodology-diagram.png"
                  alt="High-five methodology circular diagram"
                  width={406}
                  height={443}
                  className="object-contain"
                />
                <p className="font-sofia-pro font-light text-[34px] text-black leading-normal mt-[20px] text-right">
                  WHERE YOU RE-LEARN HOW<br />
                  TO LEARN AS A 5-YEAR-OLD
                </p>
              </div>
              
              {/* Child in Box Illustration */}
              <div className="relative">
                <Image
                  src="/images/child-box.svg"
                  alt="Child in cardboard box with blue clouds"
                  width={838}
                  height={745}
                  className="object-contain transform -rotate-[1.758deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden w-full bg-[#d9d9d9] py-[40px]">
        <div className="px-[30px]">
          <h2 className="font-georgia text-[25px] leading-[0.99] text-black mb-[30px]">
            The high-five methodology
          </h2>
          
          <div className="space-y-[30px]">
            {/* Text Content */}
            <div className="space-y-[15px]">
              <div>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  When you consciously unwrap the wrapper of play,
                </p>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  the underpinning of the framework become clear as day.
                </p>
              </div>
              
              <div className="space-y-[2px]">
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  You can enter Kolb's learning cycle,
                </p>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  where you choose,
                </p>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  play as a "state of flow"
                </p>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  is hardly breaking news.
                </p>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  Glutamate and GABA might spark
                </p>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  & shape your brain.
                </p>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  When learning becomes fun,
                </p>
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                  you will not feel the strain.
                </p>
              </div>
            </div>
            
            {/* Visual Content */}
            <div>
              {/* Methodology Diagram */}
              <div className="mb-[20px] text-center">
                <Image
                  src="/images/methodology-diagram.png"
                  alt="High-five methodology circular diagram"
                  width={125}
                  height={136}
                  className="object-contain mx-auto"
                />
                <p className="font-sofia-pro font-light text-[12px] text-black leading-normal mt-[10px]">
                  WHERE YOU RE-LEARN HOW<br />
                  TO LEARN AS A 5-YEAR-OLD
                </p>
              </div>
              
              {/* Child in Box Illustration */}
              <div className="flex justify-center">
                <Image
                  src="/images/child-box.svg"
                  alt="Child in cardboard box with blue clouds"
                  width={360}
                  height={323}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}