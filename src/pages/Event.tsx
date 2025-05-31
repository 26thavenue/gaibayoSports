import bg from "../assets/Pre_Scouting_1.jpg"
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { handleCopyToClipboard } from "../utils";
import { useState } from "react";
import LSFA from "../assets/LSFA.jpg"
import n1 from "../assets/SC_10.jpg"
import n2 from "../assets/Sc_2.jpg"
import n3 from "../assets/SC_3.jpg"
import n4 from "../assets/SC_4.jpg"
import n5 from "../assets/SC_6.jpg"
import n6 from "../assets/SC_7.jpg"
import n7 from "../assets/SC_8.jpg"
import n8 from "../assets/SC_9.jpg"
import n9 from "../assets/SC_5.jpg"
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { FaArrowLeft } from "react-icons/fa6";

const Event = () => {
  const [showToast, setShowToast] = useState(false);

  
  return (
    <div className="bg-[#FBF7F4]  leading-loose  ">
      <button
      className="flex items-center gap-3 text-lg p-6  lg:p-12 font-bold  text-black cursor-pointer hover:text-gray-600 "
      onClick={() => window.history.back()}
    >   
     <FaArrowLeft/>
      Back
    </button>

      <div className="px-12 ">
        <div className="flex my-5 lg:my-10 flex-col mx-auto justify-center gap-6 items-center ">
        <h2 className=" text-3xl lg:text-5xl font-bold"> Pre Scouting Program</h2>
        <div className="flex gap-3 flex-col items-center ">
           <span className="flex gap-2 items-center" >
            <FaLocationDot className="text-gray-500"/><p className="text-gray-500 text-sm lg:text-lg ">National Stadium Surulere</p>
          </span>
          <span className="flex gap-2 items-center">
            <MdDateRange className="text-gray-500"/><p className="text-gray-500 text-sm lg:text-lg ">20-22nd January 2025</p>
          </span>
         
        </div>
      </div>

      <img
        src={bg}
        loading= "lazy"
        className="w-full h-[40vh] lg:h-[80vh] object-cover my-6 rounded-md"
      />

      <div className="relative px-6">
        <button
          className="max-w-fit border-gray-500 px-[12px] hover:bg-gray-100 transition-colors py-2 rounded-full border-[1px] flex gap-2 items-center my-6 text-gray-700 hover:text-gray-900 "
          onClick={() => handleCopyToClipboard({setShowToast})}
        >
          <IoLink size={24} />
          <p >Share this Event</p>
        </button>

        {showToast && (
          <div className="absolute  transform left-40 -translate-x-1/2 bottom-full mb-2 bg-white text-black text-sm py-1 px-5 rounded-md shadow-lg">
            Link copied!
          </div>
        )}
      </div>
      

 
        
        <section className="py-2 px-6">
          <div className="my-8">
            <h3 className="text-2xl my-2 font-semibold">Overview</h3>
             <p>The National Stadium in Surulere, Lagos, came alive during the Pre-Scouting Program, a remarkable event aimed at discovering and nurturing exceptional talent. Aspiring young athletes, coaches, and sports enthusiasts from across Lagos gathered for a day of action-packed activities, skill demonstrations, and invaluable mentorship.</p>
          </div>
         

          <div className="my-8">
            <h3 className="text-2xl my-2 font-semibold">Matches & Highlights</h3>
            <p>Sixteen teams participated in the pre-scouting program, each bringing their best players and strategies to the field in a bid to secure a spot in the next phase of the initiative. Several intense football matches took place, with each team showcasing exceptional skill, teamwork, and determination. The matches were fiercely contested, with players giving their all to impress both the scouts and the audience.
            </p>
            <p className="my-1">
              The competitive atmosphere was palpable, keeping spectators on the edge of their seats as the young talents battled it out under immense pressure. Every pass, tackle, and goal carried weight, and moments of brilliance on the pitch highlighted the passion and drive of these aspiring football stars.
            </p>
            <p>
              In the end, only eight teams managed to qualify, emerging victorious after a grueling series of matches. The journey to the top was not easy, as each victory was hard-earned and marked by a display of resilience and unwavering focus. This intense competition proved to be a testament to the spirit of sportsmanship and the unyielding pursuit of excellence among the participants.
            </p>
            
          </div>

          <div className="my-8">
            <h3 className="text-2xl my-2 font-semibold">Teams & Qualififcations</h3>
            <p>At the end of the program, eight teams emerged victorious and qualified for the next stage of the scouting initiative:
            </p>
            <ol className='font-medium'>
              <li>1. Seamoriow FC</li>
              <li>2. Jumez FC</li>
              <li>3. Vido 99 FC</li>
              <li>4. Oasis FC</li>
              <li>5. Box2Box FC</li>
              <li>6. Eletu FC</li>
              <li>7. G12 FC</li>
              <li>8. FC Bethel Sporting</li>
            </ol>

            <p>Each team demonstrated exceptional performance, embodying the spirit of the game and showcasing the immense talent present in Lagos State.</p>
            
          </div>


          <div className="my-8">
            <h3 className="text-2xl my-2 font-semibold">Sponsors & Partners</h3>
            <img
              src={LSFA}
              alt="Lagos State Football Association"
              className="w-[150px] h-[150px] object-cover rounded-full"
              loading="lazy"
            />
            
          </div>

          <div className=" my-8 lg:my-16">
            <h3 className="text-2xl my-4 font-semibold">Featured Media</h3>
            
           <div className="flex flex-col gap-2 items-center fle-wrap">
          {/* First row with 4 images */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full">
            <img
              src={n8}
              alt="Lagos State Football Association"      
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
            <img
              src={n2}
              alt="Lagos State Football Association"
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
            <img
              src={n3}
              alt="Lagos State Football Association"
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
            
          </div>
  
          {/* Second row with 3 images */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-full">
            <img
              src={n1}
              alt="Lagos State Football Association"
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
            <img
              src={n6}
              alt="Lagos State Football Association"
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
            <img
              src={n7}
              alt="Lagos State Football Association"
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
            <img
              src={n4}
              alt="Lagos State Football Association"
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
          </div>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full">
            <img
              src={n5}
              alt="Lagos State Football Association"      
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
            <img
              src={n9}
              alt="Lagos State Football Association"
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
            <img
              src={bg}
              alt="Lagos State Football Association"
              className="h-[300px] object-cover hover:rounded-md transition-all"
              loading="lazy"
            />
          </div>
        </div>

          
          </div>
        </section>
      </div>
      

        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Event