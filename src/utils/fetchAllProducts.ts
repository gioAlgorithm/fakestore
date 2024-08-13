import axios from "axios";

const API_URL = `https://fakestoreapi.com/products`

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
  
export const fetchAllProducts = async (): Promise<Product[]>=> {

  try{
    const response = await axios.get(API_URL);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch products (status: ${response.status})`);
    }
  }catch(error){
    console.error("Error fetching products:", error);
    throw error;
  }
}