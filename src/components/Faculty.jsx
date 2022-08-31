import React, {useEffect} from 'react'
import images from '../assets/images'
import faculty from '../assets/faculty.json'
import AOS from "aos";
import "aos/dist/aos.css";

const Faculty = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

  return (
    <main className=''>
        <div className='flex flex-col items-center font-poppins px-2'>
            <div className='flex flex-col items-center rounded-[45px] drop-shadow-2xl px-2 lg:px-12 py-2 bg-gradient-to-b from-[#E5FFF7] to-[#8EC1F7]'>
            <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className='text-center py-12 gap-4'>
                <h1 className='font-bold text-3xl'>THE FACULTY</h1>
                <h1 className='font-bold text-2xl text-primary'>Department of Computer Engineering</h1>
            </div>

            {[0,1,2].map((index) => {
                return (
                <>
                {index === 0 && (
                <div data-aos="fade-right" className='grid grid-cols-1'>
                    <div className='flex flex-col items-center gap-2'>
                        <img className='w-40 h-40 object-cover rounded-full' src={images[0]} alt='no'/>
                        <p className='font-bold text-sm'>{faculty[0]["name"]}</p>
                        <p className='italic text-sm'>{faculty[0]["pos"]}</p>
                    </div>
                </div>
                )}
                {(index > 0 && index < 2) && (
                    <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className='grid grid-cols-2 lg:grid-cols-4 gap-2 py-8'>
                        {images.slice(1,(images.length-3)).map((img, i) => {
                            return(
                            <div key={img} className='flex flex-col text-center items-center gap-2'>
                                <img className='w-32 h-32 object-cover rounded-full' src={img} alt='no'/>
                                <p className='font-bold text-xs lg:text-sm'>{faculty[i+1]["name"]}</p>
                                <p className='italic text-xs lg:text-sm'>{faculty[i+1]["pos"]}</p>
                            </div>
                            )
                        })}
                    </div>)
                }
                {(index > 1) && (
                    <div className='grid grid-cols-2 gap-2 lg:gap-x-14 pb-4'>
                        {images.slice((images.length-1)-2,(images.length-1)).map((img, i) => {

                            const sync = (images.length-1)-2 + i;

                            return(
                            <div key={img} data-aos="fade-left" className='flex flex-col text-center items-center gap-2'>
                                <img className='w-32 h-32 object-cover rounded-full' src={img} alt='no'/>
                                <p className='font-bold text-xs lg:text-sm'>{faculty[sync]["name"]}</p>
                                <p className='italic text-xs lg:text-sm'>{faculty[sync]["pos"]}</p>
                            </div>
                            )
                        })}
                    </div>)
                }
                </>
                );
            })
            }
            </div>
        </div>
    </main>
  )
}

export default Faculty