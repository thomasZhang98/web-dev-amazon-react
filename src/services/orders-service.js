import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const ORDERS_API = `${API_BASE}/orders`;

export const findOrder = async (order) => {
  const response = await axios.get(`${ORDERS_API}/${order}`);
  const foundOrder = response.data;
  return foundOrder;
};
export const createOrder = async (order) => {
  const response = await axios.post(`${ORDERS_API}`, order);
  return response.data;
};
export const updateOrder = async (order) => {
  const response = await axios.put(`${ORDERS_API}/${order._id}`, order);
  return response.data;
};
export const deleteOrder = async (order) => {
  const response = await axios.delete(`${ORDERS_API}/${order}`);
  return response.data;
};
