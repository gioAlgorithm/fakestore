import { CardProps } from "@/components/Card";
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

interface CartState {
  cartItems: CardProps[];
  hideLogo: boolean;
}

interface CartActions {
  setCartItems: (cartItems: CardProps[]) => void;
  setHideLogo: (hideLogo: boolean) => void;
}

export type CartStore = CartState & CartActions;

export const defaultCartState: CartState = {
  cartItems: [],
  hideLogo: true,
};

export const createCartStore = (
  initState: CartState = defaultCartState
) => {
  return createStore<CartStore>()(
    persist(
      (set) => ({
        ...initState,
        setCartItems: (cartItems) => set(() => ({ cartItems })),
        setHideLogo: (hideLogo) => set(() => ({ hideLogo })),
      }),
      {
        name: "cart-storage", // Name of the key in local storage
        partialize: (state) => ({ cartItems: state.cartItems }), // Specify the part of the state to persist
      }
    )
  );
};