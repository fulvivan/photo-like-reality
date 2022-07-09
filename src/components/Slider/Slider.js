import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(dataSlider.length - 1);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map(({ id }, index) => {
        return (
          <div
            key={id}
            className={slideIndex === index ? "slide active-anim" : "slide"}
          >
            <img src={`../../Imgs/${id}.jpg`} alt="" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from(dataSlider).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={slideIndex === index ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
