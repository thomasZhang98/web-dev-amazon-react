import React from "react";
import "./home.css";
import SearchBar from "./searchbar";
import OrderList from "./orders";
import {useProfile} from "../../../contexts/profile-context";

const Home = () => {
  const {profile} = useProfile();
  if (profile) {

  }
  return (
    <div className="row">
      <SearchBar />
      <OrderList />
    </div>
  );
};
export default Home;
