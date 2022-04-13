import React from 'react';
import "./home.css"
import {Provider} from "react-redux";
import {Link} from "react-router-dom";
import SearchBar from "./searchbar";
import BookmarkList from "./bookmark/bookmark";
import bookmarkReducer from "./reducer/bookmark-reducer";
import {combineReducers, createStore} from "redux";
import OrderList from "./orders";
import orderReducer from "./reducer/order-reducer";
const reducer = combineReducers({
  bookmark: bookmarkReducer, order:orderReducer
});
const store = createStore(reducer);


const Home = () => {
  return (
      <Provider store={store}>
      <div className="row ">
        <div className="col-8">
          <SearchBar/>
          <OrderList/>
        </div>
        <div className="col-4 mt-2">


            <b>Address:</b>

          <Link to="/profile">
          <button type="button" className="wd-address-btn" >
            360 Huntington Ave,<br/>
            Boston, MA 02115
          </button>
            </Link>
          <BookmarkList/>


        </div>
      </div>
      </Provider>

  )
}
export default Home;
