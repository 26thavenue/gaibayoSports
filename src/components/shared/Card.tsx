import { CardType } from "../../utils";

interface ICardProps {
  cardType: CardType;
  cardHeader: string;
  cardContents: string;
  onClick?: () => void;
}

const Card = ({ cardType, cardContents, onClick, cardHeader }: ICardProps) => {
  const baseClasses = "rounded shadow-md p-4 border";
  const typeClasses = {
    horizontal: "flex flex-row items-center gap-4",
    vertical: "flex flex-col items-start",
  }[cardType];

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${typeClasses} cursor-pointer hover:shadow-lg transition-shadow`}
    >
      <div className="card-header text-lg font-bold mb-2">{cardHeader}</div>
      <div className="card-contents text-gray-700">{cardContents}</div>
    </div>
  );
};

export default Card;
