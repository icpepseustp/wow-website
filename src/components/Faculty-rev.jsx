import React, {useEffect} from "react";
import logo from "../images/logo-planet.png";
import estenzo from "../images/Faculty/estenzo.png";
import cagampang from "../images/Faculty/cagampang.png";
import sieras from "../images/Faculty/sieras.png";
import telen from "../images/Faculty/telen.png";
import dacay from "../images/Faculty/dacay.png";
import bergado from "../images/Faculty/bergado.png";
import garrucha from "../images/Faculty/garrucha.png";
import nalupa from "../images/Faculty/nalupa.png";
import fernandez from "../images/Faculty/fernandez.png";
import mabulay from "../images/Faculty/mabulay.png";
import jementiza from "../images/Faculty/jementiza.png";
import oche from "../images/Faculty/oche.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Faculty = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
  <div className="min-h-screen flex items-center">
  <div data-aos="fade-up"
      data-aos-anchor-placement="top-center" className="flex-1 max-w-screen mx-auto p-20 bg-gradient-to-b from-[#E5FFF7] to-[#8EC1F7] rounded-lg">
    <ul className="space-y-4 gap-4 md:gap-8 cursor-default">
      <li> 
        <div className="flex-1 max-w-8xl mx-auto p-10 text-center">
          <h1 className="text-sm md:text-2xl lg:text-4xl font-poppins font-normal text-secondary">
            THE FACULTY
          </h1>
          <h2 className="text-sm md:text-2xl lg:text-4xl mt-7 font-poppins font-bold text-primary">
            Department of Computer Engineering
          </h2> 
        </div>
      </li>
      <li>
        <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={estenzo}
          alt="Engr. Rodesita Estenzo " 
          width={150}
          />
          <p className="text-sm md:text-xl lg:text-2xl font-poppins text-secondary font-bold">
            Engr. Rodesita Estenzo
          </p>
          <p className="text-sm md:text-lg lg:text-xl font-poppins font-normal text-secondary italic">
            Chairman
          </p>
        </div>
      </li>
    </ul>
    <ul className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 md:gap-5 cursor-default">
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={cagampang} 
          alt="Prof. Juliet Cagampang" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Prof. Juliet Cagampang
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={sieras} 
          alt="Engr. Aileen A. Sieras" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Aileen A. Sieras
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={telen} 
          alt="Engr. Mary Ann Telen" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Mary Ann Telen
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={dacay} 
          alt="Engr. Wencel Jean C. Dacay" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Wencel Jean C. Dacay
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={bergado} 
          alt="Engr. Miriam M. Bergado" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Miriam M. Bergado
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={garrucha} 
          alt="Engr. Sprinztsie Maye Garruncha" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Sprinztsie Maye Garrucha
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={nalupa} 
          alt="Engr. Mark Lister V. Nalupa" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Mark Lister V. Nalupa
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={fernandez} 
          alt="Engr. Jodie Rey D. Fernandez" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Jodie Rey D. Fernandez
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={mabulay} 
          alt="Engr. Bronson G. Mabulay" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Bronson G. Mabulay
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={jementiza} 
          alt="Engr. Jasper Jay A. Jementiza" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Jasper Jay A. Jementiza
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={oche} 
          alt="Engr. Jonathan S. Oche" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Engr. Jonathan S. Oche
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={logo} 
          alt="cat" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Crisostomo Ibarra
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
    </ul>
    <ul>
    <li>
      <div className="flex flex-col max-w-8xl mx-auto p-10 items-center text-center justify-center cursor-default">
          <img 
          className="object-contain rounded-full drop-shadow-xl border border-primary"
          src={logo} 
          alt="cat" 
          width={120}
          />
          <p className="text-sm md:text-base lg:text-lg font-poppins text-secondary font-bold">
            Juan Dela Cruz
          </p>
          <p className="text-sm lg:text-base font-poppins font-normal text-secondary italic">
            Instructor
          </p>
        </div>
      </li>
      </ul>
  </div>
  </div>
  )
};

/* kulang pa ug duha ka teachers huhuhuhuhuhu*/