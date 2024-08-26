import CommonImage from "./CommonImage";
import { StaticImageData } from "next/image";
import Button from "./Button";

interface CardItem {
  img?: StaticImageData;
  title?: string;
  des?: string;
  count?: string | number;
  bgColor?: string;
  color?: string;
  button?: string;
  buttonBg?: string;
}

interface ReusableCardProps {
  className?: string;
  data?: CardItem[];
  href?: string;
}

export default function ReusableCard({
  data = [],
  href = "",
  className = "",
}: ReusableCardProps): JSX.Element {
  return (
    <div className={`relative ${className}`}>
      {data?.map((item, index) => (
        <div
          key={index}
          className={`bg-white relative ${item?.count ? "rounded-2xl" : ""}`}
        >
          {item.img && (
            <div className="h-72">
              <CommonImage
                src={item.img}
                alt="img"
                className={` bg-cover w-full h-full ${item?.count ? "rounded-t-2xl" : ""}`}
              />
            </div>
          )}
          {item?.count && (
            <div
              className={`font-bold text-2xl p-4 absolute right-0 top-[14rem] rounded-tl-2xl ${item.bgColor} ${item.color}`}
            >
              {item.count}
            </div>
          )}
          <div className="p-10">
            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
            <p className="my-4">{item.des}</p>
            <Button
              href={`${href}${item.title}`}
              variant={`${item.buttonBg}`}
              className="uppercase"
            >
              {item.button}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
