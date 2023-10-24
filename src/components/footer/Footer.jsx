import React from "react";
import "../footer/Footer.css";
import Footer_logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import intrest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer-logo">
        <img src={Footer_logo} />
        <p>SHOPPER</p>
      </div>
      <div className="footer-links">
        <ul></ul>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </div>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          {" "}
          <img src={insta} />
        </div>
        <div className="footer-icons-container">
          {" "}
          <img src={intrest} />{" "}
        </div>
        <div className="footer-icons-container">
          {" "}
          <img src={whatsapp} />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>CopyRight @ 2023- All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
