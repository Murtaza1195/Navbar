import React from "react";
import "../index.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Socialdata } from "../Socialicon";
const Topbar = () => {
  var curDate = new Date();
  var displayTodayDate = curDate.toLocaleDateString();
  console.log(displayTodayDate);
  var curTime = curDate.toLocaleTimeString();
  return (
    <>
      <div className="top-header">
        <div className= 'left'>
          <p>
            {displayTodayDate} {curTime}
          </p>
        </div>
        <div className="right">
          {Socialdata.map((item) => {
            const {
              id,
              borderColor,
              icon,
              iconColor,
              backgroundColor,
              url,
              size,
              margin,
            } = item;
            return (
              <SocialMediaIconsReact
                id={id}
                borderColor={borderColor}
                icon={icon}
                iconColor={iconColor}
                backgroundColor={backgroundColor}
                url={url}
                size={size}
                margin={margin}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Topbar;
