"use client"
import React, {useContext} from 'react'
import style from "../cartpage.module.scss"
import { BsTrash } from "react-icons/bs";
import { CartContext } from '@/context/CartItems';

export default function TopCartPage() {

  //importing usecontext
  const {cartItems, setCartItems} = useContext(CartContext)

  
  // calculate total quantity
  const safeCartItems = cartItems || []
  const quantity = safeCartItems.reduce((a, q) => a + (q.qty || 0), 0)

  const handleClear = ()=>{
    setCartItems([])
  }

  return (
    <div className={style.cartPageQuantity}>
      <h2>
        {quantity > 1 ? `There are ${quantity} items in your cart` : `There is ${quantity} item in your cart`}
      </h2>
      <div className={style.clearButton} style={{ userSelect: 'none' }} onClick={handleClear}><BsTrash /> Clear</div>
    </div>
  )
}
