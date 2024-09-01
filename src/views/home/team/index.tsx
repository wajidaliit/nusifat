import { StaticImageData } from "next/image";
import team1 from "@/assets/team/team1.jpg";
import team2 from "@/assets/team/team2.jpg";
import team3 from "@/assets/team/team3.jpg";
import Container from "@/components/Container";
import ResuableCardVarient from "@/components/ResuableCardVarient";

interface CardItem {
  img: string | StaticImageData;
  name: string;
  color: string;
  positionColor: string;
  position: string;
}

const data: CardItem[] = [
  {
    img: team1,
    name: "Alan Ronaldo",
    position: "Civil Engineer",
    color: "",
    positionColor: "text-cool-grey",
  },
  {
    img: team2,
    name: "Marks Leoppke",
    position: "Civil Engineer",
    color: "text-ferrari-red",
    positionColor: "text-cool-grey",
  },
  {
    img: team3,
    name: "Alex John",
    position: "Civil Engineer",
    color: "",
    positionColor: "text-cool-grey",
  },
];

export default function HomeTeam() {
  return (
    <div className="bg-water" id="team">
      <Container className="py-10">
        <h2 className="text-xl text-ferrari-red uppercase font-medium text-center">
          Our Team
        </h2>
        <p className="text-xl md:text-4xl uppercase text-center font-bold mt-3 mb-14">
          Our Technical Experts
        </p>
        <ResuableCardVarient
          data={data}
          type="basic"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        />
      </Container>
    </div>
  );
}
