import React from "react";
import "./Slider.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowsForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Arrow(props) {
  return (
    <div
      onClick={props.handleClick}
      className={props.direction === "right" ? "arrowRight" : "arrowLeft"}
    >
      {props.direction === "right" ? (
        <ArrowsForwardIosIcon className='arrowImgRight' />
      ) : (
        <ArrowBackIosIcon className='arrowImgLeft' />
      )}
    </div>
  );
}

export default Arrow;
