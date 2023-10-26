import React from "react";
import "../pages/Css/login.css";
import { useReducer } from "react";
import { Link } from "react-router-dom";
// import { type } from "@testing-library/user-event/dist/type";

const initislState = {
  UserName: "",

  PassWord: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, UserName: action.payload };

    case "password":
      return { ...state, PassWord: action.payload };
  }
}
console.log(initislState);

const Login = () => {
  const [State, dispatch] = useReducer(reducer, { initislState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(State);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login">
        <div className="login-container">
          <h1>Log In</h1>
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
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                dispatch({ type: "password", payload: e.target.value });
              }}
            />
          </div>
       <Link to={"/"}>  <button type="submit">Log In</button></Link> 
          <p className="login-already">
          Create Account Here {" "}
          <span>
            <a href={"/login"}>Sign-up-here</a>
          </span>
        </p>
        </div>
      
       
      </form>
    </>
  );
};

export default Login;
