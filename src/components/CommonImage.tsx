"use client";

import Image, { StaticImageData } from "next/image";
import { CSSProperties, FC, memo } from "react";

interface CommonImageProps {
  src: string | StaticImageData;
  alt?: string;
  loading?: "lazy" | "eager";   
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const CommonImage: FC<CommonImageProps> = ({
  src,
  alt = "img",
  width,
  height,
  loading = "lazy",  
  className = "",
  style
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}    
      className={className}
      style={style}
    />
  );
};

export default memo(CommonImage);
