import React from "react";
import footerLogo from "../images/Footer/icpep-logo-footer.png";
import joebot from "../images/Footer/joebot.png";
import { BsFacebook, BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="bg-secondary text-white py-12 px-4 lg:px-16">
      <div className="lg:flex justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row justify-center items-center">
            <img src={footerLogo} width={80} alt="icpep-footer" />
            <div className="my-4 mx-4">
              <h1 className="font-semibold lg:text-3xl ">ICpEP.SE USTP</h1>
            </div>
          </div>
          <div className="flex lg:divide-x flex-col items-center lg:flex-row lg:ml-20">
            <div className="flex items-center justify-center my-6">
              <img src={joebot} width={40} alt="joebot" />
              <div className="my-auto ml-2 lg:text-sm font-medium">
                <a href="https://icpepse-ustp.org" target="_blank">
                  icpepse-ustp.org <span className="text-md invisible">|</span>
                </a>
              </div>
            </div>
            <div className="flex lg:flex-row">
              <div className="flex gap-x-3 my-auto ml-2">
                <a
                  href="https://www.facebook.com/icpep.se.ustp"
                  target="_blank"
                >
                  <BsFacebook size={25} />
                </a>
                <a href="https://twitter.com/ustp_icpepse" target="_blank">
                  <BsTwitter size={25} />
                </a>
                <a
                  href="https://www.instagram.com/ustp_icpep_se"
                  target="_blank"
                >
                  <BsInstagram size={25} />
                </a>
                <a href="https://discord.gg/Dc9dJ7hfDD" target="_blank">
                  <BsDiscord size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-y-2 mt-8 lg:text-2xl flex-col justify-center text-center">
          <h1 className="font-bold ">Week of Welcome exclusive page</h1>
          <p className="lg:text-sm font-base">
            Prepared by <span className="font-semibold">ICpEP.SE | COMWEB</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col font-light text-md justify-center text-center gap-y-1 mt-16">
        <div className="border-t-2 w-[100px] mx-auto"></div>
        <p className="">&#169; Copyright 2022</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};
