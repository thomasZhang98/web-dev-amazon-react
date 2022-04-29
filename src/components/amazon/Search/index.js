import React, {useState, useRef, useEffect} from "react";
import axios from 'axios';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import Pre from "../../../utils/pre.js"

const Search = () => {
  const [products, setProducts] = useState([])
  const [sentRequest, setSentRequest] = useState(false)
  const {searchString} = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const search_url = 'https://api.rainforestapi.com/request?api_key=8F0CEDE12EFA49D6BA05089B2EB4FFBD&type=search&amazon_domain=amazon.com&search_term'
  const searchProductRef = useRef();

  const searchProducts = async () => {
    setSentRequest(true)
    const response = await axios.get(`${search_url}=${searchProductRef.current.value}`);
    setProducts(response.data.search_results);
    navigate(`/search/${searchProductRef.current.value}`)
    console.log('here')
  };

  useEffect(() => {
    if (searchString) {
      searchProductRef.current.value = searchString
      searchProducts()
    }
  })

  return (
      <>
        <div className="row position-relative mt-2">
          <div className="mb-2 w-100 d-flex">
            <i className="fa-solid fa-search position-absolute pt-2 mt-1 ms-3"></i>
            <input className="border form-control rounded-pill w-100 pt-1 pb-1 ps-5 me-2" type="text" placeholder="Search Amazon" ref={searchProductRef}/>
            <button onClick={searchProducts} className="btn btn-primary rounded-pill">Search</button>
          </div>
          {products.length === 0 && sentRequest ? <div className="text-center"><i className="fas fa-spinner fa-pulse me-2"></i>Loading...</div> : ''}

          <div className="mt-3 list-group">
            {products.map((product) => (
                <li className="list-group-item">
                  <Link to={`/details/${product.asin}`} className="text-decoration-none text-white d-flex align-items-start">
                    <img
                        src={product.image}
                        className="me-4"
                        alt="image"
                        width="200"
                    />{product.title}
                    {product.price}
                  </Link>
                </li>
            ))}
          </div>
          <Pre obj={searchString}/>
          <Pre obj={products}/>
          <Pre obj={sentRequest}/>
        </div>
      </>
  );
};

export default Search;