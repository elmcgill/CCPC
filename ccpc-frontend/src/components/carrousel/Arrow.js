import React from "react";
import "./Slider.css";
import leftArrow from "../../imgs/left-arrow.svg";
import rightArrow from "../../imgs/right-arrow.svg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Arrow(props) {
  return (
    <div
      onClick={props.handleClick}
      className={props.direction === "right" ? "arrowRight" : "arrowLeft"}
    >
      {props.direction === "right" ? (
        <ArrowForwardIosIcon className='arrowImgRight'/>
      ) : (
        <ArrowBackIosIcon className='arrowImgLeft'/>
      )}
    </div>
  );
}

export default Arrow;
