import Button from "./shared/Button"

const AboutUs = () => {
  return (
    <div className="flex gap-8 items-center justify-between w-full px-6 py-16 bg-[#231F20] min-h-[100vh]">
        <img
          src="/Frame 9.png"
          alt="About Us"
          className="object-cover h-[450px] w-[500px]"  
        />
        <div className="text-white w-1/2 flex-col flex  items-start gap-4">
            <h1 className="text-4xl font-bold mb-2">Premier Sports Management</h1>
            <h3 className="mb-3">Gaibayo Sports Management and Marketing is a premier sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes. We provide comprehensive PR services, global placement opportunities, and create powerful partnerships that elevate the careers of athletes on the international stage.</h3>
            <div className="flex gap-8 items-center ">
                <Button
                   size ={"medium"}
                   buttonName="Read More"
                   buttonType="secondary"
                />

                <Button
                   size ={"medium"}
                   buttonName="Our Services"
                   buttonType="secondary"
                />

            </div>
        </div>
    </div>
  )
}

export default AboutUs