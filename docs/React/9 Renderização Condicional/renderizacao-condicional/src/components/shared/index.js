import React from "react";
import "./index.css";

const PlanetImg = (props) => {
  return (
    <div className="planet" onClick={() => props.clickOnPlanet(props.name)}>
      <img className="img" src={props.img_url}></img>
    </div>
  );
};

export default PlanetImg;
