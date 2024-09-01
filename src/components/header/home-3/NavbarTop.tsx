"use client";
import CommonImage from "@/components/CommonImage";
import Container from "@/components/Container";
import logo from "@/assets/home-3/header/logo.png"; 
import NavbarTopLinks from "./NavbarTopLinks";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

import NavBar from "./Navbar";
import Link from "next/link";

export default function NavbarTop() {
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleButton = () => {
    setOpen(!open);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close the mobile menu if it's open
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (open) setOpen(false); // Close the other button's state if it's open
  };

  return (
    <header className="bg-elephant bg-opacity-90 text-white border-b border-b-white">
      <Container className="py-3 md:py-0 relative z-10">
        <div className="md:hidden w-max">
          <Link href="/home" passHref>
            <CommonImage src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="hidden md:block">
          <NavbarTopLinks />
        </div>
        <div className="block md:hidden absolute right-24 top-7">
          <button onClick={toggleButton}>
            {open ? (
              <AiOutlineClose size="2.2rem" />
            ) : (
              <MdContactMail size="2.2rem" />
            )}
          </button>
        </div>
        {open && (
          <div className="absolute top-20 md:hidden bg-[#274250] z-10 w-full">
            <NavbarTopLinks />
          </div>
        )}
        <div className="absolute -bottom-[4.7rem] w-full">
          <NavBar
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </Container>
    </header>
  );
}
