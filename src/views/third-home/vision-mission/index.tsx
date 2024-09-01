import Container from "@/components/Container";
import { thirdHomeVissionMissionData } from "../../../../data/home-3/vision-mission";
import CommonImage from "@/components/CommonImage";
import Button from "@/components/Button";

export default function VissionMissionThirdHome() {
  return (
    <div>
      <Container className="pt-10 md:pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-center md:gap-32 md:pl-32">
          <div className="flex items-center gap-2">
            <div className="w-7 h-px bg-ferrari-red" />
            <h1 className="text-xl text-ferrari-red ">VISION & MISSION</h1>
          </div>
          <h2 className="text-xl md:text-4xl font-bold">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
      </Container>
      <div className=" relative">
        <div className="absolute inset-0 flex">
          <div className="hidden md:block w-[30%] bg-white" />
          <div className="w-full md:w-[70%] bg-[#464646]" />
        </div>
        <Container className="py-20 relative z-10">
          <div className="grid grid-cols-12  ">
            <div className="col-span-12 md:col-span-6 md:pr-8 order-2 md:order-1 mt-10 md:mt-0">
              <div className="w-full h-full">
                <CommonImage
                  src={thirdHomeVissionMissionData.img}
                  alt="vision-mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2">
              <div className="flex flex-col gap-10">
                <div className="flex gap-10">
                  <Button className="rounded-full">OUR VISION</Button>
                  <Button className="rounded-full " variant="flat">
                    CORE VALUES
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl md:text-4xl font-bold text-white max-w-md">
                    {thirdHomeVissionMissionData.title}
                  </h1>
                  <p className="text-white">
                    {thirdHomeVissionMissionData.des}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {thirdHomeVissionMissionData.cardItem.map((item, index) => (
                    <div key={index}>
                      <hr className="w-full" />
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-ferrari-red rounded-full" />
                        <h3 className=" text-white py-2">{item.title}</h3>
                      </div>
                      <hr className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
