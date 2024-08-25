"use client";

import facebook from "@/assets/footer/facebook.svg";
import instagram from "@/assets/footer/instagram.svg";
import linkedin from "@/assets/footer/linkedin.svg";
import twitter from "@/assets/footer/twitter.svg";
import logoo from "@/assets/footer/logo.png";
import phone from "@/assets/footer/phone.svg";
import email from "@/assets/footer/email.svg";
import location from "@/assets/footer/location.svg";
import { StaticImageData } from "next/image";

interface SocialMediaLink {
  name: string;
  icon: string; // Assuming the imported SVGs are of type string
  url: string;
}

interface FooterLink {
  name: string;
  href: string;
}
interface contactInfoLink {
  data: string;
  icon: string;
}

interface FooterSection {
  title: string;
  links?: FooterLink[];
  contactInfo?: contactInfoLink[];
}

interface FooterData {
  aboutText: string;
  socialMedia: SocialMediaLink[];
  sections: FooterSection[];
  copyRight: string;
  logo: StaticImageData;
}

export const footerData: FooterData = {
  logo: logoo,
  aboutText:
    "Lorem ipsum dolor sit amet. Et harum vitae ad debitis dolorum et similique Lorem ipsum dolor sit amet. Et harum vitae ad debitis do lorum et similique.",
  socialMedia: [
    { name: "Facebook", icon: facebook, url: "https://www.facebook.com" },
    { name: "X", icon: twitter, url: "https://www.twitter.com" },
    { name: "Instagram", icon: instagram, url: "https://www.instagram.com" },
    { name: "LinkedIn", icon: linkedin, url: "https://www.linkedin.com" },
  ],
  sections: [
    {
      title: "Useful Links",
      links: [
        { name: "Home", href: "/home" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Blogs", href: "/blogs" },
      ],
    },
    {
      title: "Contact Us",
      contactInfo: [
        { data: "+198 525 4584", icon: phone },
        { data: "info@nusifat.com", icon: email },
        { data: "22 Street, ABC Road, New York", icon: location },
      ],
    },
  ],
  copyRight: `© ${new Date().getFullYear()} Nusifat, All Rights Reserved`,
};
