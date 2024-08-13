import React from "react";
import { fetchProduct } from "@/utils/fetchProduct";
import style from "./product.module.scss";
import ProductButton from "./ProductButton";
import {
  fetchRandomProducts,
  RandomProductInterface,
} from "./fetchRandomProduct";
import Card from "@/components/Card/Card";

interface Props {
  params: {
    id: number;
  };
}

export default async function Product({ params }: Props) {
  const { id } = params;
  const productData = await fetchProduct(id);

  // random product:
  const randomProducts: RandomProductInterface[] = await fetchRandomProducts(
    productData.category,
    productData.id,
    3
  );

  return (
    <div className={style.main}>
      <div className={style.innerMain}>
        <h1 className={style.title}>{productData.title}</h1>
        <div className={style.productContainer}>
          <div
            className={style.imageContainer}
            style={{ backgroundImage: `url(${productData.image})` }}
          ></div>
          <div className={style.productInfo}>
            <p className={style.description}>{productData.description}</p>
            <div className={style.sellContainer}>
              <h3>${productData.price}</h3>
              <ProductButton product={productData} />
            </div>
          </div>
        </div>

        <h1 className={style.randomTitle}>You may also like</h1>
        <div className={style.randomProduct}>
          {randomProducts.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                category={item.category}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
