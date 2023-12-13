export interface ElectronicsInterface {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
export async function fetchElectronics() {
    const data: ElectronicsInterface[] = await fetch('https://fakestoreapi.com/products/category/electronics').then((res) => res.json());
  
    return data;
}