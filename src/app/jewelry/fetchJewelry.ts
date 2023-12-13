export interface JewelryInterface {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
export async function fetchJewelry() {
    const data: JewelryInterface[] = await fetch('https://fakestoreapi.com/products/category/jewelery').then((res) => res.json());
  
    return data;
}