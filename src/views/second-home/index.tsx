
import BlogsSecondHome from "./blogs";
import ChooseUsSecondHome from "./choose-us";
import ClientsSecondHome from "./clients";
import HeroSecondHome from "./hero"; 
import NusififatSinceSecondHome from "./nusififat-since";
import ServiceSecondHome from "./services";
import TeamSecondHome from "./team";
import TestimonialsSecondHome from "./testimonials";

export default function SecondHome() {
    return (
      <>
        <div>
          <HeroSecondHome />
          <NusififatSinceSecondHome />
          <ServiceSecondHome />
          <ChooseUsSecondHome />
          <TeamSecondHome />
          <TestimonialsSecondHome />
          <BlogsSecondHome />
          <ClientsSecondHome />
        </div>
        
      </>
    );
  }
  