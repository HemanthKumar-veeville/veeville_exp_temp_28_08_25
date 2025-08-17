import React from "react";
import Image from "next/image";

const clientLogos = [
  { name: "GE HealthCare", src: "/images/clients/ge-healthcare.svg", width: 364, height: 124 },
  { name: "PepsiCo", src: "/images/clients/pepsico.svg", width: 310, height: 72 },
  { name: "Hewlett Packard Enterprise", src: "/images/clients/hp-enterprise.svg", width: 346, height: 144 },
  { name: "GSK", src: "/images/clients/gsk.svg", width: 276, height: 143 },
  { name: "Springer Nature", src: "/images/clients/springer-nature.svg", width: 386, height: 37 },
  { name: "Wrangler", src: "/images/clients/wrangler.svg", width: 235, height: 68 },
  { name: "Dell", src: "/images/clients/dell.svg", width: 89, height: 89 },
  { name: "Shell", src: "/images/clients/shell.svg", width: 113, height: 105 },
  { name: "Levi's", src: "/images/clients/levis.svg", width: 172, height: 71 },
  { name: "Titan", src: "/images/clients/titan.svg", width: 282, height: 104 },
  { name: "Lee", src: "/images/clients/lee.svg", width: 99, height: 55 },
  { name: "Myntra", src: "/images/clients/myntra.svg", width: 197, height: 60 },
];

export default function ClientLogos() {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden lg:block w-full bg-white py-[93px]">
        <div className="max-w-[1440px] mx-auto px-[60px]">
          <h2 className="font-georgia text-[80px] leading-[0.99] text-black mb-[50px]">
            Our clients
          </h2>
          
          {/* Client Logos Grid - 3 rows, 4 columns */}
          <div className="grid grid-cols-4 gap-x-[60px] gap-y-[50px] items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div key={client.name} className="flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden w-full bg-white py-[40px]">
        <div className="px-[30px]">
          <h2 className="font-georgia text-[25px] leading-[0.99] text-black mb-[30px]">
            Our clients
          </h2>
          
          {/* Client Logos Grid - 2 columns for mobile */}
          <div className="grid grid-cols-2 gap-x-[20px] gap-y-[30px] items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div key={client.name} className="flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={Math.floor(client.width * 0.4)}
                  height={Math.floor(client.height * 0.4)}
                  className="object-contain grayscale opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}