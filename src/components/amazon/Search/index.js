import React, { useState, useRef, useEffect } from "react";
import "./search.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [sentRequest, setSentRequest] = useState(false);
  const { searchString } = useParams();
  const navigate = useNavigate();
  const search_url =
    "https://api.rainforestapi.com/request?api_key=AC883445A08142609E55D8D2FB926192&type=search&amazon_domain=amazon.com&search_term";
  const searchProductRef = useRef();

  const searchProducts = async () => {
    setSentRequest(true);
    const response = await axios.get(
      `${search_url}=${searchProductRef.current.value}`
    );
    setProducts(response.data.search_results);
    console.log(products);
    navigate(`/search/${searchProductRef.current.value}`);
  };

  useEffect(() => {
    if (searchString) {
      searchProductRef.current.value = searchString;
      searchProducts();
    }
  });

  return (
    <>
      <div className="row position-relative mt-2">
        <div className="box mb-2">
          <div className="wd-flex">
            <button
              type="button"
              className="wd-left-btn wd-abtn d-none d-xl-block ms-1"
            >
              All <i className="fa-solid fa-caret-down "> </i>
            </button>

            <button type="button" className="wd-left-btn wd-abtn d-xl-none">
              <i className="fa-solid fa-caret-down " />
            </button>
            <input
              type="text"
              className="wd-input"
              placeholder="Search..."
              ref={searchProductRef}
            />

            <button onClick={searchProducts} className="wd-right-btn">
              <i className="fa-solid fa-magnifying-glass wd-search" />
            </button>
          </div>
        </div>
        {products.length === 0 && sentRequest ? (
          <div className="text-center">
            <i className="fas fa-spinner fa-pulse me-2"></i>Loading...
          </div>
        ) : (
          ""
        )}

        <div className="mt-3 list-group">
          {products.map((product) => (
            <li className="list-group-item">
              <Link
                to={`/details/${product.asin}`}
                className="text-decoration-none d-flex align-items-start"
              >
                <img
                  src={product.image}
                  className="me-4"
                  alt="image"
                  width="200"
                />
                {product.title}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
