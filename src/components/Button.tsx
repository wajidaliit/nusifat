import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import CommonImage from "./CommonImage";

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string; 
  icon?: string;
}

const Button: FC<CommonButtonProps> = ({
  children,
  variant = "danger",
  type = "button",
  className = "", 
  icon,
  ...props
}) => {
  const baseStyles = "px-4 py-2  focus:outline-none ";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-blue-500 text-white hover:bg-blue-600 ";
      break;
    case "secondary":
      variantStyles = "bg-black text-white hover:bg-black hover:bg-opacity-80";
      break;
    case "danger":
      variantStyles =
        "bg-ferrari-red text-white hover:bg-ferrari-red hover:bg-opacity-80";
      break;
    default:
      variantStyles = "bg-blue-500 text-white hover:bg-blue-600 ";
  }

  return (
    <button
      className={`flex gap-1 ${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <CommonImage
          src={icon}
          alt="button icon"
          className="w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
