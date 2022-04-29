import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../actions/orders-actions";
import products from "../data/testProducts.json";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

const Details = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const product = products.find((p) => p.pid === id);
  let ratingSum = 0;
  for (let i in product.comments) {
    ratingSum += product.comments[i].rating;
  }
  const averageRating = ratingSum / product.comments.length;
  const [ratingVal, setRatingVal] = useState(5);
  const [newOrder] = useState({
    buyerId: user._id,
    shippingAddress: user.address,
    productId: id,
    productName: product.name,
    productBrand: product.brand,
    productImage: product.image,
    price: product.price,
  });

  return (
    <div className="mt-2">
      <div className="d-flex">
        <img src={product.image} className="w-25" />
        <div className="float-start ms-3 w-100">
          <h3>{product.name}</h3>
          <h5>{product.brand}</h5>
          <h5>${product.price}</h5>
          <h5>Rating: {averageRating}/5</h5>
          <button
            className="btn btn-primary"
            onClick={() =>
              createOrder(dispatch, { ...newOrder, orderTime: Date.now() })
            }
          >
            Purchase
          </button>
          <button className="btn btn-success ms-2">Bookmark</button>
        </div>
      </div>

      <h5 className="mt-3">Description:</h5>
      <p>{product.description}</p>

      <h5>Make a Comment</h5>
      <div className="container">
        <span className="empty-stars"></span>
      </div>
      <textarea
        placeholder={"Put down your comment"}
        className="form-control"
      ></textarea>
      <label className="text-white height-20px" id="rating">
        Rate:{" "}
      </label>
      <input
        type="range"
        className="form-range w-25 ms-2"
        min="0"
        max="5"
        step="1"
        id="rating"
        onChange={(e) => setRatingVal(e.target.value)}
      />
      <span className="text-white ms-2 height-20px">{ratingVal}/5</span>
      <div>
        <button className="btn btn-primary mt-2">Submit</button>
      </div>

      <h5 className="mt-3">Comments:</h5>
      <div>
        {product.comments.map((c) => {
          return (
            <div className="list-group-item">
              <h5 className="fw-bold">{c.user}</h5>
              <div>rating: {c.rating}/5</div>
              {c.comment}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
