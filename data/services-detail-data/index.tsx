 
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import service1 from "@/assets/services/service1.jpg";
import service2 from "@/assets/services/service2.jpg";
import service3 from "@/assets/services/service3.jpg";
import tablet from "@/assets/services/tablet.jpg";
import building from "@/assets/services/building-site.jpg";
import excavator from "@/assets/services/excavator.jpg";
import park from "@/assets/services/park.jpg";
import thinking from "@/assets/services/thinking.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

interface ReadyToWorkPropsTypes {
  title: string;
  quote: string;
}
interface PointLinksPropsTypes {
  title: string;
  icon: ReactNode;
}
interface ArchitecturDetailsPropsTypes {
  title: string;
  description: string;
}
interface PointLinksPropsTypes {
  title: string;
  icon: ReactNode;
}

interface ThirdSectionPropsTypes {
  pointLinks: PointLinksPropsTypes[];
  description2: string;
  description1: string;
  title: string;
}
interface SecondSectionPropsTypes {
  architecturDetails: ArchitecturDetailsPropsTypes[];
  benefitsDescription: string;
  benefits: string;
  servicesDescription: string;
  services: string;
}
interface FirstSectionPropsTypes {
  pointLinks: PointLinksPropsTypes[];
  description2: string;
  description1: string;
  title: string;
}

interface PropsTypes {
  img8: string | StaticImageData;
  img7: string | StaticImageData;
  img6: string | StaticImageData;
  img5: string | StaticImageData;
  img4: string | StaticImageData;
  img3: string | StaticImageData;
  img2: string | StaticImageData;
  img1: string | StaticImageData;
  subTitle: string;
  title: string;
  readyToWork: ReadyToWorkPropsTypes;
  thirdSection: ThirdSectionPropsTypes;
  secondSection: SecondSectionPropsTypes;
  firstSection: FirstSectionPropsTypes;
}

export const servicesDataDetail: PropsTypes = {
  title: "Our Services",
  subTitle: "Elite Structues",
  img1: service1, 
  img2: service2,
  img3: service3,
  img4: tablet,
  img5: building,
  img6: excavator,
  img7: park,
  img8: thinking,

  firstSection: {
    title: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum",
    description1:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    description2:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut saepe est velt provident. Ut inventore ipsa cum minus dolorum ut   est as saepe est velt provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa  ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus  vitae rerum est as saepe est velt provident.",
    pointLinks: [
      {
        icon: <CiCircleCheck size="1.5rem" color="#E90000" />,
        title: "Best Quality Support",
      },
      {
        icon: <CiCircleCheck size="1.5rem" color="#E90000" />,
        title: "Professional Expertise",
      },
      {
        icon: <CiCircleCheck size="1.5rem" color="#E90000" />,
        title: "100% Qualityy Design",
      },
      {
        icon: <CiCircleCheck size="1.5rem" color="#E90000" />,
        title: "24/7 On Time Support",
      },
    ],
  },

  secondSection: {
    services: "Our Services Include",
    servicesDescription:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    benefits: "Solutions & Benefits",
    benefitsDescription:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    architecturDetails: [
      {
        title: "Structural Analysis",
        description:
          "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem",
      },
      {
        title: "Acoustical Engineering",
        description:
          "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem",
      },
      {
        title: "Design and Drafting",
        description:
          "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem",
      },
      {
        title: "Structure Building",
        description:
          "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem",
      },
    ],
  },

  thirdSection: {
    title: "Managed various construction works",
    description1:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    description2:
      "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa dolorum ut vitae rerum est as saepe est velt provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident. Ut inventore ipsa cum minus dolorum ut vitae rerum est as saepe est velt provident.",
    pointLinks: [
      {
        icon: <FaCircleCheck size="1.5rem" color="#E90000" />,
        title:
          "Ting up the construction site, including cleaning and removing any debris or hazards.",
      },
      {
        icon: <FaCircleCheck size="1.5rem" color="#E90000" />,
        title: "transferring and getting ready the project's supplies.",
      },
      {
        icon: <FaCircleCheck size="1.5rem" color="#E90000" />,
        title:
          "constructing or relocating a range of constructions, including barricades, bridges.",
      },
      {
        icon: <FaCircleCheck size="1.5rem" color="#E90000" />,
        title: "Using tools like drills, hammers, concrete mixers, and diggers",
      },
    ],
  },

  readyToWork: {
    title: "Ready To Work Together?",
    quote: "Get a quote now",
  },
};
