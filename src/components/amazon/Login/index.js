import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userRoles from "../data/userRoles.json";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useProfile } from "../../../contexts/profile-context";

const api = axios.create({
  withCredentials: true,
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useProfile();
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {
    if (email && password && role) {
      try {
        await login(email, password, role);
        navigate("/");
      } catch (e) {
        alert("Username not found or password incorrect. Please try again!");
      }
    } else {
      alert("Invalid input, please try again!");
    }
  };

  return (
    <div className="row justify-content-center px-2">
      <div className="card d-flex flex-column align-items-center mt-2">
        <div className="d-flex flex-column align-content-start">
          <label className="mt-4 mb-2" htmlFor="login-username">
            Username:{" "}
          </label>
          <input
            className="mb-2"
            id="login-username"
            type="email"
            placeholder="username"
            size="30"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="d-flex flex-column align-content-start">
          <label className="my-2" htmlFor="login-password">
            Password:
          </label>
          <input
            className="mb-2"
            id="login-password"
            type="password"
            placeholder="password"
            size="30"
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="my-2"> Role:</div>
          {userRoles.map((role) => (
            <label className="mb-2">
              <input
                className="me-2"
                type="radio"
                value={role.value}
                name="user-role"
                id="radio-buyer"
                onClick={() => setRole(role.value)}
              />
              {role.name}
            </label>
          ))}
        </div>
        <button className="btn btn-primary my-3" onClick={onLoginClick}>
          Sign In
        </button>
        <div className="d-flex mb-4">
          <div className="me-1">Don't have an account?</div>
          <Link to="/register"> Join now </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
