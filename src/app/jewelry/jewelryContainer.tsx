import React from 'react'
import { fetchJewelry } from './fetchJewelry'
import Card from '@/Card/Card'

export default async function JewelryContainer() {
    const data = await fetchJewelry()

    return (
        <>
            {data.map((product)=>{
                return(
                    <Card
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                    />
                )
            })}
        </>
    )
}