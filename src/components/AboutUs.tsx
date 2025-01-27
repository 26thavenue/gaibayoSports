import Button from "./shared/Button"
import pic from "../assets/BG_01.png"
import {Link} from "react-router-dom"

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-between w-full px-12 py-24  bg-[#FBF7F4] min-h-[80vh]">
        <div className="text-black w-full lg:w-1/2 flex-col flex p-3 items-start gap-4 ">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2">About Gaibayo Sports</h1>
            <h3 className="mb-3 text-[16px] text-slate-900">Gaibayo Sports Management and Marketing is a premier sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes. We provide comprehensive PR services, global placement opportunities, and create powerful partnerships that elevate the careers of athletes on the international stage.</h3>
            <div className="flex gap-8 items-center ">
                <Link to="/about">
                  <Button
                   size ={"medium"}
                   buttonName="Read More"
                   buttonType="primary"
                />
                </Link>
            </div>
        </div>
         <img  
          src={pic}
          alt="About Us"
          className="object-cover h-[400px] w-[600px] rounded-md" 
          loading="lazy" 
        />
    </div>
  )
}

export default AboutUs