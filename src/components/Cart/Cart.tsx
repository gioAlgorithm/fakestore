"use client";
import React, { useContext } from "react";
import style from "./Cart.module.scss";
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from "@/context/CartItems";
import { BsTrash } from "react-icons/bs";
import { CardProps } from "@/components/Card/Card";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Loading from "../Loading";
import { StyleContext } from "@/context/StyleContext";

export default function Cart() {
  const router = usePathname();

  const { cartItems, setCartItems } = useContext(CartContext);
  const { isSticky } = useContext(StyleContext);

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

    if (exist && exist.id !== undefined) {
      if ((exist.qty || 0) === 1) {
        // Remove the item if quantity is 1
        setCartItems(cartItems.filter((x) => x.id !== Data.id));
      } else {
        // Update the quantity of the item
        setCartItems(
          cartItems.map((x) =>
            x.id === Data.id
              ? {
                  ...exist,
                  qty: (exist.qty || 0) - 1, // Decrease quantity
                  id: exist.id, // Ensure id is defined
                  image: exist.image, // Ensure image is defined
                  title: exist.title, // Ensure title is defined
                  price: exist.price, // Ensure price is defined
                  category: exist.category, // Ensure category is defined
                }
              : x
          )
        );
      }
    }
  };

  // Remove the item no matter qty
  const onTrash = (item: CardProps) => {
    setCartItems(
      cartItems
        .map((x) => (x.id === item.id ? { ...x, qty: 0 } : x))
        .filter((x) => x.qty! > 0)
    );
  };

  // Alert message when ordering
  const alertMessage = () => {
    alert("ORDERED!");
    setCartItems([]);
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * (item.qty || 0);
    }
    return totalPrice.toFixed(2); // Ensure the result is formatted to two decimal places
  };

  // Calculate total quantity
  const safeCartItems = cartItems || [];
  const quantity = safeCartItems.reduce((a, q) => a + (q.qty || 0), 0);

  if (cartItems === undefined) {
    return <Loading />;
  }

  return (
    <div className={style.cart}>
      <Link href="/cartpage">
        <LuShoppingCart
          style={!isSticky && router === "/" ? { color: "white" } : {}}
        />
      </Link>

      {quantity != 0 && (
        <Link
          href="/cartpage"
          style={
            !isSticky && router === "/"
              ? { color: "black", backgroundColor: "white" }
              : {}
          }
          className={style.quantityCircle}
        >
          {quantity}
        </Link>
      )}
      {router != "/cartpage" && (
        <div className={style.cartMenu}>
          <div className={style.bagItems}>
            <h4>My Bag</h4>
            <h4 className={style.totalQuantity}>
              <span>{quantity}</span>Item
            </h4>
          </div>
          <div className={style.cartCardContainer}>
            {cartItems && cartItems.length === 0 && (
              <div className={style.cartEmpty}>
                <h4>Cart Is Empty</h4>
              </div>
            )}
            {cartItems &&
              cartItems.map((item) => {
                if (!item || !item.title) {
                  return null; // Skip rendering if item or item.title is undefined
                }

                const truncatedTitle =
                  item.title.length > 20
                    ? `${item.title.slice(0, 17)}...`
                    : item.title;

                return (
                  <div key={item.id} className={style.cartCard}>
                    <div
                      className={style.cartCardImage}
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className={style.titleAndPrice}>
                      <h4>{truncatedTitle}</h4>
                      <h4>${(item.price * (item.qty || 0)).toFixed(2)}</h4>
                    </div>
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
                        {item.qty || 0}
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
                );
              })}
          </div>
          <div className={style.totalPrice}>
            <h4>Total</h4>
            <h4>
              <strong>${calculateTotalPrice()}</strong>
            </h4>
          </div>
          <div className={style.cartButtons}>
            <Link href="/cartpage" className={style.viewBag}>
              VIEW BAG
            </Link>
            <button className={style.checkOut} onClick={alertMessage}>
              CHECK OUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
