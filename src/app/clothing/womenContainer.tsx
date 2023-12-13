import React from 'react'
import { fetchWomenClothing } from './fetchWomenCloth'
import Card from '@/Card/Card'

export default async function WomenContainer() {
    const data = await fetchWomenClothing ()

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