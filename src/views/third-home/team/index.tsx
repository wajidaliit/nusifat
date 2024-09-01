 
import Container from "@/components/Container"; 
import { thirdHomeTeamData } from "../../../../data/home-3/team-data";
import ResuableCardVarient from "@/components/ResuableCardVarient";

export default function TeamThirdHome() {
  return (
    <div className="">
      <Container className="py-10">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center justify-center"> 
            <h3 className="uppercase text-xl text-cool-grey">OUR TEAM</h3> 
          </div>
          <h5 className="text-xl md:text-4xl uppercase font-bold text-center">
            OUR TECHNICAL EXPERTS
          </h5>
        </div>
        <ResuableCardVarient
            data={thirdHomeTeamData?.cardItem}
            type="standard"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          />
      </Container>
    </div>
  );
}
