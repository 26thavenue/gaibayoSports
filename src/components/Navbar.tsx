
const Navbar = () => {
  return (
    <div className="items-center  flex px-6 py-1 ">
        <img
           src ="/GAIBAYO_SPORT_LOGO__NEW__page-0001__1_-removebg-preview.png"
           alt="logo"
           className="h-[150px] w-[150px] object-cover"
        />
        <div className="flex self-center items-center gap-4 text-white ">
            <p className="cursor-pointer hover:underline transition-all ease-in durationn-300">About</p>
            <p className="cursor-pointer hover:underline transition-all ease-in durationn-300">Our Services</p>
            <p className="cursor-pointer hover:underline transition-all ease-in durationn-300">Contact Us</p>
        </div>
    </div>
  )
}

export default Navbar