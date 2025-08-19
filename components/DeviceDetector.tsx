"use client";

import { useEffect, useState } from "react";
import ResponsiveLayout from "./ResponsiveLayout";

interface DeviceDetectorProps {
  children: React.ReactNode;
}

export default function DeviceDetector({ children }: DeviceDetectorProps) {
  const [deviceType, setDeviceType] = useState<
    "desktop" | "tablet" | "mobile" | null
  >(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const detectDevice = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setDeviceType("desktop");
      } else if (width >= 768) {
        setDeviceType("tablet");
      } else {
        setDeviceType("mobile");
      }
    };

    detectDevice();
    window.addEventListener("resize", detectDevice);

    return () => window.removeEventListener("resize", detectDevice);
  }, []);

  // Show loading state on server-side
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show responsive layout for mobile and tablet
  if (deviceType === "mobile" || deviceType === "tablet") {
    return <ResponsiveLayout deviceType={deviceType} />;
  }

  // Show full content for desktop
  return <>{children}</>;
}
