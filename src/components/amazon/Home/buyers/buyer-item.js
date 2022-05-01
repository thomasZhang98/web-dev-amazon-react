import React from "react";
import { useDispatch } from "react-redux";
import { deleteBuyer } from "../../actions/buyers-actions";
import {Link} from "react-router-dom";

const BuyerItem = ({ buyer }) => {
  const dispatch = useDispatch();
  return (
    <li key={buyer._id} className="card my-2 p-3 list-group-item-action">
      <div className="row">
        <div className="col-11 pe-0"><Link to={`/profile/${buyer._id}`}>{buyer.userName}</Link></div>
        <div className="col-1 p-0" title={"Remove this buyer"}>
          <i
            onClick={() => deleteBuyer(dispatch, buyer)}
            className="btn p-0 fas fa-times"
            tooltip={"test"}
          />
        </div>
      </div>
    </li>
  );
};

export default BuyerItem;
