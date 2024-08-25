import CommonImage from "@/components/CommonImage";
import location from "@/assets/header/location.svg";
import email from "@/assets/header/email.svg";
import Button from "@/components/Button";
import rightUpArrow from '@/assets/header/rightUpArrow.svg'
import { Fragment } from "react";

const lists = {
  navLists: [
    {
      icon: location,
      title: "Our Location",
      des: "22 Street, ABC Roud, New Yourk",
      cls: ' '
    },
    {
      icon: email,
      title: "Send Us Mail",
      des: "info@nusifat.com",
    },
  ],
  navButton: <Button className="uppercase" icon={rightUpArrow} >Get a Quote</Button>,
};

export default function Navlinks() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center z-50 p-4 md:p-0">
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-center p-4 md:p-0">
        {lists?.navLists?.map((item, index) => (
          <Fragment key={index}>
            <div className=" p-2 rounded-full bg-platinum">
              <CommonImage
                src={item.icon}
                alt="location" 
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-normal text-cool-grey">
                {item.title}
              </h4>
              <p className="font-medium">{item.des}</p>
            </div>
            {index < lists.navLists.length - 1 && (
              <div className="hidden md:flex items-center">
                <div className="w-px h-16 bg-cool-grey mx-4" />
              </div>
            )} 
          </Fragment>
        ))}
      </div>
      {lists?.navButton}
    </div>
  );
}
