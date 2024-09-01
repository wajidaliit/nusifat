import testimonial1 from "@/assets/home-3/testimonials/testimonial1.png";
import testimonial2 from "@/assets/home-3/testimonials/testimonial2.png";
import testimonial3 from "@/assets/home-3/testimonials/testimonial3.png"; 
import { StaticImageData } from "next/image";

interface CardItemTypes {
  rating: string;
  title: string;
  des: string;
  img: string | StaticImageData;
}

interface CategoryTypes {
  cardItem: CardItemTypes[];
}

export const thirdHomeTestimonialsData: CategoryTypes = {
  cardItem: [
    {
      rating: "5",
      img: testimonial1,
      title: "Goarge Gill",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
    },
    {
      rating: "5",
      img: testimonial2,
      title: "Goarge Gill",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
    },
    {
      rating: "5",
      img: testimonial3,
      title: "Goarge Gill",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
    },
  ],
};
