import Container from "@/components/Container";
import StatusCard from "@/components/StatusCard";
import status1 from "@/assets/company-status/status1.jpg";
import { ReactNode } from "react";
import { FaUsers } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { SiMicrosoftteams } from "react-icons/si";
import { TbTemperatureSun } from "react-icons/tb";
import CommonImage from "@/components/CommonImage";

interface CardItem {
  bgColor: string;
  color: string;
  count: string | number;
  status: string;
  icon: ReactNode;
}

const data: CardItem[] = [
  {
    color: "text-white",
    bgColor: "bg-ferrari-red",
    count: "3526+",
    status: "Satisfied Customers",
    icon: <FaUsers size="4rem" />,
  },
  {
    color: "text-white",
    bgColor: "bg-ferrari-red",
    count: "3621+",
    status: "Completed Projects",
    icon: <VscServerProcess size="4rem" />,
  },
  {
    color: "text-white",
    bgColor: "bg-ferrari-red",
    count: "312+",
    status: "Team Members",
    icon: <SiMicrosoftteams size="4rem" />,
  },
  {
    color: "text-white",
    bgColor: "bg-ferrari-red",
    count: "23+",
    status: "Upcoming Projects",
    icon: <TbTemperatureSun size="4rem" />,
  },
];

export default function CompanyStatus() {
  return (
    <div className="relative ">
      <div className="w-full h-full absolute inset-0 overflow-hidden">
        <CommonImage
          src={status1}
          alt="status1"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            filter: "blur(2px) brightness(0.5)",
            opacity: 0.8,
          }}
        />
      </div>
      <Container className="py-20 relative z-10">
        <h2 className="text-xl text-ferrari-red uppercase font-medium">
          Our Company Status
        </h2>
        <p className="text-xl md:text-4xl uppercase font-bold mt-3 mb-14 max-w-xl">
          Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus
        </p>
        <StatusCard
          data={data}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        />
      </Container>
    </div>
  );
}
