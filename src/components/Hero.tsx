import Navbar from "./Navbar"
import Button from "./shared/Button"
import bg from '../assets/BG_01.png'

const Hero = () => {
  return (
    <div
        style={
            {
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          } 
        className="h-[100vh] flex flex-col  px-6">
      <Navbar/>
      <div className="px-6 w-1/2 flex flex-col gap-5 flex-1 py-20 ">
         <h1 className="text-6xl font-bold text-white">Gaibayo Sports</h1>
         <p className="text-white text-xl"> We are sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes.</p>
         <Button
          buttonName="Learn More"
          buttonType="secondary"
          size="medium"
         />
      </div>
     
    </div>
  )
}

export default Hero