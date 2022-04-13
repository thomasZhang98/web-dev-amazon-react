import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClick = () => {
        if (email && password) {
            alert(`Logged In with email: ${email} and password: ${password}`);
            navigate('/')
        }
    }

    return (
        <div className="row justify-content-center">
          <div className="card d-flex flex-column align-items-center mt-2 col-11 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <div className="d-flex flex-column align-content-start">
              <label className='mt-4 mb-2' htmlFor="login-username">Username: </label>
              <input
                  className='mb-2'
                  id="login-username"
                  type="email"
                  placeholder="username"
                  size="30"
                  onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="d-flex flex-column align-content-start">
              <label className='my-2' htmlFor="login-password">Password:</label>
              <input
                  className='mb-2'
                  id="login-password"
                  type="password"
                  placeholder="password"
                  size="30"
                  onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
                className="btn btn-primary my-3"
                onClick={onLoginClick}
            >
              Sign In
            </button>
            <div className="d-flex mb-4">
              <div className="me-1">Don't have an account?</div>
              <Link to="/register"> Join now </Link>
            </div>
          </div>
        </div>
    )
}

export default Login;
