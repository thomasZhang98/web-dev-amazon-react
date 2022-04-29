import React from "react";
import "./home.css";
import SearchBar from "./searchbar";
import OrderList from "./orders";

const Home = () => {
  return (
    <div className="row">
      <SearchBar />
      <OrderList />
    </div>
  );
};
export default Home;
