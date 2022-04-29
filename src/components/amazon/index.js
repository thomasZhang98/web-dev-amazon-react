import React from "react";
import { Outlet } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import bookmarksReducer from "./reducers/bookmarks-reducer";
import ordersReducer from "./reducers/orders-reducer";
import userReducer from "./reducers/user-reducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const reducer = combineReducers({
  bookmarks: bookmarksReducer,
  orders: ordersReducer,
  user: userReducer,
});
const store = createStore(reducer);
const Amazon = () => {
  return (
    <Provider store={store}>
      <div className="container mt-2">
        <div className="row">
          <div className="col-2">
            <NavigationSidebar active={"home"} />
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Amazon;
