import { servicesDataDetail } from "../../../../data/services-detail-data";
import service1 from "@/assets/services/service1.jpg";
import Button from "@/components/Button";
import Container from "@/components/Container";
import rightUpArrow from "@/assets/header/rightUpArrow.svg";

export default function ServicesReadyToWork() {
  return (
    <div className="relative text-white">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${service1.src})`,
          filter: "blur(3px) brightness(0.1)",
          opacity: 0.5,
          zIndex: -1,
        }}
      ></div>

      {/* Content Layer */}
      <Container className="py-12 relative z-10">
        <h1 className="text-4xl font-bold">
          {servicesDataDetail?.readyToWork?.title}
        </h1>
        <div className="flex text-black bg-white items-center gap-4 py-1 pl-4 max-w-52 cursor-pointer mt-8">
          <p>{servicesDataDetail?.readyToWork?.quote}</p>
          <Button icon={rightUpArrow} />
        </div>
      </Container>
    </div>
  );
}
