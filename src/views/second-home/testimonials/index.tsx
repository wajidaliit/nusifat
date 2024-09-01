"use client";
import React, { useRef } from "react";
import Container from "@/components/Container";
import Slider from "react-slick";
import { secondHomeTestimonialsData } from "../../../../data/home-2/testimonials-data";
import CommonImage from "@/components/CommonImage";
import Button from "@/components/Button";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

 

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false, 
};

interface CustomSlider extends Slider {
  slickNext(): void;
  slickPrev(): void;
}

const TestimonialsSecondHome: React.FC = () => {
  const sliderRef = useRef<CustomSlider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <div className="py-20">
      <Slider ref={sliderRef} {...settings}>
        {secondHomeTestimonialsData.map((slide, index) => (
          <div key={index} className="relative">
            <Container className=" flex flex-col justify-center gap-4 md:gap-6">
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 lg:col-span-3 ">
                  <div className="">
                    <CommonImage
                      src={slide.src}
                      alt={"img"}
                      className=" w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 ">
                  <div className="flex flex-col justify-center gap-4 md:gap-6">
                    <div className="flex gap-20 md:gap-72">
                      <div className="flex items-center gap-4">
                        <div className="h-3 w-3 bg-ferrari-red" />
                        <h2 className="text-xl">{slide.title}</h2>
                        <div className="h-3 w-3 bg-ferrari-red" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="relative 
                    border-t-[40px] border-t-ferrari-red 
                    border-l-[20px] border-l-ferrari-red
                    border-b-[20px] border-b-transparent
                    "
                        />
                        <div
                          className="relative 
                    border-t-[40px] border-t-ferrari-red 
                    border-l-[20px] border-l-ferrari-red
                    border-b-[20px] border-b-transparent
                    "
                        />
                      </div>
                    </div>
                    <h1 className="text-xl md:text-4xl font-bold">
                      {slide.subTitle}
                    </h1>

                    <p>{slide.des}</p>
                    <div className="flex flex-col">
                      <h1 className="text-xl md:text-2xl font-bold">
                        {slide.name}
                      </h1>
                      <p className="text-xl">{slide.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <hr className="border border-black w-full" />
                    <div className="h-3 w-3 bg-ferrari-red" />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-1 flex items-end justify-end lg:justify-center ">
                  <div className="flex flex-row lg:flex-col gap-4 ">
                    <Button
                      icon={<IoArrowBack size={"2rem"} />}
                      style={{ padding: "1rem" }}
                      className="w-fit"
                      onClick={handlePrev}
                    />
                    <Button
                      icon={<IoArrowForward size={"2rem"} />}
                      style={{ padding: "1rem" }}
                      className="w-fit"
                      variant="secondary"
                      onClick={handleNext}
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSecondHome;
