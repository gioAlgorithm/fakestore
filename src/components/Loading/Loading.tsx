import React from 'react';
import style from "./Loading.module.scss";

export default function Loading() {
  const loadingCards = Array.from({ length: 12 });

  return (
    <div className={style.loading}>
      {loadingCards.map((_, index) => (
        <div key={index} className={style.loadingCard}>
          <div className={style.image}></div>
          <div className={style.title}></div>
          <div className={style.title}></div>
          <div className={style.category}></div>
          <div className={style.price}></div>
        </div>
      ))}
    </div>
  );
}
