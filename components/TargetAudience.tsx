import React from "react";
import Image from "next/image";

export default function TargetAudience() {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block w-full bg-[#d9d9d9] py-[59px]">
        <div className="max-w-[1440px] mx-auto px-[60px]">
          {/* Main Heading */}
          <h2 className="font-georgia text-[80px] leading-[0.99] text-[#1c1c1c] mb-[35px] max-w-[896px]">
            Crafted for the minds that matter
          </h2>
          
          {/* Subtitle */}
          <p className="font-sofia-pro font-light text-[37px] text-black mb-[70px]">
            Bespoke experience for
          </p>
          
          {/* Audience Categories */}
          <div className="flex justify-between items-center mb-[36px] max-w-[1200px]">
            <div className="flex items-center">
              <div className="w-[19px] h-[21px] bg-[#2d2d2d] mr-[11px]"></div>
              <span className="font-casual-human text-[34px] font-bold text-[#2d2d2d]">
                Management
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-[19px] h-[21px] bg-[#2d2d2d] mr-[11px]"></div>
              <span className="font-casual-human text-[34px] font-bold text-[#2d2d2d]">
                Teams
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-[19px] h-[21px] bg-[#2d2d2d] mr-[11px]"></div>
              <span className="font-casual-human text-[34px] font-bold text-[#2d2d2d]">
                Leadership
              </span>
            </div>
          </div>
          
          {/* Success Statement */}
          <p className="font-sofia-pro font-light text-[34px] text-black mb-[27px] max-w-[1380px]">
            Demonstrated success for companies of all sizes across industry verticals
          </p>
          
          {/* Abraham Lincoln Quote Section */}
          <div className="flex justify-between items-start mb-[31px]">
            {/* Quote Illustration */}
            <div className="flex-1 max-w-[445px]">
              <Image
                src="/images/abraham-quote.png"
                alt="Abraham Lincoln quote illustration"
                width={729}
                height={469}
                className="w-full h-auto"
              />
            </div>
            
            {/* Quote Text */}
            <div className="flex-1 max-w-[600px] pl-[100px] pt-[100px]">
              <p className="font-sofia-pro font-light text-[34px] text-black leading-normal mb-[20px]">
                GIVE ME SIX HOURS TO CHOP A TREE<br />
                AND I WILL SPEND THE FIRST FOUR<br />
                HOURS SHARPENING THE AXE
              </p>
              <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                —ABRAHAM LINCOLN
              </p>
            </div>
          </div>
          
          {/* What Shifts Section */}
          <div>
            <h3 className="font-georgia text-[80px] leading-[0.99] text-[#1c1c1c] mb-[32px]">
              What shifts
            </h3>
            
            <p className="font-sofia-pro font-light text-[34px] text-black leading-normal mb-[38px] max-w-[1381px]">
              You already have the tools. We help you sharpen them and make the process fun and enjoyable. Reframe complex challenges with simplicity and humour, build without instructions and listen without bias. Go back more aware, present and curious.
            </p>
            
            <div className="max-w-[1323px]">
              <p className="font-sofia-pro font-light text-[34px] text-black leading-normal mb-[20px]">
                Solve business problems faster, strengthen trust and psychological safety, enhance creative confidence and storytelling, make better decisions under ambiguity... and much, much more!
              </p>
              <p className="font-sofia-pro font-light text-[34px] text-black leading-normal">
                Think like a 5 year-old and lead like a grown up!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden w-full bg-[#d9d9d9] py-[40px]">
        <div className="px-[30px]">
          {/* Main Heading */}
          <h2 className="font-georgia text-[25px] leading-[0.99] text-[#1c1c1c] mb-[20px]">
            Crafted for the minds that matter
          </h2>
          
          {/* Subtitle */}
          <p className="font-sofia-pro font-light text-[14px] text-black mb-[20px]">
            Bespoke experience for
          </p>
          
          {/* Audience Categories */}
          <div className="space-y-[15px] mb-[20px]">
            <div className="flex items-center">
              <div className="w-[5px] h-[5px] bg-[#2d2d2d] mr-[8px]"></div>
              <span className="font-casual-human text-[12px] font-bold text-[#2d2d2d]">
                Management
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-[6px] h-[6px] bg-[#2d2d2d] mr-[8px]"></div>
              <span className="font-casual-human text-[12px] font-bold text-[#2d2d2d]">
                Teams
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-[6px] h-[6px] bg-[#2d2d2d] mr-[8px]"></div>
              <span className="font-casual-human text-[12px] font-bold text-[#2d2d2d]">
                Leadership
              </span>
            </div>
          </div>
          
          {/* Success Statement */}
          <p className="font-sofia-pro font-light text-[12px] text-black mb-[20px]">
            Demonstrated success for companies of all sizes across industry verticals
          </p>
          
          {/* Abraham Lincoln Quote Section */}
          <div className="mb-[20px]">
            <div className="mb-[15px]">
              <Image
                src="/images/abraham-quote.png"
                alt="Abraham Lincoln quote illustration"
                width={330}
                height={232}
                className="w-full h-auto"
              />
            </div>
            
            <div>
              <p className="font-sofia-pro font-light text-[12px] text-black leading-normal mb-[10px]">
                GIVE ME SIX HOURS TO CHOP A TREE<br />
                AND I WILL SPEND THE FIRST FOUR<br />
                HOURS SHARPENING THE AXE
              </p>
              <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                —ABRAHAM LINCOLN
              </p>
            </div>
          </div>
          
          {/* What Shifts Section */}
          <div>
            <h3 className="font-georgia text-[25px] leading-[0.99] text-[#1c1c1c] mb-[20px]">
              What shifts
            </h3>
            
            <p className="font-sofia-pro font-light text-[12px] text-black leading-normal mb-[20px]">
              You already have the tools. We help you sharpen them and make the process fun and enjoyable. Reframe complex challenges with simplicity and humour, build without instructions and listen without bias. Go back more aware, present and curious.
            </p>
            
            <div>
              <p className="font-sofia-pro font-light text-[12px] text-black leading-normal mb-[10px]">
                Solve business problems faster, strengthen trust and psychological safety, enhance creative confidence and storytelling, make better decisions under ambiguity... and much, much more!
              </p>
              <p className="font-sofia-pro font-light text-[12px] text-black leading-normal">
                Think like a 5 year-old and lead like a grown up!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}