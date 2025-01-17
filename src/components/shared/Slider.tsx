import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ISlider {
  card: JSX.Element;
  array: any[];
  link?: string;
  to?: string;
}

const Slider = ({ card, array, link, to }: ISlider) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? array.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === array.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === array.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [array.length]);

  return (
    <div className="relative flex flex-col items-center gap-4">
      <div className="flex gap-6 overflow-x-hidden">{card}</div>

      <div className="flex gap-2">
        {array.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between w-full items-center">
        <button
          onClick={handlePrev}
          className="bg-[#23F21] text-white p-2 rounded-full"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-black p-2 rounded-full"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Optional Link */}
      {link && (
        <Link to={to ? to : "/"} className="mt-4 text-blue-500 underline">
          {link}
        </Link>
      )}
    </div>
  );
};

export default Slider;
