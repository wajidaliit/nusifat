import BlogsThirdHome from "./blogs";
import ClientsThirdHome from "./clients";
import HeroThirdHome from "./hero";
import NusifatSinceThirdHome from "./nusifat-since";
import ServiceThirdHome from "./services";
import TeamThirdHome from "./team";
import TestimonialsThirdHome from "./testimonials";
import VissionMissionThirdHome from "./vision-mission";

export default function ThirdHome() {
  return (
    <>
      <HeroThirdHome />
      <NusifatSinceThirdHome />
      <BlogsThirdHome />
      <ServiceThirdHome />
      <VissionMissionThirdHome />
      <TeamThirdHome />
      <TestimonialsThirdHome />
      <ClientsThirdHome />
    </>
  );
}
