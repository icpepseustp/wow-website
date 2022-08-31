import React, { useEffect } from "react";
import logo from "../images/icpepse-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const GetReady = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" className="overflow-hidden flex flex-col items-center p-16 font-poppins bg-white text-secondary">
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
