"use client"
import React, {useEffect} from 'react'
import style from "./ClothingHeader.module.scss"
import Image from 'next/image'
import clothingImage from "../../../../../public/image/fashion header.png"

const ClothingHeader = () => {

// State to track whether the image has loaded
const [isImageLoaded, setImageLoaded] = React.useState(false);

// Animation
  useEffect(() => {
    // If the image has not loaded yet, exit early
    if (!isImageLoaded) return;

    const elements = document.querySelectorAll(
      `.${style.titleAnimation}, .${style.paragraphAnimation}, .${style.clothingImage}`
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains(style.titleAnimation)) {
          entry.target.classList.toggle(`${style.titleShow}`, entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        } else if (entry.target.classList.contains(style.paragraphAnimation)) {
          entry.target.classList.toggle(`${style.paragraphShow}`, entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        } else {
          entry.target.classList.toggle(`${style.imageShow}`, entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 1,
      rootMargin: "0px 0px 68px 0px", 
    });

    elements.forEach((element) => observer.observe(element));
  }, [isImageLoaded]);

  return (
    <div className={style.clothingHeader}>
      <div className={style.description}>
        <h1 className={style.titleAnimation}>DISCOVER <span>FASHION</span> EXCELLENCE AT FASHION FUSION</h1>
        <p>
          <span className={style.paragraphAnimation}>Embark on a journey into the world of fashion at Fashion Fusion, your ultimate destination for clothing and style. </span>
          <span className={style.paragraphAnimation}> Nestled in the heart of New York City, our showroom is a haven for fashion enthusiasts.</span>
          <span className={style.paragraphAnimation}> Explore a diverse range of clothing, from the latest trends to timeless classics, as you wander through our curated collection.</span>
          <span className={style.paragraphAnimation}> Immerse yourself in the world of style within our inviting space, where innovation meets individuality. Fashion Fusion is your go-to resource for sartorial excellence. Visit us today, and let our expert team guide you through the realm of fashion.</span>
        </p>
      </div>

      <Image alt='clothing' className={style.clothingImage} src={clothingImage.src} width={1116} height={1600} priority onLoad={() => setImageLoaded(true)}/>
    </div>
  )
}

export default ClothingHeader