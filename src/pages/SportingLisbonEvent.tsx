import { FaArrowLeft } from "react-icons/fa6";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const SportingLisbonEvent = () => {
  return (
    <div className="bg-[#FBF7F4]  leading-loose  min-h-screen ">
         <button
            className="flex items-center gap-3 text-lg p-6  lg:p-12 font-bold  text-black cursor-pointer hover:text-gray-600 "
            onClick={() => window.history.back()}
            >   
            <FaArrowLeft/>
            Back
            </button>


        <section className="lg:px-12 ">

            <div className="px-12 lg:px-0 flex my-5 lg:my-10 flex-col mx-auto justify-center gap-6 items-start lg:items-center ">
                <h2 className=" text-3xl lg:text-5xl font-bold"> Scouting Program for Sporting Lisbon </h2>
                <div className="flex gap-3 flex-col items-center ">
                    <span className="flex gap-2 items-center" >
                        <FaLocationDot className="text-gray-500"/><p className="text-gray-500 text-sm lg:text-lg ">Onikan Stadium</p>
                    </span>
                    <span className="flex gap-2 items-center">
                        <MdDateRange className="text-gray-500"/><p className="text-gray-500 text-sm lg:text-lg ">7-11th April 2025</p>
                    </span>
                
                </div>
            </div>

            <img src="/sl14.jpg" loading="lazy" className=" w-full h-[40vh] lg:h-[90vh] object-cover my-6 rounded-none lg:rounded-md"/>

            <div className="p-12">
            <h1 className="text-3xl md:text-5xl font-bold text-center  mb-4">
                A Thrilling Week at the Onikan Stadium ⚽
            </h1>
            <p className="text-base lg:text-lg text-gray-600 text-center mb-10">
                From April 7th to 11th, football came alive at Onikan Stadium during an action-packed scouting event.
            </p>

            <div className="space-y-6">
                <p className="text-base md:text-lg ">
                Players from across the region gathered to showcase their talents in front of elite football scouts — including representatives from <strong>Sporting CP (Portugal)</strong> and other top European clubs. The energy on the pitch was electric as teams were formed and players battled for the spotlight.
                </p>

                <p className="text-base md:text-lg">
                Scouts watched closely as the games unfolded, and several standout players caught their attention. It was not just a game — it was an opportunity of a lifetime for many hopeful athletes.
                </p>

                <p className="text-base md:text-lg">
                The stadium echoed with cheers, excitement, and raw passion for the sport. From skilled dribbles to stunning goals, the event reminded everyone why football is the heartbeat of the youth.
                </p>

                <p className="text-base md:text-lg">
                We’re incredibly proud of the spirit and talent shown. Here's a glimpse of the action 👇
                </p>

                
                <div className="my-8 py-16">
                    <h2 className="text-3xl font-semibold mb-10"> Event Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className=" h-[50dvh] lg:h-[70dvh] w-[70dvw] bg-gray-200 rounded-lg overflow-hidden">
                        
                        <iframe className="h-[50dvh] lg:h-[70dvh] w-[70dvw]" src="/sl22.mp4"  allowFullScreen></iframe>
                        </div>
                        
                    </div>
                </div>

                
                <div className="my-10">
                <h2 className="text-3xl font-bold  mb-10">Photo Gallery</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        {[
                            "/sl1.jpg", "/sl2.jpg", "/sl6.jpg", "/sl14.jpg", "/sl15.jpg", "/sl16.jpg",
                            "/sl17.jpg", "/sl18.jpg", "/sl12.jpg", "/sl20.jpg", "/sl21.jpg", "/sl33.jpg"
                        ].map((src, idx) => (
                            <div key={idx} className="w-full h-[300px]">
                            <img src={src} alt="Scouting" className="w-full h-full object-cover rounded shadow-md" />
                            </div>
                        ))}
                        </div>

                </div>
            </div>  
            </div>  


        </section>


            <ContactUs/>
            <Footer/>
    </div>
  )
}

export default SportingLisbonEvent