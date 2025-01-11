import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
  {
    name: "John Doe",
    role: "Football Coach",
    text: "Gaibayo SPORTS provided the guidance and support I needed to elevate my players' careers. Highly professional and reliable.",
  },
  {
    name: "Jane Smith",
    role: "Athlete",
    text: "Thanks to Gaibayo SPORTS, I have achieved milestones in my career I never thought possible. Their expertise is unmatched!",
  },
  {
    name: "Mark Johnson",
    role: "Sports Consultant",
    text: "Partnering with Gaibayo SPORTS was one of the best decisions. Their professionalism and network are top-notch.",
  },
];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <div className="text-center">
        <p className="text-lg italic text-gray-700">
          "{testimonials[currentIndex].text}"
        </p>
        <h3 className="mt-4 text-xl font-bold text-gray-800">
          {testimonials[currentIndex].name}
        </h3>
        <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Testimonials