import Button from "./shared/Button"
import {Link} from "react-router-dom"

const ContactUs = () => {
  return (
    <div className="flex flex-col text-black items-center lg:items-start gap-6 bg-white max-w-6xl  rounded-md lg:min-h-[80vh]   mx-auto  justify-center px-12 py-16 ">
        <h1 className="text-2xl lg:text-4xl font-bold">Get In touch</h1>
        <p className="mb-2 text-[16px] lg:text-xl text-center lg:text-start  w-full lg:w-3/4">Let our team of skilled experts handle everything off the pitch, so you can stay focused on delivering results on the pitch.</p>
        <Link to="/contact">
          <Button
          buttonName="Contact Us"
          buttonType="primary"
          size="medium"
            />
        </Link>
       
    </div>
  )
}

export default ContactUs