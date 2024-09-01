import { StaticImageData } from "next/image";
import vissionMission from "@/assets/home-3/vision-mission/vissionMission.jpg"; 

interface CardItemTypes {
  title: string;
}

interface CategoryTypes {
  cardItem: CardItemTypes[];
  img: StaticImageData;
  title: string;
  des: string;
}

export const thirdHomeVissionMissionData: CategoryTypes = {
  img: vissionMission,
  title: "Build today to transform tomorrow",
  des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.",
  cardItem: [
    {
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
    },
  ],
};
