import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import BookmarkList from "./bookmark/bookmark";
import OrderList from "./orders";

const Home = () => {
  return (
    <div className="row ">
      <div className="col-8">
        <SearchBar />
        <OrderList />
      </div>
      <div className="col-4 mt-2">
        <b>Address:</b>
        <Link to="/profile">
          <button type="button" className="wd-address-btn">
            360 Huntington Ave,
            <br />
            Boston, MA 02115
          </button>
        </Link>
        <BookmarkList />
      </div>
    </div>
  );
};
export default Home;
