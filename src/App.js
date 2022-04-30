import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amazon from "./components/amazon";
import Home from "./components/amazon/Home";
import Search from "./components/amazon/Search";
import Login from "./components/amazon/Login";
import Register from "./components/amazon/Register";
import Profile from "./components/amazon/Profile";
import Details from "./components/amazon/Details";
import React from "react";
import {ProfileProvider} from "./contexts/profile-context";
import SecureRoute from "./components/secure-route";

function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <div className="container w-100">
          <Routes>
            <Route path="/" element={<Amazon />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="search" element={<Search />} >
                <Route path=":searchString" element={<Search />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={
                  <SecureRoute>
                    <Profile />
                  </SecureRoute>
                }>
                <Route path=":id" element={
                  <SecureRoute>
                    <Profile />
                  </SecureRoute>
                  } />
              </Route>
              <Route path="details/:asin" element={<Details />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ProfileProvider>
  );
}

export default App;
