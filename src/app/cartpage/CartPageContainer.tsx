"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/CartItems";
import style from "./cartpage.module.scss";
import { CardProps } from "@/components/Card/Card";
import { BsTrash } from "react-icons/bs";
import Loading from "@/components/Loading";

export default function CartPageContainer() {
  // Importing useContext
  const { cartItems, setCartItems } = useContext(CartContext);

  // Function that adds items inside the cart
  const onAdd = (event: React.MouseEvent<HTMLDivElement>, item: CardProps) => {
    event.preventDefault(); // Prevent link navigation
    const exist = cartItems.find((x) => x.id === item.id);

    if (exist) {
      if ((exist.qty || 0) < 11) {
        // Check if the quantity is less than 11 before incrementing
        setCartItems(
          cartItems.map((x) =>
            x.id === item.id ? { ...exist, qty: (exist.qty || 0) + 1 } : x
          )
        );
      }
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  // Function that removes items
  const onRemove = (Data: CardProps) => {
    const exist = cartItems.find((x) => x.id === Data.id);

    if (exist && (exist.qty || 0) === 1) {
      setCartItems(cartItems.filter((x) => x.id !== Data.id));
    } else if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === Data.id ? { ...exist, qty: (exist.qty || 0) - 1 } : x
        )
      );
    }
  };

  // Function that removes the item no matter the quantity
  const onTrash = (item: CardProps) => {
    setCartItems(cartItems.filter((x) => x.id !== item.id));
  };

  // Alert message when ordering
  const alertMessage = () => {
    alert("ORDERED!");
    setCartItems([]); // Clear cart after ordering
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    if (!cartItems || cartItems.length === 0) {
      return "0.00"; // Handle the case when cartItems is not defined or empty
    }

    let totalPrice: number = 0;
    for (const item of cartItems) {
      totalPrice += (item.price || 0) * (item.qty || 0); // Ensure price and qty are defined
    }
    return totalPrice.toFixed(2);
  };

  // Calculate the tax (5% of the total price)
  const calculateTax = (totalPrice: number) => {
    return (totalPrice * 0.05).toFixed(2);
  };

  // Calculate the total price including tax
  const calculateTotalPriceWithTax = (totalPrice: number, tax: number) => {
    return (totalPrice + tax).toFixed(2);
  };

  // Calculate total price, tax, and total price including tax
  const totalPrice = parseFloat(calculateTotalPrice());
  const tax = parseFloat(calculateTax(totalPrice));
  const totalPriceWithTax = calculateTotalPriceWithTax(totalPrice, tax);

  if (cartItems === undefined) {
    return <Loading />;
  }

  return (
    <div className={style.cartPageContainer}>
      <div className={style.cartItemsHolder}>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => {
            if (!item || !item.title) {
              return null; // Skip rendering if item or item.title is undefined
            }

            return (
              <div key={item.id} className={style.cartCard}>
                <div className={style.cardInfo}>
                  <div
                    className={style.cartCardImage}
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className={style.titleAndPrice}>
                    <h4 className={style.cardTitle}>{item.title}</h4>
                    <h4>${((item.price || 0) * (item.qty || 0)).toFixed(2)}</h4>
                  </div>
                </div>
                <div className={style.trashIncrease}>
                  <div className={style.trash} onClick={() => onTrash(item)}>
                    <BsTrash />
                  </div>
                  <div className={style.cartIncrease}>
                    <div
                      className={style.minus}
                      style={{ userSelect: "none" }}
                      onClick={() => onRemove(item)}
                    >
                      <span>-</span>
                    </div>
                    <div className={style.quantity}>
                      {item.qty}
                      <div className={style.quantityAlert}>max item: 11</div>
                    </div>
                    <div
                      className={style.plus}
                      style={{ userSelect: "none" }}
                      onClick={(event) => onAdd(event, item)}
                    >
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={style.emptyCart}>Cart is Empty</div>
        )}
      </div>
      <div className={style.checkOut}>
        <div className={style.priceAndTax}>
          <div className={style.price}>
            <h2>Price</h2>
            <h3>${totalPriceWithTax}</h3>
          </div>
          <div className={style.tax}>
            <h2>Tax 5%</h2>
            <h3>${tax.toFixed(2)}</h3>
          </div>
        </div>
        <div className={style.totalPrice}>
          <div className={style.totalPriceInfo}>
            <h2>Total Price</h2>
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
        <button className={style.orderButton} onClick={alertMessage}>
          Order
        </button>
      </div>
    </div>
  );
}
