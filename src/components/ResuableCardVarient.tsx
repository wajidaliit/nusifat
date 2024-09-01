import { memo } from "react";
import CommonImage from "./CommonImage";
import { StaticImageData } from "next/image";

interface CardItem {
  img?: string | StaticImageData;
  name?: string;
  color?: string;
  positionColor?: string;
  position?: string;
  des?: string;
  isSelected?: boolean;
}

interface BasicCardProps {
  className?: string;
  data?: CardItem[];
  type?: string;
}

const ResuableCardVarient = memo(function ResuableCardVarient({
  data = [],
  className = "",
  type = "",
}: BasicCardProps): JSX.Element {
  return (
    <>
      {type === "basic" ? (
        <div className={`relative ${className}`}>
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white relative p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              {item.img && (
                <div className="h-96 overflow-hidden">
                  <CommonImage
                    src={item.img}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-8 text-center">
                <h2
                  className={`text-xl md:text-2xl font-semibold mb-1 ${item.color}`}
                >
                  {item.name}
                </h2>
                <p className={`${item.positionColor}`}>{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      ) : type === "standard" ? (
        <div className={`relative ${className}`}>
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                className={`relative p-6 rounded-b-2xl bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
                  item.isSelected
                    ? "border-2 border-ferrari-red hover:border-ferrari-red"
                    : "border-2 border-cool-grey hover:border-cool-grey"
                } ${
                  item.isSelected
                    ? "border-t-8 border-ferrari-red"
                    : "border-t-8 border-cool-grey border-t-black"
                }`}
              >
                {/* Adjusted Image Container */}
                <div
                  className={`flex justify-center items-center ${index == 1 ? "py-6" : ""}`}
                >
                  {item.img && (
                    <div
                      className={`overflow-hidden ${index == 1 ? "h-72 w-72" : "h-52 w-52"}`}
                    >
                      <CommonImage
                        src={item.img}
                        alt="img"
                        className="object-cover w-full h-full object-top rounded-full" // Focus on the top part of the image
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-4 items-center">
                  {/* Center content */}
                  <h2 className="text-xl md:text-2xl font-semibold text-center">
                    {item.name}
                  </h2>
                  <h5 className="text-center">{item.position}</h5>
                  <p className="text-center">{item.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : type === "outlined" ? (
        <div className={`relative ${className}`}>
          {data.map((item, index) => (
            <div key={index} className="relative p-6 ">
              <div key={index} className="relative md:p-6">
                <div className="h-96 overflow-hidden relative">
                  {item.img && (
                    <CommonImage
                      src={item.img}
                      alt="img"
                      className="object-cover w-full h-full rounded-[3rem]"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-papaya-orange opacity-0 hover:opacity-60 transition-opacity duration-300 rounded-[3rem]"></div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h2 className={`text-xl md:text-2xl font-semibold mb-1`}>
                  {item.name}
                </h2>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-5 h-px border border-black" />
                  <p>{item.position}</p>
                  <div className="w-5 h-px border border-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>Tell Card Type</>
      )}
    </>
  );
});

export default ResuableCardVarient;
