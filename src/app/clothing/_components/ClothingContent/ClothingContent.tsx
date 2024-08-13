'use client'
import SortContainer from "@/components/SortContainer";
import styles from "./ClothingContent.module.scss";
import ProductContainer from "@/components/ProductContainer";

interface Data {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface Props {
  womenData: Data[],
  menData: Data[]
}

export default function ClothingContent(props: Props) {
  const {womenData, menData} = props

  return (
    <div className={styles.main}>
      <div className={styles.sort}>
        <SortContainer />
      </div>

      <div className={styles.productHolder}>
        <div className={styles.categoryName}>
          <h1>Women&apos;s Clothing</h1>
        </div>
        <div className={styles.cardContainer}>
          <ProductContainer data={womenData} />
        </div>
        <div className={styles.categoryName}>
          <h1>Men&apos;s Clothing</h1>
        </div>
        <div className={styles.cardContainer}>
          <ProductContainer data={menData} />
        </div>
      </div>
    </div>
  );
}
