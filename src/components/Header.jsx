import React from "react";
import headerLogo from "../images/Header/header-logo.png"
import headerVideo from "../assets/header-video.mp4"

export const Header = () => {
  return(
  <main>
    <div className="h-full lg:h-screen w-full">
    <div className="flex flex-row w-full bg-[#0B0618] justify-center lg:absolute lg:bg-transparent lg:justify-start">
     <img src={headerLogo} alt='logo' className='h-20 w-32 lg:w-[208px] lg:h-[117px] lg:absolute top-1 left-8 z-[10]'/>
    </div>
    <video 
      className="lg:object-cover object-contain lg:h-full w-full"
      autoPlay 
      loop 
      muted
      src={headerVideo}
      type="video/mp4"
    />
    <div className="flex flex-col w-full bg-[#0B0618] h-[50px] lg:hidden items-center">
    {/* <ul className="flex flex-row m-auto text-white text-sm font-poppins font-semibold gap-x-4">
      <li>ABOUT</li>
      <li>FACULTY</li>
      <li>PROJECTS</li>
      <li>REGISTER</li>
    </ul> */}
    </div>
    </div> 

  </main>);
};
