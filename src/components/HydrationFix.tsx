"use client";
import React, { useEffect, useState } from "react";

const HydrationFix = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <div>{children}</div>;
};

export default HydrationFix;
