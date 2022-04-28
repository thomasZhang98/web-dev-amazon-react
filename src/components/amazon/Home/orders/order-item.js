import React from "react";
import "./order.css"

const OrderItem = ({
      p = {
        "orderNumber": "1919191",
        "price": "$35.31",
        "productName": "SanDisk 256GB Extreme microSDXC UHS-I Memory Card with Adapter - Up to 160MB/s, C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-256G-GN6MA",
        "image": "https://m.media-amazon.com/images/I/81o+KgHuhxL._AC_SX679_.jpg",
        "deliverDate": "March 30, 2022",
        "orderDate": "March 30, 2022",
        "shipTo": "Home"
      }
    }
) => {
  return (
      <li className="list-group-item mt-2 mb-2 wd-border">
        <div className="row align-items-center">
          <div className="col-3 wd-font-color d-none d-lg-block">
            ORDER PLACED <br/>
            <b>{p.orderDate}</b>
          </div>
          <div className="col-4 wd-font-color d-lg-none">
            ORDER PLACED <br/>
            <b>{p.orderDate}</b>
          </div>
          <div className="col-3 wd-font-color d-none d-lg-block">
            TOTAL <br/>
            <b>{p.price}</b>
          </div>
          <div className="col-4 wd-font-color d-lg-none">
            TOTAL <br/>
            <b>{p.price}</b>
          </div>
          <div className="col-3 wd-font-color d-none d-lg-block">
            SHIP TO <br/>
            <b>{p.shipTo}</b>
          </div>
          <div className="col-4 wd-font-color d-lg-none">
            SHIP TO <br/>
            <b>{p.shipTo}</b>
          </div>
          <div className="col-3 wd-font-color d-none d-lg-block">
            Order Number: {p.orderNumber}
          </div>
        </div>
        <hr/>
        <div className="wd-border">
        <div className="row align-items-center">

          <div className="col-md-2 col-sm-4 ">

            <img src={p.image} width="100%" alt="pp"/>
          </div>
          <div className="col-md-10 col-sm-8 ">
            <b className="wd-font-17"> Delivered {p.deliverDate}</b>
            <p className="wd-font-13 wd-margin-bot-0">
              <b>{p.productName}</b></p>
          </div>
        </div>
        </div>
      </li>
  );
}

export default OrderItem;