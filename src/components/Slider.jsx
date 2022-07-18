import React from "react";
import { slideData } from "../Slidedata";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

const Slider = () => {
    
  return (
    <>
    <div className="silder">
     
      <Carousel>
        {slideData.map((item) => {
          const { id, img,url } = item;
          return (
           
               <NavLink to={url}>
                <img class="slider-img" src={img} key={id} alt="img" />
                </NavLink>
           
          );
        })}
      </Carousel>
      </div>
    </>
  );
};

export default Slider;
