import React from 'react'
import { fetchMenClothing } from './fetchMenCloth'
import Card from '@/Card/Card'

export default async function MenContainer() {
    const data = await fetchMenClothing ()

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