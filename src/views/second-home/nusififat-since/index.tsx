 
import Container from "@/components/Container";
import { secondHomeNusififatSinceData } from "../../../../data/home-2/nusififat-since";
import Button from "@/components/Button";
import CommonImage from "@/components/CommonImage";

export default function NusififatSinceSecondHome() {
  return (
    <div className="bg-water relative">
      <Container className="pt-28 ">
        <div className="grid grid-cols-12 ">
          <div className="hidden md:block col-span-4 ">
            <CommonImage
              src={secondHomeNusififatSinceData.img1}
              alt="Nusififat Since"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-8  ">
            <div className="pl-6 flex flex-col gap-4 pb-4">
              <div className="flex items-center gap-2 ">
                <div className="w-3 h-3 border-2 bg-ferrari-red" />
                <h3 className="text-xl uppercase">
                  {secondHomeNusififatSinceData.title}
                </h3>
              </div>
              <h1 className="text-xl md:text-4xl font-bold max-w-lg">
                {secondHomeNusififatSinceData.subTitle}
              </h1>
              <p className="text-cool-grey">
                {secondHomeNusififatSinceData.des1}
              </p>
              <p className="text-cool-grey">
                {secondHomeNusififatSinceData.des2}
              </p>
              <Button className="uppercase w-fit" href="/contact-us">Contact us</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="flex flex-col gap-2 bg-heavy-metal text-white p-6">
                <h3 className="text-xl md:text-4xl font-bold">
                  {secondHomeNusififatSinceData.value}
                </h3>
                <p className="">{secondHomeNusififatSinceData.valueDes}</p>
                <div className="grid grid-cols-1 ">
                  {secondHomeNusififatSinceData.cardItem.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-ferrari-red"></div>
                      <h3 className="">{item.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <CommonImage
                  src={secondHomeNusififatSinceData.img2}
                  alt="Nusififat Since"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
