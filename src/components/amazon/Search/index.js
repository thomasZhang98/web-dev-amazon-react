import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Home/searchbar";
import products from "./products";

const Search = () => {
  const productSearchRef = useRef();
  // const { productSearch } = useParams();
  // const navigate = useNavigate();
  // const [products, setProducts] = useState([]);

  // const searchUrl = "https://www.omdbapi.com/?apikey=852159f0";

  const searchByProduct = async () => {
    //   const searchString =
    //     productSearchRef.current.value || productSearch || "mac";
    // const response = await axios.get(`${searchUrl}&s=${searchString}`);
    // setProducts(response.data.Search);
    // productSearchRef.current.value = searchString;
    // navigate(`/search/${searchString}`);
  };
  useEffect(() => {
    searchByProduct();
  }, []);

  return (
    <>
      <div className="row position-relative mt-2">
        <SearchBar />
        <div className="mt-3">
          {products.map((product) => (
            <li className="list-group-item">
              <Link to={`/details/${product.id}`}>
                <img
                  src={product.image}
                  className="me-4"
                  height={100}
                  width={100}
                  alt="..."
                />
                {product.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
