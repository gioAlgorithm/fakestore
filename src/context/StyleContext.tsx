'use client'
import React, { createContext, useEffect, useState } from "react";

interface StyleProviderProps {
  children: React.ReactNode;
}

interface StyleType {
  isSticky: boolean; // Add a property to track whether it's sticky or not
}

export const StyleContext = createContext<StyleType>({ isSticky: false });

export const StyleProvider = ({ children }: StyleProviderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <StyleContext.Provider value={{ isSticky }}>
      {children}
    </StyleContext.Provider>
  );
};