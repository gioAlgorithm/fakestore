import React from 'react'
import { fetchProducts } from '@/app/fetchProducts'
import Card from '@/Card/Card'

export default async function ProductContainer() {
    const data = await fetchProducts()
    

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
