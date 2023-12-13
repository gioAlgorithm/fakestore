"use client"
import React, {useRef, useEffect} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./SwiperContainer.module.scss"
import Link from 'next/link';

// importing images
import fashionImage from "../../../public/image/fashion.jpg"
import electronicsImage from "../../../public/image/electronics.jpg"
import jewelryImage from "../../../public/image/jewelry.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SwiperContainer = () => {
  // automatically swipe the swiper:
  const swiperRef: any = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 4000); // Automatically swipe every 4 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div className={style.slider}>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          type: 'bullets',
          clickable: true, // Make bullets clickable
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className={style.swiperImage} style={{ backgroundImage: `url(${fashionImage.src})` }}>
            <div className={style.innerSwiper}>
              <h1>Discover Style Trends</h1>
              <Link href='/clothing'>DISCOVER MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiperImage} style={{ backgroundImage: `url(${electronicsImage.src})` }}>
            <div className={style.innerSwiper}>
              <h1>Discover Gadgets and More</h1>
              <Link href='/electronics'>DISCOVER MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiperImage} style={{ backgroundImage: `url(${jewelryImage.src})` }}>
            <div className={style.innerSwiper}>
              <h1>Explore Exquisite Jewelry Pieces</h1>
              <Link href='/jewelry'>DISCOVER MORE</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperContainer