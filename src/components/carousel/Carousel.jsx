import React, { useState , useEffect} from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

const Carousel = ({ data }) => {

    // console.log(data.slides)
    const array = data.slides
    console.log(array)
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === array.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? array.length - 1 : slide - 1);
  };

  return (
    <div className="carousel flex justify-center w-full mt-11">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left mt-11" />
      {array.map((item, idx) => {
        return (
            <div className="flex jutify-center mt-11" key={idx}>
                <img
                    src={item.src}
                    alt={item.alt}
                    
                    className={slide === idx ? "slide " : "slide slide-hidden "}
                />
            </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right mt-11"
      />
      <span className="indicators">
        {array.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator " : "indicator indicator-inactive "
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel