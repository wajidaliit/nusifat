import CommonImage from "@/components/CommonImage";
import { servicesDataDetail } from "../../../../data/services-detail-data";
import Container from "@/components/Container";
import Button from "@/components/Button";
export default function ServicesConstruction() {
  return (
    <>
      <div className="bg-water">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div className="">
              <div className="h-64 md:h-[26rem] max-h-[40rem] w-full relative">
                <CommonImage
                  src={servicesDataDetail?.img5}
                  alt="img"
                  className="object-cover object-left w-full h-full"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h1 className="text-4xl font-bold">
                {servicesDataDetail?.thirdSection?.title}
              </h1>
              <h5 className="my-4 text-cool-grey">
                {servicesDataDetail?.thirdSection?.description1}
              </h5>
              <h5 className="my-4 text-cool-grey">
                {servicesDataDetail?.thirdSection?.description2}
              </h5>
              <Button>Contact Us</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 mt-8">
            {servicesDataDetail?.thirdSection?.pointLinks?.map((item, i)=>(
                <div key={i} className="flex items-center gap-4 text-xl font-normal">
                   <div>{item.icon}</div>
                   {item.title}
                </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
