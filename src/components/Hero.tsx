import Navbar from "./Navbar"
import Button from "./shared/Button"

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[#4B86C5]">
      <Navbar/>
      <div className="px-6 w-1/2 flex flex-col gap-5 py-16">
         <h1 className="text-4xl font-bold text-white">Gaibayo Sports</h1>
         <p className="text-white text-xl"> We are  sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes.</p>
         <Button
          buttonName="Check Us Out"
          buttonType="tertiary"
          size="medium"
         />
      </div>
     
    </div>
  )
}

export default Hero