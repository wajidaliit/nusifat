import CommonImage from "@/components/CommonImage";
import { coreFeatureData } from "../../../../data/about-data";
import Container from "@/components/Container";

export default function CoreFeature(): JSX.Element {
  return (
    <div className="bg-water">
      <Container className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <div className="w-full sm:h-[39rem] lg:w-[34rem] relative">
              <CommonImage
                src={coreFeatureData.architectsImg}
                alt="img"
                className="object-cover w-full h-full"
              />
              <div className="h-80 w-72 p-2 hidden lg:block bg-white absolute -bottom-14 -right-16">
                <CommonImage
                  src={coreFeatureData.generative}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 border border-ferrari-red" />
              <h4 className="text-ferrari-red text-xl uppercase">
                {coreFeatureData.title}
              </h4>
            </div>
            <h1 className="text-4xl font-bold uppercase mt-4">
              {coreFeatureData.desTitle}
            </h1>
            <div className="my-8 text-cool-grey">
              <p>{coreFeatureData.des1}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {coreFeatureData?.chooseBenifit?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 bg-black text-white p-4"
                >
                  <div>{item.icon}</div>
                  <h1 className="text-md">{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
