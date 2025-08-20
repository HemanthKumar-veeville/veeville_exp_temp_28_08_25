import React from "react";
import Image from "next/image";

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
          <h2 className="font-georgia text-[80px] leading-[0.99] text-black mb-[35px]">
            Testimonials
          </h2>

          <div className="space-y-[51px] mb-[110px]">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id}>
                <p
                  style={{
                    color: "#000",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "normal",
                  }}
                  className="font-helvetica font-light text-black leading-normal mb-[10px] max-w-[1189px]"
                >
                  {testimonial.quote}
                </p>

                <div className="space-y-[1px]">
                  <p className="font-casual-human text-[30px] font-light text-black">
                    {testimonial.author}
                  </p>
                  <p className="font-casual-human text-[30px] font-light text-black">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Group Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/testimonials-group.svg"
              alt="Group of happy people testimonials"
              width={1062}
              height={743}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden w-full bg-white py-[40px]">
        <div className="px-[30px]">
          <h2 className="font-georgia text-[25px] leading-[0.99] text-black mb-[30px]">
            Testimonials
          </h2>

          <div className="space-y-[30px] mb-[40px]">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id}>
                <p className="font-helvetica font-light text-[12px] text-black leading-normal mb-[10px]">
                  {testimonial.quote}
                </p>

                <div className="space-y-[2px]">
                  <p className="font-casual-human text-[12px] font-bold text-black">
                    {testimonial.author}
                  </p>
                  <p className="font-casual-human text-[12px] font-bold text-black">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Group Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/testimonials-group.svg"
              alt="Group of happy people testimonials"
              width={306}
              height={205}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
