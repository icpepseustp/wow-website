import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import QR from "../images/Registration/ICpEers-registration-qr.png";

export const Registration = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" className="overflow-hidden flex px-0 flex-col w-full text-center items-center font-light p-16 bg-white text-secondary">
      <h1 className="font-semibold text-2xl lg:text-4xl">
        Become an ICpEP.SE Volunteer
      </h1>
      <p className="font-base text-xl m-6">Scan the QR Code below</p>

      <div className="">
        <img
          className="border-4 border-primary rounded-xl"
          src={QR}
          width={180}
          alt='no-alt'
        />
      </div>

      <p className="m-6 text-xl">Or register here: </p>
      <button
        type="button"
        className="text-white uppercase bg-[#0078C2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-[50px] text-base px-10 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <a href="https://qrco.de/bdHeq7" rel="">
          Register
        </a>
      </button>
    </div>
  );
};
