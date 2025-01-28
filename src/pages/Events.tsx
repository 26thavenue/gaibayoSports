import bg from "../assets/SC_11.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import n1 from "../assets/Pre_Scouting_1.jpg"
import n2 from "../assets/SC_12.jpg"
import { Link } from "react-router-dom";
import Button from "../components/shared/Button";

const Contact = () => {
  return (
    <div className="bg-[#FBF7F4] text-black min-h-screen flex flex-col items-center w-full ">
      <div className='w-full h-[60vh] lg:h-[100vh] '>
         <img
         src={bg}
         className="w-full h-[60vh] lg:h-full object-cover absolute "
         alt="Sports"
         loading="lazy"
         />
        <div className='absolute  inset-0 flex flex-col items-center justify-between '>
          <Navbar/>
           <div className="flex flex-col items-center text-center space-y-4 my-0 h-full justify-normal lg:justify-center mt-40 lg:mt-0">
          <h1 className="text-3xl lg:text-6xl font-bold text-center mb-8 text-white">Events</h1>
          <p className="max-w-xl text-gray-200 p-2 lg:p-1 text-[14px] lg:text-base">Stay Updated with the Latest Events and Opportunities</p>
        </div>
        </div>
      </div>

      <section className="my-8 p-12">
        <div>
          <h2 className="my-8 text-4xl font-bold">Upcoming Event</h2>
          <div>
            <img 
             src={n2}
             alt="Upcoming Event Banner"
             className="h-[200px] lg:h-[400px] w-[70vw] rounded-md object-cover"
             loading="lazy"
            />
            
              <div className="flex flex-col  gap-3 my-6">
                <span className="flex gap-2 mr-3 items-center" >
                  <FaLocationDot className="text-black"/><p className="text-black text-xs lg:text-base">Onikan Stadium</p>
                </span>   
                <span className="flex gap-2 items-center">
                  <MdDateRange className="text-black"/><p className="text-black text-xs lg:text-base">7-11th April 2025</p>
                </span>
              
              </div>
              <h4 className="text-xl font-semibold mb-2"> Exciting Football Scouting Event at Onikan Stadium!</h4>
              <p className="leading-loose">
                From April 7th to 11th, Onikan Stadium will host an exciting opportunity for football enthusiasts and aspiring athletes. Scouts from Sporting CP (Portugal) and several top European clubs will be present, scouting for fresh talent. This is a unique opportunity for players to showcase their skills and potentially make their mark in the international football scene. Don’t miss out on this chance to be seen by some of Europe’s finest football scouts! Mark your calendars and get ready for an unforgettable week of talent, competition, and opportunity.
              </p>
            
          
          </div>

          <h2 className="mt-16 mb-8 text-4xl font-bold">Other Events</h2>
          <div>
            <img 
             src={n1}
             alt="Past Event Banner"
             className="h-[200px] lg:h-[400px] w-[70vw] rounded-md object-cover"
             loading="lazy"
            />
            
              <div className="flex flex-col  gap-3 my-6">
                <span className="flex gap-2 mr-3 items-center" >
                  <FaLocationDot className="text-black"/><p className="text-black text-xs lg:text-base">National Stadium Surulere</p>
                </span>   
                <span className="flex gap-2 items-center">
               <MdDateRange className="text-black"/><p className="text-black text-xs lg:text-base">20-22nd January 2025</p>
              </span>
              
              </div>
              <h4 className="text-xl font-semibold mb-2"> Pre-Scouting Program</h4>
              <p className="leading-loose">
                The National Stadium in Surulere, Lagos, came alive during the Pre-Scouting Program, a remarkable event aimed at discovering and nurturing exceptional talent. Aspiring young athletes, coaches, and sports enthusiasts from across Lagos gathered for a day of action-packed activities, skill demonstrations, and invaluable mentorship.
              </p>

              <Link to= "/events/pre_scouting_program" >
                <Button
                 buttonName="View Event"
                 size={"medium"}
                 buttonType="primary"
                 className="my-3"
                 
                />
                
              </Link>
            
          
          </div>
          
        </div>
      </section>
       
      
      
      <ContactUs/>
      <Footer/>
      
      
    </div>
  );
};

export default Contact;
