import Container from "@/components/Container";
import Marquee from "react-fast-marquee";
import american from "@/assets/clients/american.png";
import dogtooth from "@/assets/clients/dogtooth.png";
import fenergo from "@/assets/clients/fenergo.png";
import indonesia from "@/assets/clients/indonesia.png";
import network from "@/assets/clients/network.png";
import ronaoke from "@/assets/clients/ronaoke.png";
import CommonImage from "@/components/CommonImage";
import { StaticImageData } from "next/image";

const logos: StaticImageData[] = [
  fenergo,
  indonesia,
  american,
  dogtooth,
  indonesia,
  network,
  ronaoke,
];

export default function ClientsThirdHome() {
  return (
    <div className="">
      <Container className="py-10 ">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center justify-center gap-4"> 
            <h3 className="uppercase text-xl text-ferrari-red">OUR CLIENTS</h3> 
          </div>
          <h5 className="text-xl md:text-4xl uppercase font-bold text-center">
            SOME OF OUR CLIENTS
          </h5>
        </div>
        <hr className="w-full h-px border border-cool-grey" />
        <Marquee
          gradient={true}
          gradientWidth={100}
          speed={100}
          pauseOnHover={true}
        >
          {logos.map((logo, index) => (
            <div key={index}>
              <CommonImage src={logo} alt={`Client logo ${index + 1}`} />
            </div>
          ))}
        </Marquee>
        <hr className="w-full h-px border border-cool-grey" />
      </Container>
    </div>
  );
}
