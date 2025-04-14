import React from "react";
import "./Hero.css";

import hero_imge from "../Assets/man-wearing-white-shirt-shorts-that-says-hes-wearing-shirt_1313274-13726.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEWW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Lastest Collection</div>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_imge} alt="" />
      </div>
    </div>
  );
};

export default Hero;
