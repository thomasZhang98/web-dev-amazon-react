import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userRoles from "../data/userRoles.json";
import { useDispatch } from "react-redux";
import { findOrderByBuyerId } from "../actions/orders-actions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {
    if (email && password && role) {
      // TODO: replace mock call with actual buyerId
      await findOrderByBuyerId(dispatch, 123);
      navigate("/");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="card d-flex flex-column align-items-center mt-2 col-11 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
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
