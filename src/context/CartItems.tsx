"use client";
import { CardProps } from "@/components/Card";
import React, { createContext, useState } from "react";

//interface for contextprovider which is going to be only child
interface ContextProviderProps {
  children: React.ReactNode;
}

//interface for context
interface ContextType {
  cartItems: CardProps[];
  setCartItems: React.Dispatch<React.SetStateAction<CardProps[]>>;
  hideLogo: boolean;
  setHideLogo: React.Dispatch<React.SetStateAction<boolean>>;
}

//creating context
export const CartContext = createContext<ContextType>({
  cartItems: [],
  setCartItems: () => {},
  hideLogo: true,
  setHideLogo: () => {},
});

export const CartProvider = ({ children }: ContextProviderProps) => {
  // Initialize cartItems state with an empty array
  const [cartItems, setCartItems] = useState<CardProps[]>([]);
  const [hideLogo, setHideLogo] = useState(true);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        hideLogo,
        setHideLogo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
