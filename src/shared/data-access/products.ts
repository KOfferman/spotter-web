import {ProductResponse} from '../types';

export const fetchProducts = async (
  page: number,
  pageSize: number
): Promise<ProductResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products?page=${page}&pageSize=${pageSize}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const searchProducts = async (
  searchTerm: string,
  page: number,
  pageSize: number
): Promise<ProductResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/search?page=${page}&pageSize=${pageSize}&searchTerm=${searchTerm}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching products:', error);
  }
};
