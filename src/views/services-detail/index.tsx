import { servicesDataDetail } from "../../../data/services-detail-data";
import Container from "@/components/Container";
import ServicesSatisfaction from "./services-satisfaction";
import ServicesArchitectureSystem from "./services-architecture-systerm";
import ServicesConstruction from "./services-construction";
import ServicesReadyToWork from "./ready-to-work";
export default function ServicesDetail() {
  return (
    <div>
      <div className="bg-water pt-16 pb-7">
        <Container className="">
          <div className="text-ferrari-red flex items-center gap-4">
            <div className="h-px w-8 border border-ferrari-red" />
            <div className="text-xl font-medium">
              {servicesDataDetail.title}
            </div>
          </div>
          <h1 className="text-xl md:text-4xl font-semibold max-w-md mt-2 ">
            {servicesDataDetail.subTitle}
          </h1>
        </Container>
      </div>
      <ServicesSatisfaction />
      <ServicesArchitectureSystem />
      <ServicesConstruction />
      <ServicesReadyToWork />
    </div>
  );
}
