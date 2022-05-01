import React, { useEffect } from "react";
import ProductItem from "./product-item";
import { useDispatch, useSelector } from "react-redux";
import { findAllProducts } from "../../actions/products-action";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    async function fetchProducts() {
      await findAllProducts(dispatch);
    }
    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <h5 className="wd-list-title">Featured Products</h5>
      <ul className="list-group my-2">
        {products.map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })}
      </ul>
    </div>
  );
};
export default ProductList;
