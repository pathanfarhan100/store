// apiService.ts
import { Product } from './types';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (
  limit: number = 10,
  offset: number = 0
): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}&skip=${offset}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error('Failed to search products');
    }
    const allProducts = await response.json();
    return allProducts.filter((product: Product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};