"use client"
import React, {useContext} from 'react'
import { CartContext } from '@/context/CartItems'
import style from "./cartpage.module.scss"
import { CardProps } from '@/Card/Card';
import { BsTrash } from "react-icons/bs";
import Loading from '@/components/Loading/Loading';


export default function CartPageContainer() {

  //importing usecontext
  const {cartItems, setCartItems} = useContext(CartContext)

  // Function that adds items inside the cart
  const onAdd = (event: React.MouseEvent<HTMLDivElement>, item: CardProps) => {
    event.preventDefault(); // Prevent link navigation
    const exist = cartItems.find((x) => x.id === item.id);
  
    if (exist) {
      if (exist.qty < 11) {
        // Check if the quantity is less than 10 before incrementing
        setCartItems(
          cartItems.map((x) =>
            x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      }
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  }

  // function that removes items 
  const onRemove = (Data: any) => {
    const exist = cartItems.find((x)=> x.id === Data.id)

    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== Data.id))
    } else {
      setCartItems(cartItems.map((x)=> x.id === Data.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }
  
  //remove the item no matter qty
  const onTrash = (item: CardProps) => {
    setCartItems(
      cartItems.map((x) =>
        x.id === item.id ? { ...x, qty: 0 } : x
      ).filter((x) => x.qty > 0)
    );
  }

  // alert message when ordering
  const alertMessage = ()=>{
    alert("ORDERED!")
    setCartItems([])
  }

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    if (!cartItems) {
      return "0.00"; // Handle the case when cartItems is not yet defined
    }

    let totalPrice: number = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.qty;
    }
    return totalPrice.toFixed(2);
  };

  // Calculate the tax (5% of the total price)
  const calculateTax = (totalPrice: number) => {
    return (totalPrice * 0.05).toFixed(2);
  };

  // Calculate the total price with tax
  const calculateTotalPriceWithTax = (totalPrice: number, tax: number) => {
    return (totalPrice - tax).toFixed(2);
  };

  // Calculate the total price, tax, and total price with tax
  const totalPrice = calculateTotalPrice();
  const tax = calculateTax(parseFloat(totalPrice));
  const totalPriceWithTax = calculateTotalPriceWithTax(parseFloat(totalPrice), parseFloat(tax));

  if(cartItems === undefined){
    return <Loading />
  }

  return (
    <div className={style.cartPageContainer}>
      <div className={style.cartItemsHolder}>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item)=>{
            if (!item || !item.title) {
              return null; // Skip rendering if item or item.title is undefined
            }

            return(
              <div key={item.id} className={style.cartCard}>
                <div className={style.cardInfo}>
                  <div className={style.cartCardImage} style={{backgroundImage: `url(${item.image})`}}></div>
                  <div className={style.titleAndPrice}>
                    <h4 className={style.cardTitle}>{item.title}</h4>
                    <h4>${(item.price * item.qty).toFixed(2)}</h4>
                  </div>
                </div>
                <div className={style.trashIncrease}>
                  <div className={style.trash} onClick={()=> onTrash(item)}><BsTrash /></div>
                  <div className={style.cartIncrease}>
                    <div className={style.minus} style={{ userSelect: 'none' }} onClick={() => onRemove(item)}><span>-</span></div>
                    <div className={style.quantity}>{item.qty}<div className={style.quantityAlert}>max item: 11</div></div>
                    <div className={style.plus} style={{ userSelect: 'none' }} onClick={(event) => onAdd(event, item)}><span>+</span></div>
                  </div>
                </div>
                
              </div>
            )
          })) : (
            <div className={style.emptyCart}>Cart is Empty</div>
          )
        }
      </div>
      <div className={style.checkOut}>
        <div className={style.priceAndTax}>
          <div className={style.price}>
            <h2>Price</h2>
            <h3>${totalPriceWithTax}</h3>
          </div>
          <div className={style.tax}>
            <h2>Tax 5%</h2>
            <h3>${tax}</h3>
          </div>
        </div>
        <div className={style.totalPrice}>
          <div className={style.totalPriceInfo}>
            <h2>Total Price</h2>
            <h3>${totalPrice}</h3>
          </div>
        </div>
        <button className={style.orderButton} onClick={alertMessage}>Order</button>
      </div>
    </div>
  )
}
