import { CardType } from "../../utils";

interface ICardProps {
  cardType: CardType;
  cardHeader: string;
  cardContents: string;
  onClick?: () => void;
  imgUrl?: string;
}

const Card = ({ cardType, cardContents, onClick, cardHeader, imgUrl }: ICardProps) => {
  const baseClasses = "relative overflow-hidden h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded shadow-md border group cursor-pointer";
  const typeClasses = {
    horizontal: "flex flex-row items-center gap-4",
    vertical: "flex flex-col items-start",
  }[cardType];

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${typeClasses}`}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header transitions out on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-lg font-bold p-4 z-20 group-hover:translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)]">
        {cardHeader}
      </div>

      {/* Content slides in from the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)] z-10">
        <div className="card-contents text-sm">{cardContents}</div>
      </div>
    </div>
  );
};

export default Card;
