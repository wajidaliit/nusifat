"use client";

import React from "react";
import Slider from "react-slick";
import workTogether from "@/assets/home-2/header/work-together.png";
import slide1 from "@/assets/hero/slide1.jpg";
import slide2 from "@/assets/hero/slide2.jpg";
import slide3 from "@/assets/hero/slide3.jpg";
import Button from "@/components/Button";
import { StaticImageData } from "next/image";
import Container from "@/components/Container";
import CommonImage from "@/components/CommonImage";
import { MdArrowOutward } from "react-icons/md";
import { useRef } from "react";
import "./HeroSlide.css";

// Define slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dotsClass: "slick-dots",
};

interface SlideProps {
  src: StaticImageData;
  alt?: string;
  subTitle?: string;
  title1?: string;
  title2?: string;
  des?: string;
  button?: React.ReactNode;
}

const slides: SlideProps[] = [
  {
    src: slide1,
    alt: "Slide 1",
    subTitle: "Welcome to Nisifat",
    title1: "Quality Construction.",
    title2: "Honest Service. Great Value.",
    des: "Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service and the latest industry.",
    button: <Button className="uppercase">Our Services</Button>,
  },
  {
    src: slide2,
    alt: "Slide 2",
    subTitle: "Welcome to Nisifat",
    title1: "Quality Construction.",
    title2: "Honest Service. Great Value.",
    des: "Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service and the latest industry.",
    button: <Button className="uppercase">Our Services</Button>,
  },
  {
    src: slide3,
    alt: "Slide 3",
    subTitle: "Welcome to Nisifat",
    title1: "Quality Construction.",
    title2: "Honest Service. Great Value.",
    des: "Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service and the latest industry.",
    button: <Button className="uppercase">Our Services</Button>,
  },
];

const HeroSecondHome: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <Slider ref={sliderRef} {...settings} className="relative ">
      {slides.map((slide, index) => (
        <div key={index} className="relative h-96 md:h-[37rem] w-full  ">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.src.src})`,
              filter: "blur(1px) brightness(0.5)",
              opacity: 0.9,
              zIndex: -1,
            }}
          />
          <Container className=" h-96 md:h-[40rem] flex flex-col justify-center text-white gap-3 md:gap-6">
            <Button className="text-md md:text-2xl lg:text-4xl w-max">
              {slide.subTitle}
            </Button>
            <h2 className="text-xl md:text-6xl font-bold max-w-4xl">
              {slide.title1}
            </h2>
            <h3 className="text-xl md:text-6xl font-bold max-w-4xl">
              {slide.title2}
            </h3>
            <p className=" md:text-lg max-w-3xl">{slide.des}</p>
            <Button className="uppercase w-max">Our Services</Button>
            <div className="relative ">
              <div className="absolute hidden lg:block -bottom-[4.7rem] right-0 h-56 w-[28rem] ">
                <Button
                  icon={<MdArrowOutward color="#E90000" size="2rem" />}
                  className="bg-white absolute bottom-[2.6rem] left-11 "
                  variant="default"
                  style={{
                    padding: "12px",
                  }}
                />
                <CommonImage
                  src={workTogether}
                  alt="img"
                  className="h-full w-full"
                />
              </div>

              <Button
                icon={<MdArrowOutward color="#E90000" />}
                className=" lg:hidden  absolute bottom-3 -right-3 uppercase bg-white"
                style={{
                  color: "#E90000",
                }}
              >
                Work Together?
              </Button>
            </div>
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSecondHome;
