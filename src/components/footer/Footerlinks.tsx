"use client";

import logoo from "@/assets/footer/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface SocialMediaLink {
  name: string;
  icon: ReactNode;
  url: string;
}

interface FooterLink {
  name: string;
  href: string;
}
interface contactInfoLink {
  data: string;
  icon: ReactNode;
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
    {
      name: "Facebook",
      icon: <TfiFacebook size="1.5rem" />,
      url: "https://www.facebook.com",
    },
    {
      name: "X",
      icon: <FaXTwitter size="1.5rem" />,
      url: "https://www.twitter.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size="1.5rem" />,
      url: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size="1.5rem" />,
      url: "https://www.linkedin.com",
    },
  ],
  sections: [
    {
      title: "Useful Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about-us" },
        { name: "Our Team", href: "/#team" },
        { name: "Blogs", href: "/blogs" },
      ],
    },
    {
      title: "Contact Us",
      contactInfo: [
        { data: "+198 525 4584", icon: <FaPhoneVolume /> },
        { data: "info@nusifat.com", icon: <TfiEmail /> },
        { data: "22 Street, ABC Road, New York", icon: <FaLocationDot /> },
      ],
    },
  ],
  copyRight: `© ${new Date().getFullYear()} Nusifat, All Rights Reserved`,
};
