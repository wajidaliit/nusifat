import Container from "@/components/Container"; 
import { secondHomeChooseUsData } from "../../../../data/home-2/choose-us";
import Button from "@/components/Button";

export default function ChooseUsSecondHome() {
  return (
    <div className="relative ">
      <div className="absolute inset-0 flex">
        <div className="w-full md:w-[75%] bg-black"></div>
        <div
          className="hidden md:block w-[25%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${secondHomeChooseUsData?.img1.src})`,
          }}
        ></div>
      </div>
      <Container className="py-14 md:py-20 relative z-10">
        <div className="grid grid-cols-10 gap-8 text-white">
          <div className="flex flex-col gap-6 col-span-10 md:col-span-4 border-r border-r-gray-500 md:pr-5">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-ferrari-red" />
              <h2 className="text-xl ">{secondHomeChooseUsData?.title}</h2>
            </div>
            <h2 className="text-xl md:text-4xl font-bold">
              {secondHomeChooseUsData?.subTitle}
            </h2>
            <p className="">{secondHomeChooseUsData?.des1}</p>
            <Button className="uppercase w-fit">Learn More</Button>
          </div>
          <div className="col-span-10 md:col-span-4 md:pr-5">
            <p className="">{secondHomeChooseUsData?.des2}</p>
            <hr className="my-6 w-full border border-gray-900" />
            <div className="flex items-center gap-2">
              <div className="w-fit relative">
                <h1 className="text-4xl font-bold mr-4">
                  {secondHomeChooseUsData?.value}
                </h1>
                <h2 className="absolute top-0 right-0 font-extrabold">
                  {" "}
                  {secondHomeChooseUsData?.symbol}
                </h2>
              </div>
              <p className="max-w-[8rem]">{secondHomeChooseUsData?.sytisfied}</p>
            </div>
          </div>
          <div />
        </div>
      </Container>
    </div>
  );
}
