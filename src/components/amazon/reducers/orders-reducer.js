import {
  CREATE_ORDER,
  FIND_BUYER_ORDERS,
  UPDATE_ORDER,
  DELETE_ORDER,
} from "../actions/orders-actions";

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, action.newOrder];
    case FIND_BUYER_ORDERS:
      return action.orders;
    case UPDATE_ORDER:
      return state.map((order) =>
        order._id === action.order._id ? action.order : order
      );
    case DELETE_ORDER:
      return state.filter((order) => order._id !== action.order._id);
    default:
      return state;
  }
};

export default ordersReducer;
