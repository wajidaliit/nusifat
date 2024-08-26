import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import service1 from "@/assets/services/service1.jpg";
import service2 from "@/assets/services/service2.jpg";
import service3 from "@/assets/services/service3.jpg";

interface BlogLinksTypes {
  quickListing: QuickListingTypes;
  categoryListing: CategoryListingTypes;
  recentListing: RecentListingTypes;
}

interface QuickListingTypes {
  title: string;
  lists: LinkItemTypes[];
}

interface CategoryListingTypes {
  title: string;
  lists: LinkItemTypes[];
}
interface RecentListingTypes {
  title: string;
  lists: RecentLinkItemTypes[];
}

interface RecentLinkItemTypes {
  img: string | StaticImageData;
  title: string;
  date: string;
  description: string;
}
interface LinkItemTypes {
  name: string;
  path: string;
}

interface CardItemTypes {
  img: StaticImageData;
  title: string;
  des: string;
  count: string | number;
  bgColor: string;
  color: string;
  button: string;
  buttonBg: string;
}

interface ServicesCategoryTypes {
  blogLinks: BlogLinksTypes;
  title: string;
  subTitle: string;
  cardItem: CardItemTypes[];
}

export const servicesData: ServicesCategoryTypes = {
  title: "Our Service",
  subTitle: "Quality Serving Opprtunity",

  blogLinks: {
    // Quick Links Section
    quickListing: {
      title: "Quick Links",
      lists: [
        { name: "About us", path: "/about-us" },
        { name: "Services", path: "/service" },
        { name: "Blogs", path: "/blogs" },
        { name: "Contact us", path: "/contact us" },
      ],
    },
    // Category Section
    categoryListing: {
      title: "Category",
      lists: [
        { name: "Industrial", path: "/industrial" },
        { name: "Grey Structure", path: "/grey-structure" },
        { name: "Remodeling", path: "/remodeling" },
      ],
    },

    // Category Section
    recentListing: {
      title: "Recent Blogs",
      lists: [
        {
          img: service1,
          title: "Inventre ipsa cum minus",
          date: "june 13, 2021",
          description: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum",
        },
        {
          img: service2,
          title: "Inventre ipsa cum minus",
          date: "june 13, 2021",
          description: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum",
        },
        {
          img: service3,
          title: "Inventre ipsa cum minus",
          date: "june 13, 2021",
          description: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum",
        },
      ],
    },
  },

  // card item section
  cardItem: [
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "01",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "02",
      bgColor: "bg-white",
      color: "text-ferrari-red",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "03",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "secondary",
    },
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "04",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "05",
      bgColor: "bg-white",
      color: "text-ferrari-red",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "06",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "secondary",
    },
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "07",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "08",
      bgColor: "bg-white",
      color: "text-ferrari-red",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "09",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "secondary",
    },
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "10",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "11",
      bgColor: "bg-white",
      color: "text-ferrari-red",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "12",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "secondary",
    },
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "13",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "14",
      bgColor: "bg-white",
      color: "text-ferrari-red",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "15",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "secondary",
    },
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "16",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "17",
      bgColor: "bg-white",
      color: "text-ferrari-red",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "18",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "secondary",
    },
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "19",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "20",
      bgColor: "bg-white",
      color: "text-ferrari-red",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "21",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "secondary",
    },
    {
      img: service1,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "22",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "23",
      bgColor: "bg-white",
      color: "text-ferrari-red",
      button: "VIEW SERVICE",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Elite Structures",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      count: "24",
      bgColor: "bg-ferrari-red",
      color: "text-white",
      button: "VIEW SERVICE",
      buttonBg: "secondary",
    },
  ],
};
