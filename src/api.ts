import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = async (category?: string) => {
  const url = category ? `${BASE_URL}/products/category/${category}` : `${BASE_URL}/products`;
  const res = await axios.get(url);
  return res.data;
};

export const fetchCategories = async () => {
  const res = await axios.get(`${BASE_URL}/products/categories`);
  return res.data;
};

export const fetchProductById = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/products/${id}`);
  return res.data;
};
