import { FIND_ALL_PRODUCTS } from "../actions/products-action";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;
