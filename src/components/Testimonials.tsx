import { useState, useEffect } from "react";

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
    {
      name: "Emily Brown",
      role: "Basketball Player",
      text: "The team at Gaibayo SPORTS has been instrumental in securing my dream sponsorships. Their support has been incredible!",
    },
    {
      name: "Alex Turner",
      role: "Sports Journalist",
      text: "Gaibayo SPORTS has set a new standard in sports management. Their attention to detail and client-first approach is commendable.",
    },
    {
      name: "Sophia Lee",
      role: "Sports Physiotherapist",
      text: "Working with Gaibayo SPORTS has been a seamless and rewarding experience. They truly care about their clients' growth.",
    },
    {
      name: "Michael Carter",
      role: "Soccer Analyst",
      text: "Gaibayo SPORTS connects athletes with life-changing opportunities. They’re a beacon of excellence in the sports industry.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col items-center justify-center my-2 py-12 px-4">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-black">What Our Clients Say</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <p className="text-lg italic text-gray-600 text-center">
          "{testimonials[currentIndex].text}"
        </p>
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
        </div>
      </div>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handlePrev}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full px-4 py-2"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full px-4 py-2"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
