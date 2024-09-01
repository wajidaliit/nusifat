import Container from "@/components/Container";  
import { thirdHomeTestimonialsData } from "../../../../data/home-3/testimonials-data";
import SimpleCard from "@/components/SimpleCard";

export default function TestimonialsThirdHome() {
  return (
    <div className="bg-water ">
      <Container className="py-10">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center justify-center">
            <h3 className="uppercase text-xl text-cool-grey">TESTIMONIALS</h3>
          </div>
          <h5 className="text-xl md:text-4xl uppercase font-bold text-center">
            WHAT OUR CUSTOMER SAY
          </h5>
        </div>
        <SimpleCard
          data={thirdHomeTestimonialsData?.cardItem}
          type="standard"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-52"
        />
      </Container>
    </div>
  );
}
