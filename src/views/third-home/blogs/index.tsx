"use client";

import ReusableCard from "@/components/ReusableCard";
import Container from "@/components/Container";
import { thirdHomeBlogsData } from "../../../../data/home-3/blogs-data";
import Button from "@/components/Button";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import Slider from "react-slick";
import { useRef } from "react";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface CustomSlider extends Slider {
  slickNext(): void;
  slickPrev(): void;
}

export default function BlogsThirdHome() {

  const sliderRef = useRef<CustomSlider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="bg-black">
      <Container className="py-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 mb-10 md:mb-20">
          <div className="flex items-center gap-2 ">
            <div className="w-10 h-px bg-ferrari-red" />
            <h3 className="uppercase text-xl text-ferrari-red">Blogs</h3>
          </div>
          <h5 className="text-xl md:text-4xl uppercase font-bold text-white">
            BLOGS & ARTICLES
          </h5>
          <Button className="rounded-full">CHECK ARTICLES</Button>
        </div>
        <ReusableCard
          ref={sliderRef} 
          type="hover"
          data={thirdHomeBlogsData?.cardItem?.slice(0, 3)}
          settings={settings}
          className=""
          href="/blogs/"
          bodyClass="mt-7"
        />
        <div className="col-span-12 lg:col-span-1 flex items-center mt-10">
          <div className="flex gap-4 ">
            <Button
              icon={<IoArrowBack size={"2rem"} />}
              style={{ padding: "1rem" }}
              className="w-fit rounded-full"
              onClick={handlePrev}
            />
            <Button
              icon={<IoArrowForward size={"2rem"} color="black" />}
              style={{ padding: "1rem" }}
              className="w-fit rounded-full bg-white"
              onClick={handleNext}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
