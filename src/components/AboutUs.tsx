import Button from "./shared/Button"
import pic from "../assets/Frame_10.png"

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between w-full px-6 py-24  bg-[#231F20] min-h-[80vh]">
        <img  
          src={pic}
          alt="About Us"
          className="object-cover h-[300px] w-[500px]"  
        />
        <div className="text-white w-full lg:w-1/2 flex-col flex  items-start gap-4">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2">About Gaibayo Sports</h1>
            <h3 className="mb-3 text-[16px] text-slate-200">Gaibayo Sports Management and Marketing is a premier sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes. We provide comprehensive PR services, global placement opportunities, and create powerful partnerships that elevate the careers of athletes on the international stage.</h3>
            <div className="flex gap-8 items-center ">
                <a href="/about">
                  <Button
                   size ={"medium"}
                   buttonName="Read More"
                   buttonType="secondary"
                />
                </a>
                
                <a href="/services">
                   <Button
                      size ={"medium"}
                      buttonName="Our Services"
                      buttonType="secondary"
                    />
                </a>
               

            </div>
        </div>
    </div>
  )
}

export default AboutUs