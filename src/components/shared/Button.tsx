import { ButtonSize, ButtonType } from "../../utils";

interface IButtonProps {
  size: ButtonSize;
  buttonName: string;
  buttonType: ButtonType;
  onClick?: () => void;
}

const Button = ({ size, buttonName, buttonType, onClick }: IButtonProps) => {
  const baseClasses = "rounded px-4 py-2 font-semibold";
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  }[size];

  const typeClasses = {
    primary: "bg-[#231F20] text-white hover:bg-gray-900",
    secondary: "bg-white text-black border  hover:bg-gray-100",
    tertiary: "bg-transparent text-black border  hover:bg-gray-100",
  }[buttonType];

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${typeClasses}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
