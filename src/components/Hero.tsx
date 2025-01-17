import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import bg from "../assets/BG_01.png";
import bg2 from "../assets/BG_03.png";
import bg3 from "../assets/BG_04.png";

const bgImages = [bg, bg2, bg3];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(bgImages[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTimeout(() => {
        index = (index + 1) % bgImages.length;
        setCurrentBg(bgImages[index]); 
      }, 500); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);
   

  return (
    <div className='w-full h-[60vh] bg-[#FBF7F4] lg:h-[100vh] ' >
      <img
         src={currentBg}

         className="w-full lg:h-full h-[60vh] object-cover absolute px-6 py-3 rounded-md"
         alt="Sports"
         />
       <div className="absolute  inset-0 flex flex-col items-center justify-between text-white py-6 px-6">
        <Navbar />

        {/* Text Content */}
        <div className="flex flex-col gap-3 items-center text-center my-0 h-full justify-normal lg:justify-center mt-40 lg:mt-0">
          <h1 className=" text-3xl lg:text-6xl font-bold">Welcome to Gaibayo Sports</h1>
          <p className="text-lg lg:text-xl max-w-xl">
            Empowering sports enthusiasts with innovative solutions and world-class services.
          </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.0"
              stroke="currentColor"
              className={'w-16 mt-16 animate-bounce  '}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"  
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>

        </div>
      </div>
   
    </div>
  )
};

export default Hero;
