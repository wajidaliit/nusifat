"use client";

import CommonImage from "./CommonImage";
import about from "@/assets/sub-hero/about.jpg";
import blog from "@/assets/sub-hero/blog.jpg";
import blogDetail from "@/assets/sub-hero/blog-detail.jpg";
import service from "@/assets/sub-hero/service.jpg";
import subService from "@/assets/sub-hero/sub-service.jpg";
import contactUs from "@/assets/sub-hero/contact-us.jpg";
import { usePathname } from "next/navigation";

export default function ReusableSubHero() {
  const currentPath = usePathname();
  const path = currentPath
    ?.split(/[/,-]+/)
    ?.slice()
    .join(" ");

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
                : about;
  return (
    <div className="relative">
      <div className="h-96">
        <CommonImage
          src={blurImage}
          alt="img"
          className="object-cover w-full h-full "
          style={{ 
            filter: "blur(2px) brightness(0.5)",
            opacity: 0.8,
            zIndex: -1,
          }}
        />
      </div>
      <div className="uppercase absolute left-[28%] sm:left-[30%] md:left-[40%] top-1/2 flex flex-col items-center text-white">
        <div className="text-5xl sm:text-6xl font-bold">{path}</div>
        <div className="text-xl flex">Home / {path}</div>
      </div>
    </div>
  );
}
