import * as service from "../../../services/buyers-service";

export const FIND_ALL_BUYERS = "FIND_ALL_BUYERS";
export const DELETE_BUYER = "DELETE_BUYER";

export const findAllBuyers = async (dispatch) => {
  const buyers = await service.findAllBuyers();
  dispatch({
    type: FIND_ALL_BUYERS,
    buyers,
  });
};

export const deleteBuyer = async (dispatch, buyer) => {
  await service.deleteBuyer(buyer);
  dispatch({
    type: DELETE_BUYER,
    buyer,
  });
};
