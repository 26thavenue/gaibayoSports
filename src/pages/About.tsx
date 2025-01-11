import bg from "../assets/About_Us.png"

const About = () => {
  return (
    <div className=' '>
       <div
        style={
            {
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          } 
        className="h-[70vh] flex items-end  px-12 py-8">
        <h1 className="text-6xl text-white font-bold ">About Us</h1>
      </div>
      <div className="px-12  mt-16 mb-8">
        <p className='text-xl'>
          Gaibayo Sports Management and Marketing is a premier sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes. We provide comprehensive PR services, global placement opportunities, and create powerful partnerships that elevate the careers of athletes on the international stage.Led by the FIfA Licensed Players Agent - Gabriel A. Akande, we predominantly operate in the Turkey and Nigeria with deal transactions across various continents.
        </p>

        <h1 className="text-4xl mt-16  font-bold">Our Founder</h1>
      </div>
      

     
    </div>
  )
}

export default About