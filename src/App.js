import "./vendors/bootstrap/bootstrap.min.css";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Amazon />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />}>
            <Route path=":id" element={<Profile />} />
          </Route>
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
