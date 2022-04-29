import React from "react";
import "./home.css"
import {Link} from "react-router-dom";

// creating search bar at the very top of the middle column
const Searchbar = () => {
  return (
      <div className="box mb-2 mt-2">
        <div className="wd-flex">
          <button type="button" className="wd-left-btn wd-abtn d-none d-xl-block ms-1">
            All <i className="fa-solid fa-caret-down ">  </i>
          </button>

          <button type="button" className="wd-left-btn wd-abtn d-xl-none">
            <i className="fa-solid fa-caret-down "/>
          </button>
          <input type="input" className="wd-input" placeholder="Search..."/>

          <button type="submit"  className="wd-right-btn">
            <Link to="/search">
              <i className="fa-solid fa-magnifying-glass wd-search"/>
            </Link>
          </button>

        </div>
      </div>
  )
}

export default Searchbar;