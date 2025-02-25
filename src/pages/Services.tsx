import FM from '../assets/Financial_Management_1.png'
import CN from "../assets/Contract_Negotiations.png"
import CM from "../assets/career_mgmt.png"
import PR from "../assets/PR_Services.png"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import bg from "../assets/Services.png"

const Services = () => {
  const services = [
    {
      title: "Contract Management",
      description:
        "We put our client’s interests at the heart of every contract negotiation. Acting as a trusted intermediary, we leverage our advanced negotiation expertise to secure contracts that reflect our client’s true worth and align with their professional and personal goals.Our commitment is to achieve the best possible outcomes, whether negotiating player contracts, transfer agreements, sponsorship deals, or licensing opportunities. Every detail is meticulously handled to ensure our clients are set up for success.",
      image: CN, 
    },
    {
      title: "Career Management",
      description:
        "At Gaibayo SPORTS, we prioritize our client’s journey through every stage of their playing lifecycle. Our approach is holistic, providing a structured framework that evolves from the first meeting to the end of their career and beyond.We begin by drafting a tailored representation agreement aligned with the client’s unique ambitions and aspirations. With a clear 5-year plan or forecast, we help map out milestones, including achieving specific career goals, securing placements at desired clubs, or preparing for transitions beyond active play.",
      image: CM , 
    },
    {
      title: "PR Services",
      description:
        "At GaibayoSPORTS, we understand the significance of maintaining a positive public image throughout our client’s career. Our dedicated PR team works closely with clients to craft a professional and authentic image that resonates with fans, sponsors, and the broader sports community.",
      image: PR, 
    },
     {
      title: "Financial Management",
      description:
        "Gaibayo Sports recognizes that financial stability is critical to a successful and fulfilling career. With the limited duration of a sports career, we take swift action to develop a robust financial planning strategy tailored to each client’s unique circumstances and goals.Leveraging our extensive network and expertise, we help clients build a sustainable financial foundation that ensures security both during and after their career.",
      image: FM, 
    },
  ];

  return (
    <div className='w-full  bg-[#FBF7F4]  '>
      <div className='w-full h-[60vh] lg:h-[100vh]'>
         <img
         src={bg}
         className="w-full h-[60vh] lg:h-full object-cover absolute "
         alt="Sports"
         />
      <div className='absolute  inset-0 flex flex-col items-center justify-between text-white'>
        <Navbar/>
        <div className="flex flex-col items-center text-center space-y-4 my-0 h-full justify-normal lg:justify-center mt-40 lg:mt-0">
          <h1 className="text-3xl lg:text-6xl font-bold text-center mb-8 text-white">Our Services</h1>
           <p className="max-w-xl text-gray-200 p-2 lg:p-1 text-[14px] lg:text-base">We provide first-class materials management, innovative sports solutions, and tailored consultancy to help you achieve your goals. From career guidance to global networking, our team is here to elevate your aspirations.</p>
        </div>
        
      </div>
      
      </div>
      
      <div className=" gap-16 flex flex-col mx-auto w-full lg:max-w-4xl my-10 lg:my-40  ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between items-center"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className=" h-[200px] lg:h-[300px] w-[300px] lg:w-[400px] object-cover rounded-md "
            />
            <div className=" py-6 px-0 lg:p-6 w-[300px] lg:w-1/2">
              <h2 className="text-2xl text-black font-semibold mb-2">{service.title}</h2>
              <p className=" text-black text-[16px]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Services;
