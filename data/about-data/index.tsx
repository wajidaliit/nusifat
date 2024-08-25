import checkMark from "@/assets/about-us/checkMark.svg";
import ideasImg from "@/assets/about-us/ideas.jpg";
import officeImg from "@/assets/about-us/office.jpg";
import planImg from "@/assets/about-us/plan.jpg";
import workerImg from "@/assets/about-us/worker-factory.jpg";
import architectsImg from "@/assets/about-us/architects.jpg";
import generative from "@/assets/about-us/generative.jpg";
import house from "@/assets/about-us/house.jpg";
import Button from "@/components/Button";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { TiSupport } from "react-icons/ti";
import { IoPeopleCircle } from "react-icons/io5";
import { RiWaterPercentFill } from "react-icons/ri";
import { TiLightbulb } from "react-icons/ti";

interface Specification {
  icon: StaticImageData;
  name: string;
}
interface Progress {
  label: string;
  percentage: number;
}

interface AboutUSMainData {
  house: StaticImageData;
  ideasImg: StaticImageData;
  officeImg: StaticImageData;
  experience: string;
  title: string;
  desTitle: string;
  des1: string;
  des2: string;
  specification: Specification[];
  button: ReactNode;
}
interface WeOfferDataData {
  planImg: StaticImageData;
  workerImg: StaticImageData;
  title: string;
  desTitle: string;
  des1: string;
  des2: string;
  progress: Progress[];
  button: ReactNode;
}
interface ChooseBenifit {
  icon: ReactNode;
  title: string;
}
interface CoreFeatureData {
  architectsImg: StaticImageData;
  generative: StaticImageData;
  title: string;
  desTitle: string;
  des1: string;
  chooseBenifit: ChooseBenifit[];
}

export const aboutUSMainData: AboutUSMainData = {
  house,
  ideasImg,
  officeImg,
  experience: "250+",
  title: "About Us",
  desTitle: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus",
  des1: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
  des2: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
  specification: [
    {
      icon: checkMark,
      name: "Best Quility Support",
    },
    {
      icon: checkMark,
      name: "100% Quility Design",
    },
    {
      icon: checkMark,
      name: "Professional Experties",
    },
    {
      icon: checkMark,
      name: "24/7 On Time Support",
    },
  ],
  button: <Button className="uppercase">About Us</Button>,
};

export const weOfferData: WeOfferDataData = {
  planImg,
  workerImg,
  title: "Contact Us",
  desTitle: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus",
  des1: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
  des2: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
  progress: [
    { label: "Industrial", percentage: 70 },
    { label: "Construction", percentage: 90 },
    { label: "Remodeling", percentage: 80 },
  ],
  button: <Button className="uppercase">Contact Us</Button>,
};

export const coreFeatureData: CoreFeatureData = {
  architectsImg,
  generative,
  title: "Core fEATURES",
  desTitle: "Why choose us",
  des1: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
  chooseBenifit: [
    { icon: <PiMicrosoftTeamsLogoBold size="4rem" />, title: "Expert Teams" },
    { icon: <IoMdTime size="4rem" />, title: "Timely Delivery" },
    { icon: <TiSupport size="4rem" />, title: "24/7 Support" },
    { icon: <IoPeopleCircle size="4rem" />, title: "Best equipment" },
    { icon: <RiWaterPercentFill size="4rem" />, title: "100% Guarnaty" },
    { icon: <TiLightbulb size="4rem" />, title: "Innovation" },
  ],
};
