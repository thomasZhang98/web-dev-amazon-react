import React, { useEffect } from "react";
import BuyerItem from "./buyer-item";
import { useDispatch, useSelector } from "react-redux";
import { findAllBuyers } from "../../actions/buyers-actions";

const BuyerList = () => {
  const buyers = useSelector((state) => state.buyers);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchBuyers() {
      await findAllBuyers(dispatch);
    }
    fetchBuyers();
  }, [dispatch]);
  return (
    <div>
      <h5 className="wd-list-title">Registered Buyers</h5>
      <ul className="list-group my-2">
        {buyers.map((buyer) => {
          return <BuyerItem key={buyer._id} buyer={buyer} />;
        })}
      </ul>
    </div>
  );
};
export default BuyerList;
