import * as service from "../../../services/products-service";

export const FIND_ALL_PRODUCTS = "FIND_ALL_PRODUCTS";

export const findAllProducts = async (dispatch) => {
  const products = await service.findAllProducts();
  dispatch({
    type: FIND_ALL_PRODUCTS,
    products,
  });
};
