import { DELETE_BUYER, FIND_ALL_BUYERS } from "../actions/buyers-actions.js";

const buyersReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_BUYERS:
      return action.buyers;
    case DELETE_BUYER:
      return state.filter((buyer) => buyer._id !== action.buyer._id);
    default:
      return state;
  }
};

export default buyersReducer;
