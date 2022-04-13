import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Amazon from "./Components/Amazon";
import Home from "./Components/Amazon/Home";
import Search from "./Components/Amazon/Search";
import Login from "./Components/Amazon/Login";
import Register from "./Components/Amazon/Register"
import Profile from "./Components/Amazon/Profile";
import Details from "./Components/Amazon/Details";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Amazon/>}>
                  <Route index
                         element={<Home/>}/>
                  <Route path="search"
                         element={<Search/>}/>
                  <Route path="login"
                         element={<Login/>}/>
                 <Route  path="register"
                         element={<Register/>}/>
                  <Route path="profile"
                         element={<Profile/>}/>
                  <Route path="details/:id"
                         element={<Details/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
