import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";
import SecureContent from "../../secure-content";
import {useProfile} from "../../../contexts/profile-context";
import Cm from "./comments";

const api = axios.create({withCredentials: true})

const Details = () => {
    const {profile} = useProfile();
    const [user, setUser] = useState(null);
    const {asin} = useParams();
    const navigate = useNavigate();
    const product_url = 'https://api.rainforestapi.com/request?api_key=DC1695CE686742979025FA03FF744234&type=product&amazon_domain=amazon.com&asin';
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
    link: "",
    image: "not-found.png",
    title: "Loading...",
    brand: "",
    price: "",
    feature_bullets: [],
    bookmarks: 0,
  });

  const fetchProductByAsinFromAmazon = async () => {
    const response = await axios(`${product_url}=${asin}`);
    setProductDetails(response.data.product);
  };

  const fetchProductByAsinFromLocalAPI = async () => {
    const response = await api(`${nodejs_url}/${asin}`);
    setOurProductDetails(response.data);
  };

  const fetchUser = async () => {
    const response = await api(`http://localhost:4000/api/buyers/${profile._id}`)
    setUser(response.data)
  }

  useEffect(() => {
    fetchProductByAsinFromAmazon();
    fetchProductByAsinFromLocalAPI();
    fetchUser();
  }, []);

  const handleBookmarks = async () => {
    const product = {
      asin: productDetails.asin,
      title: productDetails.title,
      brand: productDetails.brand,
      image: productDetails.main_image.link,
      price: productDetails.buybox_winner.price.value,
      feature_bullets: productDetails.feature_bullets,
      link: productDetails.link,
    };

    if (user && user.bookmarks.includes(asin)) {
      await api.post("http://localhost:4000/api/unbookmarks", product);
      setUser({...user, bookmarks: user.bookmarks.filter(bk => bk !== asin)})
      setOurProductDetails({...ourProductDetails, bookmarks: ourProductDetails.bookmarks - 1});
    } else if (user && !user.bookmarks.includes(asin)) {
      const response = await api.post("http://localhost:4000/api/bookmarks", product);
      user.bookmarks.push(asin)
      setUser(user)
      setOurProductDetails({...ourProductDetails, bookmarks: ourProductDetails.bookmarks + 1});
    }
    await fetchProductByAsinFromLocalAPI();
    await fetchUser();
  };

  const handleOrder = async () => {
    const product = {
      asin: productDetails.asin,
      title: productDetails.title,
      brand: productDetails.brand,
      image: productDetails.main_image.link,
      price: productDetails.buybox_winner.price.value,
      feature_bullets: productDetails.feature_bullets,
      link: productDetails.link,
    };

    await api.post("http://localhost:4000/api/orders", product);
    navigate('/')
  }

  const addComment = async (comment) => {
      try {
          const response = await api.post(`${nodejs_url}/addComment`,
              {
                  buyer_id: profile._id,
                  userName: profile.userName,
                  product_id: ourProductDetails.asin,
                  comment: comment
              })
          const commentCard = {
              comment: comment,
              buyer_id: profile._id,
              userName: profile.userName
          }
          ourProductDetails.comments.push(commentCard)
          setOurProductDetails(ourProductDetails)
      } catch (e) {
          alert('oops')
      }
      await fetchProductByAsinFromLocalAPI();
  }

  return (
    <div className="mt-2">
      {productDetails === {} ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="d-flex align-items-start">
            <img
              src={productDetails.main_image.link}
              className="w-25"
              alt={"loading..."}
            />
            <div className="float-start ms-3 w-100">
              <h4>
                {productDetails.title === "Loading..." ? (
                  <i className="fas fa-spinner fa-pulse me-2"></i>
                ) : (
                  ""
                )}
                {productDetails.title}
              </h4>
              <div>{productDetails.brand}</div>
              <h5>${productDetails.buybox_winner.price.value}</h5>
              <SecureContent>
                <div>
                  <button className="btn btn-success" onClick={handleOrder}>
                    Make Order
                  </button>
                  <button
                    className="btn btn-primary ms-2"
                    onClick={handleBookmarks}
                  >
                    {user && user.bookmarks && user.bookmarks.includes(asin)
                      ? "Unbookmark"
                      : "Bookmark"}{" "}
                    ({ourProductDetails && ourProductDetails.bookmarks})
                  </button>
                </div>
              </SecureContent>
            </div>
          </div>

          <h5 className="mt-3">Highlights:</h5>
          <ul>
            {productDetails.feature_bullets.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
          <SecureContent>
            <div>
              <h5>Make a Comment:</h5>
              <Cm comments={ourProductDetails && ourProductDetails.comments} addComment={addComment}/>
            </div>
          </SecureContent>
        </>
      )}
    </div>
  );
};

export default Details;
