import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { H2 } from "./Headings";

const clientLogos = [
  {
    name: "GE HealthCare",
    src: "/images/clients/ge-healthcare.svg",
    width: 364,
    height: 124,
  },
  {
    name: "PepsiCo",
    src: "/images/clients/pepsico.svg",
    width: 310,
    height: 72,
  },
  {
    name: "Hewlett Packard Enterprise",
    src: "/images/clients/hp-enterprise.svg",
    width: 346,
    height: 144,
  },
  { name: "GSK", src: "/images/clients/gsk.svg", width: 276, height: 143 },
  {
    name: "Springer Nature",
    src: "/images/clients/springer-nature.svg",
    width: 386,
    height: 37,
  },
  {
    name: "Wrangler",
    src: "/images/clients/wrangler.svg",
    width: 235,
    height: 68,
  },
  { name: "Dell", src: "/images/clients/dell.svg", width: 89, height: 89 },
  { name: "Shell", src: "/images/clients/shell.svg", width: 113, height: 105 },
  { name: "Levi's", src: "/images/clients/levis.svg", width: 172, height: 71 },
  { name: "Titan", src: "/images/clients/titan.svg", width: 282, height: 104 },
  { name: "Lee", src: "/images/clients/lee.svg", width: 99, height: 55 },
  { name: "Myntra", src: "/images/clients/myntra.svg", width: 197, height: 60 },
];

// Individual Client Logo Component
const ClientLogo = ({
  client,
  isMobile = false,
  isVisible = false,
}: {
  client: (typeof clientLogos)[0];
  isMobile?: boolean;
  isVisible?: boolean;
}) => {
  const imageWidth = isMobile ? Math.floor(client.width * 0.4) : client.width;
  const imageHeight = isMobile
    ? Math.floor(client.height * 0.4)
    : client.height;

  return (
    <div
      className={`flex items-center justify-center transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 invisible"
      }`}
    >
      <Image
        src={client.src}
        alt={client.name}
        width={imageWidth}
        height={imageHeight}
        className={`object-contain ${
          !isMobile ? "hover:opacity-100 transition-opacity" : ""
        }`}
        style={{
          filter:
            client.name === "Shell"
              ? "none"
              : "brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    </div>
  );
};

// Desktop Layout Component
const DesktopClientLogos = () => {
  const [logoStates, setLogoStates] = useState<boolean[]>(
    new Array(12).fill(false)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animate logos one by one with staggered timing
            const timeouts: NodeJS.Timeout[] = [];
            for (let i = 0; i < 12; i++) {
              timeouts.push(
                setTimeout(() => {
                  setLogoStates((prev) => {
                    const newStates = [...prev];
                    newStates[i] = true;
                    return newStates;
                  });
                }, 500 + i * 150)
              );
            }
            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset animation states when component goes out of view
            setLogoStates(new Array(12).fill(false));
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

  // Split logos into rows as requested
  const firstRow = clientLogos.slice(0, 3); // GE HealthCare, PepsiCo, HP Enterprise
  const secondRow = clientLogos.slice(3, 7); // GSK, Springer Nature, Wrangler, Dell
  const thirdRow = clientLogos.slice(7); // Shell, Levi's, Titan, Lee, Myntra

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block w-full bg-white py-[25px]"
    >
      <div className="max-w-[1440px] mx-auto px-[60px]">
        <H2 className="text-[80px] leading-[0.99] text-black mb-[50px]">
          Our clients
        </H2>

        {/* Custom layout with different column counts per row */}
        <div className="space-y-[50px]">
          {/* First row - 3 logos */}
          <div className="grid grid-cols-3 gap-x-[60px] items-center justify-items-center">
            {firstRow.map((client, index) => (
              <ClientLogo
                key={client.name}
                client={client}
                isVisible={logoStates[index]}
              />
            ))}
          </div>

          {/* Second row - 4 logos */}
          <div className="grid grid-cols-4 gap-x-[60px] items-center justify-items-center">
            {secondRow.map((client, index) => (
              <ClientLogo
                key={client.name}
                client={client}
                isVisible={logoStates[index + 3]}
              />
            ))}
          </div>

          {/* Third row - 5 logos */}
          <div className="grid grid-cols-5 gap-x-[60px] items-center justify-items-center">
            {thirdRow.map((client, index) => (
              <ClientLogo
                key={client.name}
                client={client}
                isVisible={logoStates[index + 7]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Mobile Layout Component
const MobileClientLogos = () => {
  const [logoStates, setLogoStates] = useState<boolean[]>(
    new Array(12).fill(false)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animate logos one by one with staggered timing
            const timeouts: NodeJS.Timeout[] = [];
            for (let i = 0; i < 12; i++) {
              timeouts.push(
                setTimeout(() => {
                  setLogoStates((prev) => {
                    const newStates = [...prev];
                    newStates[i] = true;
                    return newStates;
                  });
                }, 500 + i * 150)
              );
            }
            setHasAnimated(true);
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset animation states when component goes out of view
            setLogoStates(new Array(12).fill(false));
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
          Our clients
        </H2>

        {/* Client Logos Grid - 2 columns for mobile */}
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[30px] items-center justify-center">
          {clientLogos.map((client, index) => (
            <ClientLogo
              key={client.name}
              client={client}
              isMobile={true}
              isVisible={logoStates[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function ClientLogos() {
  return (
    <>
      <DesktopClientLogos />
      <MobileClientLogos />
    </>
  );
}
