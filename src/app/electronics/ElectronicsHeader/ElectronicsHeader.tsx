"use client"
import React from 'react'
import Image from 'next/image'
import style from "./ElectronicsHeader.module.scss"
import electronicImage from "../../../../public/image/electronics header.png"

const ElectronicsHeader = () => {
  return (
    <div className={style.electronicHeader}>
      <div className={style.description}>
        <h1>DISCOVER <span>ELECTRONICS</span> EXCELLENCE AT TECH UNIVERSE</h1>
        <p>Dive into the future at Electronics Hub, your go-to destination for a wide spectrum of electronic devices. Located in the heart of New York City, our showroom is a haven for tech enthusiasts. Discover the latest in TVs, computers, gadgets, and more as you wander through our diverse collection. Immerse yourself in the possibilities within our luxury demonstration rooms, where innovation meets experience. Electronics Hub is your ultimate resource for cutting-edge technology. Visit us today, and let our expert team guide you through the world of electronics excellence.</p>
      </div>
      
      <Image className={style.electronicImage} alt='electronics' src={electronicImage.src} width={600} height={416} />
    </div>
  )
}

export default ElectronicsHeader