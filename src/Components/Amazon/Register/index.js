import React, {useState} from "react";
import {Link} from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const onRegisterClick = () => {
    if (!email || !password || !confirmPassword || !role || password !== confirmPassword) {
      alert("Invalid inputs");
    }
  }

  return (
      <div className="row justify-content-center">
        <div className="card d-flex flex-column align-items-center mt-2 col-11 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
          <div className="d-flex flex-column align-content-start">
            <label className='mt-4 mb-2'
                   htmlFor='register-username'>Username: </label>
            <input
                className='mb-2'
                id="register-username"
                type="email"
                placeholder="username"
                size="30"
                onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="d-flex flex-column align-content-start">
            <label className='my-2' htmlFor='register-password'>Password:</label>
            <input
                className='mb-2'
                id="register-password"
                type="password"
                placeholder="password"
                size="30"
                onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="d-flex flex-column align-content-start">
            <label className='my-2' htmlFor='register-confirm-password'>Confirm Password: </label>
            <input
               className='mb-2'
                id="register-confirm-password"
                type="password"
                placeholder="confirm password"
                size="30"
                onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <div className='my-2'> Role Selection: </div>
            <label className='mb-2'>
              <input className='me-2' type="radio" value="BUYER" name="user-role" id="radio-buyer" onClick={() => setRole('BUYER')}/>
              Buyer
            </label>
            <label className='mb-2'>
              <input className='me-2' type="radio" value="SELLER" name="user-role" id="radio-seller" onClick={() => setRole('SELLER')}/>
              Seller
            </label>
          </div>
          <button
              className="btn btn-primary my-3"
              onClick={onRegisterClick}
          >
            Register
          </button>
          <div className="d-flex mt-1 mb-4">
            <div className="me-1">Already have an account?</div>
            <Link to="/login"> Log in </Link>
          </div>
        </div>
      </div>
  )
}

export default Register;