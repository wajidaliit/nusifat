import Container from "@/components/Container";
import ResuableCardVarient from "@/components/ResuableCardVarient";
import { secondHomeTeamData } from "../../../../data/home-2/team-data";

export default function TeamSecondHome() {
  return (
    <div className=" bg-water">
      <Container className="py-10 ">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            <div className="border border-ferrari-red w-2 h-2 bg-ferrari-red" />
            <h3 className="uppercase text-xl text-cool-grey">
              OUR PROFESSIONALS
            </h3>
            <div className="border border-ferrari-red w-2 h-2 bg-ferrari-red" />
          </div>
          <h5 className="text-xl md:text-4xl uppercase font-bold text-center">
            MEET OUR LEADERS
          </h5>
        </div>
        <div className="bg-white md:px-10 rounded-3xl mt-6">
          <ResuableCardVarient
            data={secondHomeTeamData?.cardItem}
            type="outlined"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          />
        </div>
      </Container>
    </div>
  );
}
