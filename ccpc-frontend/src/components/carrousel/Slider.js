import React, { useState, useEffect, useRef } from "react";
import SliderContainer from "./SliderContainer";
import Dots from "./Dots";
import Slide from "./Slide";
import Arrow from "./Arrow";
import "./Slider.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import img1 from "../../imgs/slider-pc-1.png";
import img2 from "../../imgs/slider-pc-2.png";
import img3 from "../../imgs/slider-pc-3.png";

const getWidth = () => window.innerWidth;

const images = [img1, img2, img3];

const desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et velit et eros feugiat condimentum. Integer vehicula, nibh non gravida lacinia, ipsum ante sollicitudin nisl, viverra varius erat sem sit amet leo. Mauris vel fermentum elit, quis faucibus urna. Quisque vitae tincidunt arcu. Curabitur fringilla, risus venenatis ultrices imperdiet, sapien justo posuere lacus, sit amet tristique nunc neque sed tortor. Donec enim arcu, consectetur et turpis eget, facilisis luctus elit. Morbi finibus sollicitudin sapien sed varius. Morbi vel orci sem. Nullam consequat, ante a cursus fermentum, quam libero porttitor eros, vitae varius tortor neque quis neque. Vestibulum luctus, turpis sit amet fermentum ornare, magna est congue mi, et fermentum nibh nulla vitae eros. Sed at sapien lorem. Quisque nec pretium magna.";

const headline = "Gaming computers everyone can afford!";
const Slider = () => {
  const firstSlide = images[0];
  const secondSlide = images[1];
  const lastSlide = images[images.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, _slides, transition } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e) => {
      if (e.target.className.includes("sliderContainer")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    let interval = null;

    interval = setInterval(play, 5000);

    return () => {
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide.
    if (activeSlide === images.length - 1)
      _slides = [images[images.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = images.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === images.length - 1 ? 0 : activeSlide + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? images.length - 1 : activeSlide - 1,
    });

  return (
    <div className='slider'>
      <SliderContainer
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide
            width={getWidth()}
            key={_slide + i}
            content={_slide}
            desc={desc}
            headline={headline}
          />
        ))}
      </SliderContainer>

      <Arrow direction='left' handleClick={prevSlide} />
      <Arrow direction='right' handleClick={nextSlide} />

      <Dots slides={images} activeSlide={activeSlide} />
    </div>
  );
};

export default Slider;
