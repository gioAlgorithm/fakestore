"use client"
import React from 'react'
import Image from 'next/image'
import style from "./JewelryHeader.module.scss"
import jewelryImage from "../../../../public/image/jewelry header.png"

const JewelryHeader = () => {
  return (
    <div className={style.jewelryHeader}>
      <div className={style.description}>
        <h1>UNVEILING THE FINEST <span>JEWELRY</span> SELECTION</h1>
        <p>Immerse yourself in the epitome of elegance at Jewelry Elegance, where we unveil the most exquisite collection of adornments. Located at the heart of luxury, our showroom is a haven for jewelry connoisseurs. Explore a diverse array of timeless pieces, from captivating gemstones to sophisticated classics, meticulously curated to meet the highest standards of craftsmanship. Jewelry Elegance is your premier destination for the best in fine jewelry. Step into our world, where each piece tells a story of unparalleled beauty. Visit us today, and let our expert team guide you through a realm of timeless sophistication.</p>
      </div>
      
      <Image className={style.jewelryImage} alt='jewelry' src={jewelryImage.src} width={3507} height={2224} />
    </div>
  )
}

export default JewelryHeader