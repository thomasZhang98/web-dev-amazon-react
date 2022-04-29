import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import bookmarksReducer from "./reducers/bookmarks-reducer";
import ordersReducer from "./reducers/orders-reducer";
import userReducer from "./reducers/user-reducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import BookmarkList from "./Bookmarks";

const reducer = combineReducers({
  bookmarks: bookmarksReducer,
  orders: ordersReducer,
  user: userReducer,
});
const store = createStore(reducer);
const Amazon = () => {
  return (
    <Provider store={store}>
      <div className="row m-2">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar active={"home"} />
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <Outlet />
        </div>
        <div className="d-none d-lg-block col-lg-4">
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
    </Provider>
  );
};

export default Amazon;
