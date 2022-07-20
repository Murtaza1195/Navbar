import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Socialdata } from "../Socialicon";
import { Carddata } from "../data";
import '../index.css'

const Infocard = () => {
  return (
    <>
      <div className="cardInfo ">
        <div className="card d-inline">
          {Carddata.map((props) => {
            return (
              <>
                <img src={props.img} class="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <div className="card-text">
                    <p>{props.Phone}</p>
                    <p>{props.Email}</p>
                    <p>{props.Gender}</p>
                  </div>
                </div>
              </>
            );
          })}

          <div className="Social-link">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Infocard;
