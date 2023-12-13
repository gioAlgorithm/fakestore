export interface ProductsInterface {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
export async function fetchProducts() {
  const data: ProductsInterface[] = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
  
  return data;
}