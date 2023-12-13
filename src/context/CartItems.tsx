"use client"
import React, {createContext, useState, useEffect} from "react"

//interface for contextprovider which is going to be only child
interface ContextProviderProps{
  children: React.ReactNode
}

//interface for context
interface ContextType{
  cartItems: any[]
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>
  isClient: boolean
  setIsClient: React.Dispatch<React.SetStateAction<boolean>>
  hideLogo: boolean
  setHideLogo: React.Dispatch<React.SetStateAction<boolean>>
}

//creating context
export const CartContext = createContext<ContextType>({
  cartItems: [],
  setCartItems: ()=> {},
  isClient: false,
  setIsClient: ()=> {},
  hideLogo: true,
  setHideLogo: ()=> {}
})


export const CartProvider = ({ children }: ContextProviderProps) => {
  // Initialize cartItems state with an empty array
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [hideLogo, setHideLogo] = useState(true)

  useEffect(() => {
    setIsClient(true);
  }, []);

  // You can perform any other client-side initialization or side effects here

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        isClient,
        setIsClient,
        hideLogo, 
        setHideLogo
      }}
    >
      {children}
    </CartContext.Provider>
  );
};