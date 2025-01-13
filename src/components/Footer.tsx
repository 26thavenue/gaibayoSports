import { MdOutlineMail , MdOutlineLocalPhone  } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6"; 
import { BsInstagram } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { FiYoutube } from "react-icons/fi";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="bg-[#231F20] py-8 mt-12 px-12 w-full">
      <div className="text-white bg-[#231F20] w-full px-3 lg:px-8 rounded-md py-12">
        {/* Logo and Title */}
        <div className="flex flex-col gap-2 items-center mb-8">
          <img
            src={logo}
            alt="logo"  
            className="h-[200px] w-[200px] object-cover rounded-full bg-white p-2"
          />
          {/* <h1 className="text-2xl font-semibold">Gaibayo Sports</h1> */}
           <div className="flex gap-3 lg:gap-6 text-lg my-6">
            <a href="/about" className="hover:text-gray-700">About Us</a>
            <a href="/services" className="hover:text-gray-700">Services</a>
            <a href="/contact" className="hover:text-gray-700">Contact Us</a>
          </div>

          <div className="flex gap-10">
            <a
              href="mailto:info@gaibayosports.com"
              className="hover:text-gray-700"
            >
             <MdOutlineMail size={24}/>
            </a>
            <a
              href="https://instagram.com/gaibayosportsmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
              <BsInstagram size={24} className=" "/>
            </a>
            <a
              href="https://twitter.com/Gaibayo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <FaXTwitter size={24}/>
            </a>
            <a href="tel:+905357837831" className="hover:text-gray-700">
             <MdOutlineLocalPhone size={24}/>
            </a>
            {/* <a
              target="_blank"
              rel="noopener noreferrer" 
              href="https://youtube.com/Manager_gabi " className="hover:text-gray-700">
             <FiYoutube size={24}/>
            </a> */}
          </div>
          
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-neutral-400 mb-8"></div>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p>© 2025 Gaibayo Sports</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
