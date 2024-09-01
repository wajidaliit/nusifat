import { ReactNode } from "react";
import CommonImage from "@/components/CommonImage";
import downArrow from "@/assets/header/downArrow.svg";

interface SubMenuItem {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  icon?: ReactNode;
  subMenu?: SubMenuItem[];
}

const navLinks: NavLink[] = [ 
  {
    name: "Home",
    href: "",
    icon: <CommonImage src={downArrow} alt="arrow" />,
    subMenu: [
      { name: "Home", href: "/home" },
      { name: "Home_2", href: "/home-2" },
      { name: "Home_3", href: "/home-3" },
    ],
  },
  { name: "About Us", href: "/about-us" },
  {
    name: "Services",
    href: "",
    icon: <CommonImage src={downArrow} alt="arrow" />,
    subMenu: [
      { name: "Services", href: "/services" },
      { name: "Service detail", href: "/services/detail" },
    ],
  },
  {
    name: "Blog",
    href: "",
    icon: <CommonImage src={downArrow} alt="arrow" />,
    subMenu: [
      { name: "Blogs", href: "/blogs" },
      { name: "Blog detail", href: "/blogs/detail" },
    ],
  },
  { name: "Contact Us", href: "/contact-us" },
];

export default navLinks;
