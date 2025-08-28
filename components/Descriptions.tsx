import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Helvetica Description Component
export const HelveticaDescription: React.FC<DescriptionProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <p
      className={`font-helvetica font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[20px] leading-[1.4] sm:leading-[1.4] md:leading-[1.4] lg:leading-[1.4] xl:leading-[1.4] text-black break-words ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};

// Casual Human Description Component
export const CasualHumanDescription: React.FC<DescriptionProps> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <p
      className={`uppercase font-casual-human font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[20px] leading-[1.4] sm:leading-[1.4] md:leading-[1.4] lg:leading-[1.4] xl:leading-[1.4] text-black break-words ${className}`}
      style={style}
    >
      {children}
    </p>
  );
};
