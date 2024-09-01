import { memo } from "react";
import CommonImage from "./CommonImage";
import { StaticImageData } from "next/image";

interface CardItem {
  img: StaticImageData;
  title: string;
  bgColor: string;
  color: string;
}

interface ResuableFeatureCardProps {
  className?: string;
  data?: CardItem[];
}

const ResuableFeatureCard = memo(function ResuableFeatureCard({
  data = [],
  className = "",
}: ResuableFeatureCardProps): JSX.Element {
  return (
    <div className={`relative ${className}`}>
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl relative">
          <div className="h-72">
            <CommonImage
              src={item.img}
              alt="img"
              className="rounded-t-2xl bg-cover w-full h-full"
            />
          </div> 
          <div className="p-10">
            <h2 className="text-2xl font-semibold">{item.title}</h2> 
          </div>
        </div>
      ))}
    </div>
  );
});

export default ResuableFeatureCard;
