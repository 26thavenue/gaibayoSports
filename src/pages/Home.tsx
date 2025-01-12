import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import { useEffect, useState } from "react";
import "./index.css";
import Footer from "../components/Footer";

function Home() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationCompleted(true); // Slide up after 3 seconds
    }, 3000);

    const contentTimeout = setTimeout(() => {
      setShowMainContent(true); // Show content after animation finishes
    }, 4000);

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(contentTimeout);
    };
  }, []);

  const text = "Gaibayo Sports";

  return (
    <div className=" bg-[#4B86C5]">
      {/* Initial Animation Div */}
      <div
        className={`fixed bg-[#231F20]  text-white top-0 flex items-center justify-center left-0 w-full h-full transition-transform duration-1000 ${
          animationCompleted ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        <h2 className="text-4xl flex space-x-2">
          {text.split(" ").map((word, index) => (
            <span
              key={index}
              className="opacity-0 animate-fade-slide-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationDuration: "700ms",
              }}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          showMainContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero />
        <OurServices />
        <AboutUs />
        <ContactUs />
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
