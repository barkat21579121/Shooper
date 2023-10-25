import React from "react";
import "../productDisplay/productDisplay.css";
import star from "../Assets/star_icon.png";
import start_dul from "../Assets/star_dull_icon.png";

const ProductDisplay = ({ display }) => {
  return (
    <div className="Product-display">
      <div className="product-display-left">
        <div className="product-display-img">
          <img src={display.image} />
          <img src={display.image} />
          <img src={display.image} />
          <img src={display.image} />
        </div>
        <div className="product-img">
          <img className="productdisplay-main" src={display.image} />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{display.name}</h1>
        <div className="product-display-RightStar">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={start_dul} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-price">
          <div className="product-display-right-old-price">
            ${display.old_price}
          </div>
          <div className="product-display-right-new-price">
            ${display.new_price}
          </div>
        </div>
        <div className="product-discription-R">
          A lightfull weight, usally knitted ,pulloverd shirt ,close fitting and
          with a round neckline and short sleves ,warm as an undershirt or outer
          garments .
        </div>
        <div className="product-display-right-size ">
            <h1>Select Size</h1>
            <div className="product-display-right-size ">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
        </div>
        <button > Add To Cart</button>
        <p className="Product-display-right-cat"> <span>category:</span>Women , T-shirt ,Crop-Top</p>
        <p className="Product-display-right-cat"> <span>Tags:</span>Modern ,Leatest</p>

      </div>
    </div>
  );
};

export default ProductDisplay;
