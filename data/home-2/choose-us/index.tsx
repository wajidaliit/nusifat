import { StaticImageData } from "next/image";
import chooseus1 from "@/assets/home-2/choose-us/choosus1.jpg";

interface CategoryTypes {
  title: string;
  subTitle: string;
  des1: string;
  des2: string;
  value: string;
  symbol: string;
  sytisfied: string;
  img1: StaticImageData;
}

export const secondHomeChooseUsData: CategoryTypes = {
  title: "WHY CHOOSE US?",
  subTitle: "Trusted Expertise",
  des1: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est",

  des2: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est",
  value: "2,256",
  symbol: "+",
  sytisfied: "Customers work and are satisfied",
  img1: chooseus1,
};
