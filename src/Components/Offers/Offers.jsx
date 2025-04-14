import React from "react";
import "./Offers.css";
import exclucive_imges from "../Assets/man-with-tie-that-says-hes-wearing_1313274-13758.jpg";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclucive_imges} alt="" />
      </div>
    </div>
  );
};

export default Offers;
