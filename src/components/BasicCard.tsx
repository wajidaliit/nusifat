import CommonImage from "./CommonImage";
import { StaticImageData } from "next/image";

interface CardItem {
  img: StaticImageData;
  name: string;
  color: string;
  positionColor: string;
  position: string;
}

interface BasicCardProps {
  className?: string;
  data?: CardItem[];
}

export default function BasicCard({
  data = [],
  className = "",
}: BasicCardProps): JSX.Element {
  return (
    <div className={`relative ${className}`}>
      {data.map((item, index) => (
        <div key={index} className="bg-white relative p-6">
          <div className="h-96 overflow-hidden">
            <CommonImage
              src={item.img}
              alt="img"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-8 text-center">
            <h2 className={`text-2xl font-semibold mb-1 ${item.color}`}>
              {item.name}
            </h2>
            <p className={`${item.positionColor}`}>{item.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
