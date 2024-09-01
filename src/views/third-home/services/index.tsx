import ReusableCard from "@/components/ReusableCard";
import Container from "@/components/Container";
import { thirdHomeServicesData } from "../../../../data/home-3/dervices-data";

export default function ServiceThirdHome() {
  return (
    <div className="">
      <Container className="py-10">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center justify-center "> 
            <h3 className="uppercase text-xl text-cool-grey">OUR SERVICES</h3> 
          </div>
          <h5 className="text-xl md:text-4xl uppercase font-bold text-center">
            QUALITY SERVICING OPPRTUNITY
          </h5>
        </div>
        <ReusableCard
          type="standard"
          data={thirdHomeServicesData?.cardItem?.slice(0, 3)}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6  "
          href="/services/"
          bodyClass="mt-7"
        />
      </Container>
    </div>
  );
}
