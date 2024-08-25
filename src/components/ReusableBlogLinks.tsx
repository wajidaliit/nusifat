import React from "react";
import Button from "./Button";
import rightUpArrow from "@/assets/header/rightUpArrow.svg";
import { StaticImageData } from "next/image";
import CommonImage from "./CommonImage";

interface ReusableBlogLinksProps {
  data: {
    title: string;
    lists: {
      name?: string;
      path?: string;
      title?: string;
      date?: string;
      description?: string;
      img?: string | StaticImageData;
    }[];
  };
  className?: string;
  recent: boolean;
}

const ReusableBlogLinks: React.FC<ReusableBlogLinksProps> = ({
  data,
  className,
  recent,
}) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-bold">{data?.title}</h2>
      <div className="flex my-5">
        <div className="h-px w-24 border border-ferrari-red" />
        <div className="h-px w-full border border-cool-grey" />
      </div>
      {recent ? (
        <div className="grid grid-cols-1 gap-5">
          {data?.lists?.map((item, index) => (
            <div key={index} className="">
              <div className="flex items-start gap-8 cursor-pointer">
                {item.img && (
                  <div className="h-24 w-40">
                    <CommonImage
                      src={item.img}
                      alt="img"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <p>{item.date}</p>
                  <h1 className="text-md font-bold">{item.title}</h1>
                  <h5 className="font-normal">{item.description}</h5>
                </div>
              </div>
              {index < data?.lists?.length - 1 && (
                <div className="w-full h-px border border-cool-grey mt-5" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {data?.lists?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white cursor-pointer"
            >
              <h2 className="text-lg px-3">{item.name}</h2>
              <Button icon={rightUpArrow} className="py-4" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReusableBlogLinks;
