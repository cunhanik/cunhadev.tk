import React from "react";
import PlanetImg from "../shared";
import "./index.css"


const Planet = (props) => {
  return (
    <div className="mainContent">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <PlanetImg img_url={props.img_url} />
    </div>
  );
};

export default Planet;
