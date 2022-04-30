import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const PRODUCTS_API = `${API_BASE}/products`;

export const findAllProducts = async () => {
  const response = await axios.get(PRODUCTS_API);
  const products = response.data;
  return products;
};
