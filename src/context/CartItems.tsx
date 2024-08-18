"use client";
import React, { createContext, useContext, useRef } from "react";
import { createCartStore, CartStore } from "@/store/cart-store";
import { useStore } from "zustand";

export type CartStoreApi = ReturnType<typeof createCartStore>

export const CartContext = createContext<CartStoreApi | undefined>(undefined)

interface CartProviderProps{
  children: React.ReactNode
}

export const CartProvider = ({children}: CartProviderProps) =>{
  const cartRef = useRef<CartStoreApi>()
  if(!cartRef.current){
    cartRef.current = createCartStore()
  }

  return(
    <CartContext.Provider value={cartRef.current}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartStore = (): CartStore =>{
  const cartStoreContext = useContext(CartContext);

  if(!cartStoreContext){
    throw new Error('useCartStore must be used within CartProvider')
  }

  return useStore(cartStoreContext, (state) => state)
}

