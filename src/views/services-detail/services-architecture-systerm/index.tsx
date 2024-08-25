import CommonImage from "@/components/CommonImage";
import { servicesDataDetail } from "../../../../data/services-detail-data";
import Container from "@/components/Container";
export default function ServicesArchitectureSystem() {
  return (
    <>
      <div className="bg-black text-white">
        <Container className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div className="">
          <div>
          <h1 className="text-xl font-bold">
                {servicesDataDetail?.secondSection?.services}
              </h1>
              <h6 className="text-cool-grey mt-4">
                {servicesDataDetail?.secondSection?.servicesDescription}
              </h6>
          </div>
          <div className="my-4">
          <h1 className="text-xl font-bold">
                {servicesDataDetail?.secondSection?.benefits}
              </h1>
              <h6 className="text-cool-grey mt-4">
                {servicesDataDetail?.secondSection?.benefitsDescription}
              </h6>
          </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesDataDetail?.secondSection?.architecturDetails?.map(
                  (item, i) => (
                    <div key={i} className="flex flex-col gap-4 "> 
                     <h1 className="text-xl font-semibold">{item.title}</h1> 
                     <p className="text-cool-grey">{item.description}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className=" ">
              <div className="h-[20rem] md:h-[34rem] w-full md:max-w-[26rem] relative ml-auto mt-4 md:mt-0">
                <CommonImage
                  src={servicesDataDetail?.img6}
                  alt="img"
                  className="object-cover w-full h-full"
                />
                <div className="hidden lg:block h-[15rem] w-[15rem] p-2 bg-white absolute -left-24 -top-10">
                  <CommonImage
                    src={servicesDataDetail?.img8}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
