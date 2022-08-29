import React from "react";
import logo from "../images/icpepse-logo.png";

export const GetReady = () => {
  return (
    <div className="font-poppins text-secondary ">
      <img src={logo} alt="icpep-logo" width={120} />
      <p>
        Get ready to take the road to becoming a <br />{" "}
        <span>{"{"} Computer Engineer </span>
        {"}"}
      </p>
    </div>
  );
};
