import React, { useState } from "react";
import "../navbar/Navbar.css";
import logo from "../Assets/logo.png";
import card_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu,setManu]=useState("Shop")
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="img" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-manu">
        <li onClick={()=>{setManu("Shop")}}>   <Link style={{textDecoration : 'none'}} to="/" > Shop </Link> {menu === "Shop" ?  <hr/>: <></>}</li>
        <li onClick={()=>{setManu("Mens")}}>  <Link style={{textDecoration : 'none'}} to="/mens">  Mens</Link>{menu === "Mens" ?  <hr/>: <></>}</li>
        <li onClick={()=>{setManu("Womens")}}>    <Link style={{textDecoration : 'none'}} to="/womens">Womens</Link>{menu === "Womens" ?  <hr/>: <></>}</li>
        <li onClick={()=>{setManu("Kids")}}>  <Link style={{textDecoration : 'none'}} to="/kids">  Kids</Link>{menu === "Kids" ?  <hr/>: <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link style={{textDecoration : 'none'}} to='/login'>login</Link></button>
        <Link  to="/card"><img src={card_icon}/></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
