import React, { useState } from "react";
import {useNavigate, Link } from "react-router-dom";
import {ADMIN_ROLE} from "../reducers/user-reducer";
import userRoles from "../data/userRoles.json";
import adminLevels from "../data/adminLevels.json";
import {useProfile} from "../../../contexts/profile-context";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [adminLevel, setAdminLevel] = useState(-1);
  const navigate = useNavigate();
  const {register} = useProfile();

  const onRegisterClick = async () => {
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !role ||
      password !== confirmPassword ||
      (role === "ADMIN" && !adminLevel)
    ) {
      alert("Invalid inputs");
    } else {
      try {
        await register(
            email,
            password,
            adminLevel,
            role
        )
        navigate('/')
      } catch (e) {
        alert('Username already taken, please choose another one!')
      }
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="card d-flex flex-column align-items-center mt-2 col-11 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
        <div className="d-flex flex-column align-content-start">
          <label className="mt-4 mb-2" htmlFor="register-username">
            Username:{" "}
          </label>
          <input
            className="mb-2"
            id="register-username"
            type="email"
            placeholder="username"
            size="30"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="d-flex flex-column align-content-start">
          <label className="my-2" htmlFor="register-password">
            Password:
          </label>
          <input
            className="mb-2"
            id="register-password"
            type="password"
            placeholder="password"
            size="30"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="d-flex flex-column align-content-start">
          <label className="my-2" htmlFor="register-confirm-password">
            Confirm Password:{" "}
          </label>
          <input
            className="mb-2"
            id="register-confirm-password"
            type="password"
            placeholder="confirm password"
            size="30"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <div className="my-2"> Role Selection:</div>
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
          {role === ADMIN_ROLE ? (
            <div className="d-flex flex-column align-content-start">
              <div className="my-2"> Admin Level:</div>
              {adminLevels.map((level) => (
                <label className="mb-2">
                  <input
                    className="me-2"
                    type="radio"
                    value={level.value}
                    name="admin-level"
                    id="radio-level-1"
                    onClick={() => setAdminLevel(level.value)}
                  />
                  {level.name}
                </label>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary my-3" onClick={onRegisterClick}>
          Register
        </button>
        <div className="d-flex mt-1 mb-4">
          <div className="me-1">Already have an account?</div>
          <Link to="/login"> Log in </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
