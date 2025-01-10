import Button from "./shared/Button"


const ContactUs = () => {
  return (
    <div className="flex flex-col items-start gap-3  justify-center px-6 py-16 min-h-[80vh]">
        <h1 className="text-4xl text-bold">Get In touch</h1>
        <p className="mb-2 text-xl text-wrap w-3/4">Let our team of skilled experts handle everything off the pitch, so you can stay focused on delivering results on the pitch.</p>
        <Button
          buttonName="Contact Us"
          buttonType="primary"
          size="medium"
            />
    </div>
  )
}

export default ContactUs