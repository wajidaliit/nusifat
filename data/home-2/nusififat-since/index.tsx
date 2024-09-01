import { StaticImageData } from "next/image";
import nusififatSince1 from "@/assets/home-2/nusififat-since/nusififatSince1.jpg";
import nusififatSince2 from "@/assets/home-2/nusififat-since/nusififatSince2.jpg";

interface CardItemTypes {
  name: string;
}

interface CategoryTypes {
  cardItem: CardItemTypes[];
  title: string;
  subTitle: string;
  des1: string;
  des2: string;
  value: string;
  valueDes: string;
  img1: StaticImageData;
  img2: StaticImageData;
}

export const secondHomeNusififatSinceData: CategoryTypes = {
  title: "Nusififat Since 2010",
  subTitle: "Lorem ipsum dolor sit amet. Non accusantium laudantium",
  des1: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet.",

  des2: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet.",
  value: "our values",
  valueDes:
    "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore",
  img1: nusififatSince1,
  img2: nusififatSince2,

  cardItem: [
    {
      name: "Lorem ipsum dolor sit amet",
    },
    {
      name: "Lorem ipsum dolor sit amet",
    },
    {
      name: "Lorem ipsum dolor sit amet",
    },
    {
      name: "Lorem ipsum dolor sit amet",
    },
  ],
};
