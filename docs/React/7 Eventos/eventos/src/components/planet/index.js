import React from "react";
import PlanetImg from "../shared";
import Button from "../shared/button";
import "./index.css";

const Planet = (props) => {
  return (
    <div className="mainContent">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div className="planet">
        <PlanetImg img_url={props.img_url} />
        <Button />
      </div>
    </div>
  );
};

export default Planet;
