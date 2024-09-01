"use client";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { footerData } from "@/components/footer/hoome-1/Footerlinks";
import Link from "next/link";

const lists = {
  navLists: [
    {
      icon: <FaLocationDot size="1.5rem" />,
      title: "Our Location",
      des: "22 Street, ABC Roud, New Yourk",
      cls: " ",
    },
    {
      icon: <TfiEmail size="1.5rem" />,
      title: "Send Us Mail",
      des: "info@nusifat.com",
    },
  ],
  navButton: "Get a Quote",
};

export default function Navlinks() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center md:justify-between  p-4 md:p-0 ">
      <div className="flex items-center space-x-8 ">
        {footerData.socialMedia.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {item.icon}
          </Link>
        ))}
        <div className="border border-white h-14 hidden md:block" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-center p-4 md:p-0 ">
        {lists?.navLists?.map((item, index) => (
          <div key={index} className="flex items-center gap-4 w-max">
            <div className="border border-white h-14 hidden md:block" />

            <div className="bg-ferrari-red p-2 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <p className="font-medium">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
