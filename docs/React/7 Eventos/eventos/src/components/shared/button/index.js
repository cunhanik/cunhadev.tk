import React from "react";

const link = () => {
  alert("EVENTO REALIZADO!");
};

const Button = () => {
  return (
    <div>
      <button type="text" onClick={link}>
        Saber mais
      </button>
    </div>
  );
};

export default Button;
