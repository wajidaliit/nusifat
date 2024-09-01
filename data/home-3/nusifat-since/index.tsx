import { StaticImageData } from "next/image";
import nusifatSince from "@/assets/home-3/nusifat-since/nusifatSince.jpg"; 

 

interface CategoryTypes { 
  img: StaticImageData;
  title: string;
  des1: string;
  des2: string;
  count1: string;
  count2: string;
  coutDetail1: string;
  coutDetail2: string;
}

export const thirdHomeNusifatSinceData: CategoryTypes = {
  img: nusifatSince,
  title: "NUSIFAT SINCE 1994",
  des1: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident. Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum est alias saepe est velit provident.",
  des2: "Lorem ipsum dolor sit amet. Ut inventore ipsa cum minus dolorum ut vitae rerum",
  count1: "3621",
  count2: "3626", 
  coutDetail1: "Completed Projects",
  coutDetail2: "Satisfied Customers",
};
