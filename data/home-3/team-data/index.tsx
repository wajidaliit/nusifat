import team1 from "@/assets/home-3/team/team1.png";
import team2 from "@/assets/home-3/team/team2.png";
import team3 from "@/assets/home-3/team/team3.png";
import { StaticImageData } from "next/image";

interface CardItemTypes {
  img: StaticImageData;
  name: string;
  color: string;
  positionColor: string;
  position: string;
  des: string;
  isSelected: boolean;
}

interface BlogsCategoryTypes {
  cardItem: CardItemTypes[];
}

export const thirdHomeTeamData: BlogsCategoryTypes = {
  cardItem: [
    {
      img: team1,
      name: "Alan Ronaldo",
      position: "Civil Engineer",
      color: "",
      positionColor: "text-cool-grey",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      isSelected: false,
    },
    {
      img: team2,
      name: "Marks Leoppke",
      position: "Civil Engineer",
      color: "text-ferrari-red",
      positionColor: "text-cool-grey",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      isSelected: true,
    },
    {
      img: team3,
      name: "Alex John",
      position: "Civil Engineer",
      color: "",
      positionColor: "text-cool-grey",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      isSelected: false,
    },
  ],
};
