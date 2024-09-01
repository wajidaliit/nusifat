"use client";
import CommonImage from "./CommonImage";
import { StaticImageData } from "next/image";
import Button from "./Button";
import { IoMdArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import Slider from "react-slick";
import { forwardRef, memo } from "react";

interface CardItem {
  img?: StaticImageData;
  title?: string;
  des?: string;
  count?: string | number;
  bgColor?: string;
  color?: string;
  button?: string;
  buttonBg?: string;
  date?: string;
}

interface ReusableCardProps {
  className?: string;
  data?: CardItem[];
  href?: string;
  cardClass?: string | ((item?: CardItem) => string); // Allow cardClass to be a function
  titleClass?: string | ((item?: CardItem) => string); // Allow cardClass to be a function
  imgClass?: string;
  bodyClass?: string;
  type?: string;
  settings?: any;
  ref?: React.RefObject<Slider>;
}

const ReusableCard = forwardRef<Slider, ReusableCardProps>(
  (
    {
      data = [],
      href = "",
      className = "",
      cardClass = "",
      titleClass = "",
      imgClass = "",
      bodyClass = "",
      settings = {},
      type = "",
    },
    ref
  ): JSX.Element => {
    return (
      <>
        {type === "basic" ? (
          <div className={`relative ${className}`}>
            {data?.map((item, index) => {
              // Determine the class string dynamically based on item
              const computedClass =
                typeof cardClass === "function" ? cardClass(item) : cardClass;
              const computedTitleClass =
                typeof titleClass === "function"
                  ? titleClass(item)
                  : titleClass;

              return (
                <div
                  key={index}
                  className={`bg-white relative transition-transform duration-300 ease-in-out transform hover:-translate-y-2 ${computedClass}`} // Card hover effect
                >
                  {item.img && (
                    <div className="h-72 overflow-hidden group">
                      <CommonImage
                        src={item.img}
                        alt="img"
                        className={`object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 ${imgClass}`} // Image zoom effect
                      />
                    </div>
                  )}
                  {item?.count && (
                    <div
                      className={`font-bold text-2xl p-4 absolute right-0 top-[14rem] rounded-tl-2xl ${item.bgColor} ${item.color}`}
                    >
                      {item.count}
                    </div>
                  )}
                  <div className={`${bodyClass}`}>
                    <h2
                      className={`text-xl md:text-2xl font-semibold ${computedTitleClass}`}
                    >
                      {item.title}
                    </h2>
                    <p className="my-4 text-cool-grey">{item.des}</p>
                    <Button
                      href={`${href}${item.title}`}
                      variant={`${item.buttonBg}`}
                      className="uppercase"
                    >
                      {item.button}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : type === "standard" ? (
          <div className={`relative ${className}`}>
            {data?.map((item, index) => {
              // Determine the class string dynamically based on item
              const computedClass =
                typeof cardClass === "function" ? cardClass(item) : cardClass;
              const computedTitleClass =
                typeof titleClass === "function"
                  ? titleClass(item)
                  : titleClass;

              return (
                <div
                  key={index}
                  className={`bg-white relative h-[27rem] mt-10 md:mt-0 ${computedClass}`}
                >
                  {item.img && (
                    <div className="h-96 overflow-hidden group">
                      <CommonImage
                        src={item.img}
                        alt="img"
                        className={`object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 ${imgClass}`}
                      />
                    </div>
                  )}
                  <div className="relative mx-8 -top-24">
                    <div
                      className={`text-white z-10 ${
                        item.buttonBg === "secondary"
                          ? "bg-black"
                          : item.buttonBg === "danger"
                            ? "bg-ferrari-red"
                            : "bg-default-color"
                      } ${bodyClass}`}
                    >
                      <div className="flex justify-between items-center gap-4 p-4">
                        <div className="flex flex-col">
                          <h2
                            className={`text-xl md:text-xl font-semibold ${computedTitleClass}`}
                          >
                            {item.title}
                          </h2>
                          <p>{item.des}</p>
                        </div>
                        <Button
                          href={`${href}${item.title}`}
                          className="bg-white hover:bg-white rounded-full"
                          style={{
                            padding: "14px",
                          }}
                          icon={
                            <IoMdArrowForward
                              color={`${
                                item.buttonBg === "secondary"
                                  ? "#E90000"
                                  : item.buttonBg === "danger"
                                    ? "#000000"
                                    : "#000000"
                              } `}
                            />
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : type === "hover" ? (
          <div className={`relative ${className}`}>
            <Slider ref={ref} {...settings}>
              {data?.map((item, index) => {
                // Determine the class string dynamically based on item
                const computedClass =
                  typeof cardClass === "function" ? cardClass(item) : cardClass;
                const computedTitleClass =
                  typeof titleClass === "function"
                    ? titleClass(item)
                    : titleClass;

                return (
                  <div key={index} className="px-2">
                    <div
                      className={`bg-white relative overflow-hidden group ${computedClass}`}
                    >
                      {item.img && (
                        <div className="h-80">
                          <CommonImage
                            src={item.img}
                            alt="img"
                            className={`object-cover w-full h-full ${imgClass}`}
                          />
                        </div>
                      )}
                      {item?.count && (
                        <div
                          className={`p-2 absolute right-0 top-0 bg-ferrari-red text-white rounded-bl-2xl z-10`}
                        >
                          <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl font-bold">{item.count}</h2>
                            <p className="text-sm">{item.date}</p>
                          </div>
                        </div>
                      )}
                      <div className="absolute  group-hover:hidden bottom-0 w-full py-2 px-6 text-white bg-black bg-opacity-50">
                        <div
                          className={`inline text-xl md:text-3xl font-semibold ${computedTitleClass}`}
                        >
                          {item.title}
                          <MdArrowOutward style={{ display: "inline" }} />
                        </div>
                      </div>

                      {/* Sliding content on hover */}
                      <div className="absolute inset-0 flex items-center justify-center bg-[#FFB128] bg-opacity-80 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 ">
                        {" "}
                        {/* Slide up and down */}
                        <div className={`py-2 px-6 text-white ${bodyClass}`}>
                          <h2
                            className={`inline text-xl md:text-3xl font-semibold ${computedTitleClass}`}
                          >
                            {item.title}{" "}
                            <MdArrowOutward
                              style={{ display: "inline", cursor: "pointer" }}
                            />
                          </h2>
                          <p className="">{item.des}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        ) : type === "outlined" ? (
          <div className={`relative ${className}`}>
            {data?.map((item, index) => {
              // Determine the class string dynamically based on item
              const computedClass =
                typeof cardClass === "function" ? cardClass(item) : cardClass;
              const computedTitleClass =
                typeof titleClass === "function"
                  ? titleClass(item)
                  : titleClass;

              return (
                <div
                  key={index}
                  className={`bg-white relative mt-8 md:mt-0 ${computedClass} transition-transform duration-300 ease-in-out hover:scale-105`} // Add hover effect for the card
                >
                  {item.img && (
                    <div className="h-[27rem] overflow-hidden relative group">
                      <CommonImage
                        src={item.img}
                        alt="img"
                        className={`object-cover w-full h-full ${imgClass} transition-transform duration-500 ease-in-out transform group-hover:scale-110`} // Zoom effect on image hover
                      />
                    </div>
                  )}
                  {item?.count && (
                    <div className={`absolute left-4 -top-3 rounded-tl-2xl`}>
                      <div className="flex flex-col justify-center items-center text-white bg-ferrari-red">
                        <h1 className="py-4 text-4xl font-bold">
                          {item.count}
                        </h1>
                        <p className="bg-black py-1">{item.date}</p>
                      </div>
                    </div>
                  )}
                  <div className={`flex flex-col gap-2 mt-4 ${bodyClass}`}>
                    <h2
                      className={`text-xl md:text-2xl font-semibold ${
                        item.buttonBg == "danger" ? "text-ferrari-red" : ""
                      } ${computedTitleClass}`}
                    >
                      {item.title}
                    </h2>
                    <hr className="w-[90%] border border-cool-grey " />
                    <p className="text-cool-grey max-w-[90%]">{item.des}</p>
                    <Button
                      href={`${href}${item.title}`}
                      variant={`${item.buttonBg}`}
                      className="uppercase w-max"
                    >
                      {item.button}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <p>Please tell card type</p>
          </>
        )}
      </>
    );
  }
);

ReusableCard.displayName = "ReusableCard"; // Add display name
export default memo(ReusableCard);
