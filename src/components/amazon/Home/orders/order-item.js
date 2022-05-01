import React from "react";
import {Link} from "react-router-dom";

const OrderItem = ({ order }) => {
  const orderDate = new Date(order.orderTime).toLocaleDateString("en-us");
  return (
    <li key={order._id} className="card my-2 p-2">
      <div className="row align-items-top">
        <div className="col-3 d-none d-lg-block">
          ORDER PLACED: <br />
          <b>{orderDate}</b>
        </div>
        <div className="col-4 d-lg-none">
          ORDER PLACED: <br />
          <b>{orderDate}</b>
        </div>
        <div className="col-3 d-none d-lg-block">
          TOTAL PRICE: <br />
          <b>${order.price}</b>
        </div>
        <div className="col-4 d-lg-none">
          TOTAL PRICE: <br />
          <b>${order.price}</b>
        </div>
        <div className="col-3 d-none d-lg-block">
          SHIP TO: <br />
          <b>{order.shippingAddress}</b>
        </div>
        <div className="col-4 d-lg-none">
          SHIP TO: <br />
          <b>{order.shippingAddress}</b>
        </div>
        <div className="col-3 d-none d-lg-block">
          Order Number:
          <br />
          <b>{order.productId}</b>
        </div>
      </div>
      <hr />
      <div className="wd-border">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-4 ">
            <img src={order.productImage} width="100%" alt="pp" />
          </div>
          <div className="col-md-10 col-sm-8 ">
            <p className="wd-font-13 wd-margin-bot-0">
              <b><Link to={`/details/${order.productId}`}>{order.productName}</Link></b>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
