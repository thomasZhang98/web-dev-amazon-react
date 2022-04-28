import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const ORDERS_API = `${API_BASE}/orders`;
const BUYERS_API = `${API_BASE}/buyers`;

export const findOrder = async (orderNumber) => {
  const response = await axios.get(`${ORDERS_API}/${orderNumber}`);
  const orders = response.data;
  return orders;
};
export const findOrderItem = async (orderItem) => {
  const response = await axios.get(`${ORDERS_API}/item/${orderItem._id}`);
  const item = response.data;
  return item;
};
export const findOrderByBuyerId = async (buyerId) => {
  const response = await axios.get(`${BUYERS_API}/${buyerId}/orders`);
  const orders = response.data;
  return orders;
};
export const createOrderItem = async (orderItem) => {
  const response = await axios.post(`${ORDERS_API}/item`, orderItem);
  return response.data;
};
export const updateOrderItem = async (orderItem) => {
  const response = await axios.put(
    `${ORDERS_API}/item/${orderItem._id}`,
    orderItem
  );
  return response.data;
};
export const deleteOrderItem = async (orderItem) => {
  const response = await axios.delete(`${ORDERS_API}/item/${orderItem._id}`);
  return response.data;
};
export const deleteOrder = async (orderNumber) => {
  const response = await axios.delete(`${ORDERS_API}/${orderNumber}`);
  return response.data;
};
