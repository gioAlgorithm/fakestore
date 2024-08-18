"use client";
import { useSortStore } from "@/context/SortContext";
import Card from "@/components/Card/Card";
import styles from "./ProductContainer.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "../Loading";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface Props {
  data: Product[];
}

export default function ProductContainer(props: Props) {
  const { data } = props;
  const {
    setMaxPrice,
    loading,
    setLoading,
  } = useSortStore();
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [zeroItems, setZeroItems] = useState(false)

  useEffect(() => {
    if (data.length > 0) {
      const max = Math.max(...data.map((product) => product.price));
      setMaxPrice(max);
    }
  }, [data, setMaxPrice]);
  

  useEffect(() => {
    setLoading(true);
    let filtered = [...data];
    const minPrice = Number(searchParams.get("minPrice")) || 0;
    const maxPrice = Number(searchParams.get("maxPrice")) || Number.MAX_VALUE;
    const sort = searchParams.get("sort") || "";

    filtered = filtered.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    switch (sort) {
      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Name: A-Z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Name: Z-A":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilteredData(filtered);
    setLoading(false);

    filteredData.length === 0 && setZeroItems(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchParams]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>
          <Loading />
        </div>
      ) : (
        <>
          {filteredData.length > 0 ? (
            filteredData.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
              />
            ))
          ) : (
            zeroItems && <div className={styles.noFound}>No items found.</div>
          )}
        </>
      )}
    </div>
  );
}