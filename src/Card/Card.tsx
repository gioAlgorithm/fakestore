"use client"
import React, {useContext} from 'react'
import style from "./Card.module.scss"
import Link from 'next/link'
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from '@/context/CartItems';


export interface CardProps{
    key?: number
    id?: number
    image?: string
    title?: string
    price?: number
    category?: string
}


export default function Card(props: CardProps) {

    //importing usecontext
    const {cartItems, setCartItems} = useContext(CartContext)


    // Function that adds items inside the cart
    const onAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent link navigation
        const exist = cartItems.find((x) => x.id === props.id);
        if (exist) {
            if (exist.qty < 11) {
                // Check if the quantity is less than 10 before incrementing
                setCartItems(
                cartItems.map((x) =>
                    x.id === props.id ? { ...exist, qty: exist.qty + 1 } : x
                )
                );
            }
        } else {
        setCartItems([...cartItems, { ...props, qty: 1 }]);
        }
    }

    //  Truncate the title if it's longer than 40 characters
    const truncatedTitle = props.title
    ? props.title.length > 40
    ? `${props.title.slice(0, 37)}...`
    : props.title
    : 'No Title Provided';

    return (
        <Link href={`/product/${props.id}`} key={props.id} className={style.card}>
            <div className={style.productImage} style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className={style.cardInfo}>
                <h4 className={style.title}>{truncatedTitle}</h4>
                <div className={style.holderContainer}>
                    <div>
                        <h5 className={style.category}>{props.category}</h5>
                        <div className={style.price}>${props.price}</div>
                    </div>
                    
                    <button className={style.addCart} onClick={onAdd}><LuShoppingCart /></button>
                </div>
                
            </div>
        </Link>        
    )
}
