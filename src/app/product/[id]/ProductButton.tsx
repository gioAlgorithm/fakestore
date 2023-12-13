"use client"
import React, {useContext} from 'react'
import style from "./product.module.scss"
import { CartContext } from '@/context/CartItems'

interface Props{
  product: any
}

export default function ProductButton({product}: Props) {

  //importing usecontext
  const {cartItems, setCartItems} = useContext(CartContext)
  // Function that adds items to the cart
  const onAdd = () => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      if (exist.qty < 11) {
        // Check if the quantity is less than 10 before incrementing
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      }
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <button className={style.cartButton} onClick={onAdd}>Add to Cart</button>
  )
}
