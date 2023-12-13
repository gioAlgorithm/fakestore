export interface RandomProductInterface {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export async function fetchRandomProducts(category: string, productId: number, count: number): Promise<RandomProductInterface[]> {
  const data: RandomProductInterface[] = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  .then((res) => res.json());

  // Filter out the current product
  const productsWithoutCurrent = data.filter(product => product.id !== productId);

  // Shuffle the array to get random products
  const shuffledData = productsWithoutCurrent.sort(() => Math.random() - 0.5);

  // Take the first 'count' elements
  const randomProducts = shuffledData.slice(0, count);

  return randomProducts;
}