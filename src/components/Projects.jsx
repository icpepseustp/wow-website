import React,{ useEffect,useState } from "react";
import Slider from "react-slick";
import data from "../assets/projects.json";
// import { FaGithub } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true,
    arrows: false,
    pauseOnHover: true
  };

  return (
      <main className="px-2 my-8">
      <div data-aos="fade-up"
      data-aos-anchor-placement="top-center" className="shrink flex flex-col items-center mb-6 text-center font-poppins gap-y-4 h-full w-full p-2">
        <h1 className="text-2xl lg:text-4xl font-semibold text-primary">CPE Students Projects</h1>
        <h2 className="text-xl font-medium lg:text-3xl text-[#1D242A]">Take a glimpse at some of our projects.</h2>
      </div>
      <div data-aos="fade-up"
      data-aos-anchor-placement="top-center">
      <Slider {...settings}>
        <ProjectItem project={data[0]} />
        <ProjectItem project={data[1]} />
        <ProjectItem project={data[2]} />
        <ProjectItem project={data[3]} />
        <ProjectItem project={data[4]} />
        <ProjectItem project={data[5]} />
      </Slider>
      </div>
      </main>
  );
};


const ProjectItem = ({project: data}) => {

  const [index, setIndex] = useState(0);
  const imageL = data.images.length;
 
  useEffect(() => {
    
    const interval = setInterval(() => {
      setIndex(() => {
        return index < imageL-1 ? index + 1 : 0 
      })
    }, 3000
    );
    return () => clearInterval(interval);
  }, [imageL, index]);

  return(
    
    <div className="m-auto flex flex-col items-center py-4 px-8 shrink mt-2 max-h-[550px] rounded-[45px] max-w-[650px] bg-secondary text-[#FAFAFA] lg:px-12">
    <img className="h-[250px] w-[450px] lg:h-[260px] lg:w-[550px] rounded-[35px] object-cover" src={data.images[index]} alt="images"/>
    <h1 className="text-center mt-2 text-lg font-poppins font-semibold">{data["project-name"]}</h1>
    <div className="self-start mt-4 flex flex-col gap-2">
      <p className="font-poppins text-sm font-semibold leading-[5px]">Project Description: <span className="text-xs font-normal font-poppins text-justify">{data.description}</span> </p>
      <p className="font-poppins text-sm font-semibold leading-[5px]">Project Member(s): <span className="text-xs font-poppins text-justify font-normal">{data.members}</span> </p>
      <div className="grid grid-cols-2 items-center w-full">
      <p className="font-poppins text-sm font-semibold leading-[5px] py-4">CPE Field: <span className="text-xs font-poppins font-normal">{data.field}</span> </p>
      {/* { data.field === 'Software' && (
          <a href= {data["source-code"]} rel="no_refer"
            className="justify-end flex gap-2 items-center cursor-pointer">
            <FaGithub />
            <small className="font-poppins text-xs">Source code</small>
          </a>
      )} */}
      </div>
    </div>
  </div>
  );
}