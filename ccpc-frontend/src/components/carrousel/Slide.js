import React from "react";
import "./Slider.css";

function Slide(props) {
  return (
    <div className='slide'>
      <img src={props.content} />
      <div className='info'>
        <h2>{props.headline}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Slide;
