import Button from "./shared/Button"

const AboutUs = () => {
  return (
    <div className="flex gap-4 items-center justify-between w-full px-6 py-16 bg-[#231F20]">
        <img
          src="/Frame 9.png"
          alt="About Us"
          className="object-cover h-[400px] w-[600px]"
        />
        <div className="text-white w-1/2 flex-col items-center">
            <h2 className="text-3xl mb-4">Premier Sports Management</h2>
            <h3>Gaibayo Sports Management and Marketing is a premier sports management, media, and entertainment company specializing in the representation of both professional and amateur athletes. We provide comprehensive PR services, global placement opportunities, and create powerful partnerships that elevate the careers of athletes on the international stage.</h3>
            <div className="flex gap-4 items-center p-3">
                <Button
                   size ={"medium"}
                   buttonName="Read More"
                   buttonType="tertiary"
                />

                <Button
                   size ={"medium"}
                   buttonName="Our Services"
                   buttonType="tertiary"
                />

            </div>
        </div>
    </div>
  )
}

export default AboutUs