import React from "react";
import logo from "../images/icpepse-logo.png";

export const GetReady = () => {
  return (
    <div className="flex flex-col items-center p-16 font-poppins bg-white text-secondary">
      <div>
        <img src={logo} alt="icpep-logo" width={180} />
      </div>

      <div className="py-4 w-screen lg:py-8 ">
        <p className="text-center lg:text-3xl">
          Get ready to take the road to becoming a <br />{" "}
          <span className="font-semibold text-3xl">
            <p className="mt-4 text-xl lg:text-4xl">
              {"{"} Computer Engineer {"}"}
            </p>
          </span>
        </p>
      </div>
    </div>
  );
};
