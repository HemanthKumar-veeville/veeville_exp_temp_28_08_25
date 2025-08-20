import React from "react";
import HeroMobile from "./HeroMobile";
import HeroTablet from "./HeroTablet";
import ValuePropositionMobile from "./ValuePropositionMobile";
import ValuePropositionTablet from "./ValuePropositionTablet";
import FeaturesMobile from "./FeaturesMobile";
import FeaturesTablet from "./FeaturesTablet";

interface ResponsiveLayoutProps {
  deviceType: "mobile" | "tablet";
}

export default function ResponsiveLayout({
  deviceType,
}: ResponsiveLayoutProps) {
  const HeroComponent = deviceType === "mobile" ? HeroMobile : HeroMobile;
  const ValuePropositionComponent =
    deviceType === "mobile" ? ValuePropositionMobile : ValuePropositionMobile;
  const FeaturesComponent =
    deviceType === "mobile" ? FeaturesMobile : FeaturesMobile;

  return (
    <div className="relative">
      <main className="h-screen overflow-y-scroll overflow-x-hidden bg-white">
        {/* Hero Section */}
        <div id="hero" className="min-h-screen">
          <HeroComponent />
        </div>

        {/* Value Proposition Section */}
        <div id="value-proposition" className="min-h-screen">
          <ValuePropositionComponent />
        </div>

        {/* Features Section */}
        <div id="features" className="min-h-screen">
          <FeaturesComponent />
        </div>
      </main>
    </div>
  );
}
