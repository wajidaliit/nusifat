import CommonImage from "@/components/CommonImage";
import { weOfferData } from "../../../../data/about-data";
import Container from "@/components/Container";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";

export default function WeOffer(): JSX.Element {
  return (
    <div className="bg-black text-white">
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="px-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 border border-ferrari-red" />
              <h4 className="text-ferrari-red text-xl uppercase">
                {weOfferData.title}
              </h4>
            </div>
            <h1 className="text-xl md:text-4xl font-bold uppercase mt-4">
              {weOfferData.desTitle}
            </h1>
            <div className="my-8 text-cool-grey">
              <p>{weOfferData.des1}</p>
              <p className="mt-2">{weOfferData.des2}</p>
            </div>
            <div className="space-y-4">
              {weOfferData?.progress?.map((item, index) => (
                <ProgressBar
                  key={index}
                  label={item.label}
                  percentage={item.percentage}
                />
              ))}
            </div> 
            <Button href="/contact-us" className="mt-8 uppercase">Contact Us</Button>
          </div>
          <div className="">
            <div className="relative h-[20rem] md:h-[28rem] w-full lg:h-[38rem] lg:w-[30rem] ml-auto">
              <CommonImage
                src={weOfferData.workerImg}
                alt="img"
                className="object-cover object-left w-full h-full"
              />
              <div className="h-80 w-72 p-2 bg-white absolute -left-32 -bottom-16 hidden lg:block">
                <CommonImage
                  src={weOfferData.planImg}
                  alt="img"
                  className="object-cover object-right w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
