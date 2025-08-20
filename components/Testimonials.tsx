import React from "react";
import Image from "next/image";
import { H2 } from "./Headings";
import { HelveticaDescription, CasualHumanDescription } from "./Descriptions";

const testimonialsData = [
  {
    id: 1,
    quote:
      "This program looked at the business as a whole and not just leaders as individuals. It made us work through and apply our minds to problem identification, solution building approach, breakdown of tasks comprising the solution and execution thereof through devolution of responsibilities. Everything was totally relatable to our work-lives and challenges thereof, without it being contrived. Above all, this was so much fun. I will remember this wherever I go!",
    author: "VP and Head,Global IT Services- India Centre",
    company: "a 30 Bn dollar MNC",
  },
  {
    id: 2,
    quote:
      "No Classroom training. No models. No theory. No jargon. The people bonded, did interesting and new things together. They have taken learnings that are immediately applicable to their work. All our objectives from this intervention were met. Actually, they were exceeded beyond expectation.",
    author: "HR Business partner",
    company: "at an 85 year old global organization",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block w-full bg-white py-[25px]">
        <div className="max-w-[1440px] mx-auto px-[69px]">
          <H2 className="text-[80px] leading-[0.99] text-black mb-[35px]">
            Testimonials
          </H2>

          <div className="space-y-[51px]">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id}>
                <HelveticaDescription className="font-light text-black leading-normal mb-[10px] max-w-[1189px]">
                  {testimonial.quote}
                </HelveticaDescription>

                <div className="space-y-[1px]">
                  <CasualHumanDescription className="text-[30px] font-light">
                    {testimonial.author}
                  </CasualHumanDescription>
                  <CasualHumanDescription className="text-[30px] font-light">
                    {testimonial.company}
                  </CasualHumanDescription>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden w-full bg-white py-[40px]">
        <div className="px-[30px]">
          <H2 className="text-[25px] leading-[0.99] text-black mb-[30px]">
            Testimonials
          </H2>

          <div className="space-y-[30px]">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id}>
                <HelveticaDescription className="font-light text-[12px] text-black leading-normal mb-[10px]">
                  {testimonial.quote}
                </HelveticaDescription>

                <div className="space-y-[2px]">
                  <CasualHumanDescription className="text-[12px] font-bold">
                    {testimonial.author}
                  </CasualHumanDescription>
                  <CasualHumanDescription className="text-[12px] font-bold">
                    {testimonial.company}
                  </CasualHumanDescription>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
