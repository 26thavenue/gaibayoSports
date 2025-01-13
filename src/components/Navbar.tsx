import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); 
  };

  return (
    <div className="flex px-6 items-center w-full  text-white relative h-[80px] py-3">
      {/* Logo */}
      <Link to ="/">
        <img
          src="/GAIBAYO_SPORT_LOGO__NEW__page-0001__1_-removebg-preview.png"
          alt="logo"
          className="h-[150px] w-[150px] object-cover"
        />
      </Link>
     

      {/* Menu Icon */}
      <div
        onClick={toggleMenu}
        className="ml-auto cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed z-40 top-0 right-0 h-full w-full lg:w-4/5 bg-gray-900 p-6 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)]`}
      >
        {/* Close Icon */}
        <div
          onClick={toggleMenu}
          className="flex justify-end cursor-pointer mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-6 items-center justify-center h-full w-full  uppercase">
         <div className="group flex gap-3 items-center text-4xl lg:text-6xl relative">
            <Link
              to="/about"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full"
            >
              About
            </Link>
            <span
              className="inline-block translate-x-[-20px] opacity-0 transition-transform duration-500 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
                className="w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
           <div className="group flex gap-3 items-center text-4xl lg:text-6xl relative">
            <Link
              to="/contact"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Contact Us
            </Link>
            <span
              className="inline-block translate-x-[-20px] opacity-0 transition-transform duration-500 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
                className="w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
           <div className="group flex gap-3 items-center text-4xl lg:text-6xl relative">
            <Link
              to="/services"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Our Services
            </Link>
            <span
              className="inline-block translate-x-[-20px] opacity-0 transition-transform duration-500 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
                className="w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
