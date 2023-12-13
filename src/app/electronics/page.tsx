import React from 'react'
import style from "./electronics.module.scss"
import ElectronicsContainer from './electronicsContainer'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Electronics',
  description: 'Generated by create next app',
}


export default function jewelry() {
  

  return (
    <main className={style.electronics}>
      <div className={style.innerMain}>
        <div className={style.categoryName}>
          <h1>Electronics</h1>
        </div>
        <div className={style.cardContainer}>
          <ElectronicsContainer />
        </div>
      </div>
    </main>
  )
}