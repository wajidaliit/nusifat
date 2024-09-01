import React from "react";
import CommonImage from "@/components/CommonImage";
import Container from "@/components/Container";
import logo from "@/assets/header/logo.png";
import NavbarTopLinks from "./NavbarTopLinks";
import { AiOutlineClose } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import Link from "next/link";

interface NavbarTopProps {
  isOpen: boolean;
  toggle: () => void;
  closeNavBar: () => void;
}

const NavbarTop: React.FC<NavbarTopProps> = ({ isOpen, toggle, closeNavBar }) => {
  return (
    <header className="md:bg-black text-white ">
      <Container className="py-3 relative z-10">
        <div className="md:hidden  w-max">
          <Link href="/home" passHref>
            <CommonImage src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="hidden md:block">
          <NavbarTopLinks />
        </div>
        <div className="block md:hidden absolute right-20 top-7 ">
          <button
            onClick={() => {
              toggle();
              if (!isOpen) closeNavBar(); // Close NavBar when NavbarTop is opened
            }}
          >
            {isOpen ? (
              <AiOutlineClose color="#E90000" size="2.2rem" />
            ) : (
              <MdContactMail color="#E90000" size="2.2rem" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-24 md:hidden py-6 bg-black z-10 w-full">
            <NavbarTopLinks />
          </div>
        )}
      </Container>
    </header>
  );
};

export default NavbarTop;
