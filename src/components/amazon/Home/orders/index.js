import React, { useEffect } from "react";
import OrderItem from "./order-item";
import { useDispatch, useSelector } from "react-redux";
import { findOrderByBuyerId } from "../../actions/orders-actions";

const OrderList = ({ buyerId }) => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchOrders() {
      await findOrderByBuyerId(dispatch, buyerId);
    }
    fetchOrders();
  }, [dispatch]);
  return (
    <div>
      <b className="wd-list-title">Your Orders</b>
      <ul className="list-group my-2">
        {orders.map((order) => {
          return <OrderItem key={order._id} order={order} />;
        })}
      </ul>
    </div>
  );
};
export default OrderList;
