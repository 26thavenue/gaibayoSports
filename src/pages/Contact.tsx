import { MdOutlineMail , MdOutlineLocalPhone  } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6"; 
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import CardV2 from "../components/shared/CardV2";
import bg from "../assets/Contact_Us 1.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg- text-black min-h-screen flex flex-col items-center w-full ">
      <div className='w-full h-[100vh] '>
         <img
         src={bg}
         className="w-full h-full object-cover absolute "
         alt="Sports"
         />
        <div className='absolute  inset-0 flex flex-col items-center justify-between text-white'>
          <Navbar/>
           <div className="flex flex-col h-full items-center justify-center text-center space-y-4">
          <h1 className="text-6xl font-bold text-center mb-8 text-white">Contact Us</h1>
          {/* <p>Some of the Services we offer</p> */}
        </div>
        </div>
      </div>
       
      <h1 className="text-3xl font-bold my-12">Contact Our Team</h1>
      <p className="text-center max-w-lg mb-8">
        Want to get in touch with us? Feel free to send an email, give us a call, 
        or reach out to us on our social media platforms below.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl my-12">
        <CardV2
          icon={<MdOutlineMail  size={24} className="text-black" />}
          header="Send Us an Email"
          actionWord="Reach Out"
          description="gaibayo13@gmail.com"
        />
        <CardV2
          icon={<MdOutlineMail  size={24} className="text-black  " />}
          header="Send Us an Email"
          actionWord="Or Reach Out to Us here"
          description="Info@gaibayosportcompany.com"
        />
        
        <CardV2
          icon={<MdOutlineLocalPhone  size={24} className="text-black" />}
          header="Call Us"
          actionWord="Give Us a Call"
          description="+2349131227421"
        />
        <CardV2
          icon={<FaXTwitter size={24} className="text-black" />}
          header="Message Us On Twitter"
          actionWord="Give Us a Tweet"
          description="@Gaibayo"
        />
        <CardV2
          icon={<BsInstagram size={24} className="text-black" />}
          header="Message Us On Instagram"
          actionWord="Check out Our IG"
          description="@gaibayosportsmanagement" 
        />
        <CardV2
          icon={<FiYoutube size={24} className="text-black  shadow-md" />}
          header="Watch Our Videos"
          actionWord="Check out Our Youtube"
          description="Manager_gabi " 
        />    
      </div>
      <Footer/>
      
    </div>
  );
};

export default Contact;
