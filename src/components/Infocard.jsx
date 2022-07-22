import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Socialdata } from "../Socialicon";
import "../index.css";

const Infocard = (props) => {
  // Props kahan say Aa rahay, open t
  // Write code here and apply property chalein wo lekh ky apko inform krta hn per ap dekh lein

  return (
    <>   
<div className="container">
    <div className="card">
    <img src={props.img} className="card-img-top" alt="img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__phone">{props.phone}</p>
        <h3 className="card__Email">{props.Email}</h3>
        <h3 className="card__Email">{props.Gender}</h3>
        <a href="/">
                      {Socialdata.map((item) => {
                        return (
                          <SocialMediaIconsReact
                            id={item.id}
                            borderColor={item.borderColor}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            backgroundColor={item.backgroundColor}
                            url={item.url}
                            size={item.size}
                            margin={item.margin}
                          />
                        );
                      })}
                    </a>
       
      </div>
    </div>
    </div>


    </>
  );
};

export default Infocard;
