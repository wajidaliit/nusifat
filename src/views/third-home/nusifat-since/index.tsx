import Container from "@/components/Container";
import { thirdHomeNusifatSinceData } from "../../../../data/home-3/nusifat-since";
import CommonImage from "@/components/CommonImage";
import Button from "@/components/Button";
import { FaPlus } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { GrCompliance } from "react-icons/gr";

export default function NusifatSinceThirdHome() {
  return (
    <div>
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-12 t">
          <div className="flex items-center justify-center md:justify-start gap-2 md:col-span-1">
          <div className="flex items-center gap-2">
          <div className="w-7 h-px bg-ferrari-red" />
          <h1 className="text-xl text-ferrari-red ">WHO WE ARE</h1>
          </div>
          </div>
          <h2 className="text-xl md:text-4xl font-bold md:pl-10 md:col-span-2 text-center md:text-left">
            Lorem ipsum dolor
          </h2>
        </div>

        <h1 className="text-xl text-cool-grey my-4">
          {thirdHomeNusifatSinceData.title}
        </h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p>{thirdHomeNusifatSinceData.des1}</p>
              <p>{thirdHomeNusifatSinceData.des2}</p>
            </div>
            <Button className="rounded-full w-fit" variant="secondary">
              ABOUT US
            </Button>
          </div>
          <div className="col-span-12 md:col-span-9 mt-4 md:mt-0">
            <div className="h-[17rem] md:h-[28rem] w-full relative">
              <div className="hidden md:block absolute -top-12 right-8">
                <div className="relative flex gap-8 mb-4 md:mb-0">
                  <div className="flex flex-col gap-2 bg-ferrari-red text-white p-8 max-w-44">
                    <GrCompliance size={"4rem"} />
                    <div className="flex  gap-1 mt-1">
                      <h1 className="text-4xl font-bold">
                        {thirdHomeNusifatSinceData.count1}
                      </h1>
                      <FaPlus
                        size={"1.5rem"}
                        color="white"
                        style={{ display: "inline" }}
                      />
                    </div>
                    <p className="text-xl">
                      {thirdHomeNusifatSinceData.coutDetail1}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2  bg-black text-white p-8 max-w-44">
                    <FaUsers size={"4rem"} />
                    <div className="flex gap-1 mt-0">
                      <h1 className="text-4xl font-bold">
                        {thirdHomeNusifatSinceData.count2}
                      </h1>
                      <FaPlus size={"1.5rem"} color="white" />
                    </div>
                    <p className="text-xl">
                      {thirdHomeNusifatSinceData.coutDetail2}
                    </p>
                  </div>
                </div>
              </div>
              <CommonImage
                src={thirdHomeNusifatSinceData.img}
                alt="nusifat-since"
                className="w-full h-[20rem] md:h-[28rem] object-cover object-right-top"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
