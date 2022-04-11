import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClick = () => {
        if (email && password) {
            alert(`Logged In with email: ${email} and password: ${password}`);
        }
    }

    return (
        <div className="row">
          <div className="card d-flex flex-column align-items-center mt-2 mx-2 mx-md-4 col-11 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <label className='mt-4 mb-3'>Username:
              <input
                  className='mx-2'
                  id="login-email"
                  type="email"
                  placeholder="username"
                  onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label className='my-2'>Password:
              <input
                  className='mx-2'
                  id="login-password"
                  type="password"
                  placeholder="password"
                  onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button
                className="btn btn-primary my-3"
                onClick={onLoginClick}
            >
              Sign In
            </button>
            <div className="d-flex mb-4">
              <text className="me-1">Don't have an account?</text>
              <Link to="/register"> Join now </Link>
            </div>
          </div>
        </div>
    )
}

export default Login;
