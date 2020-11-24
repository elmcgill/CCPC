import React from "react";
import "./Slider.css";

const Dot = ({ active, slide }) => (
  <span className={active ? "activeSlide" : "notActiveSlide"}></span>
);

function Dots(props) {
  return (
    <div className='dots'>
      {props.slides.map((slide, i) => (
        <Dot key={slide} active={props.activeSlide === i}/>
      ))}
    </div>
  );
}

export default Dots;
