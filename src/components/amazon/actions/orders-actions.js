import * as ordersService from "../../../services/orders-service";
import * as buyerService from "../../../services/buyers-service";

export const CREATE_ORDER = "CREATE_ORDER";
export const FIND_ORDER = "FIND_ORDER";
export const FIND_BUYER_ORDERS = "FIND_BUYER_ORDERS";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";

export const createOrder = async (dispatch, order) => {
  const newOrder = await ordersService.createOrder(order);
  dispatch({
    type: CREATE_ORDER,
    newOrder,
  });
};

export const findOrder = async (dispatch, orderToFind) => {
  const order = await ordersService.findOrder(orderToFind);
  dispatch({
    type: FIND_ORDER,
    order,
  });
};

export const findOrderByBuyerId = async (dispatch, buyerId) => {
  const orders = await buyerService.findOrders(buyerId);
  dispatch({
    type: FIND_BUYER_ORDERS,
    orders,
  });
};

export const updateOrder = async (dispatch, order) => {
  await ordersService.updateOrder(order);
  dispatch({
    type: UPDATE_ORDER,
    order,
  });
};

export const deleteOrder = async (dispatch, order) => {
  await ordersService.deleteOrder(order);
  dispatch({
    type: DELETE_ORDER,
    order,
  });
};
