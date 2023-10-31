import React, { useState } from "react";
import "../pages/Css/login.css";
import { useReducer } from "react";
import { Link, json } from "react-router-dom";
import Login from "./Login";
// import { type } from "@testing-library/user-event/dist/type";

const initislState = {
  UserName: "",
  Email: "",
  PassWord: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, UserName: action.payload }
    case "email":
      return { ...state, Email: action.payload }
    case "password":
      return { ...state, PassWord: action.payload }
  }
}
console.log(initislState);

const LoginSignUp = () => {
  const [state, dispatch] = useReducer(reducer, { initislState });


 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("kkkk",state);
   
    localStorage.setItem("Rigistration", JSON.stringify(state));
  };

  return (
    <>
      <form
        onSubmit={ handleSubmit}
        className="login"
      >
        <div className="login-container">
          <h1>Sign Up</h1>
          <div className="login-fields">
            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => {
                dispatch({ type: "name", payload: e.target.value });
              }}
            />
            <input
              type="Email"
              placeholder="Enter Email"
              required
              onChange={(e) => {
                dispatch({ type: "email", payload: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                dispatch({ type: "password", payload: e.target.value });
              }}
            />
          </div>
        <button type="submit">Submit</button>
          <p className="login-already">
            Already Have an Acoount? <span><a href={"/log"}>Login Here</a></span>
          </p>
          <div className="login-agree">
            <input type="checkbox" name="" id="" />
            <p required>By Continuing , i agree to the terms and conditions </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginSignUp;
