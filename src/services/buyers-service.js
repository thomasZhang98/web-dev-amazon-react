import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const BUYERS_API = `${API_BASE}/buyers`;

export const findOrders = async (buyerId) => {
  const response = await axios.get(`${BUYERS_API}/${buyerId}/orders`);
  const orders = response.data;
  return orders;
};

export const findAllBuyers = async () => {
  const response = await axios.get(BUYERS_API);
  const buyers = response.data;
  return buyers;
};

export const deleteBuyer = async (buyer) => {
  const response = await axios.delete(`${BUYERS_API}/${buyer._id}`);
  return response.data;
};
