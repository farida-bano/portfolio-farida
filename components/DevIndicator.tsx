"use client";

import React from "react";

const DevIndicator = () => {
  // Only show in development environment
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] bg-[hsl(var(--darkGreen))] text-white px-3 py-2 rounded-md text-sm font-medium shadow-lg"
      aria-label="Development environment indicator"
    >
      localhost
    </div>
  );
};

export default DevIndicator;