"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Editorial top ambient route progress line */}
      <div
        className={`page-route-line ${isNavigating ? "active" : ""}`}
        aria-hidden="true"
      />

      {/* Page content animated viewport */}
      <div key={pathname} className="page-transition-container">
        {children}
      </div>
    </>
  );
}
