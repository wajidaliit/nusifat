import Image, { StaticImageData } from "next/image";
import { CSSProperties, FC } from "react";

interface CommonImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const CommonImage: FC<CommonImageProps> = ({
  src,
  alt = "img",
  className = "",
  width,
  height,
  style,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
    />
  );
};

export default CommonImage;
