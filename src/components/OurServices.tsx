import Card from "./shared/Card";
import FM from "../assets/Financial_Management_1.png";
import CN from "../assets/Contract_Negotiations.png";
import CM from "../assets/career_mgmt.png";
import PR from "../assets/PR_Services.png";

const OurServices = () => {

   const handleCardClick = () => {
    window.location.href = "/services"; 
  };
  return (
    <div className="px-6 py-16 mt-4 flex flex-col gap-5 bg-[#FBF7F4]">
      <div className="mx-auto flex-col lg:max-w-6xl flex gap-6">
        <h1 className="text-2xl lg:text-5xl text-black font-bold mb-6">
          Our Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card
            cardType="vertical"
            imgUrl={CN}
            cardHeader="Contract Management"
            cardContents="At Gaibayo SPORTS, we prioritize our client’s journey through every stage of their playing lifecycle. Our approach is holistic, providing a structured framework that evolves from the first meeting to the end of their career and beyond."
            onClick={handleCardClick} 
          />
          <Card
            cardType="vertical"
            imgUrl={CM}
            cardHeader="Career Management"
            cardContents="We put our client’s interests at the heart of every contract negotiation. Acting as a trusted intermediary, we leverage our advanced negotiation expertise to secure contracts that reflect our client’s true worth."
            onClick={handleCardClick} 
          />
          <Card
            cardType="vertical"
            imgUrl={PR}
            cardHeader="PR Services"
            cardContents="Our dedicated PR team works closely with clients to craft a professional and authentic image that resonates with fans, sponsors, and the broader sports community."
            onClick={handleCardClick} 
          />
          <Card
            cardType="vertical"
            imgUrl={FM}
            cardHeader="Financial Management"
            cardContents="Gaibayo Sports recognizes that financial stability is critical to a successful and fulfilling career. With the limited duration of a sports career, we take swift action to develop a robust financial planning strategy tailored to each client’s unique circumstances and goals."
            onClick={handleCardClick} 
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
