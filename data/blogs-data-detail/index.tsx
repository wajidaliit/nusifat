import Button from "@/components/Button";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import service1 from "@/assets/services/service1.jpg";
import service2 from "@/assets/services/service2.jpg";
import service3 from "@/assets/services/service3.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";

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

interface BlogPointTypes {
  icon: ReactNode;
  title: string;
}

interface BlogdetailsItemTypes {
  img1: string | StaticImageData;
  img2: string | StaticImageData;
  img3: string | StaticImageData;
  description1: string;
  description2: string;
  description3: string;
  blogDescriptionTitle: string;
  blogTitle: string;
  blogDescription1: string;
  blogDescription2: string;
  blogDescription3: string;
  blogPoint: BlogPointTypes[];
}

interface BlogdetailRelpyTypes {
    title: string
    description: string,
    checkPoint: string
}

interface BlogsCategoryTypes {
  blogLinks: BlogLinksTypes;
  blogdetailsItem: BlogdetailsItemTypes;  
  blogdetailRelpy: BlogdetailRelpyTypes
  title: string;
  subTitle: string;
  button: ReactNode;
  date: string;
  user: string;
  icon: ReactNode;
}

export const blogsDataDetail: BlogsCategoryTypes = {
  title: "Blogs",
  subTitle: "Lorem ipsum dolor sit amet", 
  button: <Button>Construction</Button>,
  date: "May 31, 2021",
  user: "By Admin",
  icon: <RiDoubleQuotesL size="8rem" color="#E90000" />,

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

    // Recent Blogs Section
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

  // blogdetailsItem section
  blogdetailsItem: {
    img1: service1,
    img2: service2,
    img3: service3,
    description1:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    description2:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut saepe est velt provident. Ut inventore ipsa cum minus dolorum ut   est as saepe est velt provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa  ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus  vitae rerum est as saepe est velt provident.",
    description3:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    blogDescriptionTitle:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet.",
    blogTitle: "Materials science and engineering",
    blogDescription1:
      "Lorem ipsum dolor sit amet. Ut inventore dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore  est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    blogDescription2:
      "Lorem ipsum dolor sit amet. Ut inventore minus dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    blogDescription3:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est est velt provident. Lorem ipsum dolor sit amet. Ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    blogPoint: [
      {
        icon: <FaCircleCheck size="1.5rem" color="#E90000" />,
        title:
          "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum",
      },
      {
        icon: <FaCircleCheck size="1.5rem" color="#E90000" />,
        title: "Lorem ipsum dolor sit amet. Ut inventore ipsa",
      },
      {
        icon: <FaCircleCheck size="1.5rem" color="#E90000" />,
        title: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus",
      },
      {
        icon: <FaCircleCheck size="1.5rem" color="#E90000" />,
        title: "Lorem ipsum dolor sit amet. Ut inventore ipsa",
      },
    ],
  },

//   blogdetailRelpy section 
  blogdetailRelpy: {
    title:'Leave a Reply',
    description:'Your email address will not be published. Required fields are marked',
    checkPoint: 'Save my name, email, and website in this browser for the next time I comment.',
}
};
