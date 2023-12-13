export interface WomenClothingInterface {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
export async function fetchWomenClothing() {
    const data: WomenClothingInterface[] = await fetch(`https://fakestoreapi.com/products/category/women's%20clothing`).then((res) => res.json());
  
    return data;
}