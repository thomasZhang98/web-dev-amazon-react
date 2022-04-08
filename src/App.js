import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Amazon from "./components/Amazon";
import Home from "./components/Amazon/Home";
import Search from "./components/Amazon/Search";
import Login from "./components/Amazon/Login";
import Profile from "./components/Amazon/Profile";
import Details from "./components/Amazon/Details";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Amazon/>}>
                      <Route index
                             element={<Home/>}/>
                      <Route path="search"
                             element={<Search/>}/>
                      <Route path="login"
                             element={<Login/>}/>
                      <Route path="profile"
                             element={<Profile/>}/>
                      <Route path="details"
                             element={<Details/>}/>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
