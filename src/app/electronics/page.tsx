import React from 'react'
import style from "./electronics.module.scss"
import ElectronicsHeader from './_components/ElectronicsHeader/ElectronicsHeader'
import { fetchByCategory } from '@/utils/fetchByCategory'
import type { Metadata } from 'next'
import ProductContainer from '@/components/ProductContainer'
import ElectronicContent from './_components/ElectronicContent/ElectronicContent'

export const metadata: Metadata = {
  title: 'Electronics',
  description: 'Generated by create next app',
}


export default async function jewelry() {
  const data = await fetchByCategory(`electronics`);

  return (
    <main className={style.electronics}>
      <ElectronicsHeader />
      <ElectronicContent data={data} />
    </main>
  )
}