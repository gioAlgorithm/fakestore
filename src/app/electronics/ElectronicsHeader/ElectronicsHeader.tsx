"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import style from "./ElectronicsHeader.module.scss"
import electronicImage from "../../../../public/image/electronics header.png"

const ElectronicsHeader = () => {

  // animation
  useEffect(() => {
    const elements = document.querySelectorAll(`.${style.titleAnimation}, .${style.paragraphAnimation}, .${style.electronicImage}`);
    const observer = new IntersectionObserver((entries) => {
      console.log(entries); // Add this line for debugging
      entries.forEach((entry) => {
        if (entry.target.classList.contains(style.titleAnimation)) {
          // Apply styles or animations for text elements
          entry.target.classList.toggle(`${style.titleShow}`, entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);

        } if(entry.target.classList.contains(style.paragraphAnimation)){
          
          entry.target.classList.toggle(`${style.paragraphShow}`, entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);

        } else {
          // Apply styles or animations for other elements (cards)
          entry.target.classList.toggle(`${style.imageShow}`, entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 1,
      rootMargin: "0px 0px 68px 0px", 
    });

    elements.forEach((element) => observer.observe(element));
  }, []);


  return (
    <div className={style.electronicHeader}>
      <div className={style.description}>
        <h1 className={style.titleAnimation}>DISCOVER <span>ELECTRONICS</span> EXCELLENCE AT TECH UNIVERSE</h1>
        <p>
          <span className={style.paragraphAnimation}>Dive into the future at Electronics Hub, your go-to destination for a wide spectrum of electronic devices.</span>
          <span className={style.paragraphAnimation}> Located in the heart of New York City, our showroom is a haven for tech enthusiasts.</span>
          <span className={style.paragraphAnimation}> Discover the latest in TVs, computers, gadgets, and more as you wander through our diverse collection.</span>
          <span className={style.paragraphAnimation}> Immerse yourself in the possibilities within our luxury demonstration rooms, where innovation meets experience. Electronics Hub is your ultimate resource for cutting-edge technology.</span>
          <span className={style.paragraphAnimation}> Visit us today, and let our expert team guide you through the world of electronics excellence.</span>  
        </p>
      </div>
      
      <Image className={style.electronicImage} alt='electronics' src={electronicImage.src} width={600} height={416} />
    </div>
  )
}

export default ElectronicsHeader