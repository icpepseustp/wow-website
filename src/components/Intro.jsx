import React, { useEffect } from "react";
// import LogoPaper from "../images/logo-paper.png";
import LogoPlanet from "../images/logo-planet.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Intro = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return(
    <main className="px-2 my-8 container justify-center max-w-2xl lg:max-w-6xl">
      <section className="flex shrink flex-row items-center justify-center">
        <article className="grid shrink grid-cols-1 gap-2 lg:grid-cols-2">
          <div data-aos="fade-up-right" className="flex justify-center">
            <img src={LogoPlanet} alt="logo-paper" width={550} />
          </div>
          
          <div data-aos="fade-left" className="lg:mt-16 flex shrink flex-col justify-start bg-white rounded-2xl drop-shadow-xl">
            <div className="grid shrink grid-cols-1 lg:gap-2">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="animate-bounce font-poppins font-extrabold text-sky-500 text-6xl lg:text-8xl drop-shadow-md">|</div>
                <div className="flex font-league font-bold text-secondary text-4xl lg:text-6xl">
                  <h1 className="pt-6 justify-center lg:justify-start">
                    "What is BS CpE?"
                  </h1>
                </div>
              </div>

              <div className="flex p-4 lg:px-8 font-poppins font-normal text-justify text-secondary text-md lg:text-xl justify-center lg:justify-start">
                <h1 className="max-w-md md:max-w-lg lg:max-w-lg"> 
                        The <span className="font-bold text-sky-500">Bachelor of Science in Computer Engineering</span> is a four-year program that integrates knowledge from both computer science and 
                        electrical engineering in the design, development, implementation, maintenance, and integration of software and hardware components
                        in modern computing systems. Computer engineers are expected to be competent in the knowledge drawn from standard topics in mathematics
                        and engineering sciences, as well as eager learners of this ever-growing field of knowledge. 
                </h1>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
};

export default Intro