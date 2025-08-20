import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// H1 Component - Main page heading (used in ValueProposition)
export const H1: React.FC<HeadingProps> = ({ children, className = "" }) => {
  return (
    <h1
      className={`font-georgia text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.99] text-[#1c1c1c] mb-4 md:mb-6 lg:mb-8 xl:mb-10 ${className}`}
    >
      {children}
    </h1>
  );
};

// H2 Component - Section headings (used in ClientLogos, Features, Testimonials)
export const H2: React.FC<HeadingProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <h2
      className={`font-georgia leading-[1.1] lg:leading-[0.99] text-black  break-words ${className}  text-[40px] md:text-[60px] lg:text-[80px]`}
      style={style}
    >
      {children}
    </h2>
  );
};

// H3 Component - Feature subheadings (used in Features)
export const H3: React.FC<HeadingProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <h3
      className={`text-black font-helvetica font-semibold leading-normal break-words ${className}`}
      style={{
        fontSize: "clamp(14px, 2.5vw, 24px)",
        ...style,
      }}
    >
      {children}
    </h3>
  );
};
