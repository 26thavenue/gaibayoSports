import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import bg from "../assets/BG_01.png";
import bg2 from "../assets/BG_03.png";
import bg3 from "../assets/BG_04.png";
import { FaArrowDown } from "react-icons/fa6";

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
      <div className="w-full h-full rounded-md overflow-hidden">
        <img
          src={currentBg}
          className="w-full lg:h-full h-[60vh] p-2 object-cover"
          alt="Sports"
        />
      </div>
       <div className="absolute  inset-0 flex flex-col items-center justify-between text-white  p-3 lg:p-6">
        <Navbar />

        {/* Text Content */}
        <div className="flex flex-col gap-3 items-center text-center my-0 h-full justify-normal lg:justify-center mt-40 lg:mt-0">
          <h1 className=" text-3xl lg:text-6xl font-bold">Welcome to Gaibayo Sports</h1>
          <p className="text-lg lg:text-xl max-w-xl">
            Empowering sports enthusiasts with innovative solutions and world-class services.
          </p>
          <div className="flex gap-2 mt-20 shadow-sm items-center bg-[rgba(255,255,255,0.3)] backdrop-blur-md rounded-full px-3 py-2">
            <p className="text-[12px]">Scroll Down</p>
            <FaArrowDown size={10} />
          </div>  
            

        </div>
      </div>
   
    </div>
  )
};

export default Hero;
