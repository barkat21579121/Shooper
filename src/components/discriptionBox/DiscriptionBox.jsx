import React from "react";
import "../discriptionBox/discriptionbox.css";

const DiscriptionBox = () => {
  return (
    <div className="Discription-Box">
      <div className="discription-box-nav">
        <div className="discription-box-nav-box">Discription</div>
        <div className="discription-box-nav-box fade">Reviews(122)</div>
      </div>
      <div className="discriptionbox-discription">
        <p>
          Our product encourages people to go make memories with their loved
          ones. You typically don’t see people sitting around a fire by
          themselves — they normally are with friends and family. There’s
          something really cool about that.
        </p>
        <p>
          Solo Stove emphasizes this sense of togetherness on their website.
          It’s full of images of people sitting around by the fire, enjoying
          delicious food and sharing stories and laughter.{" "}
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
