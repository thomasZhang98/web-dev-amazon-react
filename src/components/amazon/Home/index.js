import React from "react";
import "./home.css";
import OrderList from "./orders";
import ProductList from "./products";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="mt-2">
      {user.loggedIn && <OrderList />}
      {!user.loggedIn && <ProductList />}
    </div>
  );
};
export default Home;
