import Button from "./shared/Button";
import { Link } from "react-router-dom";
import bg from "../assets/ContactUs.png";

const ContactUs = () => {
  return (
    <div className="relative flex flex-col text-black rounded-md h-[40vh] lg:h-[80vh]  mx-auto justify-center px-3 lg:px-6 mb-6 lg:mb-0">
      {/* Background Image */}
      <img
        src={bg}
        className="w-full h-[40vh] lg:h-full object-cover rounded-md"
        alt="Sports"
        loading="lazy"
      />

      
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white gap-6 px-10 lg:px-20 py-1">
        <h1 className="text-2xl lg:text-4xl font-bold">Get In Touch</h1>
        <p className="mb-2 text-[16px] lg:text-xl text-start w-full lg:w-1/2">
          Let our team of skilled experts handle everything off the pitch, so you can stay focused on delivering results on the pitch.
        </p>
        <Link to="/contact">
          <Button buttonName="Contact Us" buttonType="primary" size="medium" />
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
