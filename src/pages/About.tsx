import bg from "../assets/About_Us.png"
import Footer from "../components/Footer"
import FounderImg from "../assets/Founder_001.jpg"
import Testimonials from "../components/Testimonials"
import ContactUs from "../components/ContactUs"
import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div className=' bg-[#231F20]'>
       <div className='w-full h-[100vh]'>
         <img
         src={bg}
         className="w-full h-full object-cover absolute "
         alt="Sports"
         />
      <div className='absolute  inset-0 flex flex-col items-center justify-between text-white'>
        <Navbar/>
        <div className="flex flex-col h-full items-center justify-center text-center space-y-4">
          <h1 className="text-6xl font-bold text-center mb-8 text-white">About Us</h1>
          {/* <p>Some of the Services we offer</p> */}
        </div>
        
      </div>
      
      </div>
      <div className="px-12  mt-16 mb-8">
        <p className='text-[16px] my-3 text-white'>
          Gaibayo Sports Management and Marketing is a premier sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes. We provide comprehensive PR services, global placement opportunities, and create powerful partnerships that elevate the careers of athletes on the international stage.Led by the FIfA Licensed Players Agent - Gabriel A. Akande, we predominantly operate in the Turkey and Nigeria with deal transactions across various continents.
        </p>
        <p className='text-[16px] my-3 text-white'>
          Gaibayo Sports Agency focuses on the discovery and development of sporting talents. Our core mission is to scout, promote, and provide comprehensive career management that spans representation, marketing, mindset development, and structured career progression at every stage of an athlete’s journey.
        </p>
        <p className='text-[16px] my-3 text-white'>
          At Gaibayo Sports, we foster a supportive and dynamic environment where every athlete has the opportunity to excel. This philosophy has been the cornerstone of our rapid success. We are dedicated to representing athletes across a wide range of sports, offering them professional, detail-oriented, and personalized services.
        </p>

        
        <div>
          <h1 className="text-4xl mt-16 text-white  font-bold">Our Founder</h1>
          <div className="my-6 flex gap-6 items-center w-full justify-between">
            <img
              src={FounderImg}
              className="object-cover h-[400px] w-[400px] "
              alt="Our Founder"
            />
            <div className="flex flex-col">
              <h3 className="my-3 text-2xl font-bold text-white">
                Gabriel A. Akande
              </h3>
              <p className='text-[16px] my-1 text-white font-italic'>FIFA Licensed Players Agent</p>
              <p className='text-[16px] my-3 text-white'>
                Gabriel A. Akande is a seasoned FIFA Licensed Players Agent with extensive experience in scouting, managing, and representing top-tier talent in the world of sports. With a primary focus on operations in Turkey and Nigeria, Gabriel has successfully facilitated deal transactions across multiple continents, showcasing his expertise in navigating the global sports industry.
              </p>
              <p className='text-[16px] my-3 text-white'>
                Driven by a passion for empowering athletes, Gabriel combines his in-depth industry knowledge with a meticulous approach to career planning, ensuring every talent under his representation receives unparalleled guidance and opportunities. His commitment to excellence and strategic vision has positioned him as a trusted name in the international sports arena.
              </p>
            </div>
           
          </div>
        </div>


    
        
      </div>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default About