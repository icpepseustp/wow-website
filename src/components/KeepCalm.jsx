import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const KeepCalm = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" className="overflow-hidden flex font-code w-full bg-secondary text-white p-4 justify-center">
      <p className="text-center lg:text-2xl font-regular text-[#A0FA80]">
        keepCalm <span className="text-white">{"&&"}</span>{" "}
        <span className="text-[#FF6159]">lets</span>
        <span className="text-[#EDE629]">.</span>
        <span className="text-[#43A4EF]">
          start{"("}
          <span className="text-[#FFC700]">theJourney</span>
          {")"}
        </span>
        <span className="text-[#EDE629]">{";"}</span>
      </p>
    </div>
  );
};
