import Button from "@/components/Button";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import service1 from "@/assets/services/service1.jpg";
import service2 from "@/assets/services/service2.jpg";
import service3 from "@/assets/services/service3.jpg";

interface CardItemTypes {
  img: StaticImageData;
  title: string;
  des: string;
  button: string;
  buttonBg: string;
}

interface BlogsCategoryTypes {
  cardItem: CardItemTypes[];
}

export const secondHomeServicesData: BlogsCategoryTypes = {
  cardItem: [
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW MORE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW MORE",
      buttonBg: "secondary",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW MORE",
      buttonBg: "danger",
    },
  ],
};
