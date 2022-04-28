import React from "react";
import "./order.css"
import OrderItem from "./order-item";
import {useSelector} from "react-redux";

const OrderList = () => {
  const order = useSelector((state) => state.order);
  return (
      <ul className="list-group mt-2 mb-2">
          <b className="wd-order">Your Orders</b>

        {order.map(order => {
          return (
              <OrderItem key={order.orderNumber} p={order}/>
          );
        })}

      </ul>
  );
}
export default OrderList;