import React from "react";
import "./order.css";
import OrderItem from "./order-item";
import { useSelector } from "react-redux";

const OrderList = () => {
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.orders);
  return (
    <div>
      {user.loggedIn && (
        <div>
          <b className="wd-order">Your Orders</b>
          <ul className="list-group my-2">
            {orders.map((order) => {
              return <OrderItem key={order._id} order={order} />;
            })}
          </ul>
        </div>
      )}
      {!user.loggedIn && <b className="wd-order">Featured Products</b>}
    </div>
  );
};
export default OrderList;
