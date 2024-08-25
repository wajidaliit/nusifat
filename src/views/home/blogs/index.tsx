import ReusableCard from "@/components/ReusableCard";
import { StaticImageData } from "next/image";
import service1 from "@/assets/services/service1.jpg";
import service2 from "@/assets/services/service2.jpg";
import service3 from "@/assets/services/service3.jpg";
import Button from "@/components/Button";
import { ReactNode } from "react";
import Container from "@/components/Container";

interface CardItem {
  img: StaticImageData;
  title: string;
  des: string; 
  button: ReactNode;
}

const data: CardItem[] = [
  {
    img: service1,
    title: "Lorem ipsum dolor sit amet",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident", 
    button: <Button>VIEW SERVICE</Button>,
  },
  {
    img: service2,
    title: "Lorem ipsum dolor sit amet",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident", 
    button: <Button>VIEW SERVICE</Button>,
  },
  {
    img: service3,
    title: "Lorem ipsum dolor sit amet",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident", 
    button: <Button>VIEW SERVICE</Button>,
  },
];

export default function HomeBlog() {
  return (
    <div className="bg-water">
      <Container className="py-10">
        <h2 className="text-xl text-ferrari-red uppercase font-medium text-center">
          logs
        </h2>
        <p className="text-4xl uppercase text-center font-bold mt-3 mb-14">
          Latest Blogs
        </p>
        <ReusableCard data={data} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" />
      </Container>
    </div>
  );
}
