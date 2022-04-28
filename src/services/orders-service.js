import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const ORDERS_API = `${API_BASE}/tuits`;

export const createOrder = async (order) => {};
export const findOrder = async (orderNumber) => {};
export const findOrderByBuyerId = async (buyerId) => {};
export const updateOrder = async (order) => {};
export const deleteOrderItem = async (oId) => {};
export const deleteOrder = async (orderNumber) => {};
