import CommonImage from "@/components/CommonImage";
import { servicesDataDetail } from "../../../../data/services-detail-data";
import Container from "@/components/Container";
export default function ServicesSatisfaction() {
  return (
    <>
      <div className="bg-water">
        <Container className="pb-36"> 
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div className="">
              <div className="h-64 md:h-[40rem] w-full md:w-[30rem] relative">
                <CommonImage
                  src={servicesDataDetail?.img1}
                  alt="img"
                  className="object-cover w-full h-full"
                />
                <div className="hidden lg:block h-[15rem] w-[15rem] p-2 bg-white absolute -right-24 -bottom-24 ">
                  <CommonImage
                    src={servicesDataDetail?.img7}
                    alt="img"
                    className="object-cover object-right w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h1 className="text-4xl font-bold">
                {servicesDataDetail?.firstSection?.title}
              </h1>
              <div className="mt-6 mb-10">
                <h4 className="mb-4">
                  {servicesDataDetail?.firstSection?.description1}
                </h4>
                <h5 className="">
                  {servicesDataDetail?.firstSection?.description2}
                </h5>
              </div>
              <div className="grid grid-cols-1 gap-4 ml-8 md:ml-20 ">
                {servicesDataDetail?.firstSection?.pointLinks?.map(
                  (item, i) => (
                    <div key={i} className="flex items-center gap-4 font-bold">
                      {item.icon}
                      {item.title}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
