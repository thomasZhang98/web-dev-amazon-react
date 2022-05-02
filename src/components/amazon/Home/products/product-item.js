import React from "react";
import {Link} from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <li key={product._id} className="card my-2 p-2">
      <div className="row align-items-top">
        <div className="col-4 wd-font-color d-none d-lg-block">
          Product ID:
          <br />
          <b>{product.asin}</b>
        </div>
        <div className="col-4 wd-font-color">
          PRICE: <br />
          <b>{product.price}</b>
        </div>
        <div className="col-4 wd-font-color ">
          BOOKMARKS: <br />
          <b>{product.bookmarks.size}</b>
        </div>
      </div>
      <hr />
      <div className="wd-border">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-4 ">
            <img src={product.image} width="100%" alt="pp" />
          </div>
          <div className="col-md-10 col-sm-8 ">
            <p className="wd-font-13 wd-margin-bot-0">
              <b><Link to={`/details/${product.asin}`}>{product.title}</Link></b>
            </p>
            <p className="wd-font-13 wd-margin-bot-0">
              <span>brand: {product.brand}</span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
