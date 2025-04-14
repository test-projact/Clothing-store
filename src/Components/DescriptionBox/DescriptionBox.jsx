import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          at dicta, tempora nulla quos est nihil quam maxime cumque! Soluta
          natus ipsum incidunt placeat tempore, quasi alias voluptates saepe
          quos quod vero, sit ducimus ipsa aspernatur sapiente, beatae aliquam
          hic.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus, excepturi voluptatum repellat perferendis commodi
          veniam voluptates itaque eius quia! Sequi eos repudiandae aperiam
          ullam.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
