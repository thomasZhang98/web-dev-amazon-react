import React from "react";
import OrderItem from "./order-item";
import { useSelector } from "react-redux";

const OrderList = () => {
  const orders = useSelector((state) => state.orders);
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
