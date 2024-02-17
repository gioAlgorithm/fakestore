import React from 'react'
import style from "./Footer.module.scss"
import Link from 'next/link'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";


export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.innerFooter}>
        <div className={style.footerLogoContainer}>
          <h1>ecommerce</h1>
          <div className={style.footerNav}>
            <Link href="/">All</Link>
            <Link href="/clothing">Clothing</Link>
            <Link href="/jewelry">Jewelry</Link>
            <Link href="/electronics">Electronics</Link>
          </div>
        </div>
        <p className={style.footerText}>
          Your ultimate destination for fashion, electronics, and jewelry. Explore our carefully curated selection of clothing, cutting-edge electronics, and timeless jewelry.
          We`&apos;`re dedicated to bringing you quality, style, and innovation all under one virtual roof. Shop with confidence and elevate your lifestyle with our products.
        </p>
        <div className={style.footerSocials}>
          <AiFillFacebook />
          <AiFillTwitterSquare />
          <AiOutlineInstagram />
        </div>
        <div className={style.copyright}>Copyright © 2024 Giorgi Machitadze All Rights Reserved.</div>
      </div>
      
    </div>
  )
}
