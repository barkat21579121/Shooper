import React from "react";
import "../pages/Css/login.css";
const LoginSignUp = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder="Your Name"  required/>
          <input type="Email" placeholder="Emter Email" required/>
          <input type="password" placeholder="Password" required/>
        </div>
        <button>Continue</button>
        <p className="login-already">
          Already Have an Acoount?<span>Login Here</span>
        </p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing , i agree to the terms and conditions </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
