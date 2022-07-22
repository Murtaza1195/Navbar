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
      
      <div className="infoCard ">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* Infocard ko wrap kahan kiya hua?wrap mean? container kidhar hai es se pehle wo b kr ky dekh chuka hn but har card alag sa bnata hain ek class mei ni show hota */}
              <div className="card text-center" key={props.id}>
                <img src={props.img} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <div className="card-text">
                    <p>{props.Phone}</p>
                    <p>{props.Email}</p>
                    <p>{props.Gender}</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infocard;
