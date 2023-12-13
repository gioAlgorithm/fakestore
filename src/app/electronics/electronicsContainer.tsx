import React from 'react'
import { fetchElectronics } from './fetchElectronics'
import Card from '@/Card/Card'

export default async function ElectronicsContainer() {
    const data = await fetchElectronics()

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