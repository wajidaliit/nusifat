import { memo, ReactNode } from "react";

interface CardItem {
  bgColor: string;
  color: string;
  count: string | number;
  status: string;
  icon: ReactNode;
}

interface StatusCardProps {
  className?: string;
  data?: CardItem[];
}

const StatusCard = memo(function StatusCard({
  data = [],
  className = "",
}: StatusCardProps): JSX.Element {
  return (
    <div className={`relative ${className}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`p-12 flex flex-col items-start gap-5 ${item.bgColor}`}
        >
          <div className={`bg-white rounded-full p-4`}>{item.icon}</div>
          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${item.color}`}>
              {item.count}
            </h2>
            <p className={`${item.color}`}>{item.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default StatusCard;
