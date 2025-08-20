import React, { useState, useEffect, useRef } from "react";
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

// Individual Testimonial Component
const TestimonialItem = ({
  testimonial,
  isVisible = false,
}: {
  testimonial: (typeof testimonialsData)[0];
  isVisible?: boolean;
}) => {
  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 invisible"
      }`}
    >
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
  );
};

// Mobile Testimonial Component
const MobileTestimonialItem = ({
  testimonial,
  isVisible = false,
}: {
  testimonial: (typeof testimonialsData)[0];
  isVisible?: boolean;
}) => {
  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 invisible"
      }`}
    >
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
  );
};

// Desktop Version Component
const DesktopTestimonials = () => {
  const [testimonialStates, setTestimonialStates] = useState<boolean[]>(
    new Array(2).fill(false)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animate testimonials one by one with staggered timing
            const timeouts: NodeJS.Timeout[] = [];
            for (let i = 0; i < 2; i++) {
              timeouts.push(
                setTimeout(() => {
                  setTestimonialStates((prev) => {
                    const newStates = [...prev];
                    newStates[i] = true;
                    return newStates;
                  });
                }, 500 + i * 300)
              );
            }
            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset animation states when component goes out of view
            setTestimonialStates(new Array(2).fill(false));
            setHasAnimated(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block w-full bg-white py-[25px]"
    >
      <div className="max-w-[1440px] mx-auto px-[69px]">
        <H2 className="text-[80px] leading-[0.99] text-black mb-[35px]">
          Testimonials
        </H2>

        <div className="space-y-[51px]">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialItem
              key={testimonial.id}
              testimonial={testimonial}
              isVisible={testimonialStates[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Mobile Version Component
const MobileTestimonials = () => {
  const [testimonialStates, setTestimonialStates] = useState<boolean[]>(
    new Array(2).fill(false)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animate testimonials one by one with staggered timing
            const timeouts: NodeJS.Timeout[] = [];
            for (let i = 0; i < 2; i++) {
              timeouts.push(
                setTimeout(() => {
                  setTestimonialStates((prev) => {
                    const newStates = [...prev];
                    newStates[i] = true;
                    return newStates;
                  });
                }, 500 + i * 300)
              );
            }
            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset animation states when component goes out of view
            setTestimonialStates(new Array(2).fill(false));
            setHasAnimated(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="lg:hidden w-full bg-white py-[40px]">
      <div className="px-[30px]">
        <H2 className="text-[25px] leading-[0.99] text-black mb-[30px]">
          Testimonials
        </H2>

        <div className="space-y-[30px]">
          {testimonialsData.map((testimonial, index) => (
            <MobileTestimonialItem
              key={testimonial.id}
              testimonial={testimonial}
              isVisible={testimonialStates[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function Testimonials() {
  return (
    <>
      <DesktopTestimonials />
      <MobileTestimonials />
    </>
  );
}
