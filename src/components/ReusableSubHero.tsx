"use client";

import about from "@/assets/sub-hero/about.jpg";
import blog from "@/assets/sub-hero/blog.jpg";
import blogDetail from "@/assets/sub-hero/blog-detail.jpg";
import service from "@/assets/sub-hero/service.jpg";
import subService from "@/assets/sub-hero/sub-service.jpg";
import contactUs from "@/assets/sub-hero/contact-us.jpg";
import other from "@/assets/sub-hero/other.jpg";
import { useReadCurrentPath } from "@/hooks/useReadCurreentPath";
import { useCurrentPath } from "@/hooks/useCurrentPath";
import { useSegment } from "@/hooks/useSegment";
import { memo } from "react";
import CommonImage from "./CommonImage";

const ReusableSubHero = memo(function ReusableSubHero() {
  const currentPath = useCurrentPath();
  const path = useReadCurrentPath();
  const segment = useSegment();
  const blurImage =
    currentPath === "/about-us"
      ? about
      : currentPath === "/contact-us"
        ? contactUs
        : currentPath === "/services"
          ? service
          : currentPath === "services/*"
            ? subService
            : currentPath === "/blogs"
              ? blog
              : currentPath === "blogs/*"
                ? blogDetail
                : other;

  return (
    <div className="relative h-40 md:h-96 flex items-center justify-center overflow-hidden">
      <CommonImage
        src={blurImage}
        alt="blurImage"
        className="absolute inset-0 bg-cover bg-center "
        style={{
          filter: "blur(2px) brightness(0.5)",
          opacity: 0.8,
          zIndex: -1,
        }}
      />

      <div className="relative uppercase flex flex-col items-center justify-center text-white">
        <div className="text-2xl sm:text-6xl px-2 font-bold max-w-7xl">
          {segment}
        </div>
        <div className="text-sm sm:text-xl px-2 flex text-center max-w-7xl">
          Home / {path}
        </div>
      </div>
    </div>
  );
});

export default ReusableSubHero;
