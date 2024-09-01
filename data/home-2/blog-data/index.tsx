import { StaticImageData } from "next/image";
import service1 from "@/assets/services/service1.jpg";
import service2 from "@/assets/services/service2.jpg";
import service3 from "@/assets/services/service3.jpg";

interface CardItemTypes {
  img: StaticImageData;
  title: string;
  des: string;
  button: string;
  buttonBg: string;
  count: string | number;
  date: string;
}

interface BlogsCategoryTypes {
  cardItem: CardItemTypes[];
}

export const secondHomeBlogsData: BlogsCategoryTypes = {
  cardItem: [
    {
      img: service1,
      title: "Lorem ipsum dolor sit amet.",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW MORE",
      buttonBg: "ghost",
      count: '10',
      date: "Dec 2023",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet.",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW MORE",
      buttonBg: "danger",
      count: '05',
      date: "Dec 2023",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet.",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW MORE",
      buttonBg: "ghost",
      count: '18',
      date: "Dec 2023",
    },
  ],
};
