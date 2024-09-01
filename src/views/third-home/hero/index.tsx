"use client";

import React from "react";
import Slider from "react-slick";
import slide1 from "@/assets/hero/slide1.jpg";
import slide2 from "@/assets/hero/slide2.jpg";
import slide3 from "@/assets/hero/slide3.jpg";
import slide4 from "@/assets/hero/slide4.jpg";
import Button from "@/components/Button";
import { StaticImageData } from "next/image";
import Container from "@/components/Container";

// Define slider settings
const settings = {
  dots: false,
  fade: true,
  infinite: true,
  // speed: 500,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 3000,
  arrows: false,
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
  {
    src: slide4,
    alt: "Slide 4",
    subTitle: "Welcome to Nisifat",
    title1: "Quality Construction.",
    title2: "Honest Service. Great Value.",
    des: "Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service and the latest industry.",
    button: <Button className="uppercase">Our Services</Button>,
  },
];

const HeroThirdHome: React.FC = () => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-96 md:h-[37rem] w-full">
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgb(16, 45, 61), rgba(16, 45, 61, 0.8) 30%, rgba(16, 45, 61, 0.6) 60%, rgba(16, 45, 61, 0.3) 90%, rgba(0, 0, 0, 0)), url(${slide.src.src})`,
              filter: "blur(1px) brightness(0.7)",
              opacity: 0.9,
              zIndex: -1,
            }}
          />
          {/* Content Overlay */}
          <Container className="h-96 md:h-[40rem] flex flex-col items-center justify-center text-white gap-4 md:gap-6">
            <h1 className="text-md md:text-2xl lg:text-4xl w-max">
              {slide.subTitle}
            </h1>
            <h2 className="text-xl md:text-6xl font-bold max-w-4xl">
              {slide.title1}
            </h2>
            <h3 className="text-xl md:text-6xl font-bold max-w-4xl">
              {slide.title2}
            </h3>
            <p className="md:text-lg max-w-3xl">{slide.des}</p>
            {slide.button}
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default HeroThirdHome;
