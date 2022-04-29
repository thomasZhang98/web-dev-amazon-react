import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import "../index.css";
import Pre from "../../../utils/pre";

const Details = () => {
    const {asin} = useParams();
    const product_url = 'https://api.rainforestapi.com/request?api_key=DC59025C567F45A5B063E5DB1EF567A2&type=product&amazon_domain=amazon.com&asin';
    const nodejs_url = 'http://localhost:4000/api/products'
    const [productDetails, setProductDetails] = useState({
        asin: asin,
        link: '',
        main_image: {
            link: 'not-found.png'
        },
        title: `Loading...`,
        brand: '',
        buybox_winner: {
            price: {
                value: ''
            }
        },
        feature_bullets: []
    })

    const [ourProductDetails, setOurProductDetails] = useState({
        asin: asin,
        link: '',
        image: 'not-found.png',
        title: 'Loading...',
        brand: '',
        price: '',
        feature_bullets: [],
        rating: 0,
        bookmarks: [],
        comments: []
    })

    const fetchProductByAsinFromAmazon = async () => {
        const response = await axios(`${product_url}=${asin}`)
        setProductDetails(response.data.product)
    }
    const fetchProductByAsinFromLocalAPI = async () => {
        const response = await axios(`${nodejs_url}/${asin}`)
        setOurProductDetails(response.data)
    }
    useEffect(() => {
        fetchProductByAsinFromAmazon()
        fetchProductByAsinFromLocalAPI()
    }, [])

    const handleBookmarks = async () => {
        const product = {
            asin: productDetails.asin,
            title: productDetails.title,
            brand: productDetails.brand,
            image: productDetails.main_image.link,
            price: productDetails.buybox_winner.price.value,
            feature_bullets: productDetails.feature_bullets,
            link: productDetails.link
        }
        await axios.post("http://localhost:4000/api/bookmarks", product)
        await fetchProductByAsinFromLocalAPI()
    }

    const [ratingVal, setRatingVal] = useState(5);

    const comment = () => {
        return <div>
            {productDetails.comments.map(c => {
                return (
                    <div className="list-group-item">
                        <h5 className="fw-bold">{c.user}</h5>
                        <div>rating: {c.rating}/5</div>
                        {c.comment}
                    </div>
                )
            })}
        </div>
    }

    return (
        <div className="mt-2">
            {productDetails === {} ? <div>Loading</div> :
                <>
                    <div className="d-flex align-items-start">
                        <img src={productDetails.main_image.link} className="w-25" alt={"loading..."}/>
                        <div className="float-start ms-3 w-100">
                            <h4>{productDetails.title === 'Loading...' ? <i className="fas fa-spinner fa-pulse me-2"></i> : ''}{productDetails.title}</h4>
                            <div>{productDetails.brand}</div>
                            <h5>${productDetails.buybox_winner.price.value}</h5>
                            <p>Rating: 0/5</p>
                            <button className="btn btn-success">Make Order</button>
                            <button className="btn btn-primary ms-2" onClick={handleBookmarks}>Bookmark ({ourProductDetails.bookmarks.length})</button>
                        </div>
                    </div>

                    <h5 className="mt-3">Highlights:</h5>
                    <ul>
                        {productDetails.feature_bullets.map(point => (
                            <li>{point}</li>
                        ))}
                    </ul>

                    <h5>Make a Comment:</h5>
                    <textarea placeholder={"Put down your comment"} className="form-control"></textarea>
                    <label className="text-white height-20px" id="rating">Rate: </label>
                    <input type="range" className="form-range w-25 ms-2 mt-2 pt-2" min="0" max="5" step="1" id="rating" onChange={e => setRatingVal(e.target.value)}/>
                    <span className="text-white ms-2 height-20px">{ratingVal}/5</span>
                    <button className="btn btn-primary mt-2 float-end">Submit</button>

                    <h5 className="mt-3">Comments:</h5>
                </>
            }
            <Pre obj={productDetails}/>
            <Pre obj={ourProductDetails}/>
        </div>
    )
}

export default Details;
