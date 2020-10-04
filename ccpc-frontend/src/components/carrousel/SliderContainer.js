import React from "react";
import "./Slider.css";

function SliderContainer(props) {
  //Create a css style that makes use of props
  let css = {
    transform: `translateX(-${props.translate}px)`,
    transition: `transform ease-out ${props.transition}s`,
    height: "100%",
    width: `${props.width}px`,
    display: "flex",
  };

  return (
    <div className='sliderContainer' style={css}>
      {props.children}
    </div>
  );
}

export default SliderContainer;
