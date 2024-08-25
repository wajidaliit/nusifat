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

const logos: StaticImageData[] = [fenergo, indonesia, american, dogtooth, indonesia, network, ronaoke];

export default function Client(): JSX.Element {
  return ( 
      <Container className="py-16">
        <h4 className="text-ferrari-red text-xl font-semibold uppercase text-center">
          Our Clients
        </h4>
        <h1 className="text-4xl font-bold uppercase text-center mt-6 mb-10">
          Some of Our Clients
        </h1>
        <Marquee gradient={true} gradientWidth={100} speed={100} pauseOnHover={true}>
          {logos.map((logo, index) => (
            <div key={index}>
              <CommonImage src={logo} alt={`Client logo ${index + 1}`} />
            </div>
          ))}
        </Marquee>
      </Container> 
  );
}
