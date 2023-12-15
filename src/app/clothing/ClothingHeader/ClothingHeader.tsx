"use client"
import React from 'react'
import style from "./ClothingHeader.module.scss"
import Image from 'next/image'
import clothingImage from "../../../../public/image/fashion header.png"

const ClothingHeader = () => {
  return (
    <div className={style.clothingHeader}>
      <div className={style.description}>
        <h1>DISCOVER <span>FASHION</span> EXCELLENCE AT FASHION FUSION</h1>
        <p>Embark on a journey into the world of fashion at Fashion Fusion, your ultimate destination for clothing and style. Nestled in the heart of New York City, our showroom is a haven for fashion enthusiasts. Explore a diverse range of clothing, from the latest trends to timeless classics, as you wander through our curated collection. Immerse yourself in the world of style within our inviting space, where innovation meets individuality. Fashion Fusion is your go-to resource for sartorial excellence. Visit us today, and let our expert team guide you through the realm of fashion.</p>
      </div>

      <Image alt='clothing' className={style.clothingImage} src={clothingImage.src} width={1116} height={1600} />
    </div>
  )
}

export default ClothingHeader