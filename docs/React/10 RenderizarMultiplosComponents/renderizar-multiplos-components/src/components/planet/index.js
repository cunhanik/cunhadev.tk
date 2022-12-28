import React from "react";
import PlanetImg from "../shared";
import Button from "../shared/button";
import "./index.css";

const clickOnPlanet = (name) => {
  alert(`Click no planeta: ${name}`);
};
const names = [<Button/>, "Component: B", "Component: C", "Component: D"]

const Planet = (props) => {
  if (props.name) {
    return (
      <div className="mainContent">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className="planet">
          <div>
            <PlanetImg
              img_url={props.img_url}
              clickOnPlanet={clickOnPlanet}
              name={props.name}
            />
          </div>
          <div>{names.map((n)=> <li>{n}</li>)}</div> 
          <Button />
        </div>
        
      </div>
    );
  } else {
    return (
      <div className="mainContent">
        <h1>PLANETA DESCONHECIDO</h1>
        <p>{props.description}</p>
        <div className="planet">
          <div>
            <PlanetImg img_url={props.img_url} clickOnPlanet={clickOnPlanet} />
          </div>
          <Button />
        </div>
      </div>
    );
  }
};

export default Planet;
