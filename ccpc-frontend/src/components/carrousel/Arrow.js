import React from "react";
import "./Slider.css";
import leftArrow from "../../imgs/left-arrow.svg";
import rightArrow from "../../imgs/right-arrow.svg";

function Arrow(props) {
  return (
    <div
      onClick={props.handleClick}
      className={props.direction === "right" ? "arrowRight" : "arrowLeft"}
    >
      {props.direction === "right" ? (
        <img className='arrowImgRight' src={rightArrow} />
      ) : (
        <img className='arrowImgLeft' src={leftArrow} />
      )}
    </div>
  );
}

export default Arrow;
