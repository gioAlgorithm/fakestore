"use client"
import style from "./Logo.module.scss"
import Link from "next/link"
import React, {useContext} from 'react'
import { CartContext } from '@/context/CartItems';


export default function Logo(){
    const {hideLogo} = useContext(CartContext)

    return(
        <>
            {hideLogo &&
                <Link href="/">
                    <div className={style.backBag} style={{ userSelect: 'none' }}>
                        <div className={style.frontBag}>
                            <div className={style.halfCircle}>
                                        
                            </div>
                            <div className={style.arrowTop}>

                            </div>
                        </div>
                    </div>
                </Link>
            }
            
        </>
    )
}