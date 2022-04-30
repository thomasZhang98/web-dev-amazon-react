import React from "react";

const ProductItem = ({ product }) => {
  return (
    <li key={product._id} className="card my-2 p-2">
      <div className="row align-items-top">
        <div className="col-3 wd-font-color d-none d-lg-block">
          Product ID:
          <br />
          <b>{product.asin}</b>
        </div>
        <div className="col-3 wd-font-color d-none d-lg-block">
          PRICE: <br />
          <b>{product.price}</b>
        </div>
        <div className="col-4 wd-font-color d-lg-none">
          PRICE: <br />
          <b>{product.price}</b>
        </div>
        <div className="col-3 wd-font-color d-none d-lg-block">
          RATING: <br />
          <b>{product.rating}</b>
        </div>
        <div className="col-4 wd-font-color d-lg-none">
          RATING: <br />
          <b>{product.rating}</b>
        </div>
        <div className="col-3 wd-font-color d-none d-lg-block">
          BOOKMARKS: <br />
          <b>{product.bookmarks.size}</b>
        </div>
        <div className="col-4 wd-font-color d-lg-none">
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
              <b>{product.brand}</b>
            </p>
            <p className="wd-font-13 wd-margin-bot-0">
              <b>{product.title}</b>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
