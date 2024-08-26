import CommonImage from "@/components/CommonImage";
import { aboutUSMainData } from "../../../../data/about-data";
import Container from "@/components/Container";
import Button from "@/components/Button";

interface propsType {
  home?: boolean;
}

export default function AboutUsMain({ home }: propsType): JSX.Element {
  return (
    <Container
      className={`${home ? "pt-14 pb-10 md:pt-28 md:pb-40" : "py-20"}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="order-2 md:order-1">
          {home ? (
            <div className="w-full h-60 md:h-[28rem] sm:h-[32rem] lg:w-[30rem] relative ml-auto">
              <CommonImage
                src={aboutUSMainData.ideasImg}
                alt="img"
                className="object-cover mr-auto w-full h-full"
              />
              <div className="h-80 w-56 p-2 hidden lg:block bg-white absolute -bottom-28 -left-28">
                <CommonImage
                  src={aboutUSMainData.house}
                  alt="img"
                  className="object-cover object-left w-full h-full"
                />
              </div>
              <div className=" py-1 px-8 absolute top-14 -left-40 -rotate-90">
                <h1 className="text-6xl font-bold">
                  {aboutUSMainData.experience}
                </h1>
                <p className="text-xl font-normal">Your Experience</p>
              </div>
            </div>
          ) : (
            <div className="w-full sm:h-[39rem] lg:w-[30rem] relative">
              <CommonImage
                src={aboutUSMainData.ideasImg}
                alt="img"
                className="object-cover w-full h-full"
              />
              <div className="h-80 w-72 p-2 hidden lg:block bg-white absolute top-10 -right-36">
                <CommonImage
                  src={aboutUSMainData.officeImg}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-ferrari-red text-white py-1 px-8 absolute -bottom-11 ">
                <h1 className="text-xl md:text-6xl font-bold">
                  {aboutUSMainData.experience}
                </h1>
                <p>Your Experience</p>
              </div>
            </div>
          )}
        </div>
        <div className="px-4 order-1 md:order-2">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 border border-ferrari-red" />
            <h4 className="text-ferrari-red text-xl uppercase">
              {aboutUSMainData.title}
            </h4>
          </div>
          <h1 className="text-xl md:text-4xl font-bold uppercase mt-4">
            {aboutUSMainData.desTitle}
          </h1>
          <div className="my-8">
            <p>{aboutUSMainData.des1}</p>
            <p className="mt-2">{aboutUSMainData.des2}</p>
          </div>
          {!home && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutUSMainData?.specification?.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CommonImage src={item.icon} alt="img" /> {item.name}
                </div>
              ))}
            </div>
          )}
          <Button href="/about-us" className="uppercase mt-8">
            About Us
          </Button>
        </div>
      </div>
    </Container>
  );
}
