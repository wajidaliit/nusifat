interface CardItem {
  rating: string;
  title: string;
  des: string;
}

interface SimpleCardProps {
  className?: string;
  data?: CardItem[];
}

export default function SimpleCard({
  data = [],
  className = "",
}: SimpleCardProps): JSX.Element {
  return (
    <div className={`relative ${className}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className="relative shadow-custom-dual px-6 py-14 flex flex-col items-center justify-center gap-6 "
        >
          <div className="flex justify-center space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-6 ${
                  i < Number(item.rating) ? "fill-[#facc15]" : "fill-[#CED5D8]"
                }`}
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          </div>
          <h2 className="text-center">{item.des}</h2>
          <p className={`text-xl font-bold`}>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
