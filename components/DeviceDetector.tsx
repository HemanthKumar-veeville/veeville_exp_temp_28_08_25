"use client";

import { useEffect, useState } from "react";

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

  // Show coming soon for mobile and tablet
  if (deviceType === "mobile" || deviceType === "tablet") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center px-6">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Coming Soon
            </h1>
            <p className="text-lg text-gray-600">
              We're working on making Veeville experiences available on{" "}
              {deviceType} devices.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <p className="text-gray-700 mb-4">
              For the best experience, please visit us on a desktop computer.
            </p>
            <div className="text-sm text-gray-500">
              <p>Desktop: 1024px and above</p>
              <p>Tablet: 768px - 1023px</p>
              <p>Mobile: Below 768px</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show full content for desktop
  return <>{children}</>;
}
