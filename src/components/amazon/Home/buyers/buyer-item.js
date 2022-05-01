import React from "react";
import { useDispatch } from "react-redux";
import { deleteBuyer } from "../../actions/buyers-actions";

const BuyerItem = ({ buyer }) => {
  const dispatch = useDispatch();
  return (
    <li key={buyer._id} className="card my-2 p-2">
      <div className="row">
        <div className="col-11 pe-0">{buyer.userName}</div>
        <div className="col-1 p-0">
          <i
            onClick={() => deleteBuyer(dispatch, buyer)}
            className="btn p-0 fas fa-times"
          />
        </div>
      </div>
    </li>
  );
};

export default BuyerItem;
