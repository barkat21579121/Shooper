import React from "react";
import "../pages/Css/login.css";
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const history =useNavigate()
  const [State, dispatch] = useReducer(reducer, {initislState });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(State)
   const verify = localStorage.getItem("Rigistration");
   if (verify && verify.length){
    const getVerified = JSON.parse(verify);
   const arr= Array.from(getVerified)
    console.log(typeof(getVerified))
    const finalizedVerify = arr.filter((item,i)=>{
 return item.Name === State.UserName && item.PassWord === State.PassWord

    })
    if (finalizedVerify.length === State){
      alert ("invalid details ")
    }else{
      history("/")
      localStorage.getItem("user_logedIn", JSON.stringify(finalizedVerify))
    }
   }
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
      <button type="submit">Log In</button>
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
