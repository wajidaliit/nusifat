import { ReactNode } from "react";
import CommonImage from "./CommonImage";
import { StaticImageData } from "next/image";

interface CardItem {
  img: StaticImageData;
  title: string;
  des: string;
  count: string | number;
  bgColor: string;
  color: string;
  button: ReactNode;
}

interface ReusableCardProps {
  className?: string;
  data?: CardItem[];
}

export default function ReusableCard({
  data = [],
  className = "",
}: ReusableCardProps): JSX.Element {
  return (
    <div className={`relative ${className}`}>
      {data?.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl relative">
          <div className="h-72">
            <CommonImage
              src={item.img}
              alt="img"
              className="rounded-t-2xl bg-cover w-full h-full"
            />
          </div>
          {item?.count && (
            <div
              className={`font-bold text-2xl p-4 absolute right-0 top-[14rem] rounded-tl-2xl ${item.bgColor} ${item.color}`}
            >
              {item.count}
            </div>
          )}
          <div className="p-10">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="my-4">{item.des}</p>
            <div>{item.button}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
