"use client";

import { StaticImageData } from "next/image";
import CommonImage from "./CommonImage";
import { memo } from "react";

interface CardItem {
  rating?: string;
  title?: string;
  des?: string;
  img?: string | StaticImageData;
}

interface SimpleCardProps {
  className?: string;
  type?: string;
  data?: CardItem[];
}

const SimpleCard = memo(function SimpleCard({
  data = [],
  className = "",
  type = "",
}: SimpleCardProps): JSX.Element {
  return (
    <>
      {type == "basic" ? (
        <div className={`relative ${className}`}>
          {data.map((item, index) => (
            <div
              key={index}
              className="relative shadow-custom-dual px-6 py-14 flex flex-col items-center justify-center gap-6 "
            >
              <div className="flex justify-center space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 ${
                      i < Number(item.rating)
                        ? "fill-[#facc15]"
                        : "fill-[#CED5D8]"
                    }`}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-center">{item.des}</h2>
              <p className={`text-xl font-bold`}>{item.title}</p>
            </div>
          ))}
        </div>
      ) : type == "standard" ? (
        <div className={`relative z-20  ${className}`}>
          {data.map((item, index) => (
            <div key={index} className="relative ">
              {/* Background Div */}

              {/* Card Div */}
              <div
                className={`relative shadow-custom-dual px-6 py-14 rounded-3xl ${index == 0 ? "" : "mt-40"} md:mt-0 bg-white`}
              >
                {/* Image Div */}
                {/* <div className={`relative bg-black h-72 w-72 -top-[13rem] left-[2rem] rounded-full `} /> */}
                <div className="absolute  w-full inset-x-0 -top-[7.5rem] flex justify-center rotate-45 ">
                  <div
                    className="h-60 w-60 rounded-full text-center flex justify-center items-center 
                    border-t-[20px] border-t-black
                    border-r-[20px] border-r-transparent
                    border-b-[20px] border-b-transparent
                    border-l-[20px] border-l-black 
                "
                  >
                    {item.img && (
                    <CommonImage
                      src={item.img}
                        alt="img"
                        className="object-cover w-full h-full rounded-full -rotate-45 "
                      />
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 pt-28 ">
                  <h2 className="text-center">{item.des}</h2>
                  <p className="text-xl font-bold">{item.title}</p>
                  <div className="flex justify-center space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 ${
                          i < Number(item.rating)
                            ? "fill-[#facc15]"
                            : "fill-[#CED5D8]"
                        }`}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>Tell Card Type like: basic, standard etc</>
      )}
    </>
  );
});

export default SimpleCard;
