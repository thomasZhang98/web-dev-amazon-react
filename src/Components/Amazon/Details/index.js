import React from 'react';
import products from "../data/testProducts.json";
import {useParams} from "react-router-dom";

const Details = () => {
    const {id} = useParams()
    const product = products.find(p => p.pid === id);
    let ratingSum = 0;
    for (let i in product.comments) {
        ratingSum += product.comments[i].rating;
    }
    const averageRating = ratingSum / product.comments.length;

    return (
        <div className="mt-2">
            <div className="d-flex">
                <img src={product.image} className="w-25"/>
                <div className="float-start ms-3 w-100">
                    <h2>{product.name}</h2>
                    <h5>{product.brand}</h5>
                    <h5>${product.price}</h5>
                    <h5>Rating: {averageRating}/5</h5>
                    <button className="btn btn-primary">Add To Cart</button>
                    <button className="btn btn-success ms-2">Bookmark</button>
                </div>
            </div>

            <h5 className="mt-3">Description:</h5>
            <p>{product.description}</p>

            <h5>Make a Comment</h5>
            <div className="container">
                <span className="empty-stars"></span>
            </div>
            <textarea placeholder={"Put down your comments"} className="form-control"></textarea>
            <button className="btn btn-primary mt-2">Submit</button>

            <h5 className="mt-3">Comments:</h5>
            <div>
                {product.comments.map(c => {
                    return (
                        <div className="list-group-item">
                            <h5 className="fw-bold">{c.user}</h5>
                            <div>rating: {c.rating}/5</div>
                            {c.comment}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Details;
