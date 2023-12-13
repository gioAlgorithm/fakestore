export interface MenClothingInterface {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
export async function fetchMenClothing() {
    const data: MenClothingInterface[] = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`).then((res) => res.json());
  
    return data;
}