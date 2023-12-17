"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import style from "./JewelryHeader.module.scss"
import jewelryImage from "../../../../public/image/jewelry header.png"

const JewelryHeader = () => {

  // animation
  useEffect(() => {
    const elements = document.querySelectorAll(`.${style.titleAnimation}, .${style.paragraphAnimation}, .${style.jewelryImage}`);
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
    <div className={style.jewelryHeader}>
      <div className={style.description}>
        <h1 className={style.titleAnimation}>UNVEILING THE FINEST <span>JEWELRY</span> SELECTION</h1>
        <p>
          <span className={style.paragraphAnimation}>Immerse yourself in the epitome of elegance at Jewelry Elegance, where we unveil the most exquisite collection of adornments.</span>
          <span className={style.paragraphAnimation}> Located at the heart of luxury, our showroom is a haven for jewelry connoisseurs. Explore a diverse array of timeless pieces, from captivating gemstones to sophisticated classics, meticulously curated to meet the highest standards of craftsmanship.</span>
          <span className={style.paragraphAnimation}> Jewelry Elegance is your premier destination for the best in fine jewelry. Step into our world, where each piece tells a story of unparalleled beauty.</span>
          <span className={style.paragraphAnimation}> Visit us today, and let our expert team guide you through a realm of timeless sophistication.</span>
        </p>
      </div>
      
      <Image className={style.jewelryImage} alt='jewelry' src={jewelryImage.src} width={3507} height={2224} />
    </div>
  )
}

export default JewelryHeader