import Button from "@/components/Button";
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
  button: string;
  buttonBg: string;
}

interface BlogsCategoryTypes {
  blogLinks: BlogLinksTypes;
  title: string;
  subTitle: string;
  cardItem: CardItemTypes[];
}

export const blogsData: BlogsCategoryTypes = {
  title: "Blogs",
  subTitle: "Blogs & Articles",

  blogLinks: {
    // Quick Links Section
    quickListing: {
      title: "Quick Links",
      lists: [
        { name: "About us", path: "/about-us" },
        { name: "Services", path: "/services" },
        { name: "Blogs", path: "/blogs" },
        { name: "Contact us", path: "/contact-us" },
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
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
    {
      img: service1,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
    {
      img: service1,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
    {
      img: service1,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
    {
      img: service1,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
    {
      img: service1,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
    {
      img: service1,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service2,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "danger",
    },
    {
      img: service3,
      title: "Lorem ipsum dolor sit amet",
      des: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident",
      button: "VIEW BLOG",
      buttonBg: "outlined", // Changed from "secondary" to "outlined"
    },
  ],
  
};
