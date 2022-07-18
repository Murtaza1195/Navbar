import React from "react";
import { slideData } from "../Slidedata";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
    
  return (
    <>
    <div className="silder">
     
      <Carousel>
        {slideData.map((item) => {
          const { id, img } = item;
          return (
           
              
                <img class="slider-img" src={img} key={id} alt="img" />
              
           
          );
        })}
      </Carousel>
      </div>
    </>
  );
};

export default Slider;
