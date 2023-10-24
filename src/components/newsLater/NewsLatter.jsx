import React from "react";
import "../newsLater/newsLatter.css";

const NewsLatter = () => {
  return <div className="newslatter">  
  <h1>Get Exclusive News on your Email </h1>
  <p>Subcribe to our News-Latter to stay Updated</p>
  <div>
    <input type="Email" placeholder="Type your Email ID"/>
    <button>Subscribe</button>
  </div>
  </div>
};

export default NewsLatter;
