 
import Container from "@/components/Container";
import SimpleCard from "@/components/SimpleCard";

interface CardItem {
  rating: string;
  title: string;
  des: string;
}

const data: CardItem[] = [
  {
    rating: "5",
    title: "Goarge Gill",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
  },
  {
    rating: "5",
    title: "Goarge Gill",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
  },
  {
    rating: "5",
    title: "Goarge Gill",
    des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
  },
];

export default function Testimonial() {
  return (
    <div className="">
      <Container className="py-10">
        <h2 className="text-xl text-ferrari-red uppercase font-medium text-center">
          Testimonials
        </h2>
        <p className="text-4xl uppercase text-center font-bold mt-3 mb-14">
          What our customer say
        </p>
        <SimpleCard
          data={data}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        />
      </Container>
    </div>
  );
}
