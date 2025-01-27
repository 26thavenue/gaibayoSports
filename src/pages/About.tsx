import bg from "../assets/About_4.jpg"
import Footer from "../components/Footer"
import FounderImg from "../assets/Founder_001.jpg"
import Testimonials from "../components/Testimonials"
import ContactUs from "../components/ContactUs"
import Navbar from "../components/Navbar"


const About = () => {
  return (
    <div className=' w-[100vw] bg-[#FBF7F4]'>
       <div className='w-full h-[60vh] lg:h-[100vh]'>
         <img
         src={bg}
         className="w-full h-[60vh] lg:h-full object-cover absolute "
         alt="Sports"
         loading="lazy"
         />

      <div className='absolute inset-0 flex flex-col items-center justify-between text-black'>
        <Navbar/>
        <div className="flex flex-col items-center text-center space-y-4 my-0 h-full justify-normal lg:justify-center mt-40 lg:mt-0">
          <h1 className="text-3xl lg:text-6xl font-bold text-center mb-8 text-white">About Us</h1>
          <p className="max-w-xl text-gray-200">We are passionate about empowering athletes and sports professionals to reach their full potential. With a dedication to excellence, we strive to deliver personalized solutions that foster growth, success, and lasting partnerships.</p>
        </div>
        
      </div>
      
      </div>
      <div className="px-12 mt-16 mb-8">
        <p className='text-[14px] lg:text-[16px] my-3 text-black'>
          Gaibayo Sports Management and Marketing is a premier sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes. We provide comprehensive PR services, global placement opportunities, and create powerful partnerships that elevate the careers of athletes on the international stage.Led by the FIfA Licensed Players Agent - Gabriel A. Akande, we predominantly operate in the Turkey and Nigeria with deal transactions across various continents.
        </p>
        <p className='text-[16px] my-3 text-black'>
          Gaibayo Sports Agency focuses on the discovery and development of sporting talents. Our core mission is to scout, promote, and provide comprehensive career management that spans representation, marketing, mindset development, and structured career progression at every stage of an athlete’s journey.
        </p>
        <p className='text-[16px] my-3 text-black'>
          At Gaibayo Sports, we foster a supportive and dynamic environment where every athlete has the opportunity to excel. This philosophy has been the cornerstone of our rapid success. We are dedicated to representing athletes across a wide range of sports, offering them professional, detail-oriented, and personalized services.
        </p>

        
        <div>
          <h1 className="text-2xl lg:text-4xl mt-16 text-black  font-bold">Our Founder</h1>
          <div className="my-6 flex flex-col lg:flex-row gap-6 items-center w-full justify-between">
            <img
              src={FounderImg}
              className="object-cover h-[300px] lg:h-[400px] w-[300px] lg:w-[400px] "
              alt="Our Founder"
            />
            <div className="flex flex-col">
              <h3 className="my-3 text-2xl font-bold text-black">
                Gabriel A. Akande
              </h3>
              <p className='text-[14px] lg:text-[16px] my-1 text-black font-italic'>FIFA Licensed Players Agent</p>
              <p className='text-[14px] lg:text-[16px] my-3 text-black'>
                Gabriel A. Akande is a seasoned FIFA Licensed Players Agent with extensive experience in scouting, managing, and representing top-tier talent in the world of sports. With a primary focus on operations in Turkey and Nigeria, Gabriel has successfully facilitated deal transactions across multiple continents, showcasing his expertise in navigating the global sports industry.
              </p>
              <p className='text-[16px] my-3 text-black'>
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