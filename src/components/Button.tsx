import { ButtonSize, ButtonType } from '../utils'
import "./Button.scss"


interface IButtonProps{
    size: ButtonSize
    buttonName: string
    buttonType:ButtonType
    onClick?: () => void

}

const Button = ({ size, buttonName, buttonType, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${size} ${buttonType}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;