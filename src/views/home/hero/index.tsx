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
import "./SliderComponent.css"; // Import your CSS file

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
  alt: string;
  subTitle: string;
  title: string;
  button: React.ReactNode;
}

const slides: SlideProps[] = [
  {
    src: slide1,
    alt: "Slide 1",
    subTitle: "Welcome to Nisifat",
    title: "We're providing Building leading solutions",
    button: <Button className="uppercase">Get Started</Button>,
  },
  {
    src: slide2,
    alt: "Slide 2",
    subTitle: "Welcome to Nisifat",
    title: "We're providing Building leading solutions",
    button: <Button className="uppercase">Get Started</Button>,
  },
  {
    src: slide3,
    alt: "Slide 3",
    subTitle: "Welcome to Nisifat",
    title: "We're providing Building leading solutions",
    button: <Button className="uppercase">Get Started</Button>,
  },
  {
    src: slide4,
    alt: "Slide 4",
    subTitle: "Welcome to Nisifat",
    title: "We're providing Building leading solutions",
    button: <Button className="uppercase">Get Started</Button>,
  },
];

const SliderComponent: React.FC = () => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-60 md:h-[40rem] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.src.src})`,
              filter: "blur(1px) brightness(0.5)",
              opacity: 0.9,
              zIndex: -1,
            }}
          />
          <Container className="h-60 md:h-[40rem] flex flex-col justify-center text-white gap-4 md:gap-6">
            <p className="text-md md:text-2xl lg:text-4xl">{slide.subTitle}</p>
            <h2 className="text-xl md:text-6xl font-bold max-w-xl">
              {slide.title}
            </h2>
            <div>{slide.button}</div>
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
