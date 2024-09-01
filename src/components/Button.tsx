"use client";

import { FC, ReactNode, ButtonHTMLAttributes, memo } from "react";
import CommonImage from "./CommonImage";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image"; // Import StaticImageData

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?:
    | string
    | "primary"
    | "secondary"
    | "danger"
    | "outlined"
    | "ghost"
    | "flat";
  className?: string;
  icon?: string | ReactNode | StaticImageData; // Allow icon to be StaticImageData
  href?: string;
  width?: number;
  height?: number;
}

const Button: FC<CommonButtonProps> = ({
  children,
  variant = "danger",
  type = "button",
  className = "",
  width = 20,
  height = 20,
  icon,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

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
    case "outlined":
      variantStyles =
        "border border-ferrari-red text-ferrari-red hover:text-white hover:bg-ferrari-red hover:bg-opacity-80";
      break;
    case "ghost":
      variantStyles =
        "border border-black hover:border-ferrari-red text-black hover:text-white hover:bg-ferrari-red hover:bg-opacity-80";
      break;
    case "flat":
      variantStyles =
        "border border-white hover:border-ferrari-red bg-white text-black hover:text-white hover:bg-ferrari-red hover:bg-opacity-80";
      break;
    default:
      variantStyles = "";
  }

  return (
    <button
      className={`flex gap-1 ${baseStyles} ${variantStyles} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
      {typeof icon === "string" ? (
        <CommonImage
          src={icon}
          alt="button icon"
          className="w-5 h-5"
          width={width}
          height={height}
        />
      ) : icon && typeof icon === "object" && "src" in icon ? (
        <CommonImage
          src={icon.src}
          alt="button icon"
          className="w-5 h-5"
          width={width}
          height={height}
        />
      ) : (
        icon
      )}
    </button>
  );
};

export default memo(Button);
