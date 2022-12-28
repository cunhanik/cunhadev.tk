import React from "react";

const Button = () => {
  const link = () => {
    alert("EVENTO REALIZADO!");
  };

  return (
    <div>
      <button type="text" onClick={link}>
        Saber mais
      </button>
    </div>
  );
};

export default Button;
