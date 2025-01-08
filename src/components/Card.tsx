import { CardType } from "../utils";
import "./Card.scss"

interface ICardProps {
  cardType: CardType;
  cardHeader: string;
  cardContents: string;
  onClick?: () => void;
}

const Card = ({ cardType, cardContents, onClick, cardHeader }: ICardProps) => {
  return (
    <div onClick={onClick} className={`card ${cardType}`}>
      <div className="card-header">{cardHeader}</div>
      <div className="card-contents">{cardContents}</div>
    </div>
  );
};

export default Card;