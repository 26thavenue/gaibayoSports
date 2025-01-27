import { MdOutlineMail , MdOutlineLocalPhone  } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6"; 
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiYoutube } from "react-icons/fi";
import logo from "../assets/logo.png"
import bg from "../assets/About_4.jpg"

const Footer = () => {
  return (
    <div className="bg-[#231F20] py-8 mt-2 lg:mt-12 px-12 w-full">
      <div className="text-white bg-[#231F20] w-full px-3 lg:px-8 rounded-md py-12">
        {/* Logo and Title */}
        <div className="flex flex-col gap-2 mb-8  justify-between items-center">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col gap-8  justify-center items-center lg:items-start w-full lg:w-1/2 ">
              <img
                src={logo}
                alt="logo"  
                loading="lazy"
                className="h-[200px] w-[200px] object-cover rounded-full bg-white p-2"
                />
              <p className="">We are a sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes.</p>
            </div>
            <img
                  src={bg}
                  alt="Football"
                  loading="lazy"
                  className="w-[200px] h-[200px] object-cover rounded-md hidden lg:block"
                  />
          </div>
         
         
          {/* <h1 className="text-2xl font-semibold">Gaibayo Sports</h1> */}
           {/* <div className="flex gap-3 lg:gap-6 text-lg my-6">
            <Link to="/about" className="hover:text-gray-700">About Us</Link>
            <Link to="/services" className="hover:text-gray-700">Services</Link>
            <Link to="/contact" className="hover:text-gray-700">Contact Us</Link>
          </div> */}
          
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-neutral-400 mb-8"></div>
         <div className="flex gap-10">
            <Link
              to="mailto:info@gaibayosports.com"
              className="hover:text-gray-700"
            >
             <MdOutlineMail size={24}/>
            </Link>
            <Link
              to="https://instagram.com/gaibayosportsmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
              <BsInstagram size={24} className=" "/>
            </Link>
            <Link
              to="https://twitter.com/Gaibayo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <FaXTwitter size={24}/>
            </Link>
            <Link to="tel:+905357837831" className="hover:text-gray-700">
             <MdOutlineLocalPhone size={24}/>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer" 
              to="https://youtube.com/@manager_gabi?si=AJBv3NHoCnwknkL- " className="hover:text-gray-700">
             <FiYoutube size={24}/>
            </Link>
          </div>

        {/* Footer Text */}
        <div className="text-center mt-8 place-self-start my-6">
          <p>© 2025 Gaibayo Sports</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
