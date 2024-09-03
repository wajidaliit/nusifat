import { servicesDataDetail } from "../../../../data/services-detail-data"; 
import Button from "@/components/Button";
import Container from "@/components/Container";
import rightUpArrow from "@/assets/header/rightUpArrow.svg";
import CommonImage from "@/components/CommonImage";

export default function ServicesReadyToWork() {
  return (
    <div className="relative text-white h-52 w-full">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <CommonImage
          src={servicesDataDetail?.img1}
          alt="img"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            filter: "blur(2px) brightness(0.5)",
            opacity: 0.8,
            zIndex: -1,
          }}
        />
      </div>

      {/* Content Layer */}
      <Container className="py-12 relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold">
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
