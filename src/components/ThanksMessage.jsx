import React from "react";
import iconComplete from "/icon-complete.svg";
export const ThanksMessage = () => {
  return (
    <div>
      <img src={iconComplete} alt="icono palomita" />
      <h2>THANK YOU!</h2>
      <span>We've added your card details</span>
    </div>
  );
};
