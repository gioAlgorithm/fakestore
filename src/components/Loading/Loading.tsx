import React from 'react'
import style from "./Loading.module.scss"

export default function Loading() {
  return (
    <div className={style.loading}>
      <div className={style["pl1"]}>
        <div className={style["pl1__a"]}></div>
        <div className={style["pl1__b"]}></div>
        <div className={style["pl1__c"]}></div>
      </div>

    </div>
  )
}
