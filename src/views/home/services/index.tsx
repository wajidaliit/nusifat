import ReusableCard from "@/components/ReusableCard";
import Container from "@/components/Container";
import { servicesData } from "../../../../data/services-data";

export default function HomeService() {
  return (
    <div className="bg-water">
      <Container className="py-10">
        <h2 className="text-xl text-ferrari-red uppercase font-medium text-center">
          Our Services
        </h2>
        <p className="text-xl md:text-4xl uppercase text-center font-bold mt-3 mb-14">
          Quality Servicing Oppertunity
        </p>
        <ReusableCard
          data={servicesData?.cardItem?.slice(0, 3)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        />
      </Container>
    </div>
  );
}
