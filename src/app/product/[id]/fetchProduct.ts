export interface ProductInterface{
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
export async function fetchProduct(id: number) {
  const data: ProductInterface = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
    
  return data;
}