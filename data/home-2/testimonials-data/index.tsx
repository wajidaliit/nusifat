"use client";

import React from "react";
import testimonial1 from "@/assets/home-2/testimonials/testimonial1.png";
import { StaticImageData } from "next/image";

interface SlideProps {
  src: StaticImageData; 
  subTitle: string;
  title: string;
  des: string;
  name: string;
  position: string; 
}

export const secondHomeTestimonialsData: SlideProps[] = [
  {
    src: testimonial1, 
    subTitle: "WHAT OUR CUSTOMER SAY",
    title: "TESTIMONIALS",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est", 
    name: "John Smith",
    position: "Site Supervisor",
  },
  {
    src: testimonial1, 
    subTitle: "WHAT OUR CUSTOMER SAY",
    title: "TESTIMONIALS",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est", 
    name: "John Smith",
    position: "Site Supervisor",
  },
  {
    src: testimonial1, 
    subTitle: "WHAT OUR CUSTOMER SAY",
    title: "TESTIMONIALS",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est", 
    name: "John Smith",
    position: "Site Supervisor",
  }, 
];
